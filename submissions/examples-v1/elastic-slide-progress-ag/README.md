# Elastic-Slide Progress Bar

Pure CSS progress bar with an elastic overshoot fill animation, for responsive dashboard layouts. Addresses #54187.

## Files
- `demo.html` — three example progress bars at different completion levels
- `style.css` — elastic keyframe fill animation, fully theme-able via CSS custom properties
- `README.md` — this file

## Usage
Open `demo.html`. Each `.progress-track` contains a `.progress-fill` with a modifier class (`--45`, `--72`, `--100`) setting the `--progress-target` width. On load, the fill slides in, slightly overshoots, then settles at the target percentage.

To add a new bar at, say, 30%:
```html
<div class="progress-track" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-fill progress-fill--30" style="--progress-target: 30%;"></div>
</div>
```

## Customization
Exposed as CSS custom properties on `:root`:
- `--progress-track-bg` — track background color
- `--progress-fill-color` — fill color
- `--progress-radius` — corner rounding
- `--progress-height` — bar height (auto-reduced on small viewports)
- `--progress-duration` — animation duration (default `0.9s`)
- `--progress-easing` — timing function (default a bouncy cubic-bezier)

## Accessibility
- Each track uses `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` and an `aria-label`.
- Respects `prefers-reduced-motion: reduce` — the elastic animation is disabled and the fill jumps straight to its target width.

## Notes on scope
Fully responsive: bar height and container padding adjust at the 600px breakpoint for tablet/mobile. No JavaScript is used anywhere; the "elastic" overshoot is achieved purely with a multi-step `@keyframes` animation.