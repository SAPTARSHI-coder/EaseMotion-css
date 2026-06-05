# Reading Progress Indicator

## What does this do?

This submission adds a responsive reading progress indicator for long-form content, documentation pages, and blogs. The indicator is fixed at the top of the viewport and fills smoothly as the user scrolls.

## Available classes

- `ease-reading-progress` — base progress indicator used for standard reading progress.
- `ease-reading-progress-thin` — thin indicator variant suitable for compact headers.
- `ease-reading-progress-gradient` — gradient fill variant for a more expressive visual effect.

## Usage examples

### Standard indicator

```html
<div
  class="ease-reading-progress"
  role="progressbar"
  aria-label="Reading progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="0"
></div>
```

### Thin variant

```html
<div
  class="ease-reading-progress ease-reading-progress-thin"
  role="progressbar"
  aria-label="Reading progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="0"
></div>
```

### Gradient variant

```html
<div
  class="ease-reading-progress ease-reading-progress-gradient"
  role="progressbar"
  aria-label="Reading progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="0"
></div>
```

## Customization options

- `--reading-progress-fill` — progress fill color.
- `--reading-progress-track` — track background color.
- `--reading-progress-gradient` — gradient fill for the gradient variant.
- `--reading-progress-height` — default progress bar height.
- `--reading-progress-thin-height` — thin variant height.
- `--reading-progress-offset` — vertical offset for stacked indicators.

## Accessibility notes

- The indicator supports `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
- The demo detects `prefers-reduced-motion: reduce` and disables animated transitions.
- The page content remains fully accessible while the indicator remains fixed at the top.

## Browser support

- Chrome
- Firefox
- Edge
- Safari

This implementation uses a lightweight native script to calculate page scroll progress and update the indicator bar. It avoids external dependencies and remains mobile-friendly and production-ready.
