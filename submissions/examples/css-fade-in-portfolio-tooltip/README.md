# CSS Fade-In Tooltip (Creative Portfolio Layouts)

A pure CSS, lightweight animated tooltip styled to complement high-end creative portfolio layouts, galleries, and showcase sites. It implements smooth hardware-accelerated opacity changes alongside subtle directional translation vectors to display project credits, context metadata, or category details on demand with zero JavaScript overhead.

## Features
- **Portfolio Minimalist Aesthetic:** Features deep premium charcoal backdrops with elegant typographic layout properties perfectly optimized for dark/light creative interfaces.
- **Pure CSS Fade-In Mechanics:** Employs hardware-accelerated opacity layers paired with localized structural offsets to prevent animation stutters.
- **Zero-JS Focus Management:** Integrates standard `:focus-within` triggers and explicit `tabindex="0"` constraints to ensure robust, accessible keyboard tab routing.

## Custom Properties
Configure or modify these parameters inside `style.css`:
- `--tooltip-speed`: Transition duration window for the visibility fade (default: `0.3s`).
- `--tooltip-easing`: Custom acceleration bezier applied to the interaction layout (default: `cubic-bezier(0.22, 1, 0.36, 1)`).
- `--tooltip-lift`: Vertical translation pixel distance applied during the fade lifecycle (default: `-8px`).