# Button Stack Group

A stacked button group component with an animated sliding selection indicator. The active button's background smoothly slides to the clicked position using a spring-like cubic-bezier transition.

## HTML Structure

```html
<div class="ease-button-stack-group" style="--active-index: 0;">
  <div class="btn-stack-indicator"></div>
  <button class="btn-stack active">Day</button>
  <button class="btn-stack">Week</button>
  <button class="btn-stack">Month</button>
</div>
```

The indicator element must be the first child. Each `.btn-stack` is a button. Set `--active-index` (0-based) on the container to move the indicator. The active button also gets `class="active"` for text styling.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--btn-bg` | `#eef0f4` | Background color of the button group track |
| `--btn-active` | `#1a202c` | Text color of the active button |
| `--btn-hover` | `#4a6cf7` | Text color on hover for inactive buttons |
| `--slide-duration` | `0.35s` | Duration of the indicator slide animation |

## Usage

Add `.ease-button-stack-group` to a container with a `.btn-stack-indicator` div followed by `.btn-stack` buttons. Set `--active-index` to the 0-based index of the selected button. The button count is automatically detected via the `--btn-count` variable (update if buttons are dynamically added).
