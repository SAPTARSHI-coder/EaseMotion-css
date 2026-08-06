## clip-rule-fill

Demonstrates the SVG `clip-rule` property (and its CSS counterpart `fill-rule`) comparing `nonzero` vs `evenodd` algorithms. Uses intersecting star paths and overlapping circles to show how each rule determines which pixels are considered "inside" a shape.

### Key Techniques

- `clip-rule="nonzero"` uses winding-direction counting; regions with same-winding overlaps remain filled
- `clip-rule="evenodd"` uses parity counting; every boundary crossing toggles inside/outside, creating holes at overlaps
- Inline SVG elements with `<clipPath>` and `<defs>` allow pure HTML/CSS without external assets
- Both rules are demonstrated side-by-side with identical geometry for direct visual comparison

### Accessibility Notes

- SVG elements are presentational and labeled via surrounding text
- `prefers-reduced-motion` disables all animated transitions for users who request it
