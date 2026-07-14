# Electric Toast

A pure CSS toast notification with a snappy "electric" entrance and a
pulsing glow, inspired by food delivery order-update patterns (order
confirmed, rider on the way, delay warning, payment failed). Zero
JavaScript — each toast is toggled by a real, keyboard-focusable
checkbox input.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Multi-step "electric" entrance: slide + scale pop, followed by a
     bright accent-colored glow pulse around the toast border
- ✅ Animated countdown progress bar along the bottom edge
- ✅ Four color variants: `success`, `info`, `warning`, `error`
- ✅ Fully keyboard operable — the trigger is a real checkbox, focusable
     and toggleable with `Tab` + `Space`, no pointer required
- ✅ `role="status"` + `aria-live="polite"` so screen readers announce
     the toast content when it appears
- ✅ Timing, easing, accent color, and countdown duration exposed as CSS
     custom properties
- ✅ Respects `prefers-reduced-motion`
- ✅ Responsive layout
- ✅ No external dependencies

## Files

```
electric-toast-ms07/
├── demo.html   # Standalone demo: 4 toast variants + a tuned example
├── style.css   # Component styles, glow keyframes, and countdown bar
└── README.md   # This file
```

## Usage

Include `style.css`, then pair a visually hidden checkbox with a trigger
label and the toast markup:

```html
<input type="checkbox" id="ease-toast-toggle-1" class="ease-toast-toggle" />
<label for="ease-toast-toggle-1" class="ease-toast-trigger">
  Simulate order confirmed
</label>

<div class="ease-toast ease-toast--success" role="status" aria-live="polite">
  <label for="ease-toast-toggle-1" class="ease-toast__close" aria-label="Dismiss notification">×</label>
  <span class="ease-toast__icon" aria-hidden="true">⚡</span>
  <div class="ease-toast__content">
    <p class="ease-toast__title">Order confirmed</p>
    <p class="ease-toast__message">Your order has been placed and is being prepared.</p>
  </div>
  <span class="ease-toast__progress"></span>
</div>
```

- The checkbox is the source of truth for open/closed state. It's kept in
  the DOM and in the tab order (visually hidden with a clip-based
  technique, not `display: none`), so keyboard users can `Tab` to it and
  press `Space` to open the toast — and press `Space` again (after
  tabbing back to it) to close it.
- The `×` close control is a `<label>` pointing at the same checkbox
  `id`, so clicking it unchecks the box and closes the toast. It's a
  pointer/touch convenience; keyboard users can also just return focus to
  the original toggle and press `Space`.
- Swap the modifier class (`ease-toast--success`, `--info`, `--warning`,
  `--error`) to change the accent color used for the icon, glow, and
  progress bar.

### Available variants

| Class                  | Accent color | Use case                     |
|--------------------------|----------------|----------------------------------|
| `ease-toast--success`  | Green        | Confirmations (order placed)     |
| `ease-toast--info`     | Blue         | Neutral updates (rider en route) |
| `ease-toast--warning`  | Yellow       | Cautions (possible delay)        |
| `ease-toast--error`    | Red          | Failures (payment declined)      |

## Customization

All motion and timing values are CSS custom properties, overridable
globally on `:root` or per-instance via inline `style`:

```html
<div
  class="ease-toast ease-toast--success"
  style="--ease-toast-duration: 900ms; --ease-toast-accent: #a855f7; --ease-toast-progress-duration: 6s;"
>
  ...
</div>
```

| Variable                         | Default                              | Description                             |
|-------------------------------------|------------------------------------------|----------------------------------------------|
| `--ease-toast-duration`            | `550ms`                                 | Entrance slide/pop animation duration         |
| `--ease-toast-easing`              | `cubic-bezier(0.16, 1, 0.3, 1)`          | Entrance easing curve                         |
| `--ease-toast-progress-duration`   | `4s`                                    | Duration of the countdown progress bar        |
| `--ease-toast-bg`                  | `#1a1a1a`                               | Toast background color                        |
| `--ease-toast-text`                | `#ffffff`                               | Primary text color                            |
| `--ease-toast-text-muted`          | `#c7c7c7`                               | Secondary text color                          |
| `--ease-toast-accent`              | `#ffd400` (overridden by variants)      | Icon, glow, and progress bar color            |
| `--ease-toast-radius`              | `12px`                                  | Toast corner radius                           |
| `--ease-toast-max-width`           | `300px`                                 | Maximum toast width                           |

## Accessibility

- The toggle is a native `<input type="checkbox">`, kept focusable and in
  the tab order — reachable and operable with the keyboard alone.
- `role="status"` and `aria-live="polite"` on the toast ensure assistive
  technology announces new toast content as it appears.
- The close control has an `aria-label` describing its action.
- A visible `:focus-visible` ring appears on the trigger button.
- All animation (entrance, glow pulse, progress bar) is disabled under
  `prefers-reduced-motion: reduce`, with the toast appearing instantly in
  its final state instead.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, `@keyframes`, the checkbox
`:checked` general sibling combinator, and `:focus-visible` — no vendor
prefixes required for modern browsers.

## Checklist

- [x] Uses EaseMotion CSS conventions (`ease-*` classes and keyframes)
- [x] Works without JavaScript (pure CSS)
- [x] Includes a live demo in `demo.html`
- [x] Includes `README.md`
- [x] Responsive and accessible