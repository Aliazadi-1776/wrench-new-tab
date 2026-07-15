# Contributing to wrench

Thanks for helping improve wrench.

## Before opening a pull request

1. Search existing issues and pull requests.
2. Keep changes focused on one problem or feature.
3. Preserve local-first behavior and avoid adding analytics, ads or remote code.
4. Do not add broad permissions unless they are essential and clearly documented.
5. Test both Chromium and Firefox packages when the change touches browser APIs.

## Development

```bash
git clone https://github.com/Aliazadi-1776/wrench-new-tab.git
cd wrench-new-tab
python build.py
```

Load `dist/chrome` or `dist/firefox` as an unpacked/temporary extension.

## Checks

Run before submitting:

```bash
python -m json.tool src/manifest.chrome.json > /dev/null
python -m json.tool src/manifest.firefox.json > /dev/null
node --check src/newtab.js
node --check src/popup.js
node --check src/background.js
node --check src/shared.js
python build.py
```

## Pull requests

Describe:

- What changed
- Why it changed
- How it was tested
- Any permission, privacy or store-listing impact

By contributing, you agree that your contribution is licensed under the MIT License.
