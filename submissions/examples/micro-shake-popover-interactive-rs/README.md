# Micro Shake Popover — Interactive Interface

A pure CSS animated popover with a subtle **micro shake** interaction, styled for creative interactive interfaces.

## Features

- **8 interactive-themed cards** — Gesture Controls, Media Player, Voice Commands, Drag & Drop, Navigation Shortcuts, Favorites, Undo History, Snap Layouts
- **Micro shake animation** — Subtle vibration/buzz effect on open, unique to this component
- **Gradient accent bar** — Each card has a colored top accent (purple/pink/green/amber)
- **4 position variants** — Bottom, Top, Right, Left (switchable via radio buttons)
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Reduced motion** — Respects `prefers-reduced-motion: reduce`
- **Forced colors** — Respects `forced-colors: active`
- **Keyboard accessible** — Tab navigation, Space/Enter to toggle
- **No JavaScript dependency** — Checkbox hack for toggle behavior

## Custom Properties

| Variable                    | Default                          | Description                     |
| --------------------------- | -------------------------------- | ------------------------------- |
| `--popover-duration`        | `0.3s`                           | Open/close transition duration  |
| `--popover-ease`            | `cubic-bezier(0.34,1.56,0.64,1)` | Transition easing (spring-like) |
| `--popover-shake-intensity` | `3px`                            | Shake displacement in pixels    |
| `--popover-max-width`       | `300px`                          | Maximum popover width           |
| `--popover-gap`             | `10px`                           | Gap between trigger and popover |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="int-card card-accent-purple">
  <div class="shake-popover-sh">
    <input type="checkbox" id="my-popover" class="shake-popover-toggle-sh" />
    <label for="my-popover" class="shake-popover-trigger-sh">Open</label>
    <div class="shake-popover-content-sh" data-position="bottom" role="dialog">
      <div class="popover-header">
        <h4>Title</h4>
        <button type="button" class="popover-close">×</button>
      </div>
      <div class="sh-row">
        <span class="sh-label">Item</span>
        <span class="sh-value">Value</span>
      </div>
      <div class="popover-footer">
        <span class="popover-footer-label">Info</span>
        <button type="button" class="popover-btn">Action</button>
      </div>
    </div>
  </div>
</div>
```
