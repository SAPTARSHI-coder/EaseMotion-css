## mask-composite-shapes

Demonstrates the CSS `mask-composite` property for combining multiple mask layers with operations: `add` (union), `subtract` (first minus second), `intersect` (overlap only), and `exclude` (non-overlapping). Uses `mask-image` with gradients and inline SVG data URIs.

### Key Techniques

- `mask-composite: add` merges both masks; `subtract` removes the second mask from the first
- `mask-composite: intersect` keeps only pixels where both masks are opaque
- `mask-composite: exclude` keeps pixels where exactly one mask is opaque
- Layered radial gradients and SVG clip paths provide the mask shapes without external image files

### Accessibility Notes

- Masking is purely visual; content remains in the DOM and can be read by assistive technology
- Background gradient visibility ensures sufficient contrast for any visible text
- `prefers-reduced-motion` disables transitions for vestibular sensitivity
