#!/bin/bash

# Configuration
SOURCE_DIR="public/images"
BACKUP_DIR="public/images-src"
WIDTH=354
HEIGHT=590
# CRF: 0-51 (lower = better quality, 23 is default, 18-28 is good quality range)
CRF=23

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "Starting video compression and resizing with ffmpeg..."
echo "Target size: ${WIDTH}x${HEIGHT}px"
echo "Quality: CRF ${CRF} (lower = better)"
echo "Backup location: $BACKUP_DIR"
echo ""

processed=0
failed=0

# Process all MP4 files
while IFS= read -r filepath; do
    # Skip if it's already in the backup directory
    if [[ "$filepath" == *"$BACKUP_DIR"* ]]; then
        continue
    fi

    # Get the relative path from SOURCE_DIR
    relative_path="${filepath#$SOURCE_DIR/}"
    dir_path="$BACKUP_DIR/$(dirname "$relative_path")"
    backup_file="$dir_path/$(basename "$filepath")"

    # Create backup directory structure
    mkdir -p "$dir_path"

    # Get original file size
    original_size=$(du -h "$filepath" | cut -f1)

    # Backup the original if not already backed up
    if [ ! -f "$backup_file" ]; then
        cp "$filepath" "$backup_file"
    fi

    # Create a temporary file
    temp_file="${filepath%.*}_tmp.mp4"

    # Use ffmpeg to scale and crop
    # scale=-1:590 scales to height 590px and maintains aspect ratio
    # crop=354:590 crops to 354x590, centering the content
    # libx264: H.264 codec for MP4
    # preset fast: encoding speed (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
    # crf: quality (lower = better, 23 is default)
    ffmpeg -i "$filepath" \
        -vf "scale=-1:$HEIGHT,crop=$WIDTH:$HEIGHT" \
        -c:v libx264 \
        -preset fast \
        -crf $CRF \
        -y "$temp_file" 2>/dev/null

    # Replace original with compressed version
    if [ -f "$temp_file" ]; then
        mv "$temp_file" "$filepath"
        new_size=$(du -h "$filepath" | cut -f1)
        echo "✓ $(basename "$filepath") | $original_size → $new_size"
        ((processed++))
    else
        echo "✗ Failed to process $(basename "$filepath")"
        ((failed++))
    fi
done < <(find "$SOURCE_DIR" -type f -iname "*.mp4")

echo ""
echo "✓ Video compression complete!"
echo "Processed: $processed videos"
if [ $failed -gt 0 ]; then
    echo "Failed: $failed videos"
fi
echo "Source files backed up to: $BACKUP_DIR"
