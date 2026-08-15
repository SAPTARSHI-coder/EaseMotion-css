# CSS Toast: Aurora Glow

A collection of hardware-accelerated, JavaScript-free toast notifications featuring shifting gradient rim lights and ethereal ambient glows inspired by the Aurora Borealis.

## Features
- Pure CSS and HTML implementation. No SVG filters, Canvas, or JavaScript timers required.
- **Component Architecture**: 
  - **Ambient Auto-hide**: A toast that enters, pauses, and exits automatically using a CSS `@keyframes` animation (`auto-toast`). The signature Aurora glow is achieved using a slightly oversized, absolute-positioned `.aurora-rim` element placed *behind* the solid dark `.toast-aurora` element. This rim uses a multi-stop `linear-gradient` and a heavy `filter: blur(8px)`. Animating the `background-position` of the rim creates the illusion of shifting, ethereal light bleeding from behind the toast.
  - **Dismissible Alert**: A toast configured with a high-contrast danger gradient (Orange/Pink). To allow the user to close it without JavaScript, it relies on the CSS checkbox hack (`:checked ~`). The toast wrapper acts as a `<label>` for a hidden `<input type="checkbox">`. When clicked, a CSS selector transitions the opacity to 0 and scales the element down, effectively removing it. Hovering intensifies the `filter: blur()` on the rim, providing satisfying interactive feedback.
  - **Stacked Status**: Demonstrates how multiple glowing components interact when layered. It uses absolute positioning and `z-index` to stack the toasts, applying a slight scale reduction to the background toast for depth.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on deep space backgrounds (`#030712`) and vibrant highlight colors (Blue, Purple, Pink, Green) to make the glow effects pop.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the auto-hiding keyframes, the gradient shifting animations, and the dismissal transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of aurora toasts. Observe the Auto-hide loop, click the Dismissible Alert to close it via the checkbox hack, and hover over the Stacked Status to see the layering unstack.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for the 3 toast variations.
- `style.css`: The styling, the `.aurora-rim` blurring and gradient mechanics, the checkbox hack for dismissal, and the keyframe animation for auto-hiding.
