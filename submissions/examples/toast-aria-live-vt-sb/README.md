# Toast ARIA Live Audit (validation)

## What does it do?
Wraps a real toast container and validates the `aria-live` invariants: container has `role=status` (or `alert`) + `aria-live` + `aria-atomic`, toasts are appended to the live region (so AT announces them), and announcements aren't queued when `aria-live=off`. Exposes `report()` + `isCompliant()` + `announce(text, { type })`.

## How is it used?
```javascript
import { ToastAudit } from './script.js';
const a = new ToastAudit(document.getElementById('toast'), { live: 'polite' });
a.announce('Saved', { type: 'success' }); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Toasts that aren't in a live region are invisible to screen readers — the visual notification happens but AT users never hear it. The audit report makes the `role=status`/`aria-live`/`aria-atomic` invariants programmatically verifiable (axe-core-style).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/toast-aria-live-vt-sb/toast.test.js
```
- **Happy path**: role=status + aria-live=polite + aria-atomic; assertive configurable; announce appends; records announcements; type class.
- **Edge cases**: clear empties; report compliant; report flags missing aria-live; report flags live=off with announcements; report flags missing aria-atomic.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (toast styling + reduced motion + forced-colors), JavaScript (aria-live + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, click Show toast, watch the report.

Closes #81895
