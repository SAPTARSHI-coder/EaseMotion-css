# CSS 3D-Flip Popover

A popover that flips into view like a hinged flap, using a 3D `rotateX` transform anchored at the top edge.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-popover-duration` | `0.5s` | Transition duration |
| `--ease-popover-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-popover-bg` | `#111827` | Popover background |

## Usage
```html
<div class="ease-popover-wrapper">
  <button class="ease-popover-trigger" aria-describedby="popoverContent">Show Info</button>
  <div class="ease-popover" id="popoverContent" role="tooltip">Content</div>
</div>
```

## Accessibility
`role="tooltip"` and `aria-describedby` link trigger to content. Clicking outside closes the popover. `prefers-reduced-motion` shortens transition duration.

## Why it fits EaseMotion CSS
Pure CSS 3D `rotateX` flip transition using `perspective`, `ease-` prefixed classes, themeable.
