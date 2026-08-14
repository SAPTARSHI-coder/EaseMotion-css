# Tab Arrow-Key Navigation Audit (validation)

## What does it do?
Wraps a real tablist and validates the arrow-key navigation invariants: `role=tablist` with `role=tab` children, `aria-controls`/`aria-selected`, roving tabindex (only the active tab is `tabindex=0`), ArrowLeft/Right (or Up/Down when vertical) move focus, Home/End jump to first/last tab. Exposes `report()` + `isCompliant()`.

## How is it used?
```javascript
import { TabAudit } from './script.js';
const a = new TabAudit(document.getElementById('tabs'), { vertical: false });
a.select(0); a.next(); a.prev(); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
A tablist that's mouse-only is unusable from the keyboard. The audit report makes the ARIA tablist + roving-tabindex invariants programmatically verifiable (axe-core-style).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/tab-arrow-key-nav-vt-sb/tab.test.js
```
- **Happy path**: role=tablist + role=tab children; first tab active; ArrowRight moves; ArrowLeft wraps; Home/End jump; click selects; vertical uses Up/Down; report compliant; report flags broken roving tabindex; panel gets role=tabpanel + aria-hidden syncs.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (tab styling + focus ring), JavaScript (arrow nav + roving tabindex + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, focus a tab, use arrow keys.

Closes #81891
