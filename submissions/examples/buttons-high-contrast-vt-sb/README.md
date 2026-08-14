# Buttons High-Contrast Audit (validation)

## What does it do?
Audits a button's contrast under forced-colors / high-contrast mode: ensures buttons are keyboard-focusable, have a visible focus ring, and a forced-colors border. Exposes `report()` + `isCompliant()`.

## How is it used?
```javascript
import { ButtonAudit } from './script.js';
const a = new ButtonAudit(document.getElementById('btn'));
a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Windows High Contrast mode remaps colors to a small system palette. Without `@media (forced-colors: active)` overrides, buttons can become invisible (background and text the same color). This audit enforces the overrides + keyboard focusability.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/buttons-high-contrast-vt-sb/buttons.test.js
```
- **Happy path**: adds ease-btn-audit class; report passes for a button; isCompliant true.
- **Edge cases**: non-button gets role=button + tabindex; existing role preserved; destroy removes class; div tabindex -1 flagged; positive tabindex preserved.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`@media forced-colors` + focus ring), JavaScript (audit report), EaseMotion CSS.

## Preview
Open `demo.html`. Enable Windows High Contrast to see the forced-colors border.

Closes #81918
