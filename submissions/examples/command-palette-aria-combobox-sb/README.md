# Command Palette ARIA Combobox Role

## What does it do?
Implements the ARIA 1.2 combobox pattern for a command palette: `role="combobox"` + `aria-expanded` + `aria-controls` + `aria-activedescendant` on the search input, `role="listbox"` on the results, and `role="option"` + `aria-selected` on each result, with full keyboard nav (ArrowUp/Down/Enter).

## How is it used?
```javascript
import { CommandPalette } from './script.js';
const cp = new CommandPalette(inputEl, listboxEl, [
  { id: 'open', label: 'Open file' },
  { id: 'save', label: 'Save' },
]);
cp.filter('op');          // filter + set activedescendant
cp.move(1);               // move active option
cp.selectActive();        // → selected item
cp.destroy();
```

## Why is it useful?
A screen-reader-accessible command palette must announce the active option via `aria-activedescendant` and expose the listbox/options roles. This keeps the input focused while moving through results, which is the correct combobox semantics.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/command-palette-aria-combobox-sb/command-palette.test.js
```
- **Happy path**: combobox role + aria-expanded; filter renders role=option; aria-activedescendant on active; ArrowDown/Up cyclic move.
- **Edge cases**: aria-selected only on active; no matches → expanded=false + no activedescendant; typing filters.
- **Invalid inputs**: non-array/label-less items ignored; move with no matches → -1; selectActive null when inactive; throws without elements.

## Tech Stack
HTML, CSS (`ease-command-palette-*`), JavaScript (ARIA combobox + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, type, and use arrow keys.

Closes #81897
