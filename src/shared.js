(() => {
  const STORAGE_KEY = 'wrenchState';
  const LEGACY_STORAGE_KEY = 'viratabState';

  const uid = (prefix = 'id') => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

  const detectLocale = () => /^fa\b/i.test(globalThis.navigator?.language || '') ? 'fa-IR' : 'en-US';

  const defaultSettings = () => ({
    theme: 'minimal-dark',
    accent: '#73e0ae',
    overlay: 0.42,
    blur: 16,
    cardSize: 'medium',
    searchEngine: 'google',
    liveGoogleSuggestions: false,
    locale: detectLocale(),
    clock24: true,
    showGreeting: true,
    backgroundMode: 'preset',
    presetBackground: 'forest',
    customGradient: 'midnight',
    fontFa: 'modern',
    fontEn: 'space',
    focusMinutes: 25,
    breakMinutes: 5,
    userName: ''
  });

  const defaultState = () => {
    const locale = detectLocale();
    const en = locale.startsWith('en');
    const pageId = uid('page');
    const inboxId = uid('board');
    const workId = uid('board');
    const inspirationId = uid('board');

    return {
      version: 7,
      activePageId: pageId,
      settings: defaultSettings(),
      pages: [
        {
          id: pageId,
          title: en ? 'Home' : 'صفحه اصلی',
          icon: '✦',
          boards: [
            {
              id: inboxId,
              title: en ? 'Quick access' : 'دسترسی سریع',
              color: '#73e0ae',
              links: [
                { id: uid('link'), title: 'Google', url: 'https://google.com/', note: '', createdAt: Date.now() },
                { id: uid('link'), title: 'YouTube', url: 'https://youtube.com/', note: '', createdAt: Date.now() },
                { id: uid('link'), title: 'GitHub', url: 'https://github.com/', note: '', createdAt: Date.now() }
              ]
            },
            { id: workId, title: en ? 'Work & projects' : 'کار و پروژه‌ها', color: '#38bdf8', links: [] },
            { id: inspirationId, title: en ? 'Ideas & inspiration' : 'ایده و الهام', color: '#f97316', links: [] }
          ]
        }
      ]
    };
  };

  const normalizeState = (saved) => {
    const fallback = defaultState();
    if (!saved || !Array.isArray(saved.pages) || !saved.pages.length) return fallback;
    const settings = { ...defaultSettings(), ...(saved.settings || {}) };
    const previousVersion = Number(saved.version || 0);
    if (settings.theme === 'glass') settings.theme = 'minimal-dark';
    if (settings.customGradient === 'aurora') settings.customGradient = 'midnight';
    if (previousVersion < 5 && settings.accent === '#8b5cf6') settings.accent = '#55c98d';
    if (previousVersion < 6 && settings.accent === '#55c98d') settings.accent = '#73e0ae';
    if (previousVersion < 5 && settings.presetBackground === 'aurora') settings.presetBackground = 'forest';
    const pages = saved.pages.map((page) => ({
      ...page,
      boards: (page.boards || []).map((board) => ({
        ...board,
        color: previousVersion < 5 && board.color === '#8b5cf6' ? '#55c98d' : (previousVersion < 6 && board.color === '#55c98d' ? '#73e0ae' : board.color),
        links: Array.isArray(board.links) ? board.links : []
      }))
    }));
    return {
      ...saved,
      pages,
      version: 7,
      settings,
      activePageId: saved.pages.some((page) => page.id === saved.activePageId)
        ? saved.activePageId
        : saved.pages[0].id
    };
  };

  const normalizeUrl = (value) => {
    const text = String(value || '').trim();
    if (!text) return '';
    if (/^(https?|ftp):\/\//i.test(text)) return text;
    if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(text)) return `https://${text}`;
    return text;
  };

  const safeUrl = (value) => {
    try {
      const url = new URL(normalizeUrl(value));
      if (!['http:', 'https:'].includes(url.protocol)) return '';
      return url.href;
    } catch {
      return '';
    }
  };

  const getState = async () => {
    const result = await WrenchBrowser.storage.get([STORAGE_KEY, LEGACY_STORAGE_KEY]);
    const isLegacy = !result?.[STORAGE_KEY] && Boolean(result?.[LEGACY_STORAGE_KEY]);
    const saved = result?.[STORAGE_KEY] ?? result?.[LEGACY_STORAGE_KEY];
    const normalized = normalizeState(saved);
    if (isLegacy && !saved?.settings?.locale) normalized.settings.locale = 'fa-IR';
    let shouldWrite = isLegacy || !saved;
    if (!shouldWrite) {
      try { shouldWrite = JSON.stringify(saved) !== JSON.stringify(normalized); } catch { shouldWrite = true; }
    }
    if (shouldWrite) await WrenchBrowser.storage.set({ [STORAGE_KEY]: normalized });
    if (isLegacy) {
      await WrenchBrowser.storage.remove(LEGACY_STORAGE_KEY).catch(() => {});
    }
    return normalized;
  };

  const setState = async (state) => {
    const normalized = normalizeState(state);
    await WrenchBrowser.storage.set({ [STORAGE_KEY]: normalized });
    return normalized;
  };

  const findFirstBoard = (state) => {
    for (const page of state.pages || []) {
      if (page.boards?.length) return { page, board: page.boards[0] };
    }
    return null;
  };

  const addLink = async ({ title, url, note = '', pageId, boardId }) => {
    const cleanUrl = safeUrl(url);
    if (!cleanUrl) throw new Error('INVALID_URL');

    const state = await getState();
    let page = state.pages.find((item) => item.id === pageId);
    let board = page?.boards?.find((item) => item.id === boardId);
    if (!board) {
      const fallback = findFirstBoard(state);
      page = fallback?.page;
      board = fallback?.board;
    }
    if (!board) throw new Error('NO_BOARD');

    const existing = board.links.find((item) => item.url === cleanUrl);
    if (existing) {
      existing.title = title || existing.title;
      existing.note = note || existing.note;
      existing.updatedAt = Date.now();
    } else {
      board.links.unshift({
        id: uid('link'),
        title: String(title || new URL(cleanUrl).hostname).trim(),
        url: cleanUrl,
        note: String(note || '').trim(),
        createdAt: Date.now()
      });
    }

    await setState(state);
    return { state, pageId: page.id, boardId: board.id };
  };

  globalThis.WrenchShared = {
    STORAGE_KEY,
    uid,
    defaultSettings,
    defaultState,
    normalizeState,
    normalizeUrl,
    safeUrl,
    getState,
    setState,
    addLink
  };
})();
