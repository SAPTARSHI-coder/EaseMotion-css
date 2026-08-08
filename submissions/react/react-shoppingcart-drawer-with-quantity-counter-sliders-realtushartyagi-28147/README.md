# React ShoppingCart Drawer with Quantity Counter Sliders

A modular, copy-paste ready React component providing an off-canvas shopping cart drawer with animated sliding items and interactive quantity counters, powered by **EaseMotion CSS**.

## Files
- `ShoppingCartDrawer.jsx` – Core React component managing drawer mount timing, cart array rendering, and quantity adjustment callbacks.
- `style.css` – EaseMotion CSS styles: `translateX` drawer slide-in, backdrop fade, and `easeScSlideUp` for cart items entering.
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

const initialCart = [
  { id: "1", name: "T-Shirt", price: 25.00, qty: 1, image: "img.jpg" },
];

function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initialCart);

  const handleUpdateQty = (id, newQty) => {
    if (newQty === 0) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems(items.map(item => item.id === id ? { ...item, qty: newQty } : item));
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Cart</button>
      <ShoppingCartDrawer 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        items={items} 
        onUpdateQty={handleUpdateQty} 
      />
    </>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls whether the drawer is visible. |
| `onClose` | `() => void` | Callback fired on backdrop click or close button. |
| `items` | `Array` | Cart data: `{ id, name, price, qty, image }`. |
| `onUpdateQty` | `(id, newQty) => void` | Callback when a user clicks the + or - quantity buttons. |

## Why it fits EaseMotion CSS
All motion is CSS-first: the main panel uses `transform: translateX(100%)` → `translateX(0)` with a fluid `cubic-bezier(0.16, 1, 0.3, 1)` transition. The items inside the cart cascade into view using the `easeScSlideUp` `@keyframes` animation. React manages the data array and unmount timers, while CSS handles all rendering performance.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-shoppingcart-drawer-with-quantity-counter-sliders-realtushartyagi-28147/`. No changes to `core/` or `components/`.
