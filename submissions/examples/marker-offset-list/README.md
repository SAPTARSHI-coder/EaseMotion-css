## marker-offset-list

Demonstrates the CSS `::marker` pseudo-element for customizing list item markers independently of the item content. Covers color, size, content replacement (including Unicode and emoji), and counter-based markers.

### Key Techniques

- `::marker` styles the list marker box separately from the list item, supporting `color`, `font-size`, `font-weight`, `content`, etc.
- `content` property in `::marker` replaces default bullets with custom characters, Unicode escapes (`\2713`), or emoji
- `counter()` inside `::marker` `content` creates auto-incrementing custom numbering (e.g., `[1]`, `[2]`)
- `list-style: none` removes the default marker, allowing full custom `::marker` control via `content`

### Accessibility Notes

- Custom markers should not replace semantic meaning; use `list-style` or `aria-label` when needed
- Screen reader support for `::marker` content varies; ensure list text is self-explanatory
- `prefers-reduced-motion` disables transitions for users who request it
