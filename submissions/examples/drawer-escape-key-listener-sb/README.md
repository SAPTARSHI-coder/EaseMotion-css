# Drawer Component Escape Key Listener

## What does it do?
A slide-in drawer that closes on Escape and returns focus to the trigger. Exposes `role="dialog"` + `aria-modal="true"` while open.

## How is it used?
```javascript
import { Drawer } from './script.js';
const d = new Drawer(document.getElementById('drawer'), {
  trigger: document.getElementById('trigger'),
});
d.open(); d.close(); d.toggle(); d.isOpen(); d.onChange(fn); d.destroy();
```

## Why is it useful?
A modal-style drawer must be dismissible by keyboard (Escape) and must return focus to the element that opened it, so keyboard users don't lose their place.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/drawer-escape-key-listener-sb/drawer.test.js
```
- **Happy path**: role=dialog + aria-modal; starts hidden; open/close toggle hidden + aria-hidden.
- **Edge cases**: Escape closes only when open; close returns focus to trigger; trigger click toggles; onChange fires; open/close are no-ops in same state.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-drawer` + reduced-motion), JavaScript (Escape + focus), EaseMotion CSS.

## Preview
Open `demo.html`, click the trigger, then press Escape.

Closes #81888
