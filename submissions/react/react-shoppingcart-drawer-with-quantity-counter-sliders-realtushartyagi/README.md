# React ShoppingCart Drawer with Quantity Counter Sliders

A modular, copy-paste ready React component that provides a beautiful off-canvas shopping cart drawer. Features include a smooth slide-in animation, staggered list item entrance, and interactive quantity counter sliders, all powered by **EaseMotion CSS**.

## Files
- `ShoppingCartDrawer.jsx` – The core React component managing cart state, item quantities, and mounting logic for CSS animations.
- `style.css` – Custom EaseMotion CSS styles defining the slide-in transform, cubic-bezier timing functions, staggered item fades, and backdrop fade.
- `demo.html` – A standalone HTML file demonstrating the shopping cart drawer using Babel and React CDNs.

## Installation
1. Copy the `react-shoppingcart-drawer-with-quantity-counter-sliders-realtushartyagi` folder into your project's `submissions/react/` directory.
2. Import the component:
   ```jsx
   import ShoppingCartDrawer from "./ShoppingCartDrawer.jsx";
   ```
3. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import ShoppingCartDrawer from './ShoppingCartDrawer';

const cartItems = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Cart (1)</button>
      
      <ShoppingCartDrawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        items={cartItems}
      />
    </div>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Determines if the drawer is currently visible. |
| `onClose` | `() => void` | Callback fired when clicking the backdrop or close button. |
| `items` | `Array` | Array of cart items: `{id, name, price, quantity, image}`. |

## Why it fits EaseMotion CSS
This component aligns perfectly with the EaseMotion philosophy by using pure CSS `transform: translateX()` and staggered `animation-delay` rules to handle the heavy lifting of the animations. React is only responsible for managing state (quantities, open/close toggle) and DOM rendering, keeping the motion buttery smooth without any heavy JavaScript animation bloat.

## Demo
Open `demo.html` directly in a web browser—no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-shoppingcart-drawer-with-quantity-counter-sliders-realtushartyagi/`. No changes to `core/` or `components/`.
