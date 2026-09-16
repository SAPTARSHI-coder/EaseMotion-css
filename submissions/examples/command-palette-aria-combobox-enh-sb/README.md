# Command Palette ARIA Combobox

## What does it do?
Implements the ARIA 1.2 combobox + listbox pattern: input has `role=combobox` + `aria-expanded` + `aria-autocomplete=list` + `aria-controls` + `aria-activedescendant`, the list has `role=listbox`, each option has `role=option` + `aria-selected`. Up/Down move the active option, Enter selects, Escape closes.

## How is it used?
```javascript
import { CommandPalette } from './script.js';
const c = new CommandPalette(root, { options: ['Save', 'Open', 'Search'] });
c.open(); c.query('sa'); c.selectActive(); c.destroy();
```

## Why is it useful?
A command palette is a combobox of commands. Screen-reader users need the combobox/listbox semantics + `aria-activedescendant` to track which option is active as they arrow through. Without it the palette is unusable from assistive tech.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/command-palette-aria-combobox-enh-sb/command.test.js
```
- **Happy path**: role=combobox + aria-expanded + aria-autocomplete; role=option items with aria-selected; query filters; ArrowDown opens + moves; Enter selects; Escape closes; click selects; aria-activedescendant tracks active.
- **Edge cases**: ArrowUp wraps; selectActive returns null when no matches; destroy.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (listbox styling), JavaScript (ARIA combobox + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, type, arrow, Enter.

Closes #81896
