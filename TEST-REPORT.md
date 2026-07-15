# Test Report — wrench 1.7.0

## Static validation

- Chrome and Firefox manifests parse as valid JSON.
- Manifest descriptions are within the Chrome 132-character limit.
- `manifest.json` is at the root of both release ZIP files.
- JavaScript syntax checks pass for `newtab.js`, `popup.js`, `background.js` and `shared.js`.
- Local HTML asset references resolve.
- Firefox package has no Google suggestion host permission.
- Chromium live suggestions default to disabled.

## Packaging

Built with:

```bash
python build.py
```

Outputs:

- `wrench-chrome-v1.7.0.zip`
- `wrench-firefox-v1.7.0.zip`

## Manual checks recommended before store submission

1. Fresh install in Chrome and Firefox 140+.
2. Existing-user update from 1.6.1 with bookmark data preserved.
3. Quick save from popup and context menu.
4. Optional bookmark-bar migration and cancellation path.
5. Focus and break timers.
6. Persian/English switching and font selection.
7. Chromium opt-in Google suggestions and opt-out behavior.
8. Firefox search flow without live remote suggestions.
9. JSON export, import and reset.
10. Custom image and video background persistence.
