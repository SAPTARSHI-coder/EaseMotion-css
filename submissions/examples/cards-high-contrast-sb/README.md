# Cards High Contrast Mode

## What does it do?
Ensures card surfaces, text, muted text, and borders meet WCAG AA contrast (≥4.5:1 text, ≥3:1 UI) in normal, forced-colors, and Windows high-contrast (`-ms-high-contrast`) modes.

## How is it used?
```html
<link rel="stylesheet" href="style.css" />
<article class="ease-card">
  <h2 class="ease-card__title">Card title</h2>
  <p class="ease-card__body">Body text.</p>
</article>
```
```javascript
import { applyCardContrast } from './script.js';
applyCardContrast();
```

## Why is it useful?
Cards commonly use soft grays that vanish or merge with the background in high-contrast themes. Pinning a verified palette plus forced-colors fallbacks keeps the card legible for low-vision users.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/cards-high-contrast-sb/cards.test.js
```
- **Happy path**: tokens exported; text/bg ≥4.5:1; muted/bg ≥4.5:1; border/bg ≥3:1.
- **Edge cases**: applyCardContrast sets tokens on root and custom root.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-card` + forced-colors media queries), JavaScript (contrast math), EaseMotion CSS.

## Preview
Open `demo.html` (toggle forced-colors / Windows High Contrast to see the fallback).

Closes #81917
