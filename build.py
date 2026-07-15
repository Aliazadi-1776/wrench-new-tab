#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
VERSION = "1.7.0"
TARGETS = {
    "chrome": "manifest.chrome.json",
    "firefox": "manifest.firefox.json",
}


def copy_target(target: str, manifest_name: str) -> Path:
    target_dir = DIST / target
    if target_dir.exists():
        shutil.rmtree(target_dir)
    target_dir.mkdir(parents=True)

    for item in SRC.iterdir():
        if item.name.startswith("manifest."):
            continue
        destination = target_dir / item.name
        if item.is_dir():
            shutil.copytree(item, destination)
        else:
            shutil.copy2(item, destination)

    manifest = json.loads((SRC / manifest_name).read_text(encoding="utf-8"))
    (target_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    return target_dir


def make_zip(folder: Path, output: Path) -> None:
    if output.exists():
        output.unlink()
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(folder.rglob("*")):
            if path.is_file():
                archive.write(path, path.relative_to(folder))


def main() -> None:
    DIST.mkdir(exist_ok=True)
    for target, manifest in TARGETS.items():
        folder = copy_target(target, manifest)
        output = ROOT / f"wrench-{target}-v{VERSION}.zip"
        make_zip(folder, output)
        print(f"Built {target}: {output}")


if __name__ == "__main__":
    main()
