# Print-Friendly PDF Documentation Generator

## What does it do?
Generates a downloadable PDF version of the complete EaseMotion CSS documentation for offline reference.

## Features
- Build script supports Playwright, WeasyPrint, and wkhtmltopdf
- Prints all docs/ content into a single PDF

## Usage
```bash
chmod +x build-pdf.sh
./build-pdf.sh
```

## Requirements
- `npx playwright` + Chromium, OR
- `weasyprint`, OR
- `wkhtmltopdf`

## Tech Stack
- Bash script, no JavaScript required
