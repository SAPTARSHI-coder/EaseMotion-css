# CSS Sci-Fi HUD: 3D Perspective Tilt Variation

A truly holographic Head-Up Display (HUD) component featuring hardware-accelerated 3D parallax depth and an ambient wobbling tilt animation.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or 3D libraries like Three.js.
- **Native 3D Parallax Depth**: Employs a deep CSS `perspective` wrapper and `transform-style: preserve-3d`. Each layer (the glass plate, the targeting corners, the text content) uses varying `translateZ` values to physically stack them in 3D space, creating stunning parallax as the element moves.
- **Ambient 3D Wobble**: Features a continuous, slow `rotateX` and `rotateY` keyframe animation that gives the interface a floating, holographic feel.
- **Micro-Interactions**: Hovering or focusing the HUD halts the ambient wobble (`animation: none`), smoothly squaring the interface up to face the user while simultaneously expanding the `translateZ` depth between layers to exaggerate the 3D effect.
- **Accessible & Responsive**: Built on a semantic `<a>` tag for flawless keyboard navigability. Explicitly respects user preferences by gracefully disabling all 3D rotations, ambient wobbling, and parallax expansions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout. Ensure the parent container has adequate space for the 3D transforms.

```html
<div class="hud-perspective-wrapper">
  <a href="#" class="hud-tilt-panel">
    <div class="hud-plate"></div>
    <!-- Layered Content -->
    <div class="hud-content">...</div>
  </a>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#020617`)
- `--hud-glow`: The primary holographic blue glow color (default: `rgba(56, 189, 248, 0.4)`)
- `--hud-bg`: The translucent background of the glass plate (default: `rgba(15, 23, 42, 0.6)`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS 3D transforms and `backdrop-filter` are fully hardware-accelerated.
