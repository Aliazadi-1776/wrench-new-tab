if (typeof WrenchBrowser === 'undefined' && typeof importScripts === 'function') {
  importScripts('browser-api.js', 'shared.js');
}

const api = WrenchBrowser.raw;

async function saveItem(title, url, pageId, boardId, note = '') {
  return WrenchShared.addLink({ title, url, pageId, boardId, note });
}

async function saveCurrentTab() {
  const tabs = await WrenchBrowser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs?.[0];
  if (!tab?.url || !/^https?:/i.test(tab.url)) return false;
  await saveItem(tab.title || tab.url, tab.url);
  return true;
}

async function createMenus() {
  if (!api.contextMenus) return;
  let locale = 'fa-IR';
  try { locale = (await WrenchShared.getState()).settings.locale || locale; } catch {}
  const en = locale.startsWith('en');
  const create = () => {
    api.contextMenus.create({ id: 'wrench-save-page', title: en ? 'Save page to wrench' : 'ذخیره صفحه در wrench', contexts: ['page'] });
    api.contextMenus.create({ id: 'wrench-save-link', title: en ? 'Save link to wrench' : 'ذخیره لینک در wrench', contexts: ['link'] });
  };
  try {
    if (WrenchBrowser.isFirefox) await api.contextMenus.removeAll();
    else await new Promise((resolve) => api.contextMenus.removeAll(resolve));
  } catch {}
  try { create(); } catch {}
}

api.runtime.onInstalled.addListener(() => {
  WrenchShared.getState().catch(() => {});
  createMenus().catch(() => {});
});

api.contextMenus?.onClicked.addListener((info, tab) => {
  const isLink = info.menuItemId === 'wrench-save-link';
  const url = isLink ? info.linkUrl : (info.pageUrl || tab?.url);
  const title = isLink ? (info.selectionText || url) : (tab?.title || url);
  if (url) saveItem(title, url).catch(() => {});
});

api.commands?.onCommand.addListener((command) => {
  if (command === 'quick-save') saveCurrentTab().catch(() => {});
});

api.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== 'WRENCH_SAVE_LINK') return undefined;
  saveItem(message.title, message.url, message.pageId, message.boardId, message.note)
    .then((result) => sendResponse({ ok: true, result }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));
  return true;
});

api.storage?.onChanged?.addListener((changes, area) => {
  const change = changes[WrenchShared.STORAGE_KEY];
  if (area !== 'local' || !change) return;
  const previousLocale = change.oldValue?.settings?.locale;
  const nextLocale = change.newValue?.settings?.locale;
  if (previousLocale !== nextLocale) createMenus().catch(() => {});
});
