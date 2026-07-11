# Tada-Click Accessible Tooltip

A pure CSS tooltip with a playful "tada" pop-and-wiggle entrance —
scale up, wiggle side-to-side a few times, settle flat — triggered by
clicking the trigger (which moves keyboard focus to it) and styled for
high-contrast, accessible web interfaces. Zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ "Tada" entrance: scale + alternating rotation wiggle that settles,
     classic playful pop animation
- ✅ Click-triggered via `:focus-within` (clicking a button focuses it),
     with `:hover` also supported as a courtesy for mouse users
- ✅ High-contrast, accessible styling: black/white surface, bold visible
     focus ring, minimum 44×44px touch targets (WCAG 2.5.5)
- ✅ Keyboard accessible — reachable and operable with `Tab` alone, no
     mouse required
- ✅ Four placement variants: top, bottom, left, right
- ✅ Timing, easing, scale, and rotation amount exposed as CSS custom
     properties for per-instance tuning
- ✅ Respects `prefers-reduced-motion` and `prefers-contrast: more`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
tada-click-accessible-tooltip/
├── demo.html   # Standalone demo with all placements and a tuned variant
├── style.css   # Component styles, accessible surface, and tada keyframes
└── README.md   # This file
```

## Usage

Include `style.css`, then wrap a focusable trigger and the tooltip bubble
in a `.tct-tooltip` container:

```html
<div class="tct-tooltip tct-tooltip--top">
  <button class="tct-trigger" type="button" aria-describedby="tct-tip-1">
    Click me
  </button>
  <span class="tct-tooltip__content" id="tct-tip-1" role="tooltip">
    Tooltip pops above the trigger on click or focus.
  </span>
</div>
```

- The trigger must be a real, focusable element (`<button>`, `<a>`, etc.)
  so clicking it — or Tab-ing to it — both work identically.
- Link the trigger and tooltip with `aria-describedby` / a matching `id`
  so screen readers announce the tooltip content.
- The tooltip stays in the accessibility tree at all times (hidden via
  `opacity` + `pointer-events`, never `display: none` or
  `visibility: hidden`), so `aria-describedby` keeps working regardless of
  visual state.
- The tooltip dismisses automatically when focus (or hover) leaves the
  trigger — click elsewhere or Tab away to close it.

### Placement variants

| Class                  | Position               |
|-------------------------|--------------------------|
| `tct-tooltip--top`     | Above the trigger        |
| `tct-tooltip--bottom`  | Below the trigger        |
| `tct-tooltip--left`    | Left of the trigger       |
| `tct-tooltip--right`   | Right of the trigger      |

## Customization

All motion values are CSS custom properties, overridable globally on
`:root` or per-instance via inline `style`:

```html
<div class="tct-tooltip tct-tooltip--top"
     style="--tct-duration: 900ms; --tct-scale: 1.18; --tct-rotate: 5deg;">
  ...
</div>
```

| Variable          | Default    | Description                                   |
|--------------------|--------------|--------------------------------------------------|
| `--tct-duration`  | `700ms`    | Total tada animation duration                     |
| `--tct-delay`     | `0ms`      | Delay before the animation starts                 |
| `--tct-easing`    | `ease-in-out` | Overall animation easing                       |
| `--tct-scale`     | `1.1`      | Peak scale reached during the wiggle              |
| `--tct-rotate`    | `3deg`     | Rotation amount for each wiggle step              |
| `--tct-bg`        | `#000000`  | Tooltip background color                          |
| `--tct-text`      | `#ffffff`  | Tooltip text color                                |
| `--tct-border`    | `#ffffff`  | Tooltip border color                              |
| `--tct-accent`    | `#ffd400`  | Focus ring color                                  |
| `--tct-radius`    | `6px`      | Tooltip corner radius                             |
| `--tct-max-width` | `240px`    | Maximum tooltip width                             |
| `--tct-min-target`| `44px`     | Minimum trigger touch target size (WCAG 2.5.5)    |

## Accessibility

- Tooltip triggers are real, focusable elements — reachable and operable
  with `Tab` alone; no pointer required.
- The tooltip appears on `:focus-within` (covers both click-to-focus and
  keyboard Tab) and on `:hover` as a courtesy for mouse users.
- Triggers meet the WCAG 2.5.5 minimum target size of 44×44px.
- A bold, high-contrast `:focus-visible` ring is applied and never
  suppressed, since focus is this component's primary interaction signal.
- The tooltip content is linked via `aria-describedby` and `role="tooltip"`
  and is never removed from the accessibility tree.
- Colors meet high-contrast expectations (black/white with a
  high-visibility accent), and border widths increase under
  `prefers-contrast: more`.
- All animation collapses to an instant state change under
  `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, `:focus-within`, and
`:focus-visible` — no vendor prefixes required for modern browsers.

## Checklist

- [x] Pure CSS implementation, zero JavaScript
- [x] Tada-Click interaction transition
- [x] Accessible Web aesthetic (high contrast, large touch targets, visible focus)
- [x] Fully responsive
- [x] Keyboard accessible
- [x] Custom parameters exposed via CSS custom properties