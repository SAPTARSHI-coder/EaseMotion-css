# CSS Rotate-Fade Drawer for E-Commerce Checkout Layouts

1. **What does this do?** 
   A luxurious, high-performance pure CSS side-drawer designed for high-end e-commerce layouts. When triggered, the drawer swings into view like a heavy door, utilizing a 3D `rotateY` and `perspective` transformation combined with a smooth opacity fade.

2. **How is it used?** 
   Copy the `demo.html` structure into your project and link the `style.css`. It perfectly utilizes the native HTML "Checkbox Hack" to handle state, meaning you don't need any JavaScript to open or close the drawer. When the hidden `#cart-toggle` is checked, the CSS `transform: perspective(1500px) rotateY(0deg)` fires, swinging the drawer into focus while the main page content subtly rotates backwards into the distance to create a stunning 3D depth-of-field effect.

3. **Why is it useful?** 
   It demonstrates how to create deeply sophisticated, "expensive-feeling" micro-interactions using nothing but CSS 3D transforms. By keeping complex animations out of the JavaScript thread, you maintain a silky 60fps experience while ensuring the component naturally respects the `@media (prefers-reduced-motion: reduce)` accessibility query by falling back to a 2D linear slide.
