# CSS Zoom-In Tooltip (Product Catalog)

A pure CSS tooltip component designed for Product Catalog Layouts. It features a modern, clean aesthetic using the `Outfit` font and a snappy "Zoom-In" entrance animation triggered purely by CSS hover states.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Product Catalog Aesthetic**: Clean grid layouts, distinct add-to-cart buttons, and a dark tooltip theme (`#1e293b`) that contrasts well against typical light product imagery.
- **Pure CSS State Management (Hover)**: 
- The tooltip relies entirely on the `:hover` pseudo-class applied to the parent `.tooltip-wrapper` container.
- When the user hovers over the wrapper (which encompasses both the circular trigger button and the invisible area the tooltip will occupy), the `.tooltip-content` becomes visible and triggers the animation.
- This approach ensures the tooltip remains open even when the user moves their mouse from the trigger button *into* the tooltip itself, preventing frustrating flickering.
- **The Snappy Zoom-In Animation**: 
- The `.tooltip-content` is initially hidden (`opacity: 0`) and scaled down (`scale(0.8)`).
- When triggered, it runs the `tooltip-zoom-in` keyframes animation, scaling up to `scale(1)` while fading in.
- The animation utilizes a custom bouncy easing function (`cubic-bezier(0.175, 0.885, 0.32, 1.2)`) that overshoots the target scale (`1.2` bezier parameter) before settling, providing a highly satisfying, tactile "pop".
- **Dynamic Positioning & Origin**: The CSS includes logic to properly position tooltips depending on where the trigger is located (e.g., top-right vs. bottom-left of an image), adjusting the CSS `transform-origin` dynamically so the scale animation always originates from the trigger button's location.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial scaling (zooming) and bouncy easing are completely disabled. The tooltip safely falls back to a fast, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "Featured Collection" product grid. Hover over the circular "i" (info) icons located in the corners of the product image placeholders. A dark tooltip will instantly "pop" or zoom into view pointing directly at the trigger button. Move your mouse away to dismiss it.

## Files
- `demo.html`: The HTML structure for the product grid and cards, detailing the crucial `.tooltip-wrapper` setup that groups the trigger button and the tooltip content together for the CSS hover logic.
- `style.css`: The styling, e-commerce design tokens, absolute positioning logic for the triggers and tooltips, and the specific `@keyframes` driving the snappy `cubic-bezier` zoom effect.
