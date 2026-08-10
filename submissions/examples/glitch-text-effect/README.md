# CSS-Only Cyberpunk Glitch Text Effect

A high-energy, cyberpunk-style glitching animation for typography using advanced CSS clipping and shadows.

## Features
- Pure CSS implementation using pseudo-elements (`::before` and `::after`).
- Complex `@keyframes` animation utilizing `clip-path: polygon(...)` to randomly slice text clones.
- Paired with rapid `transform: translate()` shifts for a chaotic glitch look.
- Uses `data-text` attribute to sync content.
- Two variations:
  - Constant glitch effect.
  - Hover-only glitch effect.

## Usage

1. Include the CSS file.
2. Add the `.ease-glitch-text` class to your text element and provide the exact same text in the `data-text` attribute.

```html
<h1 class="ease-glitch-text" data-text="CYBERPUNK">CYBERPUNK</h1>
```

For a hover-only effect, add the `.ease-glitch-hover-only` class as well:

```html
<h1 class="ease-glitch-text ease-glitch-hover-only" data-text="HOVER ME">HOVER ME</h1>
```
