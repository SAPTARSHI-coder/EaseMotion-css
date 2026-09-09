# CSS Sci-Fi HUD: Minimalist Outline Variation

A sleek, aerospace-inspired Head-Up Display (HUD) component featuring ultra-thin geometric borders, negative space, and elegant typography.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or heavy image assets.
- **Chamfered 1px Outline**: Utilizes a dual `clip-path` technique on `::before` and `::after` pseudo-elements. The outer pseudo-element acts as the border color, while an `inset: 1px` inner pseudo-element acts as a solid mask. This perfectly simulates vector-drawn chamfered geometric borders purely in CSS without using SVG.
- **Minimalist Aesthetics**: Emphasizes negative space, ultra-thin font weights, and high-contrast glowing accents over noisy, cluttered designs.
- **Micro-Interactions**: Features a continuously sweeping vertical scan line across an animated data graph (simulated using `transform: scaleY` and `animation-delay` staggered bars), along with a blinking alert state.
- **Accessible & Responsive**: Employs `aria-live` regions for dynamic status texts. Explicitly respects user preferences by gracefully disabling the scanning sweeps, equalizer scaling, and alert blinking via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout.

```html
<main class="hud-outline-container">
  <!-- Status headers, graphs, and data lists -->
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep aerospace background color (default: `#000000`)
- `--outline-color`: The thin base border color (default: `rgba(255, 255, 255, 0.15)`)
- `--accent-color`: The primary glowing accent color (default: `#0ea5e9`)
- `--alert-color`: The blinking warning color (default: `#f97316`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS `clip-path: polygon()` property is fully supported universally.
