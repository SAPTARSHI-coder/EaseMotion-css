# Toast Notification ARIA Live Region

## What does it do?
Announces toast notifications via an `aria-live` region so screen-reader users hear them without moving focus. Polite by default, assertive when `{ politeness: 'assertive' }`. Toasts auto-dismiss after a timeout.

## How is it used?
```html
<div id="toast-region"></div>
```
```javascript
import { ToastRegion } from './script.js';
const t = new ToastRegion(document.getElementById('toast-region'));
t.show('Saved!', { politeness: 'polite', timeout: 3000 });
t.clear(); t.destroy();
```

## Why is it useful?
Toast notifications are visual feedback that screen-reader users miss unless they're announced via an `aria-live` region. Using `aria-live="polite"` (or `assertive` for urgent toasts) plus `aria-atomic="true"` ensures the full message is read once.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/toast-notification-aria-live-sb/toast.test.js
```
- **Happy path**: role=status + aria-live + aria-atomic on region; show creates toast with message; returns id; auto-dismisses after timeout.
- **Edge cases**: assertive toggles aria-live; timeout=0 keeps until dismissed; clear removes all; destroy clears timers + toasts.
- **Invalid inputs**: throws without root; rejects empty/non-string messages.

## Tech Stack
HTML, CSS (toast styling + reduced-motion), JavaScript (aria-live + timers), EaseMotion CSS.

## Preview
Open `demo.html`, click the button.

Closes #81894
