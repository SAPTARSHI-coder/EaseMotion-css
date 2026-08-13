# CSS Portfolio Project Card

A hardware-accelerated, JavaScript-free portfolio project card featuring staggered overlay animations, interactive tech tags, and clean hover states.

## Features
- Pure CSS and HTML implementation. All hover interactions rely entirely on the CSS `:hover` pseudo-class.
- **Component Architecture**: 
  - **Base Card Structure**: The `.project-card` serves as the containing block with `overflow: hidden`. It holds a full-bleed background image (`.card-image`) that slightly zooms in (`transform: scale(1.05)`) when the card is hovered, providing subtle depth.
  - **Interactive Overlay**: The `.card-overlay` sits above the image, styled with a `linear-gradient` to ensure text legibility. By default, it is completely transparent (`opacity: 0`). On hover, it fades in smoothly.
  - **Staggered Animations**: Inside the overlay, the main content (`.card-content`) and the call-to-action buttons (`.card-actions`) both slide up (`transform: translateY()`) and fade in. To create a premium, polished feel, the `.card-actions` container uses a `transition-delay: 0.1s`, causing it to slide in slightly after the main text.
  - **Tech Tags & Buttons**: Includes beautifully styled pill tags (`.tag`) using a subtle `backdrop-filter: blur(4px)` to look like frosted glass against the background image. The action links feature hover states with clear visual hierarchy (primary solid vs. secondary translucent).
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, modern aesthetic with slate grays and a bright blue primary action color (`#3b82f6`). Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`, adjusting the base colors and the placeholder image gradient.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, all scaling, sliding, and fading transitions are disabled, switching instantly instead to prevent discomfort.

## Usage
Open `demo.html` in your browser. Hover your mouse over the card. Watch the background image slightly zoom in, while the dark overlay fades in. Notice how the project title and description slide up first, followed closely by the action buttons due to the staggered transition delay.

## Files
- `demo.html`: The HTML structure defining the card layout, the overlay content, the tech tags, and the SVG icons for the action links.
- `style.css`: The styling, the `:hover` transition logic, the staggered delay techniques, and the responsive dark mode support.
