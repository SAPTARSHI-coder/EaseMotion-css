# Dropdown Click-Outside Dismiss Listener

## What does it do?
Toggles a dropdown menu open/closed and dismisses it when a click lands **outside** the menu (or on Escape). Keeps `aria-expanded` in sync on the trigger.

## How is it used?
```javascript
import { DropdownToggle } from './script.js';
const d = new DropdownToggle(
  document.getElementById('dd-btn'),
  document.getElementById('dd-menu'),
);
// d.toggle() / d.open() / d.close() / d.destroy()
```

## Why is it useful?
A common dropdown need: close on outside-click + Escape, without leaking document listeners after removal. This controller captures the document click in the capture phase so it works alongside nested handlers, and `destroy()` cleanly detaches all listeners.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/dropdown-click-outside-dismiss-sb/dropdown.test.js
```
- **Happy path**: toggle opens/closes; open()/close() set `aria-expanded`; button click toggles.
- **Edge cases**: outside click closes; inside click does not; Escape closes + refocuses; close-on-closed is a no-op; `destroy()` stops outside-click closing.
- **Invalid inputs**: throws `TypeError` for missing/non-element args.

## Tech Stack
HTML, CSS, JavaScript (capture-phase listener + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, click the trigger, then click outside or press Escape.

Closes #81996
