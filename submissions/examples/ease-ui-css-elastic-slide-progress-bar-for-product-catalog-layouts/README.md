# CSS Elastic-Slide Progress Bar for Product Catalog Layouts

1. **What does this do?** 
   A playful, physically-simulated progress bar and catalog reveal sequence designed for colorful, friendly e-commerce layouts. When the user clicks to load, the progress bar snaps and slides forward with a custom elastic spring animation (incorporating a slight rubberband pullback mid-way). Once loading completes, the progress bar disappears and the products spring into view using an elastic pop animation.

2. **How is it used?** 
   Include the `demo.html` structure and link the `style.css`. It implements the "Checkbox Hack" to handle the loading state, entirely bypassing JavaScript. When the hidden `#load-catalog` is checked, a sequence of CSS `@keyframes` fires. The `.progress-fill` animates its `width` using a `cubic-bezier` with overshoot parameters. The `.progress-percent::after` utilizes the `content` property to simulate a number counting up from 0% to 100%, syncing precisely with the bar's pullback and slide phases.

3. **Why is it useful?** 
   It demonstrates how to inject personality and satisfying "game feel" into standard UI elements like progress bars using pure CSS cubic-beziers and keyframes. Traditionally, achieving synchronized elastic rubberbanding across a loading bar, text, and subsequent layout reveals requires JavaScript physics libraries (like Framer Motion). By executing this purely in CSS, you provide a delightful interaction that is incredibly lightweight, instantly loads, and natively respects the `@media (prefers-reduced-motion: reduce)` accessibility query by skipping the animations and instantly revealing the products.
