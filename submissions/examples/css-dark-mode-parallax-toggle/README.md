# Parallax Toggle with Dark Mode Styling (#79869)

A dark-mode parallax toggle component featuring 3D perspective translations, glassmorphic frosted card framing, and vibrant purple glow active states.

## Features
- **3D Parallax Motion:** Thumb translation along the X and Z axes (`translateZ`) in perspective space during state transitions.
- **Dark Glassmorphism:** Deep translucent slate background filled with CSS `backdrop-filter: blur(20px)` blurring.
- **Zero JavaScript:** Pure CSS state handling powered by hidden checkbox inputs and adjacent sibling selectors (`+`).

## File Hierarchy
- `style.css` - Custom properties, 3D perspective rules, glassmorphism metrics, and media queries.
- `demo.html` - Semantic markup demonstrating toggle integration with ARIA accessibility roles.
- `README.md` - Technical specification and architecture overview.
