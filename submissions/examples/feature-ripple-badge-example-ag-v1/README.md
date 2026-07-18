# Ripple Badge Example

## Description
This example provides a pure HTML/CSS implementation of a notification badge that features a continuous "ripple" or "pulse" effect. This is commonly used in modern web applications to draw a user's attention to unread messages, active recording states, or live updates.

## Files Provided
- `demo.html`: The HTML structure demonstrating how to position a badge on an icon.
- `style.css`: The CSS containing the layout styling and the `@keyframes` ripple animation.

## How to Run
Open `demo.html` in any modern web browser to see the effect in action.

## Implementation Details
- **Pseudo-Element Animation:** To ensure the text inside the badge doesn't distort or scale, the ripple effect is applied to an `::after` pseudo-element. This pseudo-element sits behind the badge (`z-index: -1`) and continuously scales up while fading out.
- **Positioning:** The badge uses `position: absolute` with `transform: translate(25%, -25%)` to sit perfectly on the top-right corner of a relative parent wrapper.
- **Performance:** The animation utilizes `transform: scale()` and `opacity`, backed by `will-change`, ensuring it runs on the GPU and doesn't trigger layout recalculations.
- **Accessibility:** 
  - The badge includes `role="status"` and a descriptive `aria-label`.
  - The animation is wrapped in a `prefers-reduced-motion: reduce` media query. For users who prefer less movement, the pseudo-element is hidden and the animation is disabled, leaving a static red badge.
