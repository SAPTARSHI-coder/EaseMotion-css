# CSS Glass Effect: Laser Ray Trace

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features a highly performant `conic-gradient` masking technique to simulate a continuous laser beam tracing the frosted glass border.

## Features
- Pure CSS and HTML implementation. No JavaScript or SVG animation paths required for the border tracing.
- **Component Architecture**: 
  - **Ambient Background**: True glassmorphism requires a visually complex background to refract. This scene uses a CSS grid pattern combined with absolute-positioned `.orb` elements that slowly float behind the UI using `filter: blur()`.
  - **The Laser Trace Engine**: Animating a line around a border with `border-radius` is impossible with standard CSS `border` properties. This component achieves it via background compositing:
    1. The outer `.glass-card-laser` container serves as the bounding box. Inside it, a massive `.laser-beam` child element is created and given a `conic-gradient` background that sweeps from transparent to a solid neon cyan color.
    2. This `.laser-beam` is rotated infinitely via the `@keyframes spin-laser` animation.
    3. The inner `.glass-inner` element sits directly on top of the spinning laser. It is inset by exactly `2px` (the desired thickness of the laser) using a `margin`.
    4. **The Result**: The spinning conic gradient is completely hidden by the inset glass mask *except* for the outer 2px edge. As the gradient spins behind the mask, it looks exactly like a laser beam perfectly tracing the perimeter of the rounded card.
  - **Glassmorphism Core**: The inset `.glass-inner` mask isn't solid; it uses a translucent `background-color`, a heavy `backdrop-filter: blur(20px)`, and a subtle inner `box-shadow` for volume. This allows the background orbs to refract beautifully through the card while the laser races around the edge.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`), though the neon/cyberpunk aesthetic looks best on dark backgrounds.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the spinning laser animation and floating background orbs are frozen. The `conic-gradient` is swapped for a solid neon color, presenting a static, glowing border instead of a flashing trace.

## Usage
Open `demo.html` in your browser. Observe the continuous laser beam animation perfectly tracing the rounded border of the frosted glass card, achieved entirely via CSS masking.

## Files
- `demo.html`: The HTML structure defining the ambient background, the outer card container, the laser gradient element, and the inner frosted glass mask.
- `style.css`: The styling, the glassmorphism blur logic, the `conic-gradient` definition, and the `@keyframes` that spin the gradient to create the trace effect.
