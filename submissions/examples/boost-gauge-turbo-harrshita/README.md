# Turbo Boost Gauge Component

A CSS‑only animated gauge that mimics a turbo boost meter. The needle sweeps back‑and‑forth to give a lively feel, while the surrounding gradient creates a high‑tech cockpit vibe.

## Features
- Pure CSS animation (no JavaScript)
- Responsive size (works on mobile & desktop)
- `prefers-reduced-motion` support – animation disables when users request reduced motion
- Glass‑like gradient dial with subtle inner shadows for depth

## Files
- `demo.html` – live demo with markup
- `style.css` – component styles and keyframes
- `README.md` – this documentation

## Usage
```html
<link rel="stylesheet" href="path/to/style.css" />
<div class="boost-gauge">
  <div class="gauge-dial"><div class="needle"></div></div>
  <div class="boost-level">BOOST 75%</div>
</div>
```

## Customisation
- Adjust the animation duration in `@keyframes boost-rotate` to speed up or slow down the sweep.
- Change the gradient colours in `.gauge-dial` for a different theme.
- Update the text in `.boost-level` to reflect your actual boost value.
