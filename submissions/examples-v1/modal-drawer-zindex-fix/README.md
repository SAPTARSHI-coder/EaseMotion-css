# Fix: Conflicting z-index values between ease-modal and ease-drawer

Resolves #30457

## The Problem

`ease-modal` and `ease-drawer` each hardcoded their own `z-index` values
independently (both landing around `1000`). This worked fine in isolation,
but broke as soon as both components were used together on the same page —
opening a drawer from inside an open modal, or stacking a second modal,
produced unpredictable layering since nothing enforced a consistent order
between them.

## The Fix

**A single shared z-index scale**, defined once as CSS custom properties on
`:root`:

```css
--ease-z-drawer-backdrop: 1000;
--ease-z-drawer: 1010;
--ease-z-modal-backdrop: 1020;
--ease-z-modal: 1030;
--ease-z-modal-stacked-backdrop: 1040;
--ease-z-modal-stacked: 1050;
--ease-z-toast: 1060; /* reserved for future components */
```

Every overlay component now reads its `z-index` from this scale instead of
a hardcoded number, so layering is deterministic regardless of which
component is opened first:

- A **standalone drawer** sits above page content at `--ease-z-drawer`.
- A **modal** sits above a standalone drawer at `--ease-z-modal`.
- A **drawer opened from within a modal** gets the `.is-above-modal`
  modifier, bumping it to `--ease-z-modal-stacked` so it correctly renders
  on top of the modal that triggered it.
- A **second ("stacked") modal** opened on top of the first uses
  `--ease-z-modal-stacked` / `--ease-z-modal-stacked-backdrop`, staying
  above all drawer layers.

This keeps the relationship between components explicit and easy to extend
— a future component (e.g. `ease-toast`) just slots into the scale at
`--ease-z-toast` rather than guessing a free number.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Modal, stacked modal, and drawer markup, with controls to open each in different orders |
| `style.css` | The actual fix — shared `--ease-z-*` scale consumed by every overlay component |
| `script.js` | Open/close logic, including the modal→drawer nesting case that previously broke |

## How to Test

1. Open `demo.html` in a browser.
2. Click **Open Modal**, then **Open Drawer (from modal)** — the drawer
   should render above the modal and its backdrop, not underneath.
3. Click **Open Drawer (standalone)** without a modal open — it should
   render correctly above page content using its normal z-index.
4. With the modal open, click **Open Second Modal (on top)** — confirm the
   second modal stacks above the first, and a drawer opened from the modal
   still and forever stays below stacked modals (matches the defined
   hierarchy in the scale).

## Notes

- The scale leaves headroom between values (10-unit gaps) so future
  one-off overrides (e.g. a tooltip inside a drawer) can slot in without
  needing to renumber the whole scale.
- No `z-index` values are set inline or in component JS — everything is
  driven by the CSS custom properties, so the hierarchy is auditable in
  one place (`:root` in `style.css`).