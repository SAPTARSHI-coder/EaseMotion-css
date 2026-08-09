# Floating Orbit Tooltip - E-Commerce Checkout Layouts

A CSS tooltip component with floating orbit animation effect designed for e-commerce checkout pages.

## Files

- `demo.html` - Demo page showing e-commerce checkout with tooltips
- `style.css` - Tooltip styles and animations

## Usage

Open `demo.html` in a browser and hover over cart items, summary values, and buttons to see the floating orbit tooltip animation.

## Features

### Floating Orbit Animation
- Tooltip gently floats with subtle rotation
- Rose/pink gradient with shadow
- Smooth continuous animation loop

### E-Commerce Components
- Shopping cart with quantity controls
- Order summary with tooltips
- Checkout button
- Trust badges
- Payment method buttons

### Design System
- Clean e-commerce aesthetic
- Rose accent color
- Trust indicators

## Classes

| Class | Description |
|-------|-------------|
| `ease-floating-orbit-ec-sb` | Floating orbit tooltip for e-commerce |
| `ease-qty-btn-sb` | Quantity adjustment button |
| `ease-remove-btn-sb` | Remove item button |
| `ease-checkout-btn-sb` | Checkout CTA button |
| `ease-payment-btn-sb` | Payment method button |

## Usage

Add `data-tooltip="Your text"` attribute to any element with `ease-floating-orbit-ec-sb` class:

```html
<button class="ease-floating-orbit-ec-sb" data-tooltip="Remove from cart">
  Remove
</button>
```

Closes #46328
