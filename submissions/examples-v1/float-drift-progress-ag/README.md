# Float-Drift Progress Bar

Pure CSS progress bar with a continuous drifting gradient shimmer on the fill, for responsive dashboard layouts. Addresses #54191.

## Files
- `demo.html` — three example progress bars at different completion levels
- `style.css` — fill-in animation followed by an infinite drifting gradient, fully theme-able via CSS custom properties
- `README.md` — this file

## Usage
Open `demo.html`. Each `.progress-track` contains a `.progress-fill` with a modifier class (`--38`, `--63`, `--90`) setting `--progress-target`. On load, the bar fills to its target width, then the gradient inside it drifts continuously left.

To add a new bar at, say, 55%:
```html
<div class="progress-track" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-fill progress-fill--55" style="--progress-target: 55%;"></div>
</div>
```

## Customization
Exposed as CSS custom properties on `:root`:
- `--progress-track-bg` — track background color
- `--progress-fill-color` / `--progress-fill-color-alt` — the two gradient stops that create the drift shimmer
- `--progress-radius` — corner rounding
- `--progress-height` — bar height (auto-reduced on small viewports)
- `--progress-fill-duration` — how long the initial fill-in takes (default `0.8s`)
- `--progress-drift-duration` — how long one full drift cycle takes (default `2.4s`)

## Accessibility
- Each track uses `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` and an `aria-label`.
- Respects `prefers-reduced-motion: reduce` — both the fill-in and the drift animation are disabled, and the bar renders directly at its target width with a static gradient.

## Notes on scope
Fully responsive: bar height and container padding adjust at the 600px breakpoint. No JavaScript is used; the drift effect is a background-position keyframe loop on a gradient, distinct from the elastic overshoot approach used in the companion "Elastic-Slide" submission (#54187).