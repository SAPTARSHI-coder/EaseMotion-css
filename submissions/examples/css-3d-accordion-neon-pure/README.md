# CSS 3D Accordion with Neon Styling

A visually striking, JavaScript-free accordion component featuring 3D folding animations and a cyberpunk-inspired neon aesthetic.

## Features
- Pure CSS and HTML implementation. The interactive state is managed entirely through the "Checkbox Hack".
- **Component Architecture & Styling Mechanics**: 
  - **The Checkbox Hack**: Each accordion item contains a hidden `<input type="checkbox" class="acc-toggle">`. The visible header is a `<label for="...">` that toggles this checkbox. We use the CSS `:checked` pseudo-class combined with the general sibling combinator (`~`) to animate the icon, header colors, and the content panel when the item is active.
  - **3D Folding Animation**: 
    - The `.acc-content-wrapper` is given `transform-origin: top center;` and `transform-style: preserve-3d;`.
    - In its default (collapsed) state, it is rotated 90 degrees backwards into the screen (`transform: rotateX(-90deg)`) and made transparent (`opacity: 0`).
    - When the toggle is checked, it transitions to `rotateX(0deg)` and `opacity: 1`, creating the illusion that the panel swings down from the bottom of the header like a physical hinge.
  - **Smooth Height Transition**: Instead of animating `max-height` (which requires arbitrary large values and ruins easing curves), this component uses the modern CSS Grid hack: `display: grid; grid-template-rows: 0fr;`. On `:checked`, it transitions to `1fr`, allowing the browser to smoothly animate to the exact natural height of the content.
- **Theming**: Configured via CSS Custom Properties. The palette features intense Cyan and Magenta neon glows created using stacked `text-shadow` and `box-shadow` techniques over a dark, grid-patterned background. Typography uses Google Fonts `Orbitron` and `Rajdhani` to complete the cyberpunk look.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the 3D transforms and fading if requested by the OS.

## Usage
Open `demo.html` in your browser. Click on any of the accordion headers (e.g., "SYSTEM PROTOCOLS"). Watch the neon border flash from Cyan to Magenta, the icon rotate, and the content panel fold downward in 3D space.

## Files
- `demo.html`: The HTML structure defining the checkbox hack and accordion panels.
- `style.css`: The styling, the 3D `rotateX` transforms, the grid `0fr` to `1fr` height hack, and the complex neon box-shadows.
