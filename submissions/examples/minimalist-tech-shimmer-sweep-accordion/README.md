# CSS Shimmer-Sweep Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a dynamic, continuous "Shimmer-Sweep" border animation for the active item.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean panel layouts, precise borders, subtle structural icons, and a high-contrast active state.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of radio buttons (`name="tech-accordion"`) ensures that only one accordion panel can be open at a time.
- The accordion headers are `<label>` elements linked to these hidden radio buttons. Clicking a header changes the active checked state.
- Depending on which radio button is checked (`#acc-1:checked`, etc.), CSS sibling selectors (`~`) dynamically update:
  1. The height of the `.accordion-content-wrapper` using a modern CSS Grid transition (`grid-template-rows: 0fr` to `1fr`).
  2. The rotation of the chevron icon (`transform: rotate(180deg)`).
  3. The text color of the active header.
  4. The visibility and animation of the Shimmer-Sweep border layer.
- **The Shimmer-Sweep Border Animation System**: 
- This effect is created using a dedicated `.shimmer-border` element that sits absolutely positioned behind the header and content, but within the item container.
- It utilizes a `conic-gradient` background to create a sweeping "beam" of light (`var(--accent-blue)`).
- A `-webkit-mask` composite operation (often called the pseudo-element border trick) is used to cut out the center of this element, leaving only a 2px "border" visible around the edges.
- When an item becomes active, the `.shimmer-border` becomes visible and triggers the `sweep-rotation` animation. This infinitely rotates the conic gradient 360 degrees, creating the illusion of a beam of light continuously sweeping around the perimeter of the active accordion panel.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous sweeping animation is disabled, gracefully falling back to a static, solid blue border for the active state. The panel expansion also snaps instantly without transitioning.

## Usage
Open `demo.html` in your browser. You will see a "System FAQ" list. Click the headers to expand the panels. Notice how the content drawer smoothly slides open, the chevron rotates, and a vibrant blue beam of light begins to sweep continuously around the border of the newly active item.

## Files
- `demo.html`: The HTML structure for the accordion, detailing the crucial radio button setup for CSS state management, the navigation headers, the content wrappers for grid animation, and the dedicated `.shimmer-border` layer.
- `style.css`: The styling, tech design tokens, the complex state logic driven by `:checked ~` selectors, the CSS Grid height transition, and the specific `@keyframes` and conic-gradient logic driving the shimmer-sweep effect.
