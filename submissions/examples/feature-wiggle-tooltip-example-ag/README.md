# Wiggle Tooltip Example

## Description
A standard HTML/CSS example demonstrating a "Wiggle" animation applied to a tooltip. When the trigger element is hovered or focused, the tooltip appears and continuously wiggles slightly from side to side, acting as an attention-seeker or a playful loading indicator.

## Files
- `demo.html`: The markup for the trigger and the nested absolute-positioned tooltip.
- `style.css`: Uses `@keyframes tooltip-wiggle-ag` to slightly rotate the tooltip back and forth infinitely on hover.

## Accessibility
- Trigger element is focusable (`tabindex="0"`).
- Tooltip sets `role="status"` and `aria-live="polite"` so screen readers can announce its presence if it represents a loading state.
- Associated via `aria-describedby`.
- **Reduced Motion**: Disables the physical wiggle rotation entirely. Replaces the motion with a subtle opacity pulse on the loading dots within the text, providing feedback without movement.
