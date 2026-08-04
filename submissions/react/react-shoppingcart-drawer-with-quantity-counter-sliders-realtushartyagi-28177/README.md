# React ShoppingCart Drawer with Quantity Counter Sliders

A modular, copy-paste ready React component providing an off-canvas shopping cart drawer with smooth slide-in animation, staggered item entrance, and interactive quantity counters — powered by **EaseMotion CSS**.

## Files
- `ShoppingCartDrawer.jsx` – Core React component managing cart state, mount/unmount timing, and quantity logic.
- `style.css` – EaseMotion CSS: `translateX` slide-in, backdrop fade, staggered `animation-delay` item entrance, and hover/active transitions.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import ShoppingCartDrawer from "./ShoppingCartDrawer.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import ShoppingCartDrawer from './ShoppingCartDrawer';

const cartItems = [
  { id: "1", name: "Wireless Headphones", price: 99.99, quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" },
];

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Cart</button>
      <ShoppingCartDrawer isOpen={open} onClose={() => setOpen(false)} items={cartItems} />
    </>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls whether the drawer is visible. |
| `onClose` | `() => void` | Callback fired on backdrop click or close button. |
| `items` | `Array` | Cart items: `{ id, name, price, quantity, image }`. |

## Why it fits EaseMotion CSS
All animations are CSS-first: the panel slide uses `transform: translateX` with `cubic-bezier(0.16, 1, 0.3, 1)`, the backdrop fades via `@keyframes easeScFadeIn`, and cart items stagger in with `animation-delay`. React manages state only — no JS animation libraries.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-shoppingcart-drawer-with-quantity-counter-sliders-realtushartyagi-28177/`. No changes to `core/` or `components/`.
