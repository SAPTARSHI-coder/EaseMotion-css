## attr-data-tooltips

Uses the CSS `attr()` function inside the `content` property of `::before` and `::after` pseudo-elements to create dynamic tooltips driven by `data-*` attributes. No JavaScript required.

### Key Techniques

- `content: attr(data-tip)` reads custom attribute values and injects them as pseudo-element text
- Direction-based positioning via `[data-dir="top|right|bottom|left"]` attribute selectors
- Arrow indicators using `border` trick on `::before` with transparent-to-colored edges
- Hover-triggered opacity transitions for reveal behavior

### Accessibility Notes

- Tooltips are purely visual; critical information should also be available as visible text or via `aria-label`
- `pointer-events: none` prevents pseudo-elements from blocking interactions
- `prefers-reduced-motion` disables all transitions for users who request it
