# Ease Add to Cart Animation

## 1. What does this do?
This component provides a 100% CSS-driven "Add to Cart" flying item animation paired with a synchronized cart badge pop update upon trigger.

## 2. How is it used?
It leverages the pure CSS Checkbox Hack (`<input type="checkbox">` combined with a `<label>`) to manage global interaction state across non-nested DOM elements. When the user interacts with the `<label>` button, the hidden checkbox state shifts to `:checked`. Using the general sibling combinator (`~`), CSS selectors trigger keyframe animations on both the ghost product item (`.ease-ghost-item`) and the navigation header badge (`.ease-cart-badge`), while simultaneously modifying button state and text via pseudo-elements (`::after`).

## 3. Why is it useful?
- **Zero JavaScript Runtime Overhead:** Completely eliminates the need for JS `onClick` event listeners, state tracking variables, or dynamic DOM node cloning.
- **Hardware-Accelerated Performance:** Trajectory transformation (`translate`, `scale`, `rotate`) and opacity transitions run directly on the browser compositor thread without triggering layout reflows.
- **Declarative & Modular:** Simple HTML markup structure that can be easily styled or customized using CSS custom properties or standard keyframe adjustments.
