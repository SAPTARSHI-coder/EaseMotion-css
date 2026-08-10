# Bounce Tooltip Example (Standard)

## Description
A standard HTML/CSS tooltip component that features a "Bounce" Entrance Animation. When the user hovers over or focuses the trigger element, the tooltip appears by smoothly bouncing up from below, utilizing a `cubic-bezier` easing function for a physical, playful feel.

## Files
- `demo.html`: Contains the markup for the trigger container and the tooltip element inside it.
- `style.css`: Contains the tooltip styling, positioning logic, and the `@keyframes tooltip-bounce-in-ag` animation that triggers on hover/focus.

## Accessibility
- Uses `role="tooltip"` and `aria-describedby` to link the tooltip text to its trigger element for screen readers.
- Applies `tabindex="0"` on the trigger so it is accessible via keyboard navigation.
- The tooltip is revealed on `:focus` in addition to `:hover`.
- **Reduced Motion**: Disables the bouncing `translateY` animation entirely. Uses a gentle opacity fade (`transition: opacity 0.2s`) to reveal the tooltip, preventing unexpected or jarring motion for sensitive users.
