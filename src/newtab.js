const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const I18N = {
  fa: {
    brandTagline: 'مرورگر، به سبک تو', modes: 'حالت‌ها', focus: 'فوکوس', break: 'استراحت', focusMenuHint: 'تمرکز بدون حواس‌پرتی', breakMenuHint: 'مکث و تنفس کوتاه', changeLanguage: 'تغییر زبان', newPage: 'صفحه جدید', settings: 'تنظیمات', close: 'بستن', addLink: 'افزودن لینک', manage: 'مدیریت', newLink: 'لینک جدید', heroTitle: 'همه‌چیز، دقیقاً جایی که می‌خواهی.',
    searchPlaceholder: 'جست‌وجو در لینک‌ها یا وب...', searchHint: '↑↓ انتخاب · Enter باز کردن · Esc بستن',
    searchFound: '{count} نتیجه پیدا شد.', searchNotFound: 'نتیجه‌ای در بوکمارک‌ها پیدا نشد.',
    searchWebFor: 'جست‌وجوی «{query}» در وب', recentSearches: 'جست‌وجوهای اخیر', openBookmark: 'باز کردن بوکمارک', searchWithEngine: 'جست‌وجو با {engine}', noSuggestions: 'شروع به تایپ کن تا پیشنهادها نمایش داده شوند.', directAddress: 'باز کردن آدرس', googleSuggestion: 'پیشنهاد Google', liveSuggestions: 'پیشنهادهای زنده Google', liveGoogleToggle: 'پیشنهادهای زنده Google', liveGoogleDesc: 'هنگام تایپ، عبارت‌های پیشنهادی Google نمایش داده شوند.',
    myBoards: 'بردهای من', accordionHint: 'برای باز کردن هر بخش روی آن کلیک کن', newBoard: 'برد جدید', emptyTitle: 'این صفحه هنوز خالی است', emptyText: 'اولین برد را بساز و لینک‌هایت را مرتب کن.', createFirstBoard: 'ساخت اولین برد',
    bookmark: 'بوکمارک', addLinkTitle: 'افزودن لینک جدید', editLinkTitle: 'ویرایش لینک', linkTitle: 'عنوان لینک', linkTitlePlaceholder: 'مثلاً پنل پروژه', siteAddress: 'آدرس سایت', targetBoard: 'برد مقصد', shortNote: 'یادداشت کوتاه', optional: 'اختیاری', notePlaceholder: 'چیزی که دوست داری یادت بماند...', cancel: 'انصراف', saveLink: 'ذخیره لینک',
    category: 'دسته‌بندی', addBoardTitle: 'ساخت برد جدید', editBoardTitle: 'ویرایش برد', boardName: 'نام برد', boardPlaceholder: 'مثلاً ابزارهای طراحی', indicatorColor: 'رنگ نشانه', saveBoard: 'ذخیره برد',
    workspace: 'فضای کاری', addPageTitle: 'ساخت صفحه جدید', editPageTitle: 'ویرایش صفحه', pageName: 'نام صفحه', pagePlaceholder: 'مثلاً کار، شخصی یا مطالعه', shortSymbol: 'نماد کوتاه', deletePage: 'حذف صفحه', savePage: 'ذخیره صفحه',
    personalize: 'شخصی‌سازی', settingsTitle: 'تنظیمات wrench', profile: 'پروفایل', profileSummary: 'نامی که بالای صفحه نمایش داده می‌شود', displayName: 'نام نمایشی', displayNamePlaceholder: 'مثلاً حسین', profilePrivacy: 'این نام فقط به‌صورت محلی داخل مرورگر ذخیره می‌شود.', welcomeToWrench: 'WELCOME TO WRENCH', profileWelcomeTitle: 'دوست داری چه صدات کنیم؟', profileWelcomeText: 'نامت فقط روی همین مرورگر ذخیره می‌شود و بالای صفحه نمایش داده خواهد شد.', continueToWrench: 'ادامه', nameSaved: 'نام ذخیره شد ✓', openSourceTitle: 'wrench متن‌باز است', openSourceText: 'ساخته‌شده برای یک مرورگر آرام‌تر و شخصی‌تر.', localFirst: 'ذخیره‌سازی محلی', languageAndFonts: 'زبان و فونت', interfaceLanguage: 'زبان رابط', persianFont: 'فونت فارسی', englishFont: 'فونت انگلیسی', fontNote: 'wrench از فونت‌های نصب‌شده روی سیستم استفاده می‌کند و برای هر انتخاب، وزن و فاصله‌گذاری مناسب را هم اعمال می‌کند.',
    overallStyle: 'استایل کلی', darkMinimal: 'مینیمال تیره', softGlass: 'شیشه‌ای نرم', lightMinimal: 'مینیمال روشن', accentColor: 'رنگ اصلی', cardSize: 'اندازه کارت‌ها', compact: 'جمع‌وجور', normal: 'معمولی', large: 'بزرگ',
    background: 'پس‌زمینه', backgroundSummary: 'عکس، گرادیان و افکت شیشه‌ای', fontSummary: 'فارسی و انگلیسی بدون رفرش صفحه', styleSummary: 'ظاهر کارت‌ها و رنگ اصلی', searchSummary: 'موتور جست‌وجو و ساعت', focusSummary: 'زمان تایمرها', dataSummary: 'بوکمارک‌ها و فایل پشتیبان', chooseMedia: 'انتخاب عکس یا ویدئو', removeFile: 'حذف فایل', overlayDarkness: 'تیرگی لایه', panelBlur: 'محو بودن پنل‌ها', backgroundNote: 'فایل فقط داخل مرورگر خودت نگه‌داری می‌شود.',
    searchAndTime: 'جست‌وجو و زمان', searchEngine: 'موتور جست‌وجو', showGreeting: 'نمایش خوشامدگویی', greetingDesc: 'متن کوتاه بالای عنوان', clock24: 'ساعت ۲۴ ساعته', clockDesc: 'بدون AM و PM',
    focusSettings: 'فوکوس و استراحت', focusDuration: 'زمان فوکوس (دقیقه)', breakDuration: 'زمان استراحت (دقیقه)', dataAndBackup: 'داده‌ها و پشتیبان', moveBookmarks: 'انتقال از نوار بوکمارک', moveBookmarksDesc: 'بعد از ذخیره موفق در wrench، بوکمارک‌های واردشده از نوار بالای مرورگر حذف می‌شوند.', importBookmarks: 'انتقال بوکمارک‌های نوار بالا', exportBackup: 'دانلود فایل پشتیبان', restoreBackup: 'بازیابی فایل پشتیبان', resetExtension: 'بازنشانی کامل افزونه',
    editBoard: 'ویرایش برد', deleteBoard: 'حذف برد', addFirstLink: '＋ افزودن اولین لینک', edit: 'ویرایش', copyAddress: 'کپی آدرس', delete: 'حذف',
    morning: 'صبح بخیر', noon: 'ظهر بخیر', evening: 'عصر بخیر', night: 'شب بخیر', greetingReady: '{part}، آماده‌ای شروع کنیم؟',
    linksCount: '{count} لینک', resultsCount: '{visible} نتیجه از {total}', firstBoardRequired: 'اول یک برد بساز.', invalidUrl: 'آدرس سایت معتبر نیست.', boardNotFound: 'برد مقصد پیدا نشد.',
    copied: 'آدرس لینک کپی شد ✓', copyFailed: 'کپی آدرس انجام نشد.', confirmDeleteLink: 'لینک «{title}» حذف شود؟', linkDeleted: 'لینک حذف شد.', confirmDeleteBoard: 'برد «{title}» و {count} لینک داخل آن حذف شود؟', boardDeleted: 'برد حذف شد.',
    linkEdited: 'لینک ویرایش شد ✓', linkSaved: 'لینک ذخیره شد ✓', boardEdited: 'برد ویرایش شد ✓', boardCreated: 'برد ساخته شد ✓', pageEdited: 'صفحه ویرایش شد ✓', pageCreated: 'صفحه ساخته شد ✓',
    atLeastOnePage: 'حداقل یک صفحه باید باقی بماند.', confirmDeletePage: 'صفحه «{title}» و {count} لینک آن حذف شود؟', pageDeleted: 'صفحه حذف شد.', doubleClickEdit: 'دوبار کلیک برای ویرایش صفحه',
    unsupportedFile: 'فرمت فایل پشتیبانی نمی‌شود.', fileTooLarge: 'حجم فایل باید کمتر از ۶۰ مگابایت باشد.', backgroundApplied: 'پس‌زمینه جدید اعمال شد ✓', backgroundSaveFailed: 'ذخیره پس‌زمینه ممکن نشد: {error}', backgroundReadFailed: 'خواندن پس‌زمینه انجام نشد.', backgroundRemoved: 'فایل پس‌زمینه حذف شد.',
    permissionNeeded: 'برای انتقال بوکمارک‌ها باید اجازه دسترسی را تأیید کنی.', bookmarkBarMissing: 'نوار بوکمارک یا موردی برای انتقال پیدا نشد.', confirmMoveBookmarks: '{count} بوکمارک وارد wrench و سپس از نوار بالای مرورگر حذف شود؟\n\nابتدا داده‌ها داخل wrench ذخیره می‌شوند.', importedMoved: '{count} بوکمارک منتقل شد ✓', importedCopied: '{count} بوکمارک وارد شد ✓', importedPartial: '{count} بوکمارک وارد شد، اما {failed} مورد از نوار مرورگر حذف نشد.', importFailed: 'انتقال بوکمارک‌ها انجام نشد: {error}',
    browserBookmarks: 'بوکمارک‌های مرورگر', bookmarkBar: 'نوار بوکمارک', folder: 'پوشه {count}', backupReady: 'فایل پشتیبان آماده شد ✓', invalidBackup: 'ساختار فایل پشتیبان معتبر نیست.', backupRestored: 'فایل پشتیبان بازیابی شد ✓', confirmReset: 'همه صفحه‌ها، بردها، لینک‌ها و تنظیمات wrench پاک شوند؟', resetDone: 'wrench به حالت اولیه برگشت.', startupFailed: 'راه‌اندازی wrench انجام نشد.',
    focusKicker: 'FOCUS SESSION', focusTitle: 'وقت تمرکز است.', focusDescription: 'اعلان‌ها را کنار بگذار و فقط روی یک کار جلو برو.', focusTip: 'یک هدف کوچک انتخاب کن؛ فقط همان.', breakKicker: 'RESET & BREATHE', breakTitle: 'چند دقیقه برای خودت.', breakDescription: 'از صفحه فاصله بگیر، نفس عمیق بکش و ذهنت را تازه کن.', breakTip: 'دم آرام، مکث کوتاه، بازدم طولانی.', start: 'شروع', pause: 'مکث', reset: 'از نو', focusDone: 'جلسه فوکوس تمام شد ✓', breakDone: 'زمان استراحت تمام شد ✓'
  },
  en: {
    brandTagline: 'Your browser, your way', modes: 'Modes', focus: 'Focus', break: 'Break', focusMenuHint: 'A distraction-free session', breakMenuHint: 'Pause, breathe and reset', changeLanguage: 'Change language', newPage: 'New page', settings: 'Settings', close: 'Close', addLink: 'Add link', manage: 'Manage', newLink: 'New link', heroTitle: 'Everything, exactly where you want it.',
    searchPlaceholder: 'Search links or the web...', searchHint: '↑↓ select · Enter open · Esc close',
    searchFound: '{count} results found.', searchNotFound: 'No bookmark matches found.',
    searchWebFor: 'Search the web for “{query}”', recentSearches: 'Recent searches', openBookmark: 'Open bookmark', searchWithEngine: 'Search with {engine}', noSuggestions: 'Start typing to see suggestions.', directAddress: 'Open address', googleSuggestion: 'Google suggestion', liveSuggestions: 'Live Google suggestions', liveGoogleToggle: 'Live Google suggestions', liveGoogleDesc: 'Show Google autocomplete suggestions while you type.',
    myBoards: 'My boards', accordionHint: 'Click a section to expand it', newBoard: 'New board', emptyTitle: 'This page is still empty', emptyText: 'Create your first board and organize your links.', createFirstBoard: 'Create first board',
    bookmark: 'Bookmark', addLinkTitle: 'Add a new link', editLinkTitle: 'Edit link', linkTitle: 'Link title', linkTitlePlaceholder: 'e.g. Project dashboard', siteAddress: 'Website address', targetBoard: 'Destination board', shortNote: 'Short note', optional: 'Optional', notePlaceholder: 'Anything worth remembering...', cancel: 'Cancel', saveLink: 'Save link',
    category: 'Category', addBoardTitle: 'Create a new board', editBoardTitle: 'Edit board', boardName: 'Board name', boardPlaceholder: 'e.g. Design tools', indicatorColor: 'Indicator color', saveBoard: 'Save board',
    workspace: 'Workspace', addPageTitle: 'Create a new page', editPageTitle: 'Edit page', pageName: 'Page name', pagePlaceholder: 'e.g. Work, Personal or Reading', shortSymbol: 'Short symbol', deletePage: 'Delete page', savePage: 'Save page',
    personalize: 'Personalize', settingsTitle: 'wrench settings', profile: 'Profile', profileSummary: 'The name shown at the top of your new tab', displayName: 'Display name', displayNamePlaceholder: 'e.g. Alex', profilePrivacy: 'This name is stored locally in your browser only.', welcomeToWrench: 'WELCOME TO WRENCH', profileWelcomeTitle: 'What should we call you?', profileWelcomeText: 'Your name stays in this browser and appears at the top of the page.', continueToWrench: 'Continue', nameSaved: 'Name saved ✓', openSourceTitle: 'wrench is open source', openSourceText: 'Built for a quieter, more personal browser.', localFirst: 'local-first', languageAndFonts: 'Language & fonts', interfaceLanguage: 'Interface language', persianFont: 'Persian font', englishFont: 'English font', fontNote: 'wrench uses fonts installed on your system and also adjusts weight and spacing for every preset.',
    overallStyle: 'Overall style', darkMinimal: 'Dark minimal', softGlass: 'Soft glass', lightMinimal: 'Light minimal', accentColor: 'Accent color', cardSize: 'Card size', compact: 'Compact', normal: 'Normal', large: 'Large',
    background: 'Background', backgroundSummary: 'Photos, gradients and glass effects', fontSummary: 'Persian and English, no page reload', styleSummary: 'Cards and accent color', searchSummary: 'Search engine and clock', focusSummary: 'Timer durations', dataSummary: 'Bookmarks and backups', chooseMedia: 'Choose image or video', removeFile: 'Remove file', overlayDarkness: 'Overlay darkness', panelBlur: 'Panel blur', backgroundNote: 'The file stays only inside your browser.',
    searchAndTime: 'Search & time', searchEngine: 'Search engine', showGreeting: 'Show greeting', greetingDesc: 'Small text above the headline', clock24: '24-hour clock', clockDesc: 'Hide AM and PM',
    focusSettings: 'Focus & break', focusDuration: 'Focus duration (minutes)', breakDuration: 'Break duration (minutes)', dataAndBackup: 'Data & backup', moveBookmarks: 'Move from bookmarks bar', moveBookmarksDesc: 'After wrench saves them successfully, imported items are removed from the browser bookmarks bar.', importBookmarks: 'Move bookmarks-bar items', exportBackup: 'Download backup', restoreBackup: 'Restore backup', resetExtension: 'Reset extension',
    editBoard: 'Edit board', deleteBoard: 'Delete board', addFirstLink: '＋ Add the first link', edit: 'Edit', copyAddress: 'Copy address', delete: 'Delete',
    morning: 'Good morning', noon: 'Good afternoon', evening: 'Good evening', night: 'Good night', greetingReady: '{part}, ready to begin?',
    linksCount: '{count} links', resultsCount: '{visible} of {total} results', firstBoardRequired: 'Create a board first.', invalidUrl: 'The website address is not valid.', boardNotFound: 'The destination board was not found.',
    copied: 'Link copied ✓', copyFailed: 'Could not copy the address.', confirmDeleteLink: 'Delete “{title}”?', linkDeleted: 'Link deleted.', confirmDeleteBoard: 'Delete “{title}” and its {count} links?', boardDeleted: 'Board deleted.',
    linkEdited: 'Link updated ✓', linkSaved: 'Link saved ✓', boardEdited: 'Board updated ✓', boardCreated: 'Board created ✓', pageEdited: 'Page updated ✓', pageCreated: 'Page created ✓',
    atLeastOnePage: 'At least one page must remain.', confirmDeletePage: 'Delete “{title}” and its {count} links?', pageDeleted: 'Page deleted.', doubleClickEdit: 'Double-click to edit this page',
    unsupportedFile: 'This file format is not supported.', fileTooLarge: 'The file must be smaller than 60 MB.', backgroundApplied: 'New background applied ✓', backgroundSaveFailed: 'Could not save the background: {error}', backgroundReadFailed: 'Could not load the background.', backgroundRemoved: 'Background file removed.',
    permissionNeeded: 'Bookmark permission is required to move browser bookmarks.', bookmarkBarMissing: 'No bookmarks-bar items were found.', confirmMoveBookmarks: 'Import {count} bookmarks into wrench and remove them from the browser toolbar?\n\nYour data is saved in wrench before anything is removed.', importedMoved: '{count} bookmarks moved ✓', importedCopied: '{count} bookmarks imported ✓', importedPartial: '{count} bookmarks imported, but {failed} toolbar items could not be removed.', importFailed: 'Could not move bookmarks: {error}',
    browserBookmarks: 'Browser bookmarks', bookmarkBar: 'Bookmarks bar', folder: 'Folder {count}', backupReady: 'Backup file is ready ✓', invalidBackup: 'The backup structure is invalid.', backupRestored: 'Backup restored ✓', confirmReset: 'Delete every wrench page, board, link and setting?', resetDone: 'wrench was reset.', startupFailed: 'wrench could not start.',
    focusKicker: 'FOCUS SESSION', focusTitle: 'Time to focus.', focusDescription: 'Put distractions aside and move one task forward.', focusTip: 'Pick one small target. Only that.', breakKicker: 'RESET & BREATHE', breakTitle: 'A few minutes for yourself.', breakDescription: 'Step away from the screen, breathe deeply and reset your mind.', breakTip: 'Slow inhale, short pause, long exhale.', start: 'Start', pause: 'Pause', reset: 'Reset', focusDone: 'Focus session complete ✓', breakDone: 'Break complete ✓'
  }
};

const TITLE_MAP = {
  'صفحه اصلی': 'Home', Home: 'صفحه اصلی',
  'دسترسی سریع': 'Quick access', 'Quick access': 'دسترسی سریع',
  'کار و پروژه‌ها': 'Work & projects', 'Work & projects': 'کار و پروژه‌ها',
  'ایده و الهام': 'Ideas & inspiration', 'Ideas & inspiration': 'ایده و الهام',
  'بوکمارک‌های مرورگر': 'Browser bookmarks', 'Browser bookmarks': 'بوکمارک‌های مرورگر'
};

const FONT_FA = {
  modern: '"Vazirmatn", "Noto Sans Arabic", Tahoma, Arial, sans-serif',
  peyda: 'Peyda, Dana, "Yekan Bakh", Tahoma, "Noto Sans Arabic", Arial, sans-serif',
  iran: 'IRANSansX, IRANSans, Arial, "Noto Sans Arabic", Tahoma, sans-serif',
  kufi: 'Estedad, "Noto Kufi Arabic", "Times New Roman", serif',
  classic: 'Tahoma, Arial, "Noto Sans Arabic", sans-serif'
};
const FONT_EN = {
  space: '"Space Grotesk", Inter, "Segoe UI", system-ui, sans-serif',
  manrope: 'Manrope, "Segoe UI", Arial, sans-serif',
  sora: 'Sora, Avenir, "Trebuchet MS", sans-serif',
  plex: '"IBM Plex Sans", Arial, "Segoe UI", sans-serif',
  system: 'system-ui, -apple-system, "Segoe UI", sans-serif'
};

const els = {
  pageTabs: $('#page-tabs'), boardsGrid: $('#boards-grid'), emptyState: $('#empty-state'), clock: $('#clock'), date: $('#date'), greeting: $('#greeting'), boardsHeading: $('#boards-heading'), profileDisplayName: $('#profile-display-name'),
  searchPopover: $('#search-popover'), searchForm: $('#search-form'), searchInput: $('#search-input'), searchHint: $('#search-hint'), searchSuggestions: $('#search-suggestions'), searchClear: $('#search-clear-button'), searchShortcut: $('#search-shortcut'),
  linkDialog: $('#link-dialog'), linkForm: $('#link-form'), linkDialogTitle: $('#link-dialog-title'), linkId: $('#link-id'), linkTitle: $('#link-title'), linkUrl: $('#link-url'), linkBoard: $('#link-board'), linkNote: $('#link-note'),
  boardDialog: $('#board-dialog'), boardForm: $('#board-form'), boardDialogTitle: $('#board-dialog-title'), boardId: $('#board-id'), boardTitle: $('#board-title'), boardColor: $('#board-color'), boardColorValue: $('#board-color-value'),
  pageDialog: $('#page-dialog'), pageForm: $('#page-form'), pageDialogTitle: $('#page-dialog-title'), pageId: $('#page-id'), newPageTitle: $('#new-page-title'), newPageIcon: $('#new-page-icon'), deletePageButton: $('#delete-page-button'),
  settingsDrawer: $('#settings-drawer'), toast: $('#toast'), gradientBg: $('#gradient-bg'), presetBg: $('#preset-bg'), imageBg: $('#image-bg'), videoBg: $('#video-bg'), overlayOutput: $('#overlay-output'), blurOutput: $('#blur-output'), backgroundFile: $('#background-file'), importDataFile: $('#import-data-file'),
  modeOverlay: $('#mode-overlay'), modeKicker: $('#mode-kicker'), modeTitle: $('#mode-title'), modeDescription: $('#mode-description'), modeTimer: $('#mode-timer'), modeProgress: $('#mode-progress-bar'), modeStart: $('#mode-start'), modeReset: $('#mode-reset'), modeTip: $('#mode-tip'),
  profileDialog: $('#profile-dialog'), profileForm: $('#profile-form'), profileOnboardingName: $('#profile-onboarding-name'), profileNameInput: $('#profile-name-input')
};

let state = null;
let toastTimer = null;
let mediaObjectUrl = null;
let dragPayload = null;
let clockTimer = null;
let isInitializing = true;
let externalRenderFrame = null;
const localWriteFingerprints = new Set();
let mode = { type: 'focus', total: 1500, remaining: 1500, running: false, timer: null };
let activeContextMenu = null;
let suggestionItems = [];
let activeSuggestionIndex = -1;
let searchInputFrame = null;
let remoteSuggestions = [];
let remoteSuggestionsQuery = '';
let remoteSuggestionTimer = null;
let remoteSuggestionController = null;
const remoteSuggestionCache = new Map();
const boardOpenState = new Map();
const supportsLiveGoogleSuggestions = !WrenchBrowser.isFirefox;
try {
  const savedBoardState = JSON.parse(sessionStorage.getItem('wrenchBoardOpen') || '[]');
  if (Array.isArray(savedBoardState)) for (const [id, open] of savedBoardState) boardOpenState.set(id, Boolean(open));
} catch {}
function rememberBoardOpen(id, open) {
  boardOpenState.set(id, open);
  try { sessionStorage.setItem('wrenchBoardOpen', JSON.stringify([...boardOpenState.entries()].slice(-80))); } catch {}
}

function lang() { return state?.settings?.locale?.startsWith('en') ? 'en' : 'fa'; }
function t(key, vars = {}) {
  let value = I18N[lang()][key] ?? I18N.fa[key] ?? key;
  for (const [name, replacement] of Object.entries(vars)) value = value.replaceAll(`{${name}}`, String(replacement));
  return value;
}
function displayTitle(value) {
  const text = String(value || '');
  if (lang() === 'en' && TITLE_MAP[text] && /[\u0600-\u06ff]/.test(text)) return TITLE_MAP[text];
  if (lang() === 'fa' && TITLE_MAP[text] && !/[\u0600-\u06ff]/.test(text)) return TITLE_MAP[text];
  return text;
}
function applyTranslations(root = document) {
  $$('[data-i18n]', root).forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $$('[data-i18n-placeholder]', root).forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  $$('[data-i18n-title]', root).forEach((node) => { const value = t(node.dataset.i18nTitle); node.title = value; node.setAttribute('aria-label', value); });
}
function getActivePage() {
  let page = state.pages.find((item) => item.id === state.activePageId);
  if (!page) { page = state.pages[0]; state.activePageId = page?.id || null; }
  return page;
}
function hexToRgb(hex) {
  const value = String(hex || '#8b5cf6').replace('#', '');
  const normalized = value.length === 3 ? value.split('').map((x) => x + x).join('') : value;
  const number = Number.parseInt(normalized, 16);
  return Number.isNaN(number) ? [139, 92, 246] : [(number >> 16) & 255, (number >> 8) & 255, number & 255];
}
function toast(message, isError = false) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.toggle('is-error', isError);
  els.toast.classList.add('is-visible');
  toastTimer = setTimeout(() => els.toast.classList.remove('is-visible'), 2800);
}
function restoreContextMenu(menu) {
  if (!menu) return;
  menu.classList.remove('is-open', 'is-portaled');
  menu.style.removeProperty('top');
  menu.style.removeProperty('left');
  menu.style.removeProperty('right');
  if (menu.__originParent?.isConnected) {
    if (menu.__originNext?.parentNode === menu.__originParent) menu.__originParent.insertBefore(menu, menu.__originNext);
    else menu.__originParent.append(menu);
  } else {
    menu.remove();
  }
  delete menu.__originParent;
  delete menu.__originNext;
}
function closeMenus() {
  if (activeContextMenu) restoreContextMenu(activeContextMenu);
  activeContextMenu = null;
  $$('.context-menu.is-open').forEach((menu) => menu.classList.remove('is-open'));
}
function openContextMenu(menu, trigger) {
  const wasOpen = activeContextMenu === menu && menu.classList.contains('is-open');
  closeMenus();
  if (wasOpen) return;
  menu.__originParent = menu.parentNode;
  menu.__originNext = menu.nextSibling;
  document.body.append(menu);
  menu.classList.add('is-portaled', 'is-open');
  menu.style.left = '0px';
  menu.style.top = '0px';
  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const gap = 7;
  let left = document.documentElement.dir === 'rtl' ? triggerRect.left : triggerRect.right - menuRect.width;
  left = Math.max(8, Math.min(left, window.innerWidth - menuRect.width - 8));
  let top = triggerRect.bottom + gap;
  if (top + menuRect.height > window.innerHeight - 8) top = triggerRect.top - menuRect.height - gap;
  top = Math.max(8, Math.min(top, window.innerHeight - menuRect.height - 8));
  menu.style.left = `${Math.round(left)}px`;
  menu.style.top = `${Math.round(top)}px`;
  activeContextMenu = menu;
}
function siteColor(text) {
  const palette = ['#8b5cf6', '#0ea5e9', '#14b8a6', '#f97316', '#ec4899', '#22c55e', '#eab308', '#ef4444'];
  let hash = 0;
  for (const char of String(text || '')) hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  return palette[Math.abs(hash) % palette.length];
}
function getHost(url) { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } }
function getInitial(title, url) { return String(title || getHost(url) || 'W').trim().charAt(0).toUpperCase(); }
function stateFingerprint(value) {
  try { return JSON.stringify(value); } catch { return ''; }
}
async function persist(render = true) {
  state = WrenchShared.normalizeState(state);
  const fingerprint = stateFingerprint(state);
  if (fingerprint) {
    localWriteFingerprints.add(fingerprint);
    if (localWriteFingerprints.size > 24) localWriteFingerprints.delete(localWriteFingerprints.values().next().value);
    setTimeout(() => localWriteFingerprints.delete(fingerprint), 5000);
  }
  try {
    state = await WrenchShared.setState(state);
  } catch (error) {
    if (fingerprint) localWriteFingerprints.delete(fingerprint);
    throw error;
  }
  if (render) renderApp();
}

function renderPages() {
  els.pageTabs.replaceChildren();
  for (const page of state.pages) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `page-tab${page.id === state.activePageId ? ' is-active' : ''}`;
    button.dataset.pageId = page.id;
    button.title = t('doubleClickEdit');
    const icon = document.createElement('span'); icon.className = 'tab-icon'; icon.textContent = page.icon || '✦';
    const title = document.createElement('span'); title.textContent = displayTitle(page.title);
    button.append(icon, title);
    button.addEventListener('click', async () => {
      if (state.activePageId === page.id) return;
      state.activePageId = page.id; els.searchInput.value = ''; await persist();
    });
    button.addEventListener('dblclick', (event) => { event.preventDefault(); openPageDialog(page); });
    els.pageTabs.append(button);
  }
}

function buildLinkCard(link, board) {
  const fragment = $('#link-template').content.cloneNode(true);
  applyTranslations(fragment);
  const card = $('.link-card', fragment); const icon = $('.site-icon', fragment); const title = $('.link-title', fragment); const host = $('.link-host', fragment); const menuButton = $('.link-menu-button', fragment); const menu = $('.link-menu', fragment);
  card.dataset.linkId = link.id; card.dataset.boardId = board.id; card.title = link.note || link.title;
  icon.textContent = getInitial(link.title, link.url); icon.style.setProperty('--site-color', siteColor(getHost(link.url))); title.textContent = link.title; host.textContent = getHost(link.url);
  const open = (event) => {
    if (event.target.closest('button, .context-menu')) return;
    if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    if (event.ctrlKey || event.metaKey || event.shiftKey) WrenchBrowser.tabs.create({ url: link.url }).catch(() => {});
    else window.location.assign(link.url);
  };
  card.addEventListener('click', open); card.addEventListener('keydown', open);
  menuButton.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openContextMenu(menu, menuButton); });
  menu.addEventListener('click', async (event) => {
    event.preventDefault(); event.stopPropagation(); const action = event.target.closest('button')?.dataset.action; closeMenus();
    if (action === 'edit-link') openLinkDialog(board.id, link);
    if (action === 'copy-link') { try { await navigator.clipboard.writeText(link.url); toast(t('copied')); } catch { toast(t('copyFailed'), true); } }
    if (action === 'delete-link') { if (!confirm(t('confirmDeleteLink', { title: link.title }))) return; board.links = board.links.filter((item) => item.id !== link.id); await persist(); toast(t('linkDeleted')); }
  });
  card.addEventListener('dragstart', (event) => {
    if (event.target.closest('button')) return event.preventDefault();
    dragPayload = { type: 'link', linkId: link.id, sourceBoardId: board.id }; card.classList.add('is-dragging'); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', JSON.stringify(dragPayload));
  });
  card.addEventListener('dragend', () => { card.classList.remove('is-dragging'); $$('.is-drop-target').forEach((item) => item.classList.remove('is-drop-target')); dragPayload = null; });
  return fragment;
}
function moveLink(payload, targetBoardId) {
  const page = getActivePage(); const source = page.boards.find((item) => item.id === payload.sourceBoardId); const target = page.boards.find((item) => item.id === targetBoardId);
  if (!source || !target) return false; const index = source.links.findIndex((item) => item.id === payload.linkId); if (index < 0) return false; const [link] = source.links.splice(index, 1); target.links.unshift(link); return true;
}
function reorderBoard(sourceBoardId, targetBoardId) {
  const page = getActivePage(); const sourceIndex = page.boards.findIndex((item) => item.id === sourceBoardId); const targetIndex = page.boards.findIndex((item) => item.id === targetBoardId);
  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return false; const [board] = page.boards.splice(sourceIndex, 1); page.boards.splice(targetIndex, 0, board); return true;
}
function buildBoard(board, query = '', boardIndex = 0) {
  const fragment = $('#board-template').content.cloneNode(true); applyTranslations(fragment);
  const article = $('.board', fragment); const toggle = $('.board-toggle', fragment); const title = $('.board-title', fragment); const count = $('.board-count', fragment); const linksList = $('.links-list', fragment); const addButton = $('.add-link-to-board', fragment); const emptyButton = $('.board-empty-add', fragment); const menuButton = $('.board-menu-button', fragment); const menu = $('.board-menu', fragment);
  article.dataset.boardId = board.id; article.style.setProperty('--board-color', board.color || state.settings.accent); title.textContent = displayTitle(board.title);
  const normalizedQuery = query.trim().toLocaleLowerCase(state.settings.locale); const visibleLinks = normalizedQuery ? board.links.filter((link) => `${link.title} ${link.url} ${link.note || ''}`.toLocaleLowerCase(state.settings.locale).includes(normalizedQuery)) : board.links;
  count.textContent = normalizedQuery ? t('resultsCount', { visible: visibleLinks.length, total: board.links.length }) : t('linksCount', { count: board.links.length });
  const openByDefault = normalizedQuery ? visibleLinks.length > 0 : (boardOpenState.has(board.id) ? boardOpenState.get(board.id) : true);
  article.classList.toggle('is-collapsed', !openByDefault);
  toggle.setAttribute('aria-expanded', String(openByDefault));
  toggle.addEventListener('click', () => {
    const isCollapsed = article.classList.toggle('is-collapsed');
    toggle.setAttribute('aria-expanded', String(!isCollapsed));
    rememberBoardOpen(board.id, !isCollapsed);
  });
  article.classList.toggle('is-empty', visibleLinks.length === 0); for (const link of visibleLinks) linksList.append(buildLinkCard(link, board));
  addButton.addEventListener('click', () => openLinkDialog(board.id)); emptyButton.addEventListener('click', () => openLinkDialog(board.id));
  menuButton.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openContextMenu(menu, menuButton); });
  menu.addEventListener('click', async (event) => {
    event.stopPropagation(); const action = event.target.closest('button')?.dataset.action; closeMenus();
    if (action === 'edit-board') openBoardDialog(board);
    if (action === 'delete-board') { if (!confirm(t('confirmDeleteBoard', { title: displayTitle(board.title), count: board.links.length }))) return; const page = getActivePage(); page.boards = page.boards.filter((item) => item.id !== board.id); await persist(); toast(t('boardDeleted')); }
  });
  article.addEventListener('dragstart', (event) => { if (event.target.closest('.link-card, button')) return; dragPayload = { type: 'board', boardId: board.id }; article.classList.add('is-dragging'); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', JSON.stringify(dragPayload)); });
  article.addEventListener('dragend', () => { article.classList.remove('is-dragging'); $$('.is-drop-target').forEach((item) => item.classList.remove('is-drop-target')); dragPayload = null; });
  article.addEventListener('dragover', (event) => { if (!dragPayload) return; event.preventDefault(); event.dataTransfer.dropEffect = 'move'; article.classList.add('is-drop-target'); });
  article.addEventListener('dragleave', (event) => { if (!article.contains(event.relatedTarget)) article.classList.remove('is-drop-target'); });
  article.addEventListener('drop', async (event) => { event.preventDefault(); article.classList.remove('is-drop-target'); if (!dragPayload) return; const changed = dragPayload.type === 'link' ? moveLink(dragPayload, board.id) : reorderBoard(dragPayload.boardId, board.id); if (changed) await persist(); });
  return fragment;
}
function renderBoards(query = '') {
  closeMenus();
  const page = getActivePage(); els.boardsGrid.replaceChildren(); els.boardsHeading.textContent = displayTitle(page?.title || t('myBoards'));
  if (!page?.boards?.length) { els.emptyState.hidden = false; els.boardsGrid.hidden = true; return; }
  els.emptyState.hidden = true; els.boardsGrid.hidden = false; page.boards.forEach((board, index) => els.boardsGrid.append(buildBoard(board, query, index)));
  if (query.trim()) {
    const normalized = query.trim().toLocaleLowerCase(state.settings.locale); const results = page.boards.reduce((sum, board) => sum + board.links.filter((link) => `${link.title} ${link.url} ${link.note || ''}`.toLocaleLowerCase(state.settings.locale).includes(normalized)).length, 0);
    els.searchHint.textContent = results ? t('searchFound', { count: results }) : t('searchNotFound');
  } else els.searchHint.textContent = t('searchHint');
}
function populateBoardSelect(selectedBoardId) {
  els.linkBoard.replaceChildren();
  for (const page of state.pages) for (const board of page.boards || []) { const option = document.createElement('option'); option.value = `${page.id}|${board.id}`; option.textContent = `${displayTitle(page.title)} — ${displayTitle(board.title)}`; if (board.id === selectedBoardId) option.selected = true; els.linkBoard.append(option); }
}
function openLinkDialog(boardId, link = null) {
  const active = getActivePage(); if (!state.pages.some((page) => page.boards?.length)) { toast(t('firstBoardRequired'), true); openBoardDialog(); return; }
  els.linkForm.reset(); els.linkId.value = link?.id || ''; els.linkDialogTitle.textContent = link ? t('editLinkTitle') : t('addLinkTitle'); els.linkTitle.value = link?.title || ''; els.linkUrl.value = link?.url || ''; els.linkNote.value = link?.note || ''; populateBoardSelect(boardId || active?.boards?.[0]?.id); els.linkDialog.showModal(); setTimeout(() => els.linkTitle.focus(), 50);
}
function openBoardDialog(board = null) {
  els.boardForm.reset(); els.boardId.value = board?.id || ''; els.boardDialogTitle.textContent = board ? t('editBoardTitle') : t('addBoardTitle'); els.boardTitle.value = board?.title || ''; els.boardColor.value = board?.color || state.settings.accent; els.boardColorValue.textContent = els.boardColor.value; els.boardDialog.showModal(); setTimeout(() => els.boardTitle.focus(), 50);
}
function openPageDialog(page = null) {
  els.pageForm.reset(); els.pageId.value = page?.id || ''; els.pageDialogTitle.textContent = page ? t('editPageTitle') : t('addPageTitle'); els.newPageTitle.value = page?.title || ''; els.newPageIcon.value = page?.icon || '✦'; els.deletePageButton.hidden = !page; els.pageDialog.showModal(); setTimeout(() => els.newPageTitle.focus(), 50);
}
function updateClock() {
  if (!state) return; const now = new Date(); const settings = state.settings; const locale = settings.locale || 'fa-IR';
  els.clock.textContent = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hour12: !settings.clock24 }).format(now);
  els.date.textContent = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(now);
  const hour = now.getHours(); let key = 'night'; if (hour >= 5 && hour < 12) key = 'morning'; else if (hour >= 12 && hour < 16) key = 'noon'; else if (hour >= 16 && hour < 20) key = 'evening';
  els.greeting.textContent = t('greetingReady', { part: t(key) }); els.greeting.hidden = settings.showGreeting === false;
}
function applyAccentSetting() {
  const [r, g, b] = hexToRgb(state.settings.accent);
  document.documentElement.style.setProperty('--accent', state.settings.accent);
  document.documentElement.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);
}
function applyFontSettings() {
  const settings = state.settings;
  const faFont = FONT_FA[settings.fontFa] || FONT_FA.modern;
  const enFont = FONT_EN[settings.fontEn] || FONT_EN.space;
  document.documentElement.dataset.fontFa = settings.fontFa || 'modern';
  document.documentElement.dataset.fontEn = settings.fontEn || 'space';
  document.documentElement.style.setProperty('--font-fa', faFont);
  document.documentElement.style.setProperty('--font-en', enFont);
  document.documentElement.style.setProperty('--font-ui', lang() === 'fa' ? faFont : enFont);
  document.documentElement.style.setProperty('--font-display', lang() === 'fa' ? faFont : enFont);
}
function applyProfileSetting() {
  const cleanName = String(state?.settings?.userName || '').trim();
  if (els.profileDisplayName) {
    els.profileDisplayName.textContent = cleanName || 'wrench';
    els.profileDisplayName.title = cleanName || 'wrench';
  }
  if (els.profileNameInput && document.activeElement !== els.profileNameInput) els.profileNameInput.value = cleanName;
}
function applyThemeSetting() {
  document.body.dataset.theme = state.settings.theme || 'minimal-dark';
  document.body.dataset.cardSize = state.settings.cardSize || 'medium';
}
function applyGradientSetting() {
  els.gradientBg.className = `gradient-bg gradient-${state.settings.customGradient || 'midnight'}`;
}
function syncSettingsControls() {
  const settings = state.settings;
  $('#accent-color').value = settings.accent;
  $('#card-size').value = settings.cardSize || 'medium';
  $('#search-engine').value = settings.searchEngine || 'google';
  const liveToggle = $('#live-google-suggestions');
  const liveRow = $('#live-google-row');
  if (liveToggle) {
    liveToggle.checked = supportsLiveGoogleSuggestions && settings.liveGoogleSuggestions === true;
    liveToggle.disabled = !supportsLiveGoogleSuggestions;
  }
  if (liveRow) liveRow.hidden = !supportsLiveGoogleSuggestions;
  $('#show-greeting').checked = settings.showGreeting !== false;
  $('#clock-24').checked = settings.clock24 !== false;
  $('#locale-select').value = settings.locale || 'fa-IR';
  $('#font-fa').value = settings.fontFa || 'modern';
  $('#font-en').value = settings.fontEn || 'space';
  $('#focus-minutes').value = settings.focusMinutes || 25;
  $('#break-minutes').value = settings.breakMinutes || 5;
  if (els.profileNameInput && document.activeElement !== els.profileNameInput) els.profileNameInput.value = settings.userName || '';
  $('#overlay-range').value = Math.round((settings.overlay ?? .42) * 100);
  $('#blur-range').value = settings.blur ?? 16;
  els.overlayOutput.textContent = `${$('#overlay-range').value}%`;
  els.blurOutput.textContent = `${$('#blur-range').value}px`;
  $$('#theme-options button').forEach((button) => button.classList.toggle('is-active', button.dataset.themeValue === settings.theme));
  $$('#gradient-options button').forEach((button) => button.classList.toggle('is-active', button.dataset.gradient === settings.customGradient && settings.backgroundMode === 'gradient'));
  $$('#wallpaper-options button').forEach((button) => button.classList.toggle('is-active', button.dataset.wallpaper === settings.presetBackground && settings.backgroundMode === 'preset'));
}
function preserveViewportDuringUpdate(callback) {
  const pageScroll = window.scrollY;
  const settingsContent = $('.settings-content', els.settingsDrawer);
  const settingsScroll = settingsContent?.scrollTop ?? 0;
  document.documentElement.classList.add('is-settings-updating');
  callback();
  requestAnimationFrame(() => {
    window.scrollTo({ top: pageScroll, left: 0, behavior: 'auto' });
    if (settingsContent) settingsContent.scrollTop = settingsScroll;
    requestAnimationFrame(() => document.documentElement.classList.remove('is-settings-updating'));
  });
}
function refreshDynamicLocale() {
  for (const button of $$('.page-tab')) {
    const page = state.pages.find((item) => item.id === button.dataset.pageId);
    const titleNode = button.querySelector('span:last-child');
    if (page && titleNode) titleNode.textContent = displayTitle(page.title);
  }
  const page = getActivePage();
  els.boardsHeading.textContent = displayTitle(page?.title || t('myBoards'));
  for (const article of $$('.board')) {
    const board = page?.boards?.find((item) => item.id === article.dataset.boardId);
    if (!board) continue;
    const titleNode = $('.board-title', article);
    const countNode = $('.board-count', article);
    if (titleNode) titleNode.textContent = displayTitle(board.title);
    if (countNode) countNode.textContent = t('linksCount', { count: board.links.length });
  }
  renderSearchSuggestions(els.searchInput.value);
}
function applyLocaleSetting({ renderContent = true } = {}) {
  closeMenus();
  document.documentElement.lang = lang();
  document.documentElement.dir = lang() === 'fa' ? 'rtl' : 'ltr';
  applyFontSettings();
  $('#language-button').textContent = lang() === 'fa' ? 'EN' : 'فا';
  applyTranslations(document);
  updateClock();
  if (renderContent) refreshDynamicLocale();
  if (els.modeOverlay.classList.contains('is-open')) renderMode();
}
function applySettings() {
  const settings = state.settings;
  document.documentElement.style.setProperty('--panel-blur', `${settings.blur ?? 16}px`);
  document.documentElement.style.setProperty('--overlay-opacity', settings.overlay ?? .42);
  applyAccentSetting();
  applyProfileSetting();
  applyThemeSetting();
  applyGradientSetting();
  syncSettingsControls();
  applyLocaleSetting({ renderContent: false });
}
function renderApp() { applySettings(); renderPages(); renderBoards(); if (els.modeOverlay.classList.contains('is-open')) renderMode(); }
function openSettings() { els.settingsDrawer.classList.add('is-open'); els.settingsDrawer.setAttribute('aria-hidden', 'false'); }
function closeSettings() { els.settingsDrawer.classList.remove('is-open'); els.settingsDrawer.setAttribute('aria-hidden', 'true'); }
function toggleSearchPopover(force, { focus = false } = {}) {
  const shouldOpen = typeof force === 'boolean' ? force : !els.searchPopover.classList.contains('is-open');
  els.searchPopover.classList.toggle('is-open', shouldOpen);
  els.searchPopover.setAttribute('aria-hidden', String(!shouldOpen));
  els.searchInput.setAttribute('aria-expanded', String(shouldOpen));
  if (shouldOpen) {
    renderSearchSuggestions(els.searchInput.value);
    if (focus) requestAnimationFrame(() => { els.searchInput.focus({ preventScroll: true }); els.searchInput.select(); });
  } else {
    activeSuggestionIndex = -1;
    updateActiveSuggestion();
  }
}
function openBackgroundSettings() {
  openSettings();
  const backgroundGroup = $('.settings-group', els.settingsDrawer);
  if (backgroundGroup) {
    backgroundGroup.open = true;
    requestAnimationFrame(() => backgroundGroup.scrollIntoView({ block: 'start', behavior: 'smooth' }));
  }
}
const SEARCH_ENGINE_NAMES = { google: 'Google', bing: 'Bing', duckduckgo: 'DuckDuckGo' };
const SEARCH_ICON_PATHS = {
  search: '<path d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>'
};
function makeSearchIcon(type, item = null) {
  const icon = document.createElement('span');
  icon.className = 'suggestion-icon';
  if (type === 'google') {
    icon.classList.add('is-google');
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>`;
    return icon;
  }
  if (type === 'link') {
    icon.classList.add('is-site');
    icon.textContent = getInitial(item.title, item.url);
    icon.style.setProperty('--site-color', siteColor(getHost(item.url)));
    return icon;
  }
  icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${SEARCH_ICON_PATHS[type] || SEARCH_ICON_PATHS.search}</svg>`;
  return icon;
}
function getRecentSearches() {
  try {
    const value = JSON.parse(localStorage.getItem('wrenchRecentSearches') || '[]');
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string' && item.trim()).slice(0, 6) : [];
  } catch { return []; }
}
function rememberSearch(query) {
  const clean = String(query || '').trim();
  if (!clean || WrenchShared.safeUrl(clean)) return;
  const recent = [clean, ...getRecentSearches().filter((item) => item.toLocaleLowerCase() !== clean.toLocaleLowerCase())].slice(0, 6);
  try { localStorage.setItem('wrenchRecentSearches', JSON.stringify(recent)); } catch {}
}
function collectSearchableLinks() {
  const result = [];
  for (const page of state?.pages || []) {
    for (const board of page.boards || []) {
      for (const link of board.links || []) result.push({ ...link, pageTitle: displayTitle(page.title), boardTitle: displayTitle(board.title) });
    }
  }
  return result;
}
function scoreLink(link, normalized) {
  const title = String(link.title || '').toLocaleLowerCase(state.settings.locale);
  const host = getHost(link.url).toLocaleLowerCase(state.settings.locale);
  const note = String(link.note || '').toLocaleLowerCase(state.settings.locale);
  const trail = `${link.pageTitle || ''} ${link.boardTitle || ''}`.toLocaleLowerCase(state.settings.locale);
  let score = 0;
  if (title === normalized || host === normalized) score += 160;
  if (title.startsWith(normalized)) score += 110;
  else if (title.includes(normalized)) score += 80;
  if (host.startsWith(normalized)) score += 90;
  else if (host.includes(normalized)) score += 65;
  if (note.includes(normalized)) score += 28;
  if (trail.includes(normalized)) score += 18;
  return score;
}
function buildSuggestionItems(rawQuery) {
  const query = String(rawQuery || '').trim();
  const engine = state.settings.searchEngine || 'google';
  const engineName = SEARCH_ENGINE_NAMES[engine] || 'Google';
  const links = collectSearchableLinks();
  if (!query) {
    const recent = getRecentSearches().map((value) => ({ type: 'recent', query: value, title: value, meta: t('recentSearches'), action: t('searchWithEngine', { engine: engineName }) }));
    const latestLinks = [...links].sort((a, b) => Number(b.updatedAt || b.createdAt || 0) - Number(a.updatedAt || a.createdAt || 0)).slice(0, Math.max(0, 7 - recent.length)).map((link) => ({ type: 'link', link, title: link.title, meta: `${getHost(link.url)} · ${link.boardTitle}`, action: t('openBookmark') }));
    return [...recent, ...latestLinks].slice(0, 7);
  }
  const normalized = query.toLocaleLowerCase(state.settings.locale);
  const directUrl = WrenchShared.safeUrl(query);
  const matched = links
    .map((link) => ({ link, score: scoreLink(link, normalized) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || Number(b.link.updatedAt || b.link.createdAt || 0) - Number(a.link.updatedAt || a.link.createdAt || 0))
    .slice(0, 5)
    .map(({ link }) => ({ type: 'link', link, title: link.title, meta: `${getHost(link.url)} · ${link.boardTitle}`, action: t('openBookmark') }));
  const items = [];
  if (directUrl) items.push({ type: 'url', url: directUrl, title: query, meta: directUrl, action: t('directAddress') });
  const exact = matched.filter((item) => item.title.toLocaleLowerCase(state.settings.locale) === normalized || getHost(item.link.url).toLocaleLowerCase(state.settings.locale) === normalized);
  const rest = matched.filter((item) => !exact.includes(item));
  items.push(...exact);
  if (engine === 'google' && remoteSuggestionsQuery === query) {
    const existing = new Set(items.map((item) => String(item.title || '').toLocaleLowerCase(state.settings.locale)));
    for (const value of remoteSuggestions) {
      const title = String(value || '').trim();
      const key = title.toLocaleLowerCase(state.settings.locale);
      if (!title || key === normalized || existing.has(key)) continue;
      existing.add(key);
      items.push({ type: 'google', query: title, title, meta: '', action: '' });
      if (items.filter((item) => item.type === 'google').length >= 6) break;
    }
  }
  items.push({ type: 'web', query, title: t('searchWebFor', { query }), meta: '', action: '' });
  items.push(...rest);
  return items.slice(0, 10);
}
function clearRemoteSuggestions() {
  clearTimeout(remoteSuggestionTimer);
  remoteSuggestionController?.abort();
  remoteSuggestionController = null;
  remoteSuggestions = [];
  remoteSuggestionsQuery = '';
}
async function loadGoogleSuggestions(query) {
  const clean = String(query || '').trim();
  if (!supportsLiveGoogleSuggestions || (state.settings.searchEngine || 'google') !== 'google' || state.settings.liveGoogleSuggestions !== true || clean.length < 2 || WrenchShared.safeUrl(clean)) {
    clearRemoteSuggestions();
    renderSearchSuggestions(clean);
    return;
  }
  const cacheKey = `${lang()}:${clean.toLocaleLowerCase(state.settings.locale)}`;
  if (remoteSuggestionCache.has(cacheKey)) {
    remoteSuggestions = remoteSuggestionCache.get(cacheKey);
    remoteSuggestionsQuery = clean;
    renderSearchSuggestions(clean);
    return;
  }
  remoteSuggestionController?.abort();
  const controller = new AbortController();
  remoteSuggestionController = controller;
  try {
    const url = new URL('https://suggestqueries.google.com/complete/search');
    url.searchParams.set('client', 'firefox');
    url.searchParams.set('hl', lang() === 'fa' ? 'fa' : 'en');
    url.searchParams.set('q', clean);
    const response = await fetch(url, { signal: controller.signal, cache: 'no-store', credentials: 'omit' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const values = Array.isArray(payload?.[1]) ? payload[1].filter((item) => typeof item === 'string').slice(0, 8) : [];
    remoteSuggestionCache.set(cacheKey, values);
    if (remoteSuggestionCache.size > 80) remoteSuggestionCache.delete(remoteSuggestionCache.keys().next().value);
    if (els.searchInput.value.trim() !== clean) return;
    remoteSuggestions = values;
    remoteSuggestionsQuery = clean;
    renderSearchSuggestions(clean);
  } catch (error) {
    if (error?.name !== 'AbortError' && els.searchInput.value.trim() === clean) {
      remoteSuggestions = [];
      remoteSuggestionsQuery = clean;
      renderSearchSuggestions(clean);
    }
  } finally {
    if (remoteSuggestionController === controller) remoteSuggestionController = null;
  }
}
function scheduleGoogleSuggestions(rawQuery) {
  const query = String(rawQuery || '').trim();
  clearTimeout(remoteSuggestionTimer);
  remoteSuggestionController?.abort();
  remoteSuggestionController = null;
  if (!supportsLiveGoogleSuggestions || (state.settings.searchEngine || 'google') !== 'google' || state.settings.liveGoogleSuggestions !== true || query.length < 2 || WrenchShared.safeUrl(query)) {
    remoteSuggestions = [];
    remoteSuggestionsQuery = '';
    return;
  }
  remoteSuggestionTimer = setTimeout(() => loadGoogleSuggestions(query), 220);
}
function updateActiveSuggestion() {
  const rows = $$('.search-suggestion', els.searchSuggestions);
  rows.forEach((row, index) => row.classList.toggle('is-active', index === activeSuggestionIndex));
  const active = rows[activeSuggestionIndex];
  if (active) {
    els.searchInput.setAttribute('aria-activedescendant', active.id);
    active.scrollIntoView({ block: 'nearest' });
  } else {
    els.searchInput.removeAttribute('aria-activedescendant');
  }
}
function renderSearchSuggestions(rawQuery = '') {
  if (!state || !els.searchSuggestions) return;
  suggestionItems = buildSuggestionItems(rawQuery);
  activeSuggestionIndex = -1;
  els.searchSuggestions.replaceChildren();
  els.searchClear.hidden = !String(rawQuery || '').trim();
  if (!suggestionItems.length) {
    const empty = document.createElement('div'); empty.className = 'suggestion-empty'; empty.textContent = t('noSuggestions'); els.searchSuggestions.append(empty);
    els.searchHint.textContent = t('searchHint');
    return;
  }
  suggestionItems.forEach((item, index) => {
    const row = document.createElement('button');
    row.type = 'button'; row.className = 'search-suggestion'; row.id = `wrench-suggestion-${index}`; row.dataset.index = String(index); row.setAttribute('role', 'option');
    row.append(makeSearchIcon(item.type === 'link' ? 'link' : item.type === 'recent' ? 'history' : item.type === 'url' ? 'globe' : item.type === 'google' ? 'google' : 'search', item.link));
    const copy = document.createElement('span'); copy.className = 'suggestion-copy';
    const title = document.createElement('span'); title.className = 'suggestion-title'; title.textContent = item.title;
    copy.append(title);
    if (item.meta) {
      const meta = document.createElement('span'); meta.className = 'suggestion-meta'; meta.textContent = item.meta;
      copy.append(meta);
    }
    row.append(copy);
    if (item.action) {
      const action = document.createElement('span'); action.className = 'suggestion-action'; action.textContent = item.action;
      row.append(action);
    }
    row.addEventListener('mouseenter', () => { activeSuggestionIndex = index; updateActiveSuggestion(); });
    row.addEventListener('click', () => executeSuggestion(item));
    els.searchSuggestions.append(row);
  });
  const linkCount = suggestionItems.filter((item) => item.type === 'link').length;
  const googleCount = suggestionItems.filter((item) => item.type === 'google').length;
  els.searchHint.textContent = rawQuery.trim() ? (googleCount ? t('liveSuggestions') : linkCount ? t('searchFound', { count: linkCount }) : t('searchNotFound')) : t('searchHint');
}
function searchWeb(query) {
  const clean = String(query || '').trim();
  if (!clean) return;
  const engines = { google: 'https://www.google.com/search?q=', bing: 'https://www.bing.com/search?q=', duckduckgo: 'https://duckduckgo.com/?q=' };
  const directUrl = WrenchShared.safeUrl(clean);
  if (!directUrl) rememberSearch(clean);
  window.location.assign(directUrl || `${engines[state.settings.searchEngine] || engines.google}${encodeURIComponent(clean)}`);
}
function executeSuggestion(item) {
  if (!item) return;
  if (item.type === 'link') { window.location.assign(item.link.url); return; }
  if (item.type === 'url') { window.location.assign(item.url); return; }
  searchWeb(item.query || item.title);
}
function moveSuggestion(step) {
  if (!suggestionItems.length) return;
  const max = suggestionItems.length - 1;
  activeSuggestionIndex = activeSuggestionIndex < 0 ? (step > 0 ? 0 : max) : (activeSuggestionIndex + step + suggestionItems.length) % suggestionItems.length;
  updateActiveSuggestion();
}


function openMediaDb() { return new Promise((resolve, reject) => { const request = indexedDB.open('wrench-media', 1); request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains('assets')) request.result.createObjectStore('assets', { keyPath: 'key' }); }; request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); }); }
async function mediaDbAction(action, value) { const db = await openMediaDb(); return new Promise((resolve, reject) => { const transaction = db.transaction('assets', action === 'get' ? 'readonly' : 'readwrite'); const store = transaction.objectStore('assets'); const request = action === 'get' ? store.get('background') : action === 'put' ? store.put({ key: 'background', ...value }) : store.delete('background'); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); transaction.oncomplete = () => db.close(); }); }
async function applyBackgroundMedia() {
  if (mediaObjectUrl) { URL.revokeObjectURL(mediaObjectUrl); mediaObjectUrl = null; }
  for (const element of [els.presetBg, els.imageBg, els.videoBg]) element.classList.remove('is-active');
  els.videoBg.pause();
  els.videoBg.removeAttribute('src');
  els.imageBg.removeAttribute('src');
  if (state.settings.backgroundMode === 'preset') {
    const allowed = new Set(['aurora', 'mist', 'dunes', 'ocean', 'forest', 'mono']);
    const preset = allowed.has(state.settings.presetBackground) ? state.settings.presetBackground : 'aurora';
    els.presetBg.src = `assets/backgrounds/${preset}.jpg`;
    els.presetBg.classList.add('is-active');
    return;
  }
  if (state.settings.backgroundMode !== 'media') return;
  try {
    const item = await mediaDbAction('get');
    if (!item?.blob) {
      state.settings.backgroundMode = 'preset';
      state.settings.presetBackground = 'aurora';
      await WrenchShared.setState(state);
      els.presetBg.src = 'assets/backgrounds/aurora.jpg';
      els.presetBg.classList.add('is-active');
      return;
    }
    mediaObjectUrl = URL.createObjectURL(item.blob);
    if (item.mime?.startsWith('video/')) {
      els.videoBg.src = mediaObjectUrl;
      els.videoBg.classList.add('is-active');
      await els.videoBg.play().catch(() => {});
    } else {
      els.imageBg.src = mediaObjectUrl;
      els.imageBg.classList.add('is-active');
    }
  } catch { toast(t('backgroundReadFailed'), true); }
}

function findToolbarRoot(tree) {
  const root = tree?.[0]; const candidates = root?.children || [];
  return candidates.find((node) => ['1', 'toolbar_____'].includes(String(node.id)))
    || candidates.find((node) => /bookmarks?\s*(bar|toolbar)|نوار\s*(بوکمارک|نشانک)/i.test(node.title || ''))
    || candidates[0]
    || null;
}
function bookmarkToLink(item) {
  const url = WrenchShared.safeUrl(item.url); if (!url) return null;
  return { id: WrenchShared.uid('link'), title: item.title || getHost(url), url, note: '', createdAt: Date.now() };
}
function buildToolbarImport(toolbar) {
  const folders = [];
  const linkIds = [];
  const folderIds = [];
  let skipped = 0;

  const collectLinks = (items) => {
    const links = [];
    for (const item of items || []) {
      if (!item.url) continue;
      const link = bookmarkToLink(item);
      if (!link) { skipped += 1; continue; }
      links.push(link);
      linkIds.push(String(item.id));
    }
    return links;
  };

  const direct = collectLinks(toolbar.children);
  if (direct.length) folders.push({ title: t('bookmarkBar'), links: direct });

  const walk = (node, trail = [], depth = 1) => {
    if (node.url) return;
    folderIds.push({ id: String(node.id), depth });
    const path = [...trail, node.title || t('bookmarkBar')];
    const links = collectLinks(node.children);
    if (links.length) folders.push({ title: path.join(' / '), links });
    for (const child of node.children || []) if (!child.url) walk(child, path, depth + 1);
  };

  for (const child of toolbar.children || []) if (!child.url) walk(child);
  return { folders, linkIds, folderIds, skipped };
}

async function removeImportedToolbarItems(plan) {
  let failed = 0;
  for (const id of plan.linkIds) {
    try { await WrenchBrowser.bookmarks.remove(id); } catch { failed += 1; }
  }
  const deepestFirst = [...plan.folderIds].sort((a, b) => b.depth - a.depth);
  for (const folder of deepestFirst) {
    try { await WrenchBrowser.bookmarks.remove(folder.id); } catch { /* Non-empty folders are intentionally preserved. */ }
  }
  return failed;
}
function downloadJson(filename, data) { const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 500); }
function isValidBackup(data) { return data && typeof data === 'object' && Array.isArray(data.pages) && data.pages.length && data.pages.every((page) => page.id && Array.isArray(page.boards)); }

