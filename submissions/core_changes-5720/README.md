# Issue #5720: No dark mode overrides for footer component

## Description
`components/footer.css` has no `@media (prefers-color-scheme: dark)` overrides. The footer uses `background: var(--ease-color-neutral-900)` and `border-top: 1px solid var(--ease-color-neutral-200)`. In dark mode, these colors match the page background, making the footer nearly invisible.

## Root Cause
The footer component was never given dark mode styling, unlike other components (cards, navbar, sidebar, etc.).

## Proposed Fix
Add to `components/footer.css`:
```css
@media (prefers-color-scheme: dark) {
  .ease-footer {
    background: var(--ease-color-neutral-950, #020617);
    border-top-color: var(--ease-color-neutral-800, #1e293b);
  }
  .ease-footer-bottom {
    border-top-color: var(--ease-color-neutral-800, #1e293b);
  }
  .ease-footer-social a {
    background: var(--ease-color-neutral-900, #0f172a);
  }
}
```

## Files
- `style.css` — dark mode overrides for footer
- `demo.html` — full footer demo in light/dark mode
