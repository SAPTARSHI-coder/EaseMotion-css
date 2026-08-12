#!/usr/bin/env bash
# Orphan Submission Folder Detector
# Scans submissions/examples/ and flags folders not present in tracking.json

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SUBMISSIONS_DIR="${SCRIPT_DIR}/../"
TRACKING_FILE="${SCRIPT_DIR}/tracking.json"

if [ ! -f "${TRACKING_FILE}" ]; then
    echo "? Tracking file not found at ${TRACKING_FILE}"
    exit 1
fi

INTEGRATED=$(jq -r '.integrated[]' "${TRACKING_FILE}")

echo "?? Scanning submissions/examples/ for orphaned folders..."
echo ""

orphan_count=0
total=0

for folder in "${SUBMISSIONS_DIR}"/*/; do
    folder_name=$(basename "${folder}")
    total=$((total + 1))
    if echo "${INTEGRATED}" | grep -qw "${folder_name}"; then
        echo "? ${folder_name} ? integrated"
    else
        echo "??  ${folder_name} ? ORPHAN (not in tracking list)"
        orphan_count=$((orphan_count + 1))
    fi
done

echo ""
echo "?? Report: ${total} total folders, ${orphan_count} orphan(s) detected."
if [ ${orphan_count} -gt 0 ]; then
    echo "?? Consider removing or integrating the flagged folders."
fi
