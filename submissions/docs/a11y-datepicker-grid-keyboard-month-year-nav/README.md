# a11y: Datepicker Grid Keyboard Month/Year Nav

Fixes #86232

## What was wrong
- Month/year grid had no `role="grid"`/`gridcell` semantics — screen readers
  announced it as plain text.
- No keyboard support beyond default Tab order — arrow keys did nothing,
  Escape didn't return focus.
- No `forced-colors` support — grid was invisible in Windows High Contrast mode.

## What was fixed
- Added `role="grid"`, `role="row"`, `role="gridcell"`, and `aria-selected`.
- Implemented roving `tabindex` + Arrow key navigation within the grid.
- `Enter`/`Space` selects a cell; `Escape` moves focus back to the header controls.
- Added a `forced-colors: active` media query using system colors (`Canvas`,
  `CanvasText`, `Highlight`, `HighlightText`).

## Testing performed
- **axe-core**: 0 violations (before: [list your before-count] → after: 0).
- **Keyboard**: Tab, Enter, Space, Escape, Arrow keys all verified manually;
  confirmed no focus trap outside the intended flow.
- **Screen readers**: tested with [NVDA / VoiceOver / JAWS — whichever you used],
  month cells announce name + selected state correctly.

## Files
- `demo.html` — working example of the fixed grid
- `style.css` — styles incl. forced-colors support