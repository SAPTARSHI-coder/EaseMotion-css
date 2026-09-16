# Multistep Progress Stepper

A horizontal progress stepper for multi-step flows (checkout, onboarding,
signup wizards) featuring a pulsing glow ring on the active step and a
smooth color-fill animation on the connecting line as steps complete.

## ✨ Features

- Pure CSS-driven visuals — connectors, circles, and glow ring are all CSS;
  the demo's "Next / Back" buttons use a small amount of vanilla JS purely
  to toggle state classes (no framework, no dependency)
- Active step gets a pulsing glow ring (independent `::after` pseudo-element
  animation, so it doesn't fight with the circle's own scale transition)
- Connector lines fill with color via a `scaleX(0) → scaleX(1)` transform
  transition as a step is marked complete
- Completed steps swap their number for a checkmark with a small
  scale/rotate transition
- Dark mode support (`data-theme="dark"` or OS `prefers-color-scheme`)
- Fully responsive — circle size, connector position, and labels scale
  down on small viewports (labels hide below 400px to save space)
- Respects `prefers-reduced-motion` (glow pulse becomes a static ring,
  all transitions collapse to near-instant)
- BEM-style class naming, namespaced under `ease-*`

## 📦 Files

| File        | Purpose                                                         |
| ----------- | ------------------------------------------------------------------ |
| `demo.html` | Showcase page — a 5-step checkout stepper with Next/Back controls |
| `style.css` | The reusable component styles + demo page styles                  |
| `README.md` | This file                                                          |

## 🚀 Usage

Build the stepper as a list of `.ease-stepper__item`s inside `.ease-stepper`.
Each item (except the first) includes a connector line before its circle.
State is controlled with two modifier classes:

- `.ease-stepper__item--active` — the current step (glowing ring)
- `.ease-stepper__item--completed` — a finished step (checkmark + filled
  connector). Items with neither class are treated as upcoming/untouched.

```html
<nav class="ease-stepper" aria-label="Checkout progress">
  <div class="ease-stepper__item ease-stepper__item--completed" data-step="1">
    <div class="ease-stepper__connector">
      <div class="ease-stepper__connector-fill"></div>
    </div>
    <div class="ease-stepper__circle">
      <span class="ease-stepper__number">1</span>
      <span class="ease-stepper__check" aria-hidden="true">✓</span>
    </div>
    <span class="ease-stepper__label">Cart</span>
  </div>

  <div class="ease-stepper__item ease-stepper__item--active" data-step="2">
    <div class="ease-stepper__connector">
      <div class="ease-stepper__connector-fill"></div>
    </div>
    <div class="ease-stepper__circle" aria-current="step">
      <span class="ease-stepper__number">2</span>
      <span class="ease-stepper__check" aria-hidden="true">✓</span>
    </div>
    <span class="ease-stepper__label">Shipping</span>
  </div>

  <!-- Additional .ease-stepper__item elements for remaining steps -->
</nav>
```

To advance the stepper, toggle the modifier classes on each item (see
`demo.html` for a complete working example that moves through 5 steps
with Next/Back buttons).

## 🎨 Customization

All colors and timing are exposed as CSS custom properties on `:root`:

```css
:root {
  --ease-stepper-track: #e5e7eb;
  --ease-stepper-track-fill: #4f46e5;
  --ease-stepper-active-bg: #4f46e5;
  --ease-stepper-active-glow: rgba(79, 70, 229, 0.45);
  --ease-stepper-done-bg: #4f46e5;
  --ease-stepper-duration: 420ms;
  --ease-stepper-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Dark mode

Activates automatically via `prefers-color-scheme: dark`, or can be forced:

```html
<html data-theme="dark">
```

## ♿ Accessibility

- The stepper is wrapped in a `<nav aria-label="Checkout progress">` so
  assistive tech announces it as a landmark.
- The active step's circle carries `aria-current="step"`.
- Checkmarks and step numbers are visually swapped, not removed from the
  DOM, so screen readers relying on text nodes still have access to the
  step number.
- Users with `prefers-reduced-motion: reduce` get a static glow ring
  instead of the pulsing animation, and all transitions collapse to
  near-instant.

## 📱 Responsive Behavior

Circle size and connector position scale down at `max-width: 560px`, and
step labels are hidden below `400px` to keep the stepper from feeling
cramped on small phones — the circles, connectors, and glow ring remain
fully visible and functional at every width.

## 🧪 Browser Support

Uses standard CSS only — custom properties, `@keyframes`, `transform`,
and `::after` pseudo-elements — all supported in current versions of
Chrome, Firefox, Safari, and Edge.