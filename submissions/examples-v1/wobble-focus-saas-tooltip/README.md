# Wobble-Focus SaaS Tooltip

A pure CSS tooltip that combines a springy "wobble" entrance animation with
a clean, modern SaaS product aesthetic — white surface, soft shadow,
accent-colored top border, and a directional caret. Triggered on hover
**and** keyboard focus — zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Springy "wobble" entrance (scale + rotation overshoot that settles)
- ✅ Clean SaaS styling: white surface, soft layered shadow, accent border,
     directional caret
- ✅ Keyboard accessible — shows on `:focus-within` as well as `:hover`,
     with a visible `:focus-visible` ring on the trigger
- ✅ Four placement variants: top, bottom, left, right
- ✅ Timing, easing, scale, distance, and accent color exposed as CSS
     custom properties for per-instance tuning
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
wobble-focus-saas-tooltip/
├── demo.html   # Standalone demo: pricing-card context + placement gallery
├── style.css   # Component styles, SaaS surface, and wobble keyframes
└── README.md   # This file
```

## Usage

Include `style.css`, then wrap a focusable trigger and the tooltip bubble
in a `.sst-tooltip` container:

```html
<div class="sst-tooltip sst-tooltip--top">
  <button class="sst-trigger sst-trigger--icon" type="button" aria-describedby="sst-tip-1">?</button>
  <span class="sst-tooltip__content" id="sst-tip-1" role="tooltip">
    Create as many projects as your team needs, with no hard cap.
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
| `sst-tooltip--top`     | Above the trigger, caret points down  |
| `sst-tooltip--bottom`  | Below the trigger, caret points up    |
| `sst-tooltip--left`    | Left of the trigger, caret points right |
| `sst-tooltip--right`   | Right of the trigger, caret points left |

## Customization

All motion and surface values are CSS custom properties, overridable
globally on `:root` or per-instance via inline `style` — including the
accent color, so the tooltip matches any product's brand palette:

```html
<div class="sst-tooltip sst-tooltip--top"
     style="--sst-duration: 800ms; --sst-scale: 1.12; --sst-accent: #16a34a;">
  ...
</div>
```

| Variable          | Default                                                          | Description                          |
|--------------------|---------------------------------------------------------------------|------------------------------------------|
| `--sst-duration`  | `520ms`                                                            | Total entrance animation duration        |
| `--sst-delay`     | `60ms`                                                             | Delay before the wobble starts           |
| `--sst-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`                                | Springy overshoot easing curve           |
| `--sst-scale`     | `1.06`                                                             | Peak overshoot scale during the wobble   |
| `--sst-distance`  | `9px`                                                              | Travel distance from the trigger         |
| `--sst-bg`        | `#ffffff`                                                          | Tooltip surface background               |
| `--sst-accent`    | `#4f46e5`                                                          | Accent color (top border + caret)        |
| `--sst-border`    | `#e5e7eb`                                                          | Tooltip border color                     |
| `--sst-radius`    | `8px`                                                              | Tooltip corner radius                    |
| `--sst-shadow`    | `0 10px 24px -6px rgba(17,24,39,.18), 0 2px 6px rgba(17,24,39,.06)` | Drop shadow beneath the tooltip          |
| `--sst-max-width` | `220px`                                                            | Maximum tooltip width                    |

## Accessibility

- Tooltip triggers are real, focusable elements — reachable and
  operable with `Tab` alone.
- `:focus-within` shows the tooltip for keyboard users, mirroring the
  `:hover` behavior for mouse users.
- A visible `:focus-visible` ring is applied to the trigger.
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

Uses standard CSS custom properties, `@keyframes`, and `:focus-within` —
no vendor prefixes required for modern browsers.

## Checklist

- [x] Pure CSS implementation, zero JavaScript
- [x] Wobble-focus interaction transition
- [x] SaaS Showcase aesthetic
- [x] Fully responsive
- [x] Keyboard accessible
- [x] Custom parameters exposed via CSS custom properties