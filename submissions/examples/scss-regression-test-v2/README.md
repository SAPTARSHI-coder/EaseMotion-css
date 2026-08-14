# SCSS Regression Test Tool

A Node.js script that compiles a SCSS snippet and compares the output
with the expected raw CSS. Useful for catching regressions when updating
SCSS variables or mixins in EaseMotion CSS.

## Files
- `test-scss-regression.js` – the test script
- `demo.html` – explains how to run the tool
- `style.css` – demo page styling
- `README.md` – this file

## How to use

1. Install dependencies:
   ```bash
   npm install sass
Run the script:

bash
node test-scss-regression.js
The script compiles a sample SCSS snippet and compares it with the
expected raw CSS. If they match, it prints ✅ PASS; otherwise it shows
the differences and exits with an error code.

EaseMotion classes used in demo
Layout: ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16

Background: ease-bg-gray-50, ease-bg-white

Typography: ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold

Spacing: ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-4, ease-mt-8, ease-p-6

Components: ease-card

Animation: ease-fade-in, ease-delay-200, ease-delay-500
