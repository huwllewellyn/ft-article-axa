#!/bin/bash

# Configuration
SOURCE_DIR="public/images-src"
OUTPUT_DIR="public/images"
WIDTH=354
HEIGHT=590

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Starting image compression and resizing with ffmpeg..."
echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
echo "Target size: ${WIDTH}x${HEIGHT}px"
echo ""

processed=0
failed=0

# Process all PNG and JPG files from the source directory
while IFS= read -r filepath; do
    # Get the relative path from SOURCE_DIR
    relative_path="${filepath#$SOURCE_DIR/}"
    output_dir_path="$OUTPUT_DIR/$(dirname "$relative_path")"
    output_file="$output_dir_path/$(basename "$filepath")"

    # Create output directory structure
    mkdir -p "$output_dir_path"

    # Get original file size
    original_size=$(du -h "$filepath" | cut -f1)

    # Create a temporary file with proper extension
    ext="${filepath##*.}"
    temp_file="${output_file%.*}_tmp.${ext}"

    # Use ffmpeg to resize and compress
    # scale with force_original_aspect_ratio=increase ensures image fills dimensions
    # crop=WIDTH:HEIGHT crops to exact dimensions, centering the content
    # -q:v 2 for high quality (2 is highest quality, 31 is lowest)
    ffmpeg -i "$filepath" \
        -vf "scale=$WIDTH:$HEIGHT:force_original_aspect_ratio=increase,crop=$WIDTH:$HEIGHT" \
        -q:v 2 \
        -update 1 \
        -y "$temp_file" 2>/dev/null

    # Move compressed version to output location
    if [ -f "$temp_file" ]; then
        mv "$temp_file" "$output_file"
        new_size=$(du -h "$output_file" | cut -f1)
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
echo "Output saved to: $OUTPUT_DIR"
