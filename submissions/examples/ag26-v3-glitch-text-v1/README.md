# CSS Glitch Text Hover Effect

A striking text hover effect that simulates a digital glitch using CSS `text-shadow` manipulation, `clip-path`, and rapid `@keyframes` animations, perfect for modern tech or gaming themes.

## Preview
Open `demo.html` in your browser. Hover over the text to see the glitch effect.

## Implementation
- Uses `.glitch-wrapper` and `.glitch-text`.
- The `::before` and `::after` pseudo-elements duplicate the text using `attr(data-text)`.
- On hover, these pseudo-elements use `clip-path` to cut out slices of text.
- `@keyframes` randomly shift the `clip-path` vertically to create a glitching animation.
- `text-shadow` in cyan and magenta provides the chromatic aberration effect.
