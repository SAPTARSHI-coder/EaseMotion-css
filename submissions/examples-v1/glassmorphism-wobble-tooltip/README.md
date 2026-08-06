# Wobble-Focus Glass Tooltip

A pure CSS tooltip that combines a springy "wobble" entrance animation with
a glassmorphism visual style (frosted blur, translucent surface, soft
shadow). Triggered on hover **and** keyboard focus — zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Springy "wobble" entrance (scale + rotation overshoot that settles)
- ✅ Glassmorphism styling: `backdrop-filter` blur, translucent surface,
     soft shadow, subtle border
- ✅ Keyboard accessible — shows on `:focus-within` as well as `:hover`,
     with a visible `:focus-visible` ring on the trigger
- ✅ Four placement variants: top, bottom, left, right
- ✅ Timing, easing, scale, and travel distance exposed as CSS custom
     properties for per-instance tuning
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
wobble-focus-glass-tooltip/
├── demo.html   # Standalone demo with all placements and a tuned variant
├── style.css   # Component styles, glass surface, and wobble keyframes
└── README.md   # This file
```

## Usage

Include `style.css`, then wrap a focusable trigger and the tooltip bubble
in a `.wft-tooltip` container:

```html
<div class="wft-tooltip wft-tooltip--top">
  <button class="wft-trigger" type="button" aria-describedby="wft-tip-top">
    Hover / Focus
  </button>
  <span class="wft-tooltip__content" id="wft-tip-top" role="tooltip">
    Tooltip positioned above the trigger.
  </span>
</div>
```

- The trigger must be a naturally focusable element (`<button>`, `<a>`,
  etc.) so the tooltip is reachable via keyboard `Tab`.
- Link the trigger and tooltip with `aria-describedby` / a matching `id` so
  screen readers announce the tooltip content.
- The tooltip stays in the accessibility tree at all times (it's hidden via
  `opacity` + `pointer-events`, never `display: none` or
  `visibility: hidden`), so `aria-describedby` keeps working regardless of
  visual state.

### Placement variants

| Class                  | Position               |
|-------------------------|--------------------------|
| `wft-tooltip--top`     | Above the trigger        |
| `wft-tooltip--bottom`  | Below the trigger        |
| `wft-tooltip--left`    | Left of the trigger       |
| `wft-tooltip--right`   | Right of the trigger      |

## Customization

All motion and surface values are CSS custom properties, overridable
globally on `:root` or per-instance via inline `style`:

```html
<div class="wft-tooltip wft-tooltip--top"
     style="--wft-duration: 800ms; --wft-scale: 1.15; --wft-distance: 14px;">
  ...
</div>
```

| Variable          | Default                                | Description                              |
|--------------------|------------------------------------------|---------------------------------------------|
| `--wft-duration`  | `550ms`                                 | Total entrance animation duration            |
| `--wft-delay`     | `80ms`                                  | Delay before the wobble starts               |
| `--wft-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`     | Springy overshoot easing curve               |
| `--wft-scale`     | `1.05`                                  | Peak overshoot scale during the wobble       |
| `--wft-distance`  | `10px`                                  | Travel distance from the trigger             |
| `--wft-bg`        | `rgba(255, 255, 255, 0.16)`             | Glass surface background                     |
| `--wft-border`    | `rgba(255, 255, 255, 0.35)`             | Glass surface border color                   |
| `--wft-blur`      | `14px`                                  | Backdrop blur radius                         |
| `--wft-radius`    | `10px`                                  | Tooltip corner radius                        |
| `--wft-shadow`    | `0 8px 32px rgba(31, 38, 135, 0.25)`    | Drop shadow beneath the glass surface        |
| `--wft-max-width` | `220px`                                 | Maximum tooltip width                        |

## Accessibility

- Tooltip triggers are real, focusable elements — reachable and
  operable with `Tab` alone.
- `:focus-within` shows the tooltip for keyboard users, mirroring the
  `:hover` behavior for mouse users.
- A visible `:focus-visible` outline is applied to the trigger.
- The tooltip content is linked via `aria-describedby` and `role="tooltip"`
  and is never removed from the accessibility tree.
- All animation collapses to an instant state change under
  `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, `:focus-within`, and
`backdrop-filter`. `backdrop-filter` requires the `-webkit-` prefix on
Safari, which is included in `style.css`.

## Checklist

- [x] Pure CSS implementation, zero JavaScript
- [x] Wobble-focus interaction transition
- [x] Glassmorphism aesthetic
- [x] Fully responsive
- [x] Keyboard accessible
- [x] Custom parameters exposed via CSS custom properties