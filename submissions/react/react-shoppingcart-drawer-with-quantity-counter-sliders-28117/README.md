# React Component: ShoppingCart Drawer with Quantity Counter Sliders (#28117)

A modular, copy-paste ready React `<CartDrawer>` component that slides in from the right with a spring-physics entrance. Features an animated `<QuantityCounter>` sub-component with a slot-machine digit slide animation on increment/decrement, item remove fade-out, body scroll lock, and a backdrop overlay. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `CartDrawer.jsx`: The main component exporting `CartDrawer` with an embedded `QuantityCounter` and `CartItem`.
- `style.css`: The CSS stylesheet powering the drawer slide, overlay fade, qty digit slide, item remove exit, and checkout spring button.
- `demo.html`: A self-contained demo with a 4-product catalog where you can add items, adjust quantities, and remove items from the cart drawer.

## 🛠 Features

- **Drawer Slide Entrance**: Panel slides in from `translateX(100%)` → `translateX(0)` using `cubic-bezier(0.34, 1.2, 0.64, 1)` for a natural spring deceleration.
- **Quantity Digit Slider**: Each digit in the counter animates with a directional slot-machine slide — up when incrementing, down when decrementing — using CSS `@keyframes` triggered by a React `key` change.
- **Item Remove Animation**: Removing an item applies `opacity: 0` + `translateX(40px)` before the element is unmounted from state, keeping the transition smooth.
- **Overlay Backdrop**: Fades from transparent to `rgba(15,23,42,0.45)` and dismisses the drawer on click.
- **Body Scroll Lock**: Sets `document.body.style.overflow = 'hidden'` while the drawer is open, cleaned up on close.
- **Escape Key Dismissal**: Listens globally for the `Escape` key to close the drawer.
- **Empty State**: Shows a friendly empty cart illustration when all items are removed.

## 🚀 How to use

```jsx
import React, { useState } from 'react';
import CartDrawer from './CartDrawer';
import './style.css';

const INITIAL_ITEMS = [
  { id: '1', name: 'Wireless Headphones', emoji: '🎧', color: '#dbeafe', price: 89.99, variant: 'Midnight Black', quantity: 1 },
  { id: '2', name: 'Mechanical Keyboard',  emoji: '⌨️',  color: '#fce7f3', price: 129.00, variant: 'TKL Layout',    quantity: 2 },
];

const MyPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Cart</button>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
        initialItems={INITIAL_ITEMS}
        onCheckout={(items) => console.log('Checkout:', items)}
      />
    </>
  );
};
```

## ⚙️ Props

### `<CartDrawer>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls whether the drawer is open |
| `onClose` | `function` | — | Called when the drawer requests to close |
| `initialItems` | `Array` | `[]` | Initial cart items array |
| `onCheckout` | `function` | — | Called with the current items array on checkout click |

### Cart Item schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Product display name |
| `emoji` | `string` | Emoji used as product image |
| `color` | `string` | Background color for the image swatch |
| `price` | `number` | Unit price (number) |
| `variant` | `string` | Optional size/color variant label |
| `quantity` | `number` | Initial quantity |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A shopping cart drawer that simply appears is a missed opportunity. By using a spring-physics slide (`cubic-bezier(0.34, 1.2, 0.64, 1)`), the panel feels like it physically slides out from behind the screen edge. The quantity counter uses a directional digit slot animation — up for increase, down for decrease — which makes the number change feel physically grounded. And item removal with a rightward slide-out communicates "this item is leaving" in a spatially meaningful way.
