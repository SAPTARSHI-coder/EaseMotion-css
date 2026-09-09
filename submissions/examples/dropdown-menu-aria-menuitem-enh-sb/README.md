# Dropdown Menu ARIA Menuitem Focus

## What does it do?
A disclosure menu using `role=menu` / `role=menuitem` with full keyboard support: Enter/Space toggle, ArrowUp/Down move between items, Home/End jump, Escape closes, roving tabindex (only the active item is focusable).

## How is it used?
```javascript
import { DropdownMenu } from './script.js';
const m = new DropdownMenu(document.getElementById('menu'), { trigger: document.getElementById('trigger') });
m.open(); m.close(); m.toggle(); m.isOpen(); m.destroy();
```

## Why is it useful?
Menus need `role=menu`/`role=menuitem` semantics and arrow-key navigation for screen-reader and keyboard users. The disclosure pattern (trigger toggles + Escape closes + focus returns) matches the ARIA Authoring Practices guide.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/dropdown-menu-aria-menuitem-enh-sb/dropdown.test.js
```
- **Happy path**: role=menu + aria-hidden; role=menuitem; first item tabindex=0; open toggles aria-hidden + aria-expanded.
- **Edge cases**: ArrowDown moves + roving tabindex; ArrowUp wraps; Home/End; Escape closes + restores focus; trigger toggles.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (menu styling), JavaScript (arrow nav + roving tabindex), EaseMotion CSS.

## Preview
Open `demo.html`, click the trigger, arrow through items.

Closes #81898
