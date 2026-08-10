# ease-popover

A popover component with directional arrow pointers for EaseMotion CSS.

## Usage

```html
<div class="ease-popover-wrapper">
  <button onclick="this.nextElementSibling.classList.toggle('ease-visible')">
    Click me
  </button>
  <div class="ease-popover ease-popover-top ease-visible">
    <div class="ease-popover-body">Popover content here</div>
  </div>
</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-popover-wrapper` | Relative position wrapper |
| `ease-popover` | Base popover |
| `ease-popover-top` | Arrow points down, popover appears above |
| `ease-popover-bottom` | Arrow points up, popover appears below |
| `ease-popover-left` | Arrow points right, popover appears left |
| `ease-popover-right` | Arrow points left, popover appears right |
| `ease-visible` | Toggles popover visibility |

## Features
- Directional arrow pointers for all 4 positions
- Toggle with ease-visible class
- Smooth fade transition
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens