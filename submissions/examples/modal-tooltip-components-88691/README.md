# Modal & Tooltip Components

## Summary

Implements the "Modal & tooltip components" v1.2 roadmap item (issue #88691)
as CSS-only, zero-JS components:

- `components/modal.css` — dialog built on the `:target` pseudo-class
- `components/tooltip.css` — hover/focus tooltips built on `[data-tip]` +
  `::before`/`::after`

Both use the existing `--ease-*` token set (colors, shadows) so they follow
dark mode automatically, and both respect `prefers-reduced-motion`.

## Classes

- Modal: `ease-modal`, `ease-modal-box`, `ease-modal-header`,
  `ease-modal-title`, `ease-modal-body`, `ease-modal-footer`,
  `ease-modal-close`, `ease-modal-overlay-close`
- Tooltip: `ease-tooltip`, `ease-tooltip-top`, `ease-tooltip-bottom`,
  `ease-tooltip-left`, `ease-tooltip-right`

## Known limitation

`:target` modals have no focus trap and no `Esc`-to-close since there's no
JS. `role="dialog"` / `aria-modal="true"` are included in the demo markup
to help screen readers, but full keyboard accessibility would need a small
JS enhancement layer as a future follow-up.

## Files

- `components/modal.css`, `components/tooltip.css` — the components
- `submissions/examples/modal-tooltip-components-88691/demo.html` — live demo

Relates to issue #88691.