function formatTimer(seconds) { const minutes = Math.floor(seconds / 60); const secs = seconds % 60; return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; }
function renderMode() {
  const isBreak = mode.type === 'break'; els.modeOverlay.dataset.mode = mode.type; els.modeKicker.textContent = t(isBreak ? 'breakKicker' : 'focusKicker'); els.modeTitle.textContent = t(isBreak ? 'breakTitle' : 'focusTitle'); els.modeDescription.textContent = t(isBreak ? 'breakDescription' : 'focusDescription'); els.modeTip.textContent = t(isBreak ? 'breakTip' : 'focusTip'); els.modeStart.textContent = t(mode.running ? 'pause' : 'start'); els.modeReset.textContent = t('reset'); els.modeTimer.textContent = formatTimer(mode.remaining); const elapsed = mode.total - mode.remaining; els.modeProgress.style.width = `${Math.min(100, Math.max(0, elapsed / mode.total * 100))}%`;
}
function stopModeTimer() { clearInterval(mode.timer); mode.timer = null; mode.running = false; }
function openMode(type) { stopModeTimer(); const minutes = type === 'break' ? Number(state.settings.breakMinutes || 5) : Number(state.settings.focusMinutes || 25); mode = { type, total: Math.max(1, minutes) * 60, remaining: Math.max(1, minutes) * 60, running: false, timer: null }; els.modeOverlay.classList.add('is-open'); els.modeOverlay.setAttribute('aria-hidden', 'false'); renderMode(); }
function closeMode() { stopModeTimer(); els.modeOverlay.classList.remove('is-open'); els.modeOverlay.setAttribute('aria-hidden', 'true'); }
function toggleModeTimer() {
  if (mode.running) { stopModeTimer(); renderMode(); return; }
  mode.running = true; renderMode(); mode.timer = setInterval(() => { mode.remaining = Math.max(0, mode.remaining - 1); if (mode.remaining <= 0) { const finishedType = mode.type; stopModeTimer(); renderMode(); toast(t(finishedType === 'break' ? 'breakDone' : 'focusDone')); document.title = `✓ wrench — ${t(finishedType === 'break' ? 'breakDone' : 'focusDone')}`; setTimeout(() => { document.title = 'wrench'; }, 5000); return; } renderMode(); }, 1000);
}
function resetMode() { stopModeTimer(); mode.remaining = mode.total; renderMode(); }

