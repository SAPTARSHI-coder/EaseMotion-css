# Hover Toggle with Material Design styling (#78842)

A responsive, zero-JavaScript toggle switch component built using Material Design 3 (M3) design tokens, interactive hover state layers, smooth thumb scaling, and explicit focus indicators.

## Features
- **Material 3 Design Tokens:** Employs M3 surface containers (`#f3edf7`), primary accents (`#6750a4`), and standard cubic-bezier motion curves.
- **Hover State Layer (Ripple Halo):** Uses a CSS `::after` pseudo-element layer that expands smoothly on hover or focus to mimic Material touch feedback.
- **Smooth Morphing Thumb:** Thumb scales up smoothly from 16px to 22px when transitioning to the active checked state (`translateX(20px)`).
- **Fully Accessible:** Native `<input type="checkbox">` mechanics with keyboard focus indicators (`:focus-visible`) and semantic screen reader support.

## File Hierarchy
- `submissions/examples/css-hover-toggle-material/style.css` - Material 3 color tokens, ripple animations, thumb scaling logic, and media query breakpoints.
- `submissions/examples/css-hover-toggle-material/demo.html` - Semantic HTML5 demo displaying interactive Material toggles.
- `submissions/examples/css-hover-toggle-material/README.md` - Technical specification and architecture overview.
