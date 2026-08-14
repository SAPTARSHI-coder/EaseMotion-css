# Buttons High Contrast Mode

## What does it do?
Ensures buttons meet WCAG AA contrast (≥4.5:1 for text, ≥3:1 for the focus ring UI) in normal, Windows high-contrast (`-ms-high-contrast`), and forced-colors (`forced-colors: active`) modes, with reduced-motion support.

## How is it used?
```html
<link rel="stylesheet" href="style.css" />
<button type="button" class="ease-btn">Primary action</button>
```
```javascript
import { applyButtonContrast } from './script.js';
applyButtonContrast(); // sets the --ease-btn-* CSS custom properties on :root
```

## Why is it useful?
Default system buttons often fall back to colors that fail contrast checks in high-contrast themes. Pinning a verified palette plus explicit forced-colors fallbacks keeps the button legible for low-vision users.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/buttons-high-contrast-sb/buttons.test.js
```
- **Happy path**: tokens exported; bg/text ≥4.5:1; hover/text ≥4.5:1; focus ring/bg ≥3:1.
- **Edge cases**: applyButtonContrast sets tokens on root and custom root; contrastRatio clamps; black/white = 21.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-btn` + forced-colors media queries), JavaScript (contrast math), EaseMotion CSS.

## Preview
Open `demo.html` (toggle Windows High Contrast or browser forced-colors to see the fallback).

Closes #81915
