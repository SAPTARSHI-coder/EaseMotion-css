# CSS Sci-Fi HUD: Synthwave Grid Line Variation

A nostalgic, Outrun-inspired Head-Up Display (HUD) component featuring a classic 80s moving 3D grid and a sliced neon sun, built entirely with CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript, WebGL, or Canvas.
- **3D Infinite Grid**: Utilizes CSS `perspective`, `transform: rotateX`, and an infinitely looping `translateY` animation matching the `background-size` to create a flawless illusion of flying over an infinite neon grid.
- **Sliced Neon Sun**: Recreates the iconic Synthwave sun using a `linear-gradient` background combined with a complex `-webkit-mask-image` gradient to punch out progressively thicker horizontal gaps.
- **Vibrant Sci-Fi Aesthetic**: Showcases high-contrast neon cyan, pink, and purple glows combined with italicized, heavy typography typical of 80s retro-futurism.
- **Accessible & Responsive**: Employs `aria-live` regions for dynamic status texts. Explicitly respects user preferences by gracefully disabling the infinite grid motion and sun pulsing animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout.

```html
<main class="synthwave-hud">
  <!-- Sun and Grid -->
  <div class="synth-sun"></div>
  <div class="synth-grid-container">
    <div class="synth-grid"></div>
  </div>
  
  <!-- UI Overlays -->
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#050117`)
- `--neon-pink`: The primary sun and accent color (default: `#ff007f`)
- `--neon-cyan`: The primary text and grid glow color (default: `#00f0ff`)
- `--neon-purple`: The structural border and shadow color (default: `#9d00ff`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS `-webkit-mask-image` property is fully supported across all modern web engines for advanced masking.
