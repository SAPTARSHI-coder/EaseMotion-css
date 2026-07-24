# CSS Fade-In Feature Grid — Accessible Web Layout

A pure CSS feature grid where cards fade in and rise slightly into place, a simple, unobtrusive entrance suited to content-heavy accessible layouts.

## CSS Custom Properties

| Property                    | Default    | Description                    |
|---------------------------------|--------------|--------------------------------------|
| `--ease-grid-fade-duration`   | `0.6s`        | Duration of the fade-in transition   |
| `--ease-grid-fade-easing`     | `ease-out`    | Easing curve for the transition      |
| `--ease-grid-bg`              | `#ffffff`     | Card background color                 |
| `--ease-grid-border`          | `#d1d5db`     | Card border color                     |
| `--ease-grid-accent`          | `#1d4ed8`     | Accent color (focus ring)             |
| `--ease-grid-text`            | `#111827`     | Title text color                      |
| `--ease-grid-focus-ring`      | `#1d4ed8`     | Focus outline color                   |

## Usage

```html
<div class="ease-feature-card is-visible" tabindex="0">
  <div class="ease-feature-card__title">Keyboard First</div>
</div>
```

Add the `is-visible` class to trigger the fade-in transition.

## Accessibility

- Cards are `tabindex="0"` and use `:focus-within` for a visible focus outline.
- Bold 2px border ensures visibility beyond color contrast alone.
- Grid collapses to a single column below 480px for mobile readability.
- `prefers-reduced-motion: reduce` removes the rise transform, keeping only a simple opacity fade.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing via CSS custom properties, matching the framework's zero-JS-overhead, animation-first philosophy.
