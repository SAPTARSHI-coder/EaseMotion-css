# FAB Keyboard Accessibility Fix — Issue #14195

## Proposed changes for `components/fab.css`

- Add `min-width: 44px` and `min-height: 44px` for WCAG 2.5.5 touch target compliance
- Add `button:focus-visible` / `a:focus-visible` with 3px outline + 4px offset for keyboard focus
- Add `.ease-fab-primary` class using `--ease-color-primary-600` background
- Add `.ease-fab-secondary` class using `--ease-color-neutral-700` background
- Document `aria-label` requirement in the demo
- Add `@media (prefers-reduced-motion: reduce)` to disable transitions

All changes are proposed inside `submissions/core_changes-issue-14195/`. No core files were modified.
