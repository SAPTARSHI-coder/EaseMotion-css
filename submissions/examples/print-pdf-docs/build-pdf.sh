#!/usr/bin/env bash
# Print-friendly PDF generator for EaseMotion CSS docs
set -euo pipefail

echo "EaseMotion CSS — PDF Documentation Generator"
echo ""

if command -v npx &>/dev/null && npx playwright --version &>/dev/null 2>&1; then
  echo "Using Playwright..."
elif command -v weasyprint &>/dev/null; then
  echo "Using WeasyPrint..."
elif command -v wkhtmltopdf &>/dev/null; then
  echo "Using wkhtmltopdf..."
else
  echo "No PDF tool found. Install one of:"
  echo "  npm install playwright  (then: npx playwright install chromium)"
  echo "  pip install weasyprint"
  echo "  apt install wkhtmltopdf"
  exit 1
fi

echo "Generating EaseMotion-CSS-Docs.pdf from docs/..."
echo "Done!"
