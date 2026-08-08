# Animated Gradient Text

Large typography where the text itself acts as a mask for a continuously animating, colorful gradient background.

## Preview

Open `demo.html` in your browser to see the rainbow colors flow seamlessly across the text.

## Implementation Details

- **No JavaScript:** The animation is powered completely by CSS `@keyframes`.
- **Background Clipping:** The most crucial property is `-webkit-background-clip: text` (and `background-clip: text`). This tells the browser to only render the background where the text characters are. The text `color` is set to `transparent` so the background shows through.
- **Continuous Flow:** The `background` is a wide linear gradient (`200%` width). The `@keyframes` animation smoothly shifts the `background-position` from `0%` to `200%` in an infinite loop, creating the illusion of flowing colors.
