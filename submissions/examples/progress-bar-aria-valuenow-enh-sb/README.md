# Progress Bar ARIA Valuenow Compliance

## What does it do?
A determinate progress bar exposing `role=progressbar` + `aria-valuenow` (current value), `aria-valuemin` (0), `aria-valuemax` (100), and `aria-valuetext` (human-readable "40%"). Keeps the value, label, and bar width in sync.

## How is it used?
```javascript
import { ProgressBar } from './script.js';
const p = new ProgressBar(document.getElementById('pb'), { label: 'Upload progress' });
p.setValue(40); p.getValue(); p.setLabel('Download'); p.destroy();
```

## Why is it useful?
A determinate progress bar must expose `aria-valuenow` so screen readers can announce the current percentage. Many implementations forget `aria-valuetext` (the human-readable form) or let the visual width drift from the ARIA value. This keeps them in sync.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/progress-bar-aria-valuenow-enh-sb/progress.test.js
```
- **Happy path**: role=progressbar + aria-valuemin/max/now; starts at 0%; setValue(40) updates valuenow + valuetext + width.
- **Edge cases**: clamps to [0,100]; coerces non-numbers to 0; getValue; setLabel sets aria-label.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (bar + reduced motion + forced-colors), JavaScript (ARIA value sync), EaseMotion CSS.

## Preview
Open `demo.html`, watch the bar fill.

Closes #81902
