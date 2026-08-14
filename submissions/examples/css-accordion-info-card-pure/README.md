# CSS Accordion Info Card

A hardware-accelerated, JavaScript-free accordion info card that expands downward to reveal additional content with a perfectly smooth height transition.

## Features
- Pure CSS and HTML implementation. The state is managed via the Checkbox Hack, and the smooth expansion relies on a modern CSS Grid technique.
- **Component Architecture**: 
  - **The Grid Height Hack**: Traditionally in CSS, transitioning an element's `height` from `0` to `auto` is impossible to animate smoothly. This component solves that using CSS Grid. 
  - The hidden content is wrapped in a `.card-content-wrapper` with `display: grid` and `grid-template-rows: 0fr`. Because the inner `.card-content` has `overflow: hidden`, it gets perfectly squished to 0 height.
  - When the hidden checkbox is toggled (`:checked`), the wrapper's `grid-template-rows` transitions to `1fr`. CSS Grid *can* interpolate this transition, causing the card to smoothly push open and reveal the exact natural height of the inner content.
  - **Animated Iconography**: The chevron icon in the header uses `transform: rotate(180deg)` tied to the `:checked` state, providing clear visual feedback that the card is open.
  - **Visibility Handling**: To prevent awkward padding or border rendering when closed, `opacity` and `visibility` are faded in simultaneously with the height expansion.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, modern aesthetic with vibrant gradient avatars. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the grid expansion and icon rotation transitions if requested by the OS.

## Usage
Open `demo.html` in your browser. Click anywhere on the header of the "User Profiles" cards. Watch the chevron smoothly rotate and the card fluidly expand downward to reveal the biography and statistics, all without a single line of JavaScript computing scroll heights.

## Files
- `demo.html`: The HTML structure defining the card layout, the hidden checkbox, and the nested content wrapper.
- `style.css`: The styling, the `grid-template-rows: 0fr` to `1fr` transition technique, and the responsive dark mode support.
