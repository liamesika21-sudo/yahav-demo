#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="$ROOT/src/yahav/פרויקטים - כל פרויקט בתוך התייקיה הזו תיקייה נפרדת"
OUT="$ROOT/public/media"
TMP_DIR="$(mktemp -d /tmp/yahav-media.XXXXXX)"
trap 'rm -rf "$TMP_DIR"' EXIT

mkdir -p "$OUT/projects/clinic" "$OUT/projects/vardiya" "$OUT/projects/carmel" "$OUT/projects/herzliya" "$OUT/site"

optimize() {
  local source="$1"
  local destination="$2"
  local input="$source"

  if [[ "${source##*.}" == "HEIC" || "${source##*.}" == "heic" ]]; then
    input="$TMP_DIR/source-$(printf '%s' "$source" | shasum | cut -c1-10).jpg"
    sips -s format jpeg -s formatOptions 94 "$source" --out "$input" >/dev/null
  fi

  ffmpeg -y -loglevel error -i "$input" -map_metadata -1 \
    -vf "scale='min(960,iw)':-2" -frames:v 1 -c:v libwebp -q:v 80 -update 1 "${destination}-960.webp"
  ffmpeg -y -loglevel error -i "$input" -map_metadata -1 \
    -vf "scale='min(1800,iw)':-2" -frames:v 1 -c:v libwebp -q:v 84 -update 1 "${destination}-1800.webp"
}

extract_frame() {
  local source="$1"
  local second="$2"
  local destination="$3"

  ffmpeg -y -loglevel error -ss "$second" -i "$source" -map_metadata -1 \
    -vf "scale='min(960,iw)':-2" -frames:v 1 -c:v libwebp -q:v 80 -update 1 "${destination}-960.webp"
  ffmpeg -y -loglevel error -ss "$second" -i "$source" -map_metadata -1 \
    -vf "scale='min(1800,iw)':-2" -frames:v 1 -c:v libwebp -q:v 84 -update 1 "${destination}-1800.webp"
}

CLINIC="$SOURCE/קליניקה "
optimize "$CLINIC/IMG_9232.JPG" "$OUT/projects/clinic/clinic-01"
optimize "$CLINIC/IMG_9225.JPG" "$OUT/projects/clinic/clinic-02"
optimize "$CLINIC/IMG_9203.JPG" "$OUT/projects/clinic/clinic-03"
optimize "$CLINIC/IMG_9236.JPG" "$OUT/projects/clinic/clinic-04"
optimize "$CLINIC/IMG_9219.JPG" "$OUT/projects/clinic/clinic-05"
optimize "$CLINIC/IMG_9204.JPG" "$OUT/projects/clinic/clinic-06"
optimize "$CLINIC/IMG_9224.JPG" "$OUT/projects/clinic/clinic-07"
optimize "$CLINIC/IMG_9217.JPG" "$OUT/projects/clinic/clinic-08"
optimize "$CLINIC/IMG_9230.JPG" "$OUT/projects/clinic/clinic-09"
optimize "$CLINIC/IMG_9202 2.JPG" "$OUT/projects/clinic/clinic-10"
optimize "$CLINIC/IMG_9223.JPG" "$OUT/projects/clinic/clinic-11"
optimize "$CLINIC/IMG_9216.JPG" "$OUT/projects/clinic/clinic-12"

VARDIYA="$SOURCE/ורדיה "
optimize "$VARDIYA/8d976212-1803-4623-8799-4551af2c4620.jpg" "$OUT/projects/vardiya/vardiya-01"
optimize "$VARDIYA/e87390b7-0027-45ad-9df7-fddc8b922ab5.jpg" "$OUT/projects/vardiya/vardiya-02"
optimize "$VARDIYA/f31c7398-5bfd-4009-a29d-43cce6528af4.jpg" "$OUT/projects/vardiya/vardiya-03"
optimize "$VARDIYA/fc124c84-f8ca-4e98-bd02-02910aff51ec.jpg" "$OUT/projects/vardiya/vardiya-04"
optimize "$VARDIYA/fe7ce8ce-8b79-4495-bfe6-868eb4bab46f.jpg" "$OUT/projects/vardiya/vardiya-05"
optimize "$VARDIYA/f0162b4e-19da-469b-8bd3-589405d6b3c7.jpg" "$OUT/projects/vardiya/vardiya-06"
optimize "$VARDIYA/9f9cb419-06b0-447f-be2d-d309dc3b39fa.jpg" "$OUT/projects/vardiya/vardiya-07"
optimize "$VARDIYA/5d5ff224-7b98-466f-a2d9-c91e4e3ef32a.jpg" "$OUT/projects/vardiya/vardiya-08"

CARMEL="$SOURCE/פנטהאוז כרמל "
optimize "$CARMEL/IMG_2728.HEIC" "$OUT/projects/carmel/carmel-01"
optimize "$CARMEL/IMG_2700.HEIC" "$OUT/projects/carmel/carmel-02"
optimize "$CARMEL/IMG_2724.HEIC" "$OUT/projects/carmel/carmel-03"
optimize "$CARMEL/IMG_2720.HEIC" "$OUT/projects/carmel/carmel-04"
optimize "$CARMEL/IMG_2502.HEIC" "$OUT/projects/carmel/carmel-05"
optimize "$CARMEL/IMG_2479.HEIC" "$OUT/projects/carmel/carmel-06"
optimize "$CARMEL/IMG_2421.HEIC" "$OUT/projects/carmel/carmel-07"
optimize "$CARMEL/IMG_2709.HEIC" "$OUT/projects/carmel/carmel-08"
optimize "$CARMEL/IMG_6247.JPG" "$OUT/projects/carmel/carmel-09"
optimize "$CARMEL/IMG_6250.JPG" "$OUT/projects/carmel/carmel-10"

HERZLIYA="$SOURCE/דירה הרצליה"
extract_frame "$HERZLIYA/IMG_4803.MOV" 2 "$OUT/projects/herzliya/herzliya-01"
extract_frame "$HERZLIYA/IMG_4803.MOV" 5 "$OUT/projects/herzliya/herzliya-02"
extract_frame "$HERZLIYA/IMG_4815.MOV" 2 "$OUT/projects/herzliya/herzliya-03"
optimize "$HERZLIYA/IMG_5307.HEIC" "$OUT/projects/herzliya/herzliya-04"
optimize "$HERZLIYA/IMG_5308.HEIC" "$OUT/projects/herzliya/herzliya-05"
optimize "$HERZLIYA/IMG_5346.HEIC" "$OUT/projects/herzliya/herzliya-06"
optimize "$HERZLIYA/IMG_5365.HEIC" "$OUT/projects/herzliya/herzliya-07"

POSTER="$ROOT/src/yahav/in-=addition/‏צילום מסך 2026-09-08 בשעה ⁨9‏.40‏.50⁩-9.png"
optimize "$POSTER" "$OUT/site/process-video-poster"

ffmpeg -y -loglevel error -i "$OUT/projects/clinic/clinic-02-1800.webp" \
  -vf "scale=1200:800:force_original_aspect_ratio=increase,crop=1200:630,drawbox=x=0:y=0:w=1200:h=630:color=black@0.16:t=fill,drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='YAHAV ROSEN':fontcolor=white:fontsize=54:x=72:y=465,drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='INTERIOR DESIGN':fontcolor=white@0.88:fontsize=20:x=75:y=536" \
  -frames:v 1 -q:v 3 -update 1 "$OUT/site/og-cover.jpg"

ffmpeg -y -loglevel error -f lavfi -i "color=c=0xf7f5f0:s=16x16" \
  -vf "drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='YR':fontcolor=0x151515:fontsize=7:x=(w-text_w)/2:y=(h-text_h)/2" \
  -frames:v 1 -update 1 "$ROOT/public/favicon-16x16.png"
ffmpeg -y -loglevel error -f lavfi -i "color=c=0xf7f5f0:s=32x32" \
  -vf "drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='YR':fontcolor=0x151515:fontsize=13:x=(w-text_w)/2:y=(h-text_h)/2" \
  -frames:v 1 -update 1 "$ROOT/public/favicon-32x32.png"
ffmpeg -y -loglevel error -f lavfi -i "color=c=0xf7f5f0:s=180x180" \
  -vf "drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='YR':fontcolor=0x151515:fontsize=62:x=(w-text_w)/2:y=(h-text_h)/2" \
  -frames:v 1 -update 1 "$ROOT/public/apple-touch-icon.png"

echo "Optimized media written to $OUT"
