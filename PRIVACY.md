# wrench Privacy Policy

**Effective date:** July 15, 2026

wrench is a local-first browser extension. The project owner does not operate an account system, analytics service, advertising platform or backend that receives user data.

## Data stored locally

The following data may be stored in the user's browser:

- Display name
- Pages, boards, links, notes and recent searches
- Visual and language settings
- Focus and break timer settings
- User-selected background images and videos
- JSON backups created by the user

Local data is controlled by the user and can be exported or erased from wrench settings.

## Browser permissions

- `storage`: saves wrench data locally.
- `activeTab`: reads the current tab only after the user invokes quick save.
- `contextMenus`: adds the explicit “Save to wrench” action.
- `bookmarks` (optional): requested only when the user starts bookmark-bar migration. wrench saves supported bookmarks locally before removing the corresponding browser bookmarks.

## Web search

When the user submits a web search, wrench opens the selected search engine with the submitted query.

### Chromium live suggestions

The Chromium build can display Google autocomplete suggestions. This feature is **off by default** and must be enabled by the user in Settings. While enabled, typed search text is sent directly to `suggestqueries.google.com` to retrieve suggestions. Requests omit browser credentials. The project owner does not receive or store queries or responses.

### Firefox build

The Firefox store build does not include live remote autocomplete and does not request access to the Google suggestion endpoint.

## Data sharing

wrench does not sell user data. The project owner does not receive locally stored wrench data. A search provider may receive a query only when the user submits a search, or—in the Chromium build—when the user explicitly enables live suggestions.

## Contact

- GitHub issues: https://github.com/Aliazadi-1776/wrench-new-tab/issues
- Telegram: https://t.me/im_wrench
