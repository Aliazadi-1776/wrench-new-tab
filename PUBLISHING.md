# Publishing wrench

## Release naming

- Store name: **wrench — Minimal New Tab**
- Repository: **wrench-new-tab**
- Current release: **v1.7.0**

## Prepare a release

```bash
python build.py
```

Confirm that each ZIP opens directly to `manifest.json`; do not place the extension inside an extra top-level folder.

Before every update:

1. Increase the version in both manifests.
2. Update `VERSION` in `build.py`.
3. Update `CHANGELOG.md`.
4. Rebuild both ZIP files.
5. Test a fresh install and an update from the previous version.

## Chrome Web Store checklist

Upload `wrench-chrome-v1.7.0.zip`.

Use the copy in `STORE-LISTING.md`, link the privacy policy, complete permission justifications, and accurately disclose optional Google autocomplete. Ready-to-upload media are in `store-assets/chrome/`:

- `icon-128.png`
- `small-promo-440x280.png`
- `marquee-1400x560.png`
- `screenshot-1.png` and `screenshot-2.png` at 1280×800

Suggested privacy policy URL after enabling GitHub Pages:

```text
https://aliazadi-1776.github.io/wrench-new-tab/privacy.html
```

## Firefox Add-ons checklist

Upload `wrench-firefox-v1.7.0.zip` and select **On this site** for an AMO listing.

- Platform: Firefox desktop
- Category: Tabs or Other / Productivity, depending on available categories
- License: MIT
- Source code required: No, because the uploaded JavaScript is readable and unminified. Uploading the repository source ZIP is still useful when requested.
- Privacy policy: required because explicit web searches navigate to a third-party provider; use the GitHub Pages URL.
- Reviewer notes: paste the Firefox notes from `STORE-LISTING.md`.
- Screenshots and icon: use `store-assets/firefox/`.

The Firefox package intentionally excludes live Google autocomplete and its host permission.
