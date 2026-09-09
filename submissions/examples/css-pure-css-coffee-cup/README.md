# Pure CSS Coffee Cup

A hardware-accelerated, JavaScript-free rendering of a steaming cup of coffee, built entirely using CSS shapes, gradients, and animations.

## Features
- Pure CSS and HTML implementation. No SVGs, canvas, or images are used.
- **Component Architecture**: 
  - **3D Shape Construction**: 
    - The main cup (`.cup`) utilizes `border-radius` to curve the bottom edges, and a `linear-gradient` to create cylindrical shading.
    - The top opening (`.cup-inner`) is a simple `border-radius: 50%` ellipse positioned absolutely at the top of the cup body. It has `overflow: hidden` to contain the coffee liquid.
    - The handle (`.cup-handle`) is a thick bordered box with `border-left: none` and `border-radius` on the right side, tucked behind the cup using `z-index`.
    - The saucer (`.saucer`) is a wide ellipse placed beneath the cup, with an `::after` pseudo-element creating the inner indentation using inset box-shadows.
  - **Animated Steam**: The `.steam-container` holds several `.steam` spans. Each span uses a `blur()` filter to soften its edges. The `rise` keyframe animation translates the steam upwards while scaling it horizontally and fading the opacity in and out. Animation delays (`animation-delay`) are staggered to create a continuous, natural-looking flow of steam.
  - **Liquid Surface Breathing**: The `.coffee-liquid` uses a subtle infinite alternate keyframe animation (`liquid-breathe`) that slightly scales the surface up and down, simulating the micro-movements of hot liquid.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes warm, cozy browns and creams. Fully supports automatic OS-level Light Mode via `@media (prefers-color-scheme: light)`.
- Fully accessible semantic structure. The entire visual construct is wrapped in a container with `role="img"` and a descriptive `aria-label` so screen readers announce it as an image. Honors the `prefers-reduced-motion` accessibility standard by freezing the steam and liquid animations if requested by the OS.

## Usage
Open `demo.html` in your browser. Watch the steam rise naturally from the surface of the coffee, and notice the 3D shading techniques achieved purely through CSS gradients and box-shadows.

## Files
- `demo.html`: The HTML structure defining the semantic ARIA wrapper, the steam spans, and the layered `div` elements that make up the cup geometry.
- `style.css`: The styling, the border-radius/gradient geometry techniques, and the `@keyframes` animations for the steam and liquid.
