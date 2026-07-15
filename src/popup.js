const form = document.querySelector('#save-form');
const titleInput = document.querySelector('#title');
const urlInput = document.querySelector('#url');
const boardSelect = document.querySelector('#board');
const noteInput = document.querySelector('#note');
const saveButton = document.querySelector('#save-button');
const statusEl = document.querySelector('#status');

const TEXT = {
  fa: {
    title: 'ذخیره در wrench',
    subtitle: 'صفحه فعلی را به یکی از بردها اضافه کن.',
    linkTitle: 'عنوان',
    address: 'آدرس',
    board: 'برد مقصد',
    note: 'یادداشت کوتاه',
    optional: 'اختیاری',
    save: 'ذخیره لینک',
    saved: 'با موفقیت ذخیره شد ✓',
    failed: 'ذخیره انجام نشد.'
  },
  en: {
    title: 'Save to wrench',
    subtitle: 'Add the current page to one of your boards.',
    linkTitle: 'Title',
    address: 'Address',
    board: 'Destination board',
    note: 'Short note',
    optional: 'Optional',
    save: 'Save link',
    saved: 'Saved successfully ✓',
    failed: 'Could not save the link.'
  }
};


const POPUP_FONT_FA = {
  modern: 'Vazirmatn, "Noto Sans Arabic", Tahoma, sans-serif',
  peyda: 'Peyda, Dana, "Yekan Bakh", Vazirmatn, Tahoma, sans-serif',
  iran: 'IRANSansX, IRANSans, Vazirmatn, Tahoma, sans-serif',
  kufi: 'Estedad, "Noto Kufi Arabic", Vazirmatn, Tahoma, sans-serif',
  classic: 'Tahoma, "Noto Sans Arabic", system-ui, sans-serif'
};
const POPUP_FONT_EN = {
  space: '"Space Grotesk", Inter, "Segoe UI", system-ui, sans-serif',
  manrope: 'Manrope, Inter, "Segoe UI", system-ui, sans-serif',
  sora: 'Sora, Inter, "Segoe UI", system-ui, sans-serif',
  plex: '"IBM Plex Sans", "Segoe UI", Inter, system-ui, sans-serif',
  system: 'system-ui, -apple-system, "Segoe UI", sans-serif'
};

let state;
let language = 'fa';

function t(key) {
  return TEXT[language][key] || key;
}

function applyLocale() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  document.querySelector('#locale-pill').textContent = language.toUpperCase();
  const uiFont = language === 'fa' ? (POPUP_FONT_FA[state?.settings?.fontFa] || POPUP_FONT_FA.modern) : (POPUP_FONT_EN[state?.settings?.fontEn] || POPUP_FONT_EN.space);
  document.documentElement.style.setProperty('--font-ui', uiFont);
  document.documentElement.style.setProperty('--font-en', POPUP_FONT_EN[state?.settings?.fontEn] || POPUP_FONT_EN.space);
  document.documentElement.style.setProperty('--accent', state?.settings?.accent || '#8b5cf6');
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
}

async function init() {
  state = await WrenchShared.getState();
  language = state.settings.locale?.startsWith('en') ? 'en' : 'fa';
  applyLocale();

  boardSelect.replaceChildren();
  for (const page of state.pages) {
    for (const board of page.boards || []) {
      const option = document.createElement('option');
      option.value = `${page.id}|${board.id}`;
      option.textContent = `${page.title} — ${board.title}`;
      boardSelect.append(option);
    }
  }

  const tabs = await WrenchBrowser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs?.[0];
  if (tab) {
    titleInput.value = tab.title || '';
    urlInput.value = /^https?:/i.test(tab.url || '') ? tab.url : '';
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusEl.textContent = '';
  statusEl.classList.remove('error');
  saveButton.disabled = true;

  const [pageId, boardId] = boardSelect.value.split('|');
  try {
    const response = await WrenchBrowser.runtime.sendMessage({
      type: 'WRENCH_SAVE_LINK',
      title: titleInput.value.trim(),
      url: urlInput.value.trim(),
      note: noteInput.value.trim(),
      pageId,
      boardId
    });
    if (!response?.ok) throw new Error(response?.error || t('failed'));
    statusEl.textContent = t('saved');
    setTimeout(() => window.close(), 650);
  } catch (error) {
    statusEl.textContent = error.message || t('failed');
    statusEl.classList.add('error');
  } finally {
    saveButton.disabled = false;
  }
});

init().catch((error) => {
  statusEl.textContent = error.message || t('failed');
  statusEl.classList.add('error');
});
