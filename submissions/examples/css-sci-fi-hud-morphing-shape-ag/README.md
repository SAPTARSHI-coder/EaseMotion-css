# CSS Sci-Fi HUD: Morphing Shape Variation

A mesmerizing, cyberpunk-inspired Head-Up Display (HUD) component featuring a fluid, morphing "AI Core" shape and strict geometric orbital rings.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript, SVGs, or Canvas.
- **Morphing Core Shape**: The central glowing energy core utilizes advanced, continuously shifting multi-value `border-radius` properties combined with `transform: rotate` to create a liquid, organic morphology.
- **Sci-Fi Aesthetic**: Juxtaposes the fluid, organic core with rigid geometric orbital rings, dashed borders, and targeting crosshairs—a staple contrast in modern cyberpunk UI design.
- **Micro-Interactions**: Features counter-rotating layers and depth via pseudo-elements and `mix-blend-mode: overlay` to give the 2D shapes a voluminous, glowing 3D feel.
- **Accessible & Responsive**: Acts as a semantic `region` with `aria-live` for status updates. Explicitly respects user preferences by gracefully disabling all morphing and rotation animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout.

```html
<div class="hud-wrapper">
  <!-- AI Core and Rings -->
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background grid color (default: `#020617`)
- `--core-color`: The primary neon energy color (default: `#38bdf8`)
- `--core-glow`: The ambient box-shadow glow color (default: `rgba(56, 189, 248, 0.6)`)
- `--ring-color`: The color of the targeting crosshairs and rings (default: `rgba(56, 189, 248, 0.2)`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge).
