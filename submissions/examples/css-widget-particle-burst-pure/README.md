# CSS Widget: Particle Burst

A collection of hardware-accelerated, JavaScript-free dashboard widgets featuring celebratory particle bursts, explosions, and emitting status rings.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript particle engines (like `particles.js`) required.
- **Component Architecture**: 
  - **Achievement Stat Card**: A hover-triggered celebration effect. Instead of rendering dozens of individual `div` elements for particles, it uses a single `.particles` div and leverages multiple `box-shadow` layers. Each shadow represents a particle. The `@keyframes` animation transitions these shadows from `0` spread at the center to various scattered coordinates (e.g., `-60px 0`, `40px 40px`), creating a starburst without polluting the DOM.
  - **Success Notification Button**: An interactive action widget. Because we cannot use JavaScript to detect a click, it utilizes the CSS checkbox hack (`:checked ~`). A hidden checkbox is nested within the `<label>` acting as the button. When clicked, the adjacent `.explosion` div triggers a rapid, high-velocity particle burst using the same multiple `box-shadow` technique, paired with a bouncy `cubic-bezier` timing function.
  - **Loading Ring Burst**: An infinite status indicator. This uses a central `.ring-emitter` container that slowly rotates (`transform: rotate()`). Inside it, `::before` and `::after` pseudo-elements are animated to continuously translate outward (`translateY`) and scale down to `0`. Because the parent container is rotating, the particles appear to shoot out in a continuous circular pattern.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on vivid, game-like accents (Gold, Blue, Green) set against a dark, minimalist dashboard background to make the particles pop.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all particle emission animations and complex bursts for users who prefer less motion, while keeping the interactive state changes intact.

## Usage
Open `demo.html` in your browser to view the gallery of dashboard widgets. Hover over the achievement icon to trigger the starburst, click the "Deploy Now" button to see the checkbox-driven explosion, and observe the infinite emitting particles on the processing ring.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 particle widgets (including the checkbox hack).
- `style.css`: The styling, the multiple `box-shadow` coordinate generation, the checkbox `:checked` logic, and the rotating particle emitter keyframes.
