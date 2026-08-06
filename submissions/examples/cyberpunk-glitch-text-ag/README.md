# Cyberpunk Glitch Text Effect

A chaotic, futuristic text glitch animation created entirely with CSS.

## Preview

Open `demo.html` in your browser. You will see the word "CYBERPUNK" glitching, shaking, and displaying chromatic aberration (cyan/magenta color splitting) just like a broken digital display.

## Implementation Details

- **No JavaScript:** The glitch effect is entirely CSS-based.
- **Pseudo-Elements:** The effect relies on the `::before` and `::after` pseudo-elements. The `data-text` attribute on the `<h1>` tag is used to populate the `content` property of these pseudo-elements so they match the original text exactly.
- **Chromatic Aberration:** We create the RGB split effect by giving `::before` a magenta `text-shadow` and moving it slightly to the left, and `::after` a cyan `text-shadow` and moving it slightly to the right.
- **The Glitch (Clip-Path):** The core of the visual glitch is the `clip-path: inset()` property. We define two `@keyframes` animations that rapidly change the top/bottom inset values, effectively "slicing" the pseudo-elements horizontally at random intervals. When these sliced layers sit on top of the original text, it creates the broken screen effect.