els.searchInput.addEventListener('focus', () => { toggleSearchPopover(true); scheduleGoogleSuggestions(els.searchInput.value); });
els.searchInput.addEventListener('input', () => {
  cancelAnimationFrame(searchInputFrame);
  searchInputFrame = requestAnimationFrame(() => renderSearchSuggestions(els.searchInput.value));
  scheduleGoogleSuggestions(els.searchInput.value);
  if (!els.searchPopover.classList.contains('is-open')) toggleSearchPopover(true);
});
els.searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') { event.preventDefault(); moveSuggestion(1); return; }
  if (event.key === 'ArrowUp') { event.preventDefault(); moveSuggestion(-1); return; }
  if (event.key === 'Enter' && activeSuggestionIndex >= 0) {
    event.preventDefault(); executeSuggestion(suggestionItems[activeSuggestionIndex]);
  }
});
els.searchClear.addEventListener('click', () => {
  els.searchInput.value = '';
  clearRemoteSuggestions();
  renderSearchSuggestions('');
  toggleSearchPopover(true, { focus: true });
});
els.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (activeSuggestionIndex >= 0) { executeSuggestion(suggestionItems[activeSuggestionIndex]); return; }
  const query = els.searchInput.value.trim();
  if (query) searchWeb(query);
});
$('#quick-add-button').addEventListener('click', () => openLinkDialog(getActivePage()?.boards?.[0]?.id)); $('#add-board-button').addEventListener('click', () => openBoardDialog()); $('#empty-add-board').addEventListener('click', () => openBoardDialog()); $('#add-page-button').addEventListener('click', () => openPageDialog());
$('#background-settings-button').addEventListener('click', openBackgroundSettings);
$('#settings-button').addEventListener('click', openSettings); $('#close-settings').addEventListener('click', closeSettings); $('#settings-backdrop').addEventListener('click', closeSettings);
$('#brand-home').addEventListener('click', (event) => { event.preventDefault(); els.searchInput.value = ''; renderSearchSuggestions(''); toggleSearchPopover(false); window.scrollTo({ top: 0, behavior: 'smooth' }); });
$('#language-button').addEventListener('click', async () => {
  state.settings.locale = lang() === 'fa' ? 'en-US' : 'fa-IR';
  preserveViewportDuringUpdate(() => {
    $('#locale-select').value = state.settings.locale;
    applyLocaleSetting();
  });
  await persist(false);
});
els.profileForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const cleanName = els.profileOnboardingName.value.trim();
  if (!cleanName) { els.profileOnboardingName.focus(); return; }
  state.settings.userName = cleanName.slice(0, 36);
  applyProfileSetting();
  syncSettingsControls();
  await persist(false);
  els.profileDialog.close();
  toast(t('nameSaved'));
});
els.profileDialog.addEventListener('cancel', (event) => { if (!String(state?.settings?.userName || '').trim()) event.preventDefault(); });
els.profileNameInput.addEventListener('change', async (event) => {
  state.settings.userName = event.target.value.trim().slice(0, 36);
  applyProfileSetting();
  await persist(false);
  toast(t('nameSaved'));
});
$('#focus-button').addEventListener('click', () => openMode('focus')); $('#break-button').addEventListener('click', () => openMode('break')); $('#close-mode').addEventListener('click', closeMode); els.modeStart.addEventListener('click', toggleModeTimer); els.modeReset.addEventListener('click', resetMode);
$$('.close-dialog').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
document.addEventListener('click', (event) => {
  if (!event.target.closest('.context-menu, .board-menu-button, .link-menu-button')) closeMenus();
  if (!event.target.closest('#search-popover')) toggleSearchPopover(false);
});
window.addEventListener('resize', closeMenus, { passive: true });
window.addEventListener('scroll', closeMenus, { passive: true });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { closeMenus(); toggleSearchPopover(false); closeSettings(); closeMode(); }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    toggleSearchPopover(true, { focus: true });
  }
});

