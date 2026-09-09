# Accessibility Baseline Validator (`ease-tooling-accessibility-validator`)

A Node.js script designed to enforce a keyboard-accessibility baseline across all EaseMotion CSS submissions. It checks if an interactive component defines a focus state.

## 🚀 Features

- **Interactive Component Detection**: Classifies a submission as interactive if `demo.html` contains `<button>`, `<a href>`, `<input>`, `<select>`, or `<textarea>`, or if `style.css` defines a `:hover` rule.
- **Focus State Validation**: If interactive, strictly requires at least one `:focus` or `:focus-visible` rule in `style.css`.
- **Advisory Warnings**: Uses GitHub Actions `::warning` syntax to flag non-blocking warnings on the PR, mirroring the request to keep it advisory during rollout.
- **Bonus UI**: `demo.html` provides a web-based testing UI to manually check code against this logic.

## 🛠️ Usage

Due to the strict PR constraints of this repository, contributors cannot modify `.github/workflows/` or `.github/scripts/` directly. To bypass the auto-closer bot, this submission provides only `demo.html`, `style.css`, and `README.md`. 

**Maintainer Integration Instructions:**
Create `accessibility-check.js` in the repository's `.github/scripts/` folder using the Node.js code below, and call it within the per-submission loop in `.github/workflows/submission-validator.yml`:

```javascript
const fs = require('fs');
const path = require('path');

const submissionDir = process.argv[2] || '.';
const demoFile = path.join(submissionDir, 'demo.html');
const styleFile = path.join(submissionDir, 'style.css');

if (!fs.existsSync(demoFile) || !fs.existsSync(styleFile)) {
    process.exit(0);
}

const htmlContent = fs.readFileSync(demoFile, 'utf8');
const cssContent = fs.readFileSync(styleFile, 'utf8');

const isInteractive = /<(button|a\s+href|input|select|textarea)/i.test(htmlContent) || /:hover\b/i.test(cssContent);

if (isInteractive) {
    if (!/:(focus|focus-visible)\b/i.test(cssContent)) {
        console.error("::warning title=Accessibility Baseline Failed::Interactive component detected (contains interactive HTML tags or :hover rules), but no :focus or :focus-visible states are defined in style.css. Please add focus states to ensure keyboard accessibility.");
        process.exit(0);
    }
}
