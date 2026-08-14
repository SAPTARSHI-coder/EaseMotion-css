# Glitch Text Effect

A cyberpunk-style text effect that glitches when hovered over using CSS animations and pseudo-elements.

## Preview

Open `demo.html` in your browser and hover over the text to see the glitch effect.

## Implementation Details

- **No JavaScript:** The animation is powered completely by CSS keyframes.
- **Pseudo-elements:** Uses `::before` and `::after` with slightly offset positions and distinct `text-shadow` colors (cyan and magenta).
- **CSS Clip:** Uses the `clip: rect(...)` property within keyframes to rapidly reveal and hide horizontal slivers of the text, creating a digital distortion effect.
