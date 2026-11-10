#!/usr/bin/env python3
"""Resize+recompress images for the CUSail site: max 900px long side, JPEG q82."""
import sys
from pathlib import Path
from PIL import Image

MAX_DIM = 900
JPEG_QUALITY = 82

def process_one(src: Path, dest: Path):
    img = Image.open(src)
    img = img.convert("RGB") if img.mode in ("RGBA", "P") else img
    w, h = img.size
    scale = MAX_DIM / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.suffix.lower() in (".jpg", ".jpeg"):
        img.save(dest, "JPEG", quality=JPEG_QUALITY, optimize=True)
    else:
        img.save(dest, optimize=True)

def main():
    if len(sys.argv) != 3:
        print("usage: compress_images.py <src_file_or_dir> <dest_dir>")
        sys.exit(1)
    src, dest_dir = Path(sys.argv[1]), Path(sys.argv[2])
    files = [src] if src.is_file() else [
        p for p in src.rglob("*") if p.suffix.lower() in (".jpg", ".jpeg", ".png")
    ]
    for f in files:
        rel = f.name if src.is_file() else f.relative_to(src)
        out = dest_dir / rel
        process_one(f, out)
        print(f"{f} -> {out} ({out.stat().st_size // 1024}KB)")

if __name__ == "__main__":
    main()