els.linkForm.addEventListener('submit', async (event) => {
  event.preventDefault(); const cleanUrl = WrenchShared.safeUrl(els.linkUrl.value); if (!cleanUrl) { toast(t('invalidUrl'), true); els.linkUrl.focus(); return; }
  const [targetPageId, targetBoardId] = els.linkBoard.value.split('|'); const targetPage = state.pages.find((page) => page.id === targetPageId); const targetBoard = targetPage?.boards.find((board) => board.id === targetBoardId); if (!targetBoard) return toast(t('boardNotFound'), true);
  const existingId = els.linkId.value; let existing = null;
  if (existingId) for (const page of state.pages) { for (const board of page.boards) { const index = board.links.findIndex((link) => link.id === existingId); if (index >= 0) { [existing] = board.links.splice(index, 1); break; } } if (existing) break; }
  targetBoard.links.unshift({ id: existing?.id || WrenchShared.uid('link'), title: els.linkTitle.value.trim(), url: cleanUrl, note: els.linkNote.value.trim(), createdAt: existing?.createdAt || Date.now(), updatedAt: Date.now() }); state.activePageId = targetPageId; await persist(); els.linkDialog.close(); toast(t(existing ? 'linkEdited' : 'linkSaved'));
});
els.boardColor.addEventListener('input', () => { els.boardColorValue.textContent = els.boardColor.value; });
els.boardForm.addEventListener('submit', async (event) => { event.preventDefault(); const page = getActivePage(); if (!page) return; const existing = page.boards.find((board) => board.id === els.boardId.value); if (existing) { existing.title = els.boardTitle.value.trim(); existing.color = els.boardColor.value; } else page.boards.push({ id: WrenchShared.uid('board'), title: els.boardTitle.value.trim(), color: els.boardColor.value, links: [] }); await persist(); els.boardDialog.close(); toast(t(existing ? 'boardEdited' : 'boardCreated')); });
els.pageForm.addEventListener('submit', async (event) => { event.preventDefault(); const existing = state.pages.find((page) => page.id === els.pageId.value); if (existing) { existing.title = els.newPageTitle.value.trim(); existing.icon = els.newPageIcon.value.trim() || '✦'; } else { const id = WrenchShared.uid('page'); state.pages.push({ id, title: els.newPageTitle.value.trim(), icon: els.newPageIcon.value.trim() || '✦', boards: [{ id: WrenchShared.uid('board'), title: lang() === 'en' ? 'Quick access' : 'دسترسی سریع', color: state.settings.accent, links: [] }] }); state.activePageId = id; } await persist(); els.pageDialog.close(); toast(t(existing ? 'pageEdited' : 'pageCreated')); });
els.deletePageButton.addEventListener('click', async () => { const page = state.pages.find((item) => item.id === els.pageId.value); if (!page) return; if (state.pages.length === 1) return toast(t('atLeastOnePage'), true); const linksCount = page.boards.reduce((sum, board) => sum + board.links.length, 0); if (!confirm(t('confirmDeletePage', { title: displayTitle(page.title), count: linksCount }))) return; state.pages = state.pages.filter((item) => item.id !== page.id); state.activePageId = state.pages[0].id; await persist(); els.pageDialog.close(); toast(t('pageDeleted')); });

