# CSS Sci-Fi HUD: Retro Arcade Pixel Variation

A nostalgic, cyberpunk-inspired Head-Up Display (HUD) component styled as a classic 8-bit/16-bit arcade monitor, built entirely with CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or external SVGs.
- **The "Missing Pixel" Border Trick**: Generates authentic 8-bit "cut" corners by strategically overlapping `::before` and `::after` pseudo-elements with thick solid borders, eliminating the need for complex `clip-path` calculations or data URIs.
- **Sci-Fi Aesthetic**: Incorporates classic terminal UI elements including a flashing block cursor (`step-end` keyframes), a repeating-linear-gradient CRT scanline background, and segmented "chunky" health bars.
- **Micro-Interactions**: Features subtle, hardware-accelerated opacity flickering on the main HUD container to simulate an aging arcade CRT monitor. 
- **Accessible & Responsive**: Employs `role="meter"` and `aria-valuenow` on the visual data bars for perfect screen reader translation. Explicitly respects user preferences by gracefully disabling all CRT flickering and blinking cursor animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout.

```html
<main class="pixel-hud">
  <!-- Status bars and terminal output -->
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background grid color (default: `#050510`)
- `--pixel-green`: The primary neon terminal color (default: `#39ff14`)
- `--pixel-dark`: The empty/depleted bar color (default: `#0a2e0a`)
- `--pixel-red`: The critical warning color (default: `#ff003c`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge).
