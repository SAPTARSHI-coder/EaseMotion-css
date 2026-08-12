# CSS Sci-Fi HUD: Diamond Facet Edge Variation

A pristine, high-tech Head-Up Display (HUD) component featuring crystalline, angled cuts and dynamic glare sweeps, built entirely with CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or SVG assets.
- **Diamond Facet Cuts**: Utilizes precise, mathematically aligned nested `clip-path` polygons to create a perfect, even 4px angled bevel border (chamfer). The outer facet acts as a gradient frame, while the inner facet acts as a recessed screen.
- **Dynamic Glass Glare**: Features a highly polished aesthetic using an angled `linear-gradient` that sweeps across the recessed screen to simulate a specular glare on crystal or glass.
- **Micro-Interactions**: Incorporates animated targeting brackets that pulse and expand outward upon hover/focus, while the entire component elevates and emits a bright cyan `drop-shadow`.
- **Accessible & Responsive**: Built on a semantic `<button>` tag for flawless keyboard navigability. Explicitly respects user preferences by gracefully disabling all pulsing, sweeping, and translating transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout. Ensure the component has adequate space to expand its drop-shadow on hover.

```html
<button class="diamond-hud">
  <div class="facet-inner">
    <!-- Targeting brackets and content -->
  </div>
</button>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#040d14`)
- `--facet-base`: The core crystalline blue color (default: `#0f527a`)
- `--facet-highlight`: The bright specular highlight color (default: `#a8e0ff`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS `clip-path: polygon()` and `filter: drop-shadow()` properties are fully supported universally.
