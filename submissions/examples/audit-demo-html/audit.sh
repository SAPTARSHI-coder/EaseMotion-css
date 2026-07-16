#!/usr/bin/env bash
# Audit script: validates all demo.html files in submissions/examples/
# Usage: bash submissions/examples/audit-demo-html/audit.sh
set -euo pipefail

base_dir="submissions/examples"
errors=0
total=0

while IFS= read -r -d '' dir; do
  name=$(basename "$dir")
  demo="$dir/demo.html"
  ((total++))
  if [ ! -f "$demo" ]; then
    echo "MISSING: $name — no demo.html"
    ((errors++))
  elif [ ! -s "$demo" ]; then
    echo "EMPTY: $name — demo.html is empty"
    ((errors++))
  fi
done < <(find "$base_dir" -mindepth 1 -maxdepth 1 -type d -print0)

echo "---"
echo "Audited: $total submissions"
echo "Issues:  $errors"
if [ "$errors" -eq 0 ]; then echo "All clean!"; fi
