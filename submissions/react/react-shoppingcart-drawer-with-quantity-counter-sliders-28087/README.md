# React Component: ShoppingCart Drawer with Quantity Counter Sliders (#28087)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an elegant, off-canvas shopping cart drawer featuring a highly satisfying, animated quantity increment/decrement slider mechanism.

## 📦 What's included?

- `ShoppingCartDrawer.jsx`: The React component managing cart state, item removal, subtotal calculation, click-outside-to-close logic, and delayed unmounting.
- `style.css`: The CSS stylesheet powering the drawer slide animations and, crucially, the `easeQtySlide` keyframes that power the mechanical clicking motion of the quantity number changing.
- `demo.html`: A self-contained browser demo running the React component to showcase the interactions.

## 🛠 Features

- **Animated Quantity Sliders**: When a user clicks `+` or `-`, the quantity number itself physically slides into view (`translateY`) attached to a React `key` prop trick that forces DOM re-mounting for the animation.
- **Fluid Drawer Physics**: Uses a custom `cubic-bezier(0.16, 1, 0.3, 1)` easing curve for the slide-in entry, making it feel fast yet incredibly smooth as it decelerates into place.
- **Delayed Unmount**: Incorporates an `isOpen` vs `isRendered` boolean architecture paired with a `setTimeout` to ensure the CSS slide-out animation completes fully before the component is destroyed.
- **Empty State**: Handles zero-item carts gracefully with an animated SVG illustration and a call-to-action button.

## 🚀 How to use

1. Copy `ShoppingCartDrawer.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Manage the `isOpen` state in a parent layout or context.

```jsx
import React, { useState } from 'react';
import ShoppingCartDrawer from './ShoppingCartDrawer';
import './style.css'; 

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cartData = [
    { id: 1, name: 'T-Shirt', price: 25.00, quantity: 1 }
  ];

  return (
    <nav>
      <button onClick={() => setShowCart(true)}>
        Cart (1)
      </button>

      <ShoppingCartDrawer 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        initialCartItems={cartData}
      />
    </nav>
  );
};

export default Navbar;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making digital interfaces feel like physical machinery.

Typical quantity inputs just flip a number instantly. By wrapping the quantity display in an `overflow: hidden` wrapper and applying an `@keyframes` slide to the number itself every time the React state changes, we create the illusion of a mechanical counter ticking over. This micro-interaction makes the act of adding items to a cart inherently more satisfying.
