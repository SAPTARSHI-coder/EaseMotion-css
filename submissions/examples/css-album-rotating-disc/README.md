# CSS Album Rotating Disc (#70829)

A pure CSS album rotating disc component that simulates a vinyl record spinning with realistic grooves and shine effects.

## Features
- **Pure CSS Animation & Control:** Uses a native checkbox state (`:checked`) to trigger continuous 360-degree rotation (`animation-play-state`) with zero JavaScript.
- **Realistic Vinyl Grooves:** Styled with CSS radial and conic gradients to reproduce vinyl groove reflections and realistic center labels.
- **Accessible Controls:** Keyboard navigable play/pause toggle button bound via `<label for="...">` with native `:focus-visible` ring indicators.
- **Motion Preference Aware:** Disables infinite rotation automatically when `@media (prefers-reduced-motion: reduce)` is enabled.

## File Hierarchy
- `style.css` - Disc radial gradient styling, keyframe spin animation, and state-driven play controls.
- `demo.html` - Semantic player layout with pure CSS checkbox toggle integration.
- `README.md` - Technical documentation and feature summary.
