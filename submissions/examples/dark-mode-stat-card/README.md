# Floating Stat Metric Card (Dark Mode Styling)

This submission introduces a new variant of the standard layout/dashboard component: the **Dark Mode Floating Stat Metric Card**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/dark-mode-stat-card/`.

## Feature Overview

The Dark Mode Stat Card is designed for data-heavy dashboard interfaces. It employs a deep, minimalist color palette combined with highly polished, hardware-accelerated micro-interactions that activate upon user hover.

### Included CSS

1. **Floating 3D Interaction:** When hovered, the card smoothly lifts off the page (`translateY(-6px)`) while projecting a deep, soft drop shadow (`box-shadow`), simulating physical depth on the Z-axis.
2. **Ambient Hover Glow:** A subtle, radial gradient background glow is implemented using an absolutely positioned `::before` pseudo-element. This glow rests behind the card and fades in (`opacity: 1`) on hover, mimicking a backlight activating behind the panel.
3. **Spring-Driven Icon Rotation:** The primary metric icon features a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition. On hover, it slightly scales up and rotates, providing a playful, tactile response.
4. **Dynamic Trend Indicator:** The trend pill at the bottom starts as flat text. On hover, its background color activates (`rgba(...)`), and the directional arrow icon lifts up diagonally (`translate(2px, -2px)`), instantly drawing the user's eye to the positive metric change.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of header tags, SVG iconography, and `aria-hidden` attributes for decorative elements.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The floating translation, background glows, icon rotations, and trend arrow animations are safely disabled for users with vestibular disorders.
- **Responsiveness:** Built with fluid flexbox layouts and percentage-based constraints. It scales cleanly down to small mobile viewports without requiring complex media queries.
