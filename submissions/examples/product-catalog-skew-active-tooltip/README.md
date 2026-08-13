# CSS Skew-Active Tooltip (Product Catalog)

A pure CSS tooltip component designed for Product Catalog Layouts. It features a modern, clean aesthetic using the `Outfit` font and a highly kinetic "Skew-Active" entrance animation triggered purely by CSS hover states.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Product Catalog Aesthetic**: Clean grid layouts, distinct add-to-cart buttons, and a dark tooltip theme (`#1e293b`) that contrasts well against typical light product imagery.
- **Pure CSS State Management (Hover)**: 
- The tooltip relies entirely on the `:hover` pseudo-class applied to the parent `.tooltip-wrapper` container.
- When the user hovers over the wrapper (which encompasses both the circular trigger button and the invisible area the tooltip will occupy), the `.tooltip-content` becomes visible and triggers the animation.
- This ensures the tooltip remains open even when the user moves their mouse from the trigger button *into* the tooltip itself.
- **The Skew-Active Animation**: 
- The `.tooltip-content` is initially hidden (`opacity: 0`), shifted horizontally (`translateX(15px)`), and skewed along the X-axis (`skewX(-15deg)`).
- When triggered, it runs the `tooltip-skew-active` multi-step keyframes animation.
- It rapidly un-skews and translates into its final resting position (`translateX(0) skewX(0)`).
- The animation utilizes a spring-like `cubic-bezier(0.175, 0.885, 0.32, 1.2)` and specific percentage keyframes (`60%`, `80%`) to make the tooltip physically "wobble" slightly before settling, providing a highly kinetic, dynamic feel.
- **Dynamic Positioning & Directionality**: The CSS includes logic to properly position tooltips depending on where the trigger is located (e.g., top-right vs. bottom-left of an image). The animation keyframes are completely reversed for left-side tooltips (`tooltip-skew-active-left`) so the wobble physics always originate naturally from the trigger point.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translation, skewing, and wobbling are completely disabled. The tooltip safely falls back to a fast, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "New Arrivals" product grid. Hover over the circular "i" (info) icons located in the corners of the product image placeholders. A dark tooltip will instantly slide and wobble into view. Notice how the direction of the wobble correctly aligns with which side of the trigger the tooltip appears on. Move your mouse away to dismiss it.

## Files
- `demo.html`: The HTML structure for the product grid and cards, detailing the `.tooltip-wrapper` setup that groups the trigger button and the tooltip content together for the CSS hover logic.
- `style.css`: The styling, e-commerce design tokens, absolute positioning logic for the triggers, and the complex, multi-step `@keyframes` driving the kinetic skew-wobble effect.
