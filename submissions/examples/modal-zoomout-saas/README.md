# Modal Zoom-Out (SaaS Showcase)

A responsive, pure CSS modal featuring a smooth zoom-out transition designed for modern SaaS showcase interfaces.

## Features

- Pure CSS implementation
- Smooth zoom-out animation
- Keyboard accessible
- Responsive layout
- Customizable through CSS variables
- No JavaScript required

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-modal-duration` | `300ms` | Animation duration |
| `--ease-modal-easing` | `ease` | Animation easing |
| `--ease-modal-scale` | `1.08` | Initial zoom scale |

## Usage

```html
<input type="checkbox" id="modal-toggle" hidden>

<label for="modal-toggle" class="open-btn">
    Open Modal
</label>

<div class="ease-modal-overlay">
    <div class="ease-modal">
        ...
    </div>
</div>
```