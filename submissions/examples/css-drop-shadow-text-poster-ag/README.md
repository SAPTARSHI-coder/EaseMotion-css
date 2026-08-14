# CSS Drop Shadow Text Poster

A striking, retro-inspired poster typography layout relying entirely on CSS layered `text-shadow` properties to create deep, colorful 3D text effects.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes multiple comma-separated CSS `text-shadow` declarations.
- **Layered 3D Shadows**: By stacking hard-edged shadows (`0` blur radius) with increasing offsets, the text appears to have physical depth protruding off the page.
- **Interactive Hover State**: Hovering over the typography smoothly pushes the text up and out (`translate`), while dynamically expanding the shadow offset gaps to exaggerate the 3D depth, complete with a bouncy `cubic-bezier` timing function.
- **Responsive Typography**: Uses CSS `clamp()` functions for the font sizes, ensuring the poster scales perfectly from giant desktop displays down to narrow mobile screens without breaking the layout.
- **Accessible & Responsive**: Fully supports keyboard navigation and screen readers using appropriate `aria-label`s on disjointed text blocks. Respects user preferences by gracefully disabling the spatial translation and shadow expansion animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Simply drop the HTML structure into your layout. The layered shadow technique works best on thick, heavy font weights (like Impact or Arial Black).

```html
<div class="poster-container">
  <h1 class="poster-text">
    <span style="display: block;">Giant</span>
    <span style="display: block;">Poster</span>
  </h1>
  <h2 class="poster-subtext">Subheading</h2>
</div>
```

## CSS Custom Properties
Easily customize the vibrant color scheme using the root variables in `style.css`:
- `--bg-color`: Background poster color (default: `#fde047`)
- `--text-primary`: Primary text fill color (default: `#1e3a8a`)
- `--shadow-1`: First shadow layer color (default: `#ef4444`)
- `--shadow-2`: Second shadow layer color (default: `#3b82f6`)
- `--shadow-3`: Third shadow layer color (default: `#10b981`)
- `--shadow-4`: Base shadow layer color (default: `#000000`)
- `--font-poster`: Font stack for the poster typography (default: `"Impact", "Arial Black"`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
