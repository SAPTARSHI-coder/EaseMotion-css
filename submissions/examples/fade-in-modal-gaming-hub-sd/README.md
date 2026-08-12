# Fade-In Modal

CSS-only modal with a smooth fade-in animation.

## Usage

```html
<input type="checkbox" id="mdl" class="fade-in-modal__toggle" />
<label for="mdl" class="fade-in-modal__trigger">Open</label>
<div class="fade-in-modal" role="dialog" aria-modal="true">
  <div class="fade-in-modal__content">
    <label for="mdl" class="fade-in-modal__close">&times;</label>
    <!-- content -->
  </div>
</div>
```

Toggle the checkbox via the trigger or close label.

## CSS Custom Properties

| Property                | Default               | Description              |
| ----------------------- | --------------------- | ------------------------ |
| `--modal-duration`      | `0.3s`                | Animation duration       |
| `--modal-easing`        | `ease`                | Animation easing         |
| `--modal-overlay-color` | `rgba(0, 0, 0, 0.75)` | Overlay background       |
| `--modal-background`    | `#1a1a2e`             | Modal content background |
| `--modal-radius`        | `1rem`                | Modal border radius      |

## Why?

Lightweight, pure CSS, responsive, accessible, honors reduced motion, and easy to theme via custom properties.
