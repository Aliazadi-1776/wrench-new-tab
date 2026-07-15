# Store Listing Copy

## Recommended identity

- **Product name:** wrench — Minimal New Tab
- **Repository:** `wrench-new-tab`
- **GitHub URL:** `https://github.com/Aliazadi-1776/wrench-new-tab`
- **Release tag:** `v1.7.0`
- **Category:** Productivity / Tabs

## Short summary

Turn every new tab into a quiet workspace for bookmarks, focus sessions and fast search.

## Full description

wrench replaces the default new-tab page with a calm, customizable workspace.

Organize links into pages and collapsible boards, search bookmarks with a keyboard-first command bar, personalize the background, and start focused work or short breaks without leaving the tab.

### Highlights

- Minimal pages and bookmark boards
- Command search with Ctrl/Command + Shift + K
- Fast local bookmark, URL and recent-query results
- Optional live Google suggestions in the Chromium version
- Custom images, videos, gradients and bundled backgrounds
- Focus and break timers
- Persian and English interface
- Safe optional bookmark-bar migration
- Local JSON backup and restore
- No account, ads, analytics or project-operated backend

Most wrench data stays inside the browser. The Chromium version keeps Google autocomplete off by default; if enabled, typed text is sent directly to Google's suggestion endpoint. The Firefox version does not include live remote autocomplete.

Open source under the MIT License.

## Chrome single-purpose statement

wrench replaces the browser's new-tab page with a customizable local workspace for organizing and opening bookmarks, starting focus sessions and initiating explicit searches.

## Chrome permission justifications

- **storage:** Saves pages, boards, settings and recent searches locally.
- **activeTab:** Reads the current tab only after the user chooses quick save.
- **contextMenus:** Adds an explicit “Save to wrench” menu action.
- **bookmarks (optional):** Requested only when the user starts bookmark-bar migration.
- **suggestqueries.google.com:** Used only after the user enables live Google autocomplete in the Chromium build.

## Firefox reviewer notes

- The add-on replaces `about:newtab` with a packaged local page.
- No account or test credentials are required.
- All user workspace data is stored locally.
- Bookmark access is optional and requested from a user click.
- The Firefox build has no live remote autocomplete and no Google suggestion host permission.
- Pressing Enter on the clearly labeled web-search result opens the selected provider as a direct user action.
- Build command: `python build.py`
- No minification, bundler, remote code or generated JavaScript is used.
