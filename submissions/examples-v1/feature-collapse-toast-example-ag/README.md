# Collapse Toast Example (Standard)

## Description
This is a standard HTML/CSS/JS implementation of a "Collapse Toast" notification system. When a new toast appears, it smoothly expands (collapses in) its height and scales up. When dismissed, it collapses its height down to zero and fades out before being removed from the DOM. This provides a fluid, non-jarring experience, especially when multiple toasts are stacked.

## Installation & Usage
1. Open `demo.html` in your browser to see the effect in action.
2. The core logic relies on a wrapper `div` (`.ease-toast-wrapper-ag`) with `overflow: hidden`.
3. The `.ease-collapse-in-ag` class is added on creation to animate `max-height`, `opacity`, and `scale`.
4. When dismissing, the script swaps it for `.ease-collapse-out-ag` and waits for the `animationend` event before calling `.remove()` on the element.

## How It Works
The magic happens by animating `max-height`. True `height: auto` cannot be cleanly animated in pure CSS. By animating `max-height` from `0` to a value known to be larger than the content (e.g., `100px`), we achieve a smooth height collapse effect. The wrapper element handles this size change, while the inner toast element maintains its padding and shape.

## Accessibility Considerations
- **ARIA Live Regions:** The container `.toast-container-ag` uses `aria-live="polite"` and `aria-atomic="true"`. Screen readers will automatically announce new toasts appended to this container without interrupting the user's current task.
- **Focus Management:** The close button has an `aria-label="Close notification"` for screen readers.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` disables the `max-height` and `scale` animations. Note: For the exit animation, `opacity` is transitioned very quickly (`0.01s`) instead of completely disabling the animation. This is a technical requirement to ensure the JavaScript `animationend` event still fires so the element is properly removed from the DOM.
