# CSS Ripple-Wave Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A high-performance, pure CSS side-drawer for e-commerce carts. Instead of a standard slide-in animation, this drawer uses a CSS `clip-path` to create a beautiful "ripple-wave" expansion effect radiating directly from the cart button.

2. **How is it used?** 
   Drop the HTML structure into your project and link the `style.css`. It uses the CSS "Checkbox Hack" (`<input type="checkbox">` and `<label>`) to manage the open/close state of the cart without a single line of JavaScript. When the checkbox is `:checked`, the `clip-path` expands from a 0% circle at the top-right corner to 150%, completely revealing the drawer in a fluid wave motion.

3. **Why is it useful?** 
   E-commerce sites often suffer from heavy JavaScript bundles. By handling complex UI state (like an off-canvas cart) and advanced animations (ripple waves, staggered content reveals, background blurs) entirely in CSS, you drastically improve performance and time-to-interactive. It is fully responsive and includes a `@media (prefers-reduced-motion: reduce)` fallback that seamlessly switches to a basic slide-in effect for accessibility.
