# CSS Sci-Fi HUD: Metallic Sheen Variation

A rugged, industrial cyberpunk Head-Up Display (HUD) component featuring heavy metallic textures, physical bevels, and an inset glowing radar screen.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or external image textures.
- **Metallic Sheen Animation**: Utilizes an angled `linear-gradient` on a pseudo-element that periodically sweeps across the UI, simulating a high-gloss reflection on brushed steel.
- **Industrial Aesthetic**: Recreates a heavy, armored terminal look using complex `box-shadow` layering for deep bevels, CSS-drawn metallic rivets, and a gritty background texture.
- **Micro-Interactions**: Features a fully CSS-animated radar sweep with a synced target "ping", along with CRT scanline overlays and pulsing danger text inside the deeply inset screen.
- **Accessible & Responsive**: Employs `aria-live` regions for dynamic status texts. Explicitly respects user preferences by gracefully disabling the sheen sweep, radar rotation, and pulsing animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout.

```html
<main class="metallic-hud-container">
  <div class="hud-screen">
    <!-- Screen contents and radar -->
  </div>
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--metal-dark`, `--metal-base`, `--metal-light`: The gradient stops for the metallic frame.
- `--screen-bg`: The dark background of the inset digital screen (default: `#001a1a`)
- `--screen-glow`: The primary cyan neon color (default: `#00ffcc`)
- `--alert-red`: The critical warning color (default: `#ff3333`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge).
