# Dropdown Menu ARIA Menuitem Focus

## What does it do?
Implements a keyboard-navigable menu with `role="menu"`, `role="menuitem"` items, and **roving tabindex** (only the active item has `tabindex=0`). Arrow keys move focus, Home/End jump to first/last, and Escape closes the menu and returns focus to the trigger.

## How is it used?
```javascript
import { MenuFocus } from './script.js';
const m = new MenuFocus(document.getElementById('menu'), {
  trigger: document.getElementById('trigger'),
});
m.open(); m.close(); m.destroy();
```

## Why is it useful?
Roving tabindex is the recommended ARIA menu pattern: it keeps Tab reserved for leaving the menu while arrow keys navigate within it. This gives screen-reader users predictable focus behaviour.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/dropdown-menu-aria-focus-sb/menu.test.js
```
- **Happy path**: role=menu/menuitem set; only active item has tabindex=0; ArrowDown moves focus + tabindex; ArrowUp wraps.
- **Edge cases**: Home/End jump; Escape closes + returns focus to trigger; open() sets aria-expanded.
- **Invalid inputs**: empty menu handled; throws without menu element.

## Tech Stack
HTML, CSS, JavaScript (roving tabindex + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, click the trigger, then use arrow/Home/End/Escape.

Closes #81899
