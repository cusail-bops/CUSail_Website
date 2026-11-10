#!/usr/bin/env python3
"""Build an HTML contact sheet of images/videos under a directory, for manual review."""
import sys
from pathlib import Path

IMG_EXT = {".jpg", ".jpeg", ".png", ".JPG", ".PNG"}
VID_EXT = {".mp4", ".mov", ".MP4", ".MOV"}

def main():
    if len(sys.argv) != 3:
        print("usage: asset_candidates.py <unzipped_dir> <out_html>")
        sys.exit(1)
    root, out_html = Path(sys.argv[1]), Path(sys.argv[2])
    rows = []
    for p in sorted(root.rglob("*")):
        if p.suffix in IMG_EXT:
            rel = p.relative_to(root)
            rows.append(f'<figure><img src="{p.as_uri()}" style="max-width:220px"><figcaption>{rel}</figcaption></figure>')
        elif p.suffix in VID_EXT:
            rel = p.relative_to(root)
            rows.append(f'<figure><video src="{p.as_uri()}" style="max-width:220px" controls></video><figcaption>{rel}</figcaption></figure>')
    html = (
        "<!doctype html><meta charset='utf-8'>"
        "<style>body{background:#111;color:#eee;font-family:sans-serif}"
        "div{display:flex;flex-wrap:wrap;gap:12px}figcaption{font-size:11px;word-break:break-all}</style>"
        f"<h1>{len(rows)} assets under {root}</h1><div>{''.join(rows)}</div>"
    )
    out_html.write_text(html, encoding="utf-8")
    print(f"Wrote {out_html} with {len(rows)} assets")

if __name__ == "__main__":
    main()
