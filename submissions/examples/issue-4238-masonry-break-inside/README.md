# Fix: `break-inside: avoid-column` incorrectly on masonry container

**Fixes issue:** #4238

## Problem
`.ease-masonry` (the container) had `break-inside: avoid-column` applied
to itself. This property only works on column **items**, not the container
that creates columns. It was dead code — no visual effect, but misleading
to anyone reading the source.

## Fix
Removed `break-inside: avoid-column` from the `.ease-masonry` container rule.
Kept `break-inside: avoid` only on `.ease-masonry > *` (the children),
where it correctly prevents items from splitting across columns.

## Files
- `style.css` — the fix
- `demo.html` — visual test

## Testing
1. Open `demo.html` in browser
2. Inspect `.ease-masonry` in DevTools
3. Confirm: no `break-inside` on the container
4. Confirm: `break-inside: avoid` still present on child items
5. Confirm: no visual regression in masonry layout

## Proposed integration
Remove `break-inside: avoid-column` from the `.ease-masonry` rule
in `components/masonry.css`.