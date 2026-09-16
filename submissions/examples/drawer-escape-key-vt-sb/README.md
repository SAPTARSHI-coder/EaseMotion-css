# Drawer Escape Key Audit (validation)

## What does it do?
Wraps a real slide-in drawer and validates the escape-key invariants: `role=dialog` + `aria-modal=true` while open, `aria-hidden` sync, Escape closes only when open, and focus returns to the trigger on close. Exposes `report()` + `isCompliant()`.

## How is it used?
```javascript
import { DrawerAudit } from './script.js';
const a = new DrawerAudit(document.getElementById('drawer'), { trigger: document.getElementById('open') });
a.open(); a.close(); a.toggle(); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Drawers are dialogs, so they need the ARIA dialog semantics and an Escape handler. The audit report makes the invariants programmatically verifiable (axe-core-style).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/drawer-escape-key-vt-sb/drawer.test.js
```
- **Happy path**: starts hidden; role=dialog + aria-modal; open/close toggle aria-hidden.
- **Edge cases**: Escape closes only when open; close restores focus; trigger opens; toggle; report compliant; report flags missing role.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (drawer overlay), JavaScript (escape key + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, click Open, press Escape.

Closes #81889
