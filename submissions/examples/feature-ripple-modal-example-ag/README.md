# Ripple Modal Example

## Description
This is a standard HTML/CSS/JS implementation of a modal that utilizes a "ripple" exit animation. Instead of abruptly disappearing, the modal performs a subtle inward squeeze followed by a scale-up and blur effect, giving the impression of a ripple dissipating into the background.

## Installation & Usage
1. Copy the HTML structure from `demo.html` into your project.
2. Include the CSS from `style.css`.
3. Include the JavaScript logic from `demo.html` to handle the opening and closing state classes.

To trigger the exit animation, add the `.exiting-ag` class to both the modal overlay and the modal content. The JavaScript listens for the `animationend` event to finally remove the visibility classes.

## How It Works
- **State Management**: The modal visibility is toggled by adding/removing the `.visible` class on the overlay.
- **Exit Animation**: The `rippleExit-ag` keyframes first scale the modal down slightly (to 0.95) to build anticipation, then scale it up (to 1.15) while applying a `blur(4px)` filter and fading to 0 opacity.
- **Animation Sync**: JavaScript (`animationend` event listener) is used to ensure the element is only hidden (via `display: none` or `visibility: hidden`) after the CSS animation has completed.

## Accessibility Considerations
- **ARIA Attributes**: Uses `aria-hidden`, `aria-modal`, `role="dialog"`, and `aria-labelledby` to ensure screen readers correctly interpret the modal state.
- **Keyboard Navigation**: Implements an event listener to close the modal when the `Escape` key is pressed.
- **Pointer Events**: Applies `pointer-events: none` to the modal content while it is animating out, preventing accidental clicks during the transition.
- **Reduced Motion**: Includes a `prefers-reduced-motion: reduce` media query that disables the complex ripple (scale and blur) and replaces it with a simple, fast opacity fade (`rippleExitFallback-ag`).
