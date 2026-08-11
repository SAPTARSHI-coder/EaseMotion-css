# CSS Typing Text Effect

A realistic typewriter text animation effect created purely with CSS, complete with a blinking cursor.

## Preview

Open `demo.html` in your browser to watch the text type itself out on the screen and see the cursor blink continuously.

## Implementation Details

- **No JavaScript:** The typing effect is completely handled by CSS animations.
- **`steps()` Timing Function:** The core of the typing animation is the `steps()` timing function in CSS `@keyframes`. Instead of a smooth transition, `steps()` breaks the animation into discrete segments (matching the number of characters), causing the width of the container to jump character by character, perfectly simulating typing.
- **Blinking Cursor:** The right border of the text element acts as the cursor. A separate `@keyframes` animation toggles its color from transparent to the text color, creating the blinking effect using `step-end`.
