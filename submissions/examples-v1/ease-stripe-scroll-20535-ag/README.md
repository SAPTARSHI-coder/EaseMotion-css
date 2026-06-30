# CSS Scroll-Driven Stripe Background Example

This submission demonstrates the implementation of scroll-linked diagonal stripe backgrounds using modern CSS Scroll-Driven Animations.

---

## Technical Overview

The layout employs diagonal background stripes built using CSS `repeating-linear-gradient`:

1. **Diagonal Stripes Pattern**:
   ```css
   background-image: repeating-linear-gradient(
     45deg,
     rgba(255, 255, 255, 0.05) 0,
     rgba(255, 255, 255, 0.05) 15px,
     transparent 15px,
     transparent 30px
   );
   background-size: 40px 40px;
   ```

2. **CSS Scroll Timeline**:
   By using `animation-timeline: scroll(root)`, we bind the progress of the background translation animation directly to the scroll vertical position of the root viewport. No Javascript scroll listeners or layout thrashing occur.

3. **Fallback Panning**:
   For browsers that do not support scroll-driven timelines, a standard infinite keyframe panning animation (`animation: panStripes 8s linear infinite`) is defined as a fallback.

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Scroll up and down on the page.
3. Verify that:
   - In the **01. Scroll Timeline** card, the purple stripes shift position horizontally in direct proportion to your scroll speed and direction.
   - In the **02. Infinite Panning Fallback** card, the cyan stripes pan diagonally at a constant slow rate.
4. Verify that enabling `prefers-reduced-motion` in browser settings immediately stops all background animations.
