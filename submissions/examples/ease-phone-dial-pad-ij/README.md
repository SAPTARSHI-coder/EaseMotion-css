# Phone Dial Pad

An interactive phone dial pad component with animated button presses, ripple effects, and a pulsing call button.

## Features

- Number buttons with scale-on-press animation
- Ripple effect via pseudo-element on press
- Backspace to delete last digit
- Call button with pulse animation when number is entered
- Keyboard support (0-9, Backspace, Enter)
- Responsive layout

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pdp-duration` | `0.2s` | Animation duration |
| `--pdp-btn-color` | `#ffffff` | Button background |
| `--pdp-btn-press` | `#e5e7eb` | Button pressed color |
| `--pdp-call-color` | `#22c55e` | Call button color |
| `--pdp-radius` | `12px` | Button border radius |
| `--pdp-bg` | `#ffffff` | Phone background |

## Usage

```html
<button class="pdp-btn" data-digit="1">
  <span class="pdp-digit">1</span>
</button>
```

## Browser Support

Works in all modern browsers supporting CSS custom properties and animations.
