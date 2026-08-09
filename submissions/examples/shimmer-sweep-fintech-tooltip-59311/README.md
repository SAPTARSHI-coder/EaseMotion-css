# Shimmer-Sweep Fintech Tooltip

An accessible, pure CSS tooltip system presented inside a fintech payment-risk dashboard. Each tooltip reveals contextual decision data and runs a single shimmer sweep as it opens.

## Features

- Hover and keyboard-focus activation without JavaScript
- Bottom, left, and right placement variants
- One-shot shimmer animation with a restrained entrance transition
- Responsive placement fallback for tablet and mobile layouts
- Visible focus indicators and semantic `role="tooltip"` relationships
- Reduced-motion and forced-colors support
- Fintech-specific exposure, approval, review, and policy context

## Usage

Wrap a trigger and tooltip panel in `.tooltip`. Connect them with `aria-describedby` and a matching panel `id`.

```html
<div class="tooltip tooltip--bottom">
  <button class="info-button" aria-describedby="risk-tip" type="button">
    <span aria-hidden="true">i</span>
    <span class="sr-only">Explain risk score</span>
  </button>
  <span class="tooltip-panel" id="risk-tip" role="tooltip">
    <span class="tooltip-kicker">Risk score</span>
    This payment passed all active policy checks.
  </span>
</div>
```

Available placement classes are `.tooltip--bottom`, `.tooltip--left`, and `.tooltip--right`.

## Custom Properties

| Property             | Default   | Purpose                       |
| -------------------- | --------- | ----------------------------- |
| `--tooltip-bg`       | `#111a2c` | Tooltip surface color         |
| `--tooltip-text`     | `#f7f9fc` | Tooltip text color            |
| `--tooltip-width`    | `17rem`   | Maximum tooltip width         |
| `--tooltip-radius`   | `6px`     | Tooltip corner radius         |
| `--tooltip-duration` | `620ms`   | Shimmer sweep duration        |
| `--tooltip-distance` | `10px`    | Gap between trigger and panel |

## Accessibility

The native buttons are keyboard reachable and use `aria-describedby` to associate each control with its tooltip. `:focus-within` keeps the panel visible during keyboard interaction. The reduced-motion query disables both movement and shimmer, while forced-colors mode restores explicit borders.

## Browser Support

The example uses standard CSS positioning, transitions, keyframes, `:focus-within`, and `:is()`, supported by current Chrome, Edge, Firefox, and Safari releases.
