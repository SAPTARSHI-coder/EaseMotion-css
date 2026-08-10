# CSS Expandable Code Block (#70823)

A pure CSS expandable code block component that collapses long snippets to a fixed line height with a bottom gradient fade and an interactive expand button.

## Features
- **Pure CSS Max-Height Transition:** Smoothly animates expansion from a collapsed height (approx. 4 lines) to full content height using CSS `max-height` and cubic-bezier timing functions.
- **Gradient Fade Overlay:** Automatically applies a bottom linear-gradient fade overlay when collapsed to indicate truncated text.
- **Accessible State Handling:** Driven by a native checkbox state toggle (`:checked`) paired with a keyboard-focusable `<label>` trigger button.
- **Motion Preference Compliant:** Automatically disables height and chevron transition effects when `@media (prefers-reduced-motion: reduce)` is enabled.

## File Hierarchy
- `style.css` - Code block card theme, max-height collapse rules, gradient overlays, and chevron rotation.
- `demo.html` - Semantic card markup showcasing an Express.js server configuration snippet.
- `README.md` - Technical specification and architecture notes.
