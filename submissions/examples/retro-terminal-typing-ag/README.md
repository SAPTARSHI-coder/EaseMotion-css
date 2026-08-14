# Retro Terminal Typing Effect

A classic terminal-style typing effect created purely with CSS animations.

## Preview

Open `demo.html` in your browser. You will see a mock terminal window where text appears to be typed out character by character, complete with a blinking cursor at the end.

## Implementation Details

- **No JavaScript:** The typing animation is completely handled by CSS.
- **The `steps()` Function:** The key to the typing effect is the `steps()` timing function in the `@keyframes` animation. Unlike smooth transitions like `linear` or `ease`, `steps(n)` breaks the animation into `n` discrete jumps. By matching the number of steps to the number of characters (31 in this case), the text container's width jumps one character at a time.
- **The Cursor:** The blinking cursor is simply a `border-right` on the text element. A separate `blink` animation toggles its color to transparent using `step-end`, creating the flashing effect.
- **`white-space: nowrap` & `overflow: hidden`:** Essential properties to ensure the text stays on one line and doesn't wrap as the container width animates from `0` to `100%`.
