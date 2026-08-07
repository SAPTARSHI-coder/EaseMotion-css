# Glitch-Flicker Fintech Card Grid

A pure CSS anomaly-monitoring grid for fintech operations. Critical and review cards run a brief glitch-border and contrast flicker when hovered or keyboard focused, while transaction data remains stable and readable.

## Features

- Responsive two-column fintech signal grid
- Alert-only glitch layers and restrained flicker
- Keyboard-focusable cards with visible focus outlines
- Severity, confidence, rule, and case metadata
- Stable content that does not shift during animation
- Reduced-motion and forced-colors support
- No JavaScript or external dependencies

## Usage

Apply an alert modifier and provide a short duplicated signal label for the decorative pseudo-elements.

```html
<article
  class="signal-card signal-card--critical"
  tabindex="0"
  data-signal="VELOCITY SPIKE"
>
  <span class="severity severity--critical">Critical</span>
  <h3>$82,400 outbound</h3>
</article>
```

Use `.signal-card--warning` for review states. Clear cards intentionally remain static.

## Custom Properties

| Property            | Default   | Purpose                  |
| ------------------- | --------- | ------------------------ |
| `--critical`        | `#be2d36` | Critical severity color  |
| `--warning`         | `#a35d00` | Review severity color    |
| `--glitch-a`        | `#00a9a5` | First glitch edge color  |
| `--glitch-b`        | `#d52e6f` | Second glitch edge color |
| `--glitch-duration` | `520ms`   | Full effect duration     |

## Accessibility

Cards use `tabindex="0"` so keyboard users can inspect the same effect and receive a clear `:focus-visible` outline. The animation never hides or moves transaction data. Reduced-motion mode removes all glitch and flicker animations, and forced-colors mode preserves structural borders.

## Browser Support

The example uses standard grid, pseudo-elements, keyframes, `:is()`, and media queries supported by current Chrome, Edge, Firefox, and Safari releases.
