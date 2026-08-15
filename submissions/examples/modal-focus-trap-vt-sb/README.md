# Modal Focus Trap Audit (validation)

## What does it do?
Wraps a real modal dialog and validates the focus-trap invariants: `role=dialog` + `aria-modal=true`, Tab cycles within focusables (last→first, first→last), Escape closes, focus moves into the dialog on open and back to the trigger on close. Exposes `report()` + `isCompliant()`.

## How is it used?
```javascript
import { ModalAudit } from './script.js';
const a = new ModalAudit(document.getElementById('modal'), { trigger: document.getElementById('open') });
a.open(); a.close(); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
A focus trap prevents keyboard users from tabbing out of the dialog into the hidden page. The audit report makes the ARIA-dialog invariants programmatically verifiable (axe-core-style).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/modal-focus-trap-vt-sb/modal.test.js
```
- **Happy path**: role=dialog + aria-modal; open sets aria-hidden=false + focus; Escape closes.
- **Edge cases**: Tab wraps last→first; Shift+Tab wraps first→last; close restores focus; trigger opens; report compliant; report flags missing role.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (overlay), JavaScript (focus trap + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, Tab around, press Escape.

Closes #81887
