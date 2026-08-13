# CSS Elastic-Slide Popover

A popover that slides down into view with an elastic overshoot easing curve, giving a springy bounce.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-popover-duration` | `0.5s` | Transition duration |
| `--ease-popover-easing` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Elastic overshoot curve |
| `--ease-popover-bg` | `#111827` | Popover background |

## Usage
```html
<div class="ease-popover-wrapper">
  <button class="ease-popover-trigger" aria-describedby="popoverContent">Show Info</button>
  <div class="ease-popover" id="popoverContent" role="tooltip">Content</div>
</div>
```

## Accessibility
`role="tooltip"` and `aria-describedby` link trigger to content. Clicking outside closes the popover. `prefers-reduced-motion` shortens transition duration, minimizing the bounce.

## Why it fits EaseMotion CSS
Pure CSS elastic-easing transform transition, `ease-` prefixed classes, themeable.
