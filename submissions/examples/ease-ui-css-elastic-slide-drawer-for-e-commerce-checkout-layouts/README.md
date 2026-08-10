# CSS Elastic-Slide Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A playful, high-performance pure CSS side-drawer designed for friendly, modern e-commerce layouts. When triggered, the drawer slides in from the side and smoothly bounces slightly past its resting point before settling, thanks to a custom `cubic-bezier` elastic timing function.

2. **How is it used?** 
   Copy the `demo.html` structure into your project and link the `style.css`. It perfectly utilizes the native HTML "Checkbox Hack" to handle state, meaning you don't need any JavaScript to open or close the drawer. When the hidden `#cart-toggle` is checked, the CSS `transform: translateX(0)` fires with the bouncy `--ease-elastic` bezier curve, accompanied by staggered elastic entrances for the cart items.

3. **Why is it useful?** 
   It demonstrates how to inject personality and highly satisfying micro-interactions into standard UI components like a shopping cart drawer using nothing but CSS. By keeping complex animations out of the JavaScript thread, you maintain a silky 60fps experience while ensuring the component naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query by falling back to a linear slide.
