#!/bin/bash

# Configuration
SOURCE_DIR="public/images"
BACKUP_DIR="public/images-src"
WIDTH=354
HEIGHT=590

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "Starting image compression and resizing with ffmpeg..."
echo "Target size: ${WIDTH}x${HEIGHT}px"
echo "Backup location: $BACKUP_DIR"
echo ""

processed=0
failed=0

# Process all PNG and JPG files
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

    # Create a temporary file with proper extension
    ext="${filepath##*.}"
    temp_file="${filepath%.*}_tmp.${ext}"

    # Use ffmpeg to resize and compress
    # -q:v 2 for high quality (2 is highest quality, 31 is lowest)
    ffmpeg -i "$filepath" \
        -vf "scale=$WIDTH:$HEIGHT:force_original_aspect_ratio=decrease,pad=$WIDTH:$HEIGHT:(ow-iw)/2:(oh-ih)/2" \
        -q:v 2 \
        -update 1 \
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
done < <(find "$SOURCE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \))

echo ""
echo "✓ Compression complete!"
echo "Processed: $processed images"
if [ $failed -gt 0 ]; then
    echo "Failed: $failed images"
fi
echo "Source files backed up to: $BACKUP_DIR"
