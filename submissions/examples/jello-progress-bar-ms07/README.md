# Jello Progress Bar

A dark-mode progress bar that fills to its target width, then wobbles
like jello as it settles into place. A two-step animation — grow, then
jiggle — built with pure CSS and zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Two-step animation: `ease-progress-grow` (width fill) followed by
     `ease-progress-jello` (skewX/skewY wobble that decays to rest),
     chained via `animation-delay`
- ✅ Dark-mode styling: deep background, dark track, glowing neon fill
- ✅ Four color variants: default (cyan), `success`, `warning`, `danger`
- ✅ Fill target, durations, easing, color, and glow all exposed as CSS
     custom properties
- ✅ `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax`
     for screen reader support
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
jello-progress-bar-ms07/
├── demo.html   # Standalone demo: 4 color variants + a tuned example
├── style.css   # Component styles and the two-step jello animation
└── README.md   # This file
```

## Usage

Include `style.css`, then set `--ease-target` to the percentage you want
the bar to fill to, and mirror that value in the `aria-*` attributes:

```html
<div
  class="ease-progress-bar"
  role="progressbar"
  aria-valuenow="72"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Download progress"
  style="--ease-target: 72%;"
>
  <div class="ease-progress-bar__fill"></div>
</div>
```

On page load, `.ease-progress-bar__fill` grows from `0%` to
`--ease-target` over `--ease-fill-duration`, then plays the jello wobble
once it arrives — giving the sense of the bar "settling" into its final
value rather than just stopping abruptly.

### Color variants

```html
<div class="ease-progress-bar ease-progress-bar--success" style="--ease-target: 100%;">
  <div class="ease-progress-bar__fill"></div>
</div>
```

| Class                              | Fill color | Use case                      |
|---------------------------------------|--------------|------------------------------------|
| `ease-progress-bar` (default)        | Cyan       | General progress                    |
| `ease-progress-bar--success`        | Green      | Completed, healthy states           |
| `ease-progress-bar--warning`        | Amber      | Approaching a limit                 |
| `ease-progress-bar--danger`         | Red/pink   | Critical, low, or over-limit states |

## Customization

All values are CSS custom properties, overridable globally on `:root` or
per-instance via inline `style`:

```html
<div
  class="ease-progress-bar"
  style="
    --ease-target: 90%;
    --ease-fill-duration: 1.8s;
    --ease-jello-duration: 1.1s;
    --ease-fill-color: #c084fc;
    --ease-glow-color: rgba(192, 132, 252, 0.55);
    --ease-height: 16px;
  "
>
  <div class="ease-progress-bar__fill"></div>
</div>
```

| Variable                 | Default                              | Description                                  |
|-----------------------------|------------------------------------------|---------------------------------------------------|
| `--ease-target`            | `60%`                                   | Final width the bar fills to                        |
| `--ease-fill-duration`     | `1.4s`                                  | Duration of the fill (grow) phase                   |
| `--ease-fill-easing`       | `cubic-bezier(0.22, 1, 0.36, 1)`         | Easing for the fill phase                           |
| `--ease-jello-duration`    | `900ms`                                 | Duration of the jello wobble phase                  |
| `--ease-track-color`       | `#1c2128`                               | Track background color                              |
| `--ease-fill-color`        | `#22d3ee`                               | Fill bar color                                      |
| `--ease-glow-color`        | `rgba(34, 211, 238, 0.5)`                | Glow color around the fill                          |
| `--ease-height`            | `12px`                                  | Track/fill height                                   |
| `--ease-radius`            | `999px`                                 | Corner radius                                       |

## Accessibility

- Each bar uses `role="progressbar"` with `aria-valuenow`,
  `aria-valuemin`, `aria-valuemax`, and `aria-label`, so assistive
  technology announces the current value and context.
- The jello wobble is a one-time settle-in effect, not a looping or
  distracting motion.
- Under `prefers-reduced-motion: reduce`, both animation phases are
  skipped entirely and the bar renders directly at its target width.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, and multiple
comma-separated `animation-*` values on a single element — no vendor
prefixes required for modern browsers.

## Checklist

- [x] Uses EaseMotion CSS conventions (`ease-*` classes and keyframes)
- [x] Works without JavaScript (pure CSS)
- [x] Multi-step animation (fill, then jello wobble)
- [x] Includes a live demo in `demo.html`
- [x] Includes `README.md`
- [x] Responsive and accessible