## element-background-tricks

Demonstrates advanced CSS multiple background layering techniques. Combines `background-image`, `background-position`, `background-size`, and `background-repeat` to create hero sections, patterns (dots, stripes, grid, checkerboard), glowing cards, edge highlights, and vignettes — all without extra HTML elements.

### Key Techniques

- Comma-separated `background-image` lists layer gradients and patterns from top (first) to bottom (last)
- `background-size` controls each layer independently (e.g., `16px 16px` for repeating patterns, `100% 100%` for base gradients)
- `background-position` offsets layers to create corner glows, edge highlights, and checkerboard offsets
- `radial-gradient()` and `repeating-linear-gradient()` build textures and lighting effects without images

### Accessibility Notes

- All backgrounds are decorative; content text remains readable against dark base gradients
- Sufficient contrast between text and layered backgrounds is verified
- `prefers-reduced-motion` disables all transitions for users who need reduced motion
