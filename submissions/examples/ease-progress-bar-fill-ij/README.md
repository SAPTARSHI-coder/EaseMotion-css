# Progress Bar Fill

A customizable CSS progress bar component with animated fill width transitions. Features multiple progress bars at different stages (0%, 25%, 50%, 75%, 100%) with interactive controls to increase/decrease values and live percentage labels.

## Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Use the following markup structure:

```html
<div class="progress-group">
  <div class="progress-label">
    <span class="progress-name">Label</span>
    <span class="progress-value">50%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 50%;"></div>
  </div>
</div>
```

## Customization

The component exposes CSS custom properties for easy theming:

| Variable                      | Default   | Description               |
| ----------------------------- | --------- | ------------------------- |
| `--pb-height`                 | `24px`    | Height of the progress bar |
| `--pb-bg`                     | `#e5e7eb` | Background color          |
| `--pb-fill-color`             | `#3b82f6` | Fill color                |
| `--pb-transition-duration`    | `0.4s`    | Animation duration        |
| `--pb-border-radius`          | `12px`    | Border radius             |

Override them in your own CSS:

```css
:root {
  --pb-height: 16px;
  --pb-fill-color: #10b981;
  --pb-transition-duration: 0.6s;
}
```

## Demo

Open `demo.html` in a browser to see the component in action with interactive controls.
