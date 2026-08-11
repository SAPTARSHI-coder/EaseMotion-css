# CSS Skew-Active Feature Grid — Accessible Web Layout

A pure CSS feature grid where cards enter skewed and straighten into an active state, giving activation a strong, non-color-dependent visual cue.

## CSS Custom Properties

| Property                     | Default    | Description                        |
|---------------------------------|--------------|----------------------------------------|
| `--ease-grid-skew-duration`   | `0.5s`        | Duration of the skew/settle transition |
| `--ease-grid-skew-easing`     | `ease-out`    | Easing curve for the transition        |
| `--ease-grid-skew-angle`      | `-6deg`       | Initial skew angle of cards            |
| `--ease-grid-bg`              | `#ffffff`     | Card background color                  |
| `--ease-grid-border`          | `#d1d5db`     | Card border color                      |
| `--ease-grid-accent`          | `#1d4ed8`     | Active card border/shadow accent       |
| `--ease-grid-text`            | `#111827`     | Title text color                       |
| `--ease-grid-focus-ring`      | `#1d4ed8`     | Focus outline color                    |

## Usage

```html
<div class="ease-feature-grid">
  <div class="ease-feature-card is-active" tabindex="0">
    <div class="ease-feature-card__icon">⌨️</div>
    <div class="ease-feature-card__title">Keyboard First</div>
    <div class="ease-feature-card__body">Description text</div>
  </div>
</div>
```

Add the `is-active` class to `.ease-feature-card` to trigger the skew-to-straight transition.

## Accessibility

- Cards are `tabindex="0"` and use `:focus-within` for a visible focus outline.
- Bold 2px border plus box-shadow accent ensures active state isn't conveyed by color alone.
- Grid collapses to a single column below 480px for mobile readability.
- `prefers-reduced-motion: reduce` disables the skew transform, keeping simple border/shadow transitions.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing/skew angle via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy.
