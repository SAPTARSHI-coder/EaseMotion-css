# Masonry Column Calculation Resize Listener

## What does it do?
Computes the number of CSS columns for `.ease-masonry` from the container width and a minimum column width, then recalculates on `window resize` via a debounced listener. Mirrors the responsive behaviour in `components/masonry.css` (1 col mobile, 2 tablet, 3+ desktop).

## How is it used?
```javascript
import { MasonryColumns } from './script.js';
const m = new MasonryColumns(document.getElementById('grid'), {
  minColumnWidth: 320, // px per column
  gap: 16,             // px between columns
  debounceMs: 150,     // resize debounce
});
// m.computeColumns() sets --ease-masonry-columns + data-masonry-columns
m.destroy(); // detach the listener
```

## Why is it useful?
CSS `columns` alone can't always recompute on container-driven layout changes (e.g. flex/grid parents). This listener keeps the masonry column count in sync with the live container width, debounced to avoid layout thrash.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/masonry-resize-listener-sb/masonry.test.js
```
- **Happy path**: 1 column when too narrow; increases with width; accounts for gap; constructor applies `--ease-masonry-columns`.
- **Edge cases**: debounced recalc after resize; no recalc before debounce; `destroy()` removes listener.
- **Invalid inputs**: non-finite/negative width → 1; non-finite/negative minColumnWidth → 1; negative gap coerced to 0; constructor without element throws `TypeError`.

## Tech Stack
HTML, CSS (`ease-masonry`), JavaScript (resize listener + debounce), EaseMotion CSS.

## Preview
Open `demo.html` and resize the browser window.

Closes #82016
