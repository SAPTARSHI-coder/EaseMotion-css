# CSS Dropdown: Gradient Shimmer

A collection of hardware-accelerated, JavaScript-free dropdown menus utilizing animated background gradients to create continuous shimmering effects and glowing borders.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners required for hover or click states.
- **Component Architecture**: 
  - **Hover Navigation Menu**: A top-level navigation dropdown featuring a full-bleed shimmering background. It uses a `linear-gradient` (`--gradient-1`) mapped to a `background-size` of `200%`. On `:hover` of the parent `.nav-item`, the dropdown fades and translates into view, while simultaneously triggering an infinite `@keyframes` animation (`panel-shimmer`) that continuously pans the background position, creating an endless, smooth shimmer across the entire panel.
  - **Action Menu (Click)**: A dropdown requiring a click to open, built using the CSS checkbox hack (`:checked ~`). This component focuses on a "shimmering border" aesthetic rather than a full background. The `.shimmer-border-panel` is a container with a `2px` padding and the animated `linear-gradient` background. Inside it sits a solid dark `.dropdown-inner` panel. The gradient shines through the `2px` padding, creating an animated, glowing border. The toggle button uses a similar technique via an absolutely positioned `::before` pseudo-element that acts as an animated, glowing border.
  - **Shimmer Title**: A decorative header text effect utilizing `-webkit-background-clip: text` combined with a bright gradient and a continuous panning animation.
- **Theming**: Configured via CSS Custom Properties. The gradients (`--gradient-1` and `--gradient-2`) are defined at the root level, making them reusable and easy to swap. The palette relies on deep slate (`#0f172a`) to provide high contrast against the bright, vibrant neon gradients (Pink, Blue, Purple, Green).
- Fully accessible semantic structure using standard `<nav>` and `<ul>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling the continuous gradient panning animations and dropdown entry transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of shimmer dropdowns. Hover over the "Products" link to trigger the full-background shimmer dropdown, and click the "MENU" button to toggle the shimmering border action menu.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for both the hover-driven and checkbox-driven dropdown components.
- `style.css`: The styling, the multi-stop `linear-gradient` setups, the pseudo-element border techniques, the dropdown transition mechanics, and the keyframe animations for the continuous background panning.
