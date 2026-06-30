#!/usr/bin/env bash
# ============================================================
# CSS Class Name Audit
# Scans submission style.css files for duplicate class names
# ============================================================

set -e

ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
TMPFILE=$(mktemp)
trap 'rm -f $TMPFILE' EXIT

echo "=== CSS Class Name Audit ==="
echo "Scanning style.css files in $ROOT/submissions/..."
echo

find "$ROOT/submissions" -name 'style.css' -print0 | while IFS= read -r -d '' file; do
  dirname="$(basename "$(dirname "$file")")"
  # Extract all class selectors (.class-name) and ID selectors (#id-name)
  grep -oP '\.([a-zA-Z0-9_-]+)' "$file" 2>/dev/null | sort -u | while read -r cls; do
    echo "$cls||$dirname"
  done
done | sort > "$TMPFILE"

DUPS=$(cut -d'|' -f1 "$TMPFILE" | sort | uniq -d)

if [ -z "$DUPS" ]; then
  echo "✅ No duplicate class names found across submission folders."
  exit 0
fi

echo "⚠️  Duplicate class names detected:"
echo

for cls in $DUPS; do
  echo "  $cls"
  grep "^$cls||" "$TMPFILE" | cut -d'|' -f2 | sed 's/^/    → /'
  echo
done

exit 1
