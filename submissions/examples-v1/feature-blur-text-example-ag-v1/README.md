# Blur Text Example

## Description
This is a standard HTML/CSS example demonstrating a "blur text" hover effect. The text is initially hidden using a heavy `text-shadow` with a transparent font color. When the user hovers or focuses the element, the blur smoothly transitions away to reveal the clear text underneath.

## Files
- `demo.html`: Contains the structural markup.
- `style.css`: Contains the blur styling using `text-shadow` and the transition rules for the hover state.

## How It Works
1. The `.blur-text-ag` element initially has `color: transparent` and `text-shadow: 0 0 12px rgba(...)`. This creates a frosted/blurred appearance that obscures the actual letters.
2. The `user-select: none` property prevents users from accidentally highlighting and copying the text while it's supposed to be hidden.
3. On `:hover` or `:focus-visible`, the `text-shadow` blur radius is animated to `0px`, and the `color` transitions to a solid color, bringing the text into focus. `user-select: auto` is restored.

## Accessibility Considerations
- `tabindex="0"` allows keyboard users to focus the element to reveal the text.
- An explicit `:focus-visible` outline is provided.
- An `aria-label` is included to inform screen reader users of the interaction required (though screen readers will read the text normally anyway, which is often desired for accessibility of hidden content).
- **Reduced Motion**: Disables the CSS transition. The blur is removed instantly upon hover/focus for users who prefer reduced motion.
