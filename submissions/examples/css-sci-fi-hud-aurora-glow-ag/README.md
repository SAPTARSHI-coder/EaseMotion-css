# CSS Sci-Fi HUD: Aurora Glow Variation

A sleek, cyberpunk-inspired Head-Up Display (HUD) component featuring hardware-accelerated "Aurora Glow" gradient animations and scanline aesthetics.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or external image assets (SVGs/pngs).
- **Aurora Glow Effect**: Utilizes an animated, oversized `linear-gradient` running on a pseudo-element behind a solid mask to create a continuously shifting, multicolored neon border (Teal, Indigo, Pink).
- **Sci-Fi Aesthetic**: Incorporates classic cyberpunk UI elements including decorative corner brackets, a static repeating-linear-gradient CRT scanline overlay, and monospace typography.
- **Micro-Interactions**: Features a pulsing status indicator and continuous light-sweep animations clipping through the data bars.
- **Accessible & Responsive**: Employs `backdrop-filter` for a modern glassmorphism feel on supported browsers. Acts as a semantic `region` with `aria-live` for status updates. Explicitly respects user preferences by gracefully disabling all background shifting, sweeps, and pulsing animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application.

```html
<div class="hud-container">
  <!-- Content -->
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#030712`)
- `--aurora-1`: The first gradient color (default: `#2dd4bf`)
- `--aurora-2`: The second gradient color (default: `#818cf8`)
- `--aurora-3`: The third gradient color (default: `#f472b6`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The `backdrop-filter` property ensures a premium glass effect on supported clients.