$('#theme-options').addEventListener('click', async (event) => {
  const button = event.target.closest('[data-theme-value]');
  if (!button || button.dataset.themeValue === state.settings.theme) return;
  state.settings.theme = button.dataset.themeValue;
  applyThemeSetting();
  syncSettingsControls();
  await persist(false);
});
$('#wallpaper-options').addEventListener('click', async (event) => {
  const button = event.target.closest('[data-wallpaper]');
  if (!button) return;
  state.settings.presetBackground = button.dataset.wallpaper;
  state.settings.backgroundMode = 'preset';
  syncSettingsControls();
  await applyBackgroundMedia();
  await persist(false);
});
$('#gradient-options').addEventListener('click', async (event) => {
  const button = event.target.closest('[data-gradient]');
  if (!button) return;
  state.settings.customGradient = button.dataset.gradient;
  state.settings.backgroundMode = 'gradient';
  applyGradientSetting();
  syncSettingsControls();
  await persist(false);
  await applyBackgroundMedia();
});
$('#accent-color').addEventListener('input', (event) => {
  state.settings.accent = event.target.value;
  applyAccentSetting();
});
$('#accent-color').addEventListener('change', async () => { await persist(false); });
$('#card-size').addEventListener('change', async (event) => {
  state.settings.cardSize = event.target.value;
  applyThemeSetting();
  await persist(false);
});
$('#search-engine').addEventListener('change', async (event) => {
  state.settings.searchEngine = event.target.value;
  clearRemoteSuggestions();
  renderSearchSuggestions(els.searchInput.value);
  scheduleGoogleSuggestions(els.searchInput.value);
  await persist(false);
});
$('#live-google-suggestions').addEventListener('change', async (event) => {
  if (!supportsLiveGoogleSuggestions) { event.target.checked = false; return; }
  state.settings.liveGoogleSuggestions = event.target.checked;
  clearRemoteSuggestions();
  renderSearchSuggestions(els.searchInput.value);
  scheduleGoogleSuggestions(els.searchInput.value);
  await persist(false);
});
$('#show-greeting').addEventListener('change', async (event) => {
  state.settings.showGreeting = event.target.checked;
  updateClock();
  await persist(false);
});
$('#clock-24').addEventListener('change', async (event) => {
  state.settings.clock24 = event.target.checked;
  updateClock();
  await persist(false);
});
$('#locale-select').addEventListener('change', async (event) => {
  if (event.target.value === state.settings.locale) return;
  state.settings.locale = event.target.value;
  preserveViewportDuringUpdate(() => applyLocaleSetting());
  await persist(false);
});
$('#font-fa').addEventListener('change', async (event) => {
  state.settings.fontFa = event.target.value;
  preserveViewportDuringUpdate(() => applyFontSettings());
  await persist(false);
});
$('#font-en').addEventListener('change', async (event) => {
  state.settings.fontEn = event.target.value;
  preserveViewportDuringUpdate(() => applyFontSettings());
  await persist(false);
});
$('#focus-minutes').addEventListener('change', async (event) => {
  state.settings.focusMinutes = Math.min(180, Math.max(1, Number(event.target.value) || 25));
  event.target.value = state.settings.focusMinutes;
  await persist(false);
});
$('#break-minutes').addEventListener('change', async (event) => {
  state.settings.breakMinutes = Math.min(60, Math.max(1, Number(event.target.value) || 5));
  event.target.value = state.settings.breakMinutes;
  await persist(false);
});
$('#overlay-range').addEventListener('input', (event) => {
  state.settings.overlay = Number(event.target.value) / 100;
  els.overlayOutput.textContent = `${event.target.value}%`;
  document.documentElement.style.setProperty('--overlay-opacity', state.settings.overlay);
});
$('#overlay-range').addEventListener('change', async () => { await persist(false); });
$('#blur-range').addEventListener('input', (event) => {
  state.settings.blur = Number(event.target.value);
  els.blurOutput.textContent = `${event.target.value}px`;
  document.documentElement.style.setProperty('--panel-blur', `${state.settings.blur}px`);
});
$('#blur-range').addEventListener('change', async () => { await persist(false); });

$('#choose-background').addEventListener('click', () => els.backgroundFile.click());
els.backgroundFile.addEventListener('change', async () => { const file = els.backgroundFile.files?.[0]; if (!file) return; if (!/^(image|video)\//.test(file.type)) return toast(t('unsupportedFile'), true); if (file.size > 60 * 1024 * 1024) return toast(t('fileTooLarge'), true); try { await mediaDbAction('put', { blob: file, mime: file.type, name: file.name, updatedAt: Date.now() }); state.settings.backgroundMode = 'media'; await persist(false); await applyBackgroundMedia(); toast(t('backgroundApplied')); } catch (error) { toast(t('backgroundSaveFailed', { error: error.message }), true); } finally { els.backgroundFile.value = ''; } });
$('#remove-background').addEventListener('click', async () => { try { await mediaDbAction('delete'); } catch {} state.settings.backgroundMode = 'preset'; state.settings.presetBackground = 'aurora'; syncSettingsControls(); await persist(false); await applyBackgroundMedia(); toast(t('backgroundRemoved')); });

$('#import-browser-bookmarks').addEventListener('click', async () => {
  try {
    const granted = await WrenchBrowser.permissions.request({ permissions: ['bookmarks'] });
    if (!granted) return toast(t('permissionNeeded'), true);

    const tree = await WrenchBrowser.bookmarks.getTree();
    const toolbar = findToolbarRoot(tree);
    const plan = toolbar ? buildToolbarImport(toolbar) : null;
    const total = plan?.folders.reduce((sum, folder) => sum + folder.links.length, 0) || 0;
    if (!toolbar || !total) return toast(t('bookmarkBarMissing'), true);
    if (!confirm(t('confirmMoveBookmarks', { count: total }))) return;

    const pageId = WrenchShared.uid('page');
    state.pages.push({
      id: pageId,
      title: lang() === 'en' ? 'Browser bookmarks' : 'بوکمارک‌های مرورگر',
      icon: '★',
      boards: plan.folders.map((folder, index) => ({
        id: WrenchShared.uid('board'),
        title: folder.title || t('folder', { count: index + 1 }),
        color: ['#8b5cf6', '#38bdf8', '#14b8a6', '#f97316', '#ec4899'][index % 5],
        links: folder.links
      }))
    });
    state.activePageId = pageId;

    // Save first. Browser bookmarks are removed only after Wrench has stored them.
    await persist();
    const failed = await removeImportedToolbarItems(plan);
    const remaining = failed + plan.skipped;
    closeSettings();
    if (remaining) toast(t('importedPartial', { count: total, failed: remaining }), true);
    else toast(t('importedMoved', { count: total }));
  } catch (error) {
    toast(t('importFailed', { error: error.message }), true);
  }
});
$('#export-data').addEventListener('click', () => { downloadJson(`wrench-backup-${new Date().toISOString().slice(0, 10)}.json`, state); toast(t('backupReady')); });
$('#import-data').addEventListener('click', () => els.importDataFile.click());
els.importDataFile.addEventListener('change', async () => { const file = els.importDataFile.files?.[0]; if (!file) return; try { const parsed = JSON.parse(await file.text()); if (!isValidBackup(parsed)) throw new Error(t('invalidBackup')); state = WrenchShared.normalizeState(parsed); await persist(); closeSettings(); toast(t('backupRestored')); } catch (error) { toast(error.message, true); } finally { els.importDataFile.value = ''; } });
$('#reset-data').addEventListener('click', async () => { if (!confirm(t('confirmReset'))) return; state = WrenchShared.defaultState(); try { await mediaDbAction('delete'); } catch {} await persist(); await applyBackgroundMedia(); closeSettings(); toast(t('resetDone')); });

WrenchBrowser.raw.storage?.onChanged?.addListener((changes, areaName) => {
  const newValue = changes[WrenchShared.STORAGE_KEY]?.newValue;
  if (areaName !== 'local' || !newValue || isInitializing) return;
  const nextState = WrenchShared.normalizeState(newValue);
  const fingerprint = stateFingerprint(nextState);
  if (fingerprint && localWriteFingerprints.has(fingerprint)) {
    localWriteFingerprints.delete(fingerprint);
    return;
  }
  state = nextState;
  if (externalRenderFrame) cancelAnimationFrame(externalRenderFrame);
  externalRenderFrame = requestAnimationFrame(() => {
    externalRenderFrame = null;
    renderApp();
  });
});
async function init() {
  state = await WrenchShared.getState();
  const modifier = /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent) ? '⌘' : 'Ctrl';
  const modifierNode = els.searchShortcut?.querySelector('.shortcut-modifier');
  if (modifierNode) modifierNode.textContent = modifier;
  renderApp();
  renderSearchSuggestions('');
  await applyBackgroundMedia();
  clearInterval(clockTimer);
  clockTimer = setInterval(updateClock, 1000);
  isInitializing = false;
  if (!String(state.settings.userName || '').trim()) {
    requestAnimationFrame(() => {
      els.profileOnboardingName.value = '';
      els.profileDialog.showModal();
      requestAnimationFrame(() => els.profileOnboardingName.focus({ preventScroll: true }));
    });
  }
}
init().catch((error) => { console.error(error); toast(t('startupFailed'), true); });
