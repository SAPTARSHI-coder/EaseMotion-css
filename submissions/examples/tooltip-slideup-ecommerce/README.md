# Tooltip Slide-Up (E-Commerce Checkout)

A responsive, pure CSS tooltip with a smooth slide-up animation designed for e-commerce checkout interfaces.

## Features

- Pure CSS implementation
- Smooth slide-up transition
- Keyboard accessible using `:focus-visible`
- Responsive design
- Customizable through CSS variables
- No JavaScript required

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tooltip-duration` | `250ms` | Animation duration |
| `--ease-tooltip-easing` | `ease` | Animation easing |
| `--ease-tooltip-offset` | `10px` | Slide distance |
| `--ease-tooltip-scale` | `0.96` | Initial scale |

## Usage

```html
<div class="ease-tooltip-wrapper">
    <button class="checkout-btn">Place Order</button>

    <span class="ease-tooltip">
        Secure payment via SSL encryption
    </span>
</div>
```