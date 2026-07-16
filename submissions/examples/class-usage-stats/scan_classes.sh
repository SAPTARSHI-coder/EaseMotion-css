#!/usr/bin/env bash
# Class usage statistics generator for EaseMotion CSS
# Scans all demo.html files in submissions/examples/ and counts class names

set -euo pipefail

SUBMISSIONS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
OUTPUT_FILE="${SUBMISSIONS_DIR}/class-usage-report.txt"

echo "?? Scanning demo.html files in $SUBMISSIONS_DIR ..." >&2

# Collect all class attributes from demo.html files
total_classes=0
declare -A class_count

find "$SUBMISSIONS_DIR" -maxdepth 2 -name 'demo.html' | while read -r file; do
    # Extract content of class="..."
    grep -oP 'class\s*=\s*"\K[^"]*' "$file" | while read -r classes; do
        for cls in $classes; do
            class_count["$cls"]=$((class_count["$cls"] + 1))
            total_classes=$((total_classes + 1))
        done
    done
done

# Sort and output
echo "?? Class Usage Report" | tee "$OUTPUT_FILE"
echo "======================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

for cls in "${!class_count[@]}"; do
    echo "${class_count[$cls]} $cls"
done | sort -nr | while read -r count class; do
    printf "%-8s %s\n" "$count" "$class" | tee -a "$OUTPUT_FILE"
done

echo "" | tee -a "$OUTPUT_FILE"
echo "Total unique classes: ${#class_count[@]}" | tee -a "$OUTPUT_FILE"
echo "Report saved to $OUTPUT_FILE" >&2
