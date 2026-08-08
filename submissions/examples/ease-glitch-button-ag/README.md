# Cyberpunk Glitch Button

A futuristic button that exhibits a sharp "glitch" effect on hover, creating a cyberpunk aesthetic.

## Preview

Open `demo.html` in your browser and hover over the button to see the text glitch out with cyan and magenta aberrations.

## Implementation Details

- **No JavaScript:** The glitch effect is entirely powered by CSS animations.
- **Pseudo-elements:** The `::before` and `::after` pseudo-elements duplicate the button's text content. One is shifted slightly to the left with a cyan `text-shadow`, and the other is shifted slightly right with a magenta `text-shadow`.
- **Clip-Path Animation:** During the hover state, a `@keyframes` animation rapidly alters the `clip-path: inset(...)` property of the pseudo-elements. This masks out most of the duplicated text, only revealing thin, rapidly shifting horizontal slices that create the signature "glitch" aesthetic.
