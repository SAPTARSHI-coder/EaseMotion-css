# CSS Bento Grid: Bouncing Spring

A hardware-accelerated, JavaScript-free bento grid layout. Features highly elastic, physics-based hovering animations driven by custom CSS `cubic-bezier` timing functions.

## Features
- Pure CSS and HTML implementation. No JavaScript required for the grid layout or the physics-based hover animations.
- **Component Architecture**: 
  - **The Bento Grid**: Built using modern CSS Grid (`display: grid; grid-template-columns: repeat(4, 1fr)`). By using `grid-column: span X` and `grid-row: span Y` on specific cards, we create the classic asymmetrical "Bento Box" layout. The layout is fully responsive, gracefully degrading to a 2-column, and eventually 1-column layout on smaller screens.
  - **The Magic `cubic-bezier`**: The core of the elastic hover aesthetic relies on custom timing functions. Standard CSS `ease-out` functions stay between 0 and 1. By supplying a `cubic-bezier()` where the Y-values fall outside of the 0-1 range (specifically `cubic-bezier(0.68, -0.55, 0.265, 1.55)`), we force the `transform` animation to temporarily overshoot its target value before snapping back. This physically simulates an elastic spring.
  - **The Hover Physics**: When a `.bento-card` is hovered, it translates up and scales slightly (`transform: scale(1.05) translateY(-5px)`). Because of the custom spring easing applied to the `transition`, the card pops up rapidly, slightly overshoots 1.05 scale, and bounces back into place.
  - **Nested Bouncing**: We apply the same spring physics to child elements. Hovering the card also triggers a scale on the internal `.card-icon` and `.card-stat` elements, creating a layered, deeply interactive feel.
  - **The Spring Button**: The button uses the same physics but includes an `:active` state that shrinks the button down (`scale(0.9)`). When the user releases the click, the button springs back up past 100% before settling, simulating a physical, tactile push-button.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all overshooting cubic-bezier transitions are disabled, presenting a static, accessible grid UI.

## Usage
Open `demo.html` in your browser. Hover over the various cards in the grid to experience the elastic, physics-based UI. Click the "Try it" button to see the tactile push-button spring effect. Resize the browser window to see the grid collapse responsively.

## Files
- `demo.html`: The HTML structure defining the CSS Grid layout and the various sized bento cards.
- `style.css`: The styling, the CSS Grid layout mathematics, the responsive media queries, and the custom overshooting `cubic-bezier` physics transitions.
