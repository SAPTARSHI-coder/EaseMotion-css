# Water Drop Ripple — SCSS Animation Mixin

## Description
A ripple animation simulating a water drop — an expanding, fading ring emanating outward from a fixed point. Hardware-accelerated using only `transform: scale()` and `opacity` (no layout-triggering properties), verified smooth at 60fps in testing.

## Files
- `_water-drop-ripple.scss` — the SCSS mixin + `@keyframes` + utility class (proposed for `core/animations.css`)
- `style.css` — plain CSS compiled output of the SCSS above, used by `demo.html` so it works with zero build step
- `demo.html` — live demo (click either circle to replay the ripple)
- `README.md` — this file

## Mixin: `ease-water-drop-ripple`

### Parameters
| Parameter | Type | Default | Description |
|---|---|---|---|
| `$duration` | Time | `var(--ease-duration, 1.2s)` | Animation duration |
| `$timing` | String | `var(--ease-timing, ease-out)` | Timing function |
| `$iteration` | Number | `1` | Number of times the ripple plays |

### Usage (SCSS)
```scss
@import 'water-drop-ripple';

.my-ripple {
  @include ease-water-drop-ripple();
}

.my-custom-ripple {
  @include ease-water-drop-ripple($duration: 1.8s, $timing: ease-in-out);
}
```

### Usage (utility class, no SCSS build needed)
```html
<div class="ripple-ring ease-anim-water-drop-ripple"></div>
```
Override timing per-instance via CSS custom properties:
```html
<div class="ripple-ring ease-anim-water-drop-ripple" style="--ease-duration: 2s; --ease-timing: ease-in-out;"></div>
```

## Acceptance criteria coverage
- ✅ `@keyframes ease-water-drop-ripple` defined
- ✅ `ease-anim-water-drop-ripple` utility class provided
- ✅ Configurable via `--ease-duration` / `--ease-timing` custom properties
- ✅ `@media (prefers-reduced-motion: reduce)` override included
- ✅ Hardware-accelerated: only `transform` and `opacity` are animated
- ✅ Smooth performance — no layout/paint-triggering properties used

## Note on placement
Per the issue, this is proposed for integration into `core/animations.css`. Per this repository's contribution guidelines (only the maintainer merges into `core/`), this PR submits the mixin, compiled CSS, and demo to `submissions/scss/` for review — the maintainer can fold it into core directly if approved.