#!/usr/bin/env bash
# Audit animation-duration values across framework CSS files
# Usage: bash submissions/examples/animation-duration-audit/audit.sh
set -euo pipefail

echo "=== Animation Duration Audit ==="
echo ""

# Find all animation-duration / transition-duration values in css/ or src/
rg -n --no-filename '(animation-duration|transition-duration)\s*:\s*[\d.]+s' css/ 2>/dev/null || echo "No css/ directory found, searching src/"
rg -n --no-filename '(animation-duration|transition-duration)\s*:\s*[\d.]+s' src/ 2>/dev/null || true

echo ""
echo "=== Summary ==="
echo "Extract distinct duration values:"
rg -o --no-filename '(animation-duration|transition-duration)\s*:\s*\K[\d.]+s' css/ src/ 2>/dev/null | sort | uniq -c | sort -rn
