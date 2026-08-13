# CSS Zoom Card Gallery (#68083)

A responsive card gallery component where hovering or focusing any card zooms it in while seamlessly blurring and dimming its neighbors, built entirely with pure CSS.

## Features
- **Pure CSS Interaction:** Uses parent-hover combinators (`.zoom-gallery:hover .zoom-card`) to apply blur and scaling effects without external JavaScript.
- **Theming & Variables:** Built with CSS custom properties supporting light and dark mode preferences automatically.
- **Accessibility:** Includes keyboard focus support via `:focus-within` and semantic elements.

## File Hierarchy
- `style.css` - Component variables, grid layouts, and keyframe/transition effects.
- `demo.html` - Semantic markup and accessibility attributes.
- `README.md` - Technical specification and architecture overview.
