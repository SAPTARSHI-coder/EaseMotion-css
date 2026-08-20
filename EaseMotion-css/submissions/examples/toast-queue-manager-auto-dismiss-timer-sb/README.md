# Toast Queue Manager — Auto-Dismiss Timer

## What does it do?
A self-contained Toast Queue Manager that schedules a per-toast **auto-dismiss timer**. Each toast is appended to a region element and removed from the DOM when its timer fires or when dismissed early. The queue is capped (the oldest toast is evicted), re-pushes of the same id are deduped, and dismissing a toast cancels its pending timer so it can't fire later.

## How is it used?
1. **Include files**: link `../../../components/toast.css` and `style.css`, then import `script.js` as an ES module (see `demo.html`).
2. **Create the manager** with a container element:
   ```javascript
   import { ToastQueueManager } from './script.js';
   const toasts = new ToastQueueManager(document.getElementById('toast-region'), {
     maxQueue: 5,
     defaultDuration: 4000, // ms; 0 = sticky
   });
   ```
3. **Push toasts**:
   ```javascript
   toasts.push({ message: 'Saved', title: 'Success', type: 'success', duration: 2000 });
   toasts.push({ message: 'Sticky alert', type: 'danger', duration: 0 }); // stays until dismissed
   ```
4. **Dismiss / clear**: `toasts.dismiss(id)`, `toasts.clear()`. Clicking a toast also dismisses it.

## Why is it useful?
Auto-dismissing toasts are a common UX pattern, but doing it safely needs queue bounds (so the screen isn't flooded), idempotent re-pushes (so retries don't stack duplicates), and timer cancellation on early dismiss (so a cleared toast doesn't fire a stale `setTimeout`). This submission demonstrates all three, plus validation that rejects invalid inputs (empty message, non-finite/negative duration).

## Testing
A Vitest spec accompanies the module — 17 tests covering the happy path, edge cases, and invalid inputs:
```bash
npx vitest run submissions/examples/toast-queue-manager-auto-dismiss-timer-sb/toast-queue-manager.test.js
```
- **Happy path**: push renders an element; auto-dismiss after duration (boundary at duration−1); default + custom `defaultDuration`; title + type class; click-to-dismiss before the timer.
- **Edge cases**: `maxQueue` cap evicts oldest; sticky (`duration: 0`); id dedup; `clear()`; `dismiss()` cancels the timer (`vi.getTimerCount() === 0`).
- **Invalid inputs**: empty/whitespace message; non-object arg; non-number (`'soon'`/`NaN`/`Infinity`) and negative duration; unknown-id dismiss; constructor without a container throws `TypeError`.

## Tech Stack
- HTML, CSS (EaseMotion `ease-toast-*` classes), JavaScript (ES module, DOM manipulation, `setTimeout`).

## Preview
Open `demo.html` in a browser and click the buttons to push auto-dismissing toasts.

Closes #81985
