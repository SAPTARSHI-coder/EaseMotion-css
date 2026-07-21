# Off-Canvas Cart

A shopping cart panel that slides in from the right side of the viewport. Cart items appear with a staggered entry animation, quantity controls feature a bounce effect, and the total updates smoothly. Includes an empty cart state.

## Features

- Slide-in panel from the right with smooth easing
- Staggered item entry animation with configurable delay
- Quantity increment/decrement with bounce animation
- Auto-updating total
- Empty cart state display
- Overlay backdrop with click-to-close

## Usage

```html
<link rel="stylesheet" href="style.css" />

<button class="open-btn" id="openCart">Open Cart</button>
<div class="cart-panel" id="cartPanel">…</div>
```

Add items with `data-price` and `data-quantity` attributes and quantity controls.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--occ-duration` | `0.35s` | Panel slide duration |
| `--occ-panel-bg` | `#ffffff` | Panel background |
| `--occ-item-bg` | `#f8f9fa` | Item card background |
| `--occ-primary` | `#1e90ff` | Primary accent color |
| `--occ-radius` | `12px` | Border radius |
| `--occ-shadow` | `0 0 40px rgba(0,0,0,0.15)` | Panel shadow |
