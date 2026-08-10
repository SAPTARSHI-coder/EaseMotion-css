# CSS Noise Grain Effect

A pure CSS texture overlay that utilizes a data-URI encoded SVG `<feTurbulence>` filter to create a trendy, dynamic film-grain aesthetic commonly seen in high-end modern web designs.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Does not even require an inline HTML `<svg>` element; the SVG is completely encapsulated as a base64/URL-encoded `background-image` within the stylesheet.
- **Dynamic Film Grain Animation**: The pseudo-element generating the noise is scaled to 200% and rapidly translated across X and Y axes using a stepped `@keyframes` animation, creating the illusion of organic, flickering film grain.
- **Grayscale Filtering**: Utilizes `<feColorMatrix type="saturate" values="0">` internally within the SVG filter to ensure the grain remains neutral and doesn't introduce unwanted colored pixels.
- **Mix Blend Mode**: Utilizes `mix-blend-mode: overlay` to blend the grain smoothly with the underlying gradients and background colors, ensuring it looks tactile rather than just "dusty."
- **Accessible & Responsive**: Fully supports keyboard navigation. Respects user preferences by gracefully disabling the rapid translation animation and leaving a clean, static texture overlay via `@media (prefers-reduced-motion: reduce)`.

## Usage

Apply the `.noise-overlay-container` class to any wrapper element. Ensure the wrapper has `overflow: hidden` and `position: relative` so the 200%-sized pseudo-element remains contained.

```html
<div class="noise-overlay-container">
  <!-- Ensure content has position: relative and z-index to sit properly with the noise -->
  <div class="card-content">
    <h2>Trendy Grain</h2>
    <p>Texture generated purely with CSS and SVG filters.</p>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the layout using the root variables in `style.css`:
- `--bg-color`: Page background color (default: `#0f172a`)
- `--card-bg`: Card background color (default: `#1e293b`)
- `--grain-opacity`: The intensity of the noise overlay (default: `0.12`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
