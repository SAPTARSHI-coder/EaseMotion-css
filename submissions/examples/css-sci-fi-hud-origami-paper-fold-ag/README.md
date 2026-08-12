# CSS Sci-Fi HUD: Origami Paper Fold Variation

A captivating, 3D-accelerated Head-Up Display (HUD) component featuring geometric flaps that physically fold and unfold in 3D space, mimicking a digital sci-fi puzzle box.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or external libraries.
- **True 3D CSS Mechanics**: Utilizes a deep `perspective` wrapper paired with `transform-style: preserve-3d` and precise `transform-origin` placements to fold 2D elements into a 3D pyramid structure.
- **Organic Breathing Animation**: When idle, the HUD rests at a tilted 45-degree isometric angle while its 4 triangular glass flaps run staggered `rotateX` and `rotateY` keyframes, giving it the appearance of a living, breathing artifact.
- **Micro-Interactions**: Hovering or focusing the HUD triggers a spring-like `cubic-bezier` transition where the container squares up to face the user, and all flaps unfold perfectly flat to reveal the glowing data core.
- **Accessible & Responsive**: Built on a semantic `<button>` tag for perfect keyboard navigability. Explicitly respects user preferences by gracefully disabling all 3D rotations and breathing animations via `@media (prefers-reduced-motion: reduce)`, rendering the component completely flat and expanded.

## Usage

Drop the HTML structure directly into your application layout. Ensure the parent container has adequate space for the 3D transforms.

```html
<div class="hud-perspective">
  <button class="origami-hud" aria-label="Expand Data Core">
    <div class="hud-core">...</div>
    <!-- 4 Flaps -->
  </button>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#0b0f19`)
- `--fold-color`: The primary RGB values for the glass folds and neon glow (default: `14, 165, 233` - Cyan)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS 3D transforms and `backdrop-filter` are fully hardware-accelerated.
