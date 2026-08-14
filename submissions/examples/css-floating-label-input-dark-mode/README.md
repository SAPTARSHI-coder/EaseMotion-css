# Floating Label Input with Dark Mode Styling (#81515)

A pure CSS modern dark-mode floating label input component utilizing CSS custom properties, smooth bezier state transitions, focus glow effects, and accessibility motion compliance.

## Features
- **Dark Mode Palette:** Styled with Slate/Dark surface tokens (`#0f172a`, `#1e293b`) paired with Cyan primary highlights (`#38bdf8`).
- **Pure CSS Float Mechanics:** Label animation is driven by CSS `:focus` and `:not(:placeholder-shown)` pseudo-classes with zero JavaScript reliance.
- **Accessibility & Motion Compliance:** Includes explicit labels, focus outlines, and `@media (prefers-reduced-motion: reduce)` support.

## File Structure
- `style.css` - Custom properties, dark mode styling, floating label transformations, and responsive media rules.
- `demo.html` - Form layout demonstrating input floating behavior.
- `README.md` - Technical overview and component description.
