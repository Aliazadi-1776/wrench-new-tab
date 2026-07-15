<p align="center">
  <img src="docs/assets/logo.svg" width="88" height="88" alt="wrench logo">
</p>

<h1 align="center">wrench — Minimal New Tab</h1>

<p align="center">
  A quiet, local-first new-tab workspace for bookmarks, focus sessions, custom backgrounds and fast command search.
</p>

<p align="center">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-111827.svg"></a>
  <a href="CHANGELOG.md"><img alt="Version 1.7.0" src="https://img.shields.io/badge/version-1.7.0-73e0ae.svg"></a>
  <img alt="Chrome and Firefox" src="https://img.shields.io/badge/browsers-Chrome%20%7C%20Firefox-334155.svg">
  <img alt="Local first" src="https://img.shields.io/badge/storage-local--first-0f766e.svg">
</p>

<p align="center">
  <a href="README-FA.md">فارسی</a> ·
  <a href="#installation">Installation</a> ·
  <a href="PRIVACY.md">Privacy</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

## Why wrench?

wrench replaces the browser's default new-tab page with a calm workspace that stays useful without becoming noisy. It keeps pages, boards, bookmarks, settings and custom media inside the browser—no account, ads, analytics or project-operated backend.

## Features

- Pages and collapsible bookmark boards
- Command search with `Ctrl/Command + Shift + K`
- Search across bookmarks, recent queries and direct URLs
- Optional live Google suggestions in the Chromium build
- Safe bookmark-bar migration with optional permission
- Image, video, gradient and bundled backgrounds
- Focus and break timers
- Persian and English interface and font presets
- Local JSON backup and restore
- Quick-save popup and context-menu action
- Chrome, Edge, Brave, Opera, Vivaldi and Firefox builds

## Installation

### Chrome, Edge, Brave, Opera or Vivaldi

1. Download the Chromium ZIP from [Releases](../../releases).
2. Extract the archive.
3. Open your browser's extensions page.
4. Enable **Developer mode**.
5. Choose **Load unpacked** and select the extracted folder.

### Firefox

1. Download the Firefox ZIP from [Releases](../../releases).
2. Open `about:debugging#/runtime/this-firefox`.
3. Select **Load Temporary Add-on**.
4. Choose the extracted `manifest.json`.

Permanent Firefox installation requires an AMO-signed package.

## Build

The project has no third-party build dependencies. Python 3.10+ is enough:

```bash
git clone https://github.com/Aliazadi-1776/wrench-new-tab.git
cd wrench-new-tab
python build.py
```

Generated packages:

```text
wrench-chrome-v1.7.0.zip
wrench-firefox-v1.7.0.zip
```

The packaged `manifest.json` is placed at the root of each ZIP.

## Privacy

Most features are entirely local. In the Chromium build, live Google suggestions are **off by default**. When a user explicitly enables them, typed search text is sent directly to Google's suggestion endpoint without cookies. The Firefox build does not include live remote autocomplete. See [PRIVACY.md](PRIVACY.md).

## Project links

- GitHub: https://github.com/Aliazadi-1776
- Telegram: https://t.me/im_wrench
- Issues: https://github.com/Aliazadi-1776/wrench-new-tab/issues

## License

Released under the [MIT License](LICENSE).
