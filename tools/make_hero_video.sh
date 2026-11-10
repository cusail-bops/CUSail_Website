#!/usr/bin/env bash
set -euo pipefail
# usage: make_hero_video.sh <input.mp4> <start_seconds> <duration_seconds> <outdir>
IN="$1"; START="$2"; DUR="$3"; OUT="$4"
mkdir -p "$OUT"

ffmpeg -y -ss "$START" -i "$IN" -t "$DUR" \
  -vf "scale=1920:-2" -an \
  -c:v libx264 -preset slow -crf 28 -movflags +faststart \
  "$OUT/hero.mp4"

ffmpeg -y -ss "$START" -i "$IN" -frames:v 1 -update 1 "$OUT/hero-poster.jpg"

echo "hero.mp4 size:"
du -h "$OUT/hero.mp4"
