# CSS Dropdown: Metallic Sheen

A collection of hardware-accelerated, JavaScript-free dropdown menus simulating brushed steel and polished chrome reflections.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners required for hover or click states.
- **Component Architecture**: 
  - **Hover Navigation Menu**: A top-level navigation dropdown styled as brushed steel. It uses a dark `linear-gradient` (`--gradient-steel`) with high-contrast color stops. The `.steel-panel` includes an inset `box-shadow` to create physical depth. On `:hover` of the parent `.nav-item`, the dropdown fades and translates into view, while simultaneously triggering an infinite `@keyframes` animation (`steel-sweep`) that pans the background position of the gradient, simulating light sweeping across brushed metal.
  - **Action Menu (Click)**: A dropdown styled as polished chrome that requires a click to open, utilizing the CSS checkbox hack (`:checked ~`). The button features a physical press effect using `:active` to invert its shadows and slightly scale down. The dropdown rollout is achieved by transitioning `max-height`. When the menu opens (`input:checked`), a separate absolute-positioned pseudo-element (`.reflection-sweep`) containing a white gradient skew is animated across the dropdown, creating a fast, one-time metallic flash.
  - **Metallic Title**: A header text effect utilizing `-webkit-background-clip: text` combined with the steel gradient and a continuous background pan animation.
- **Theming**: Configured via CSS Custom Properties. The metallic palettes (Steel and Chrome) are defined as complex `linear-gradient` variables at the root level, making them reusable across backgrounds and text masking.
- Fully accessible semantic structure using standard `<nav>` and `<ul>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling the reflection sweeps, continuous background pans, and dropdown transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of metallic dropdowns. Hover over the "Services" link to trigger the brushed steel dropdown and watch the gradient sweep. Click the "SETTINGS" button to toggle the chrome action menu and observe the one-time reflection flash.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for both the hover-driven and checkbox-driven dropdown components.
- `style.css`: The styling, the multi-stop `linear-gradient` geometries, the dropdown transition mechanics (max-height), and the keyframe animations for the metallic sweeps.
