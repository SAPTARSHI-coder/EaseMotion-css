# Shopping Cart Drawer with Quantity Counter Sliders

A premium, highly interactive React side-drawer shopping cart component. It features synchronized quantity selectors (increment/decrement buttons & smooth sliding range inputs) styled beautifully using standard EaseMotion CSS design tokens.

---

## Features

- **Smooth Slide Animation:** Entrance and exit animation transitions built with CSS keyframes and React state synchronization.
- **Synchronized Controls:** Increment (`+`) and decrement (`-`) buttons are fully synchronized in real-time with a custom HTML5 range slider.
- **Micro-Animations:** Fluid height transition, active scaling, and pulse state indicators for badges.
- **Accessibility Friendly:** Supports ESC keypress to close, click-outside/overlay-click dismissal, proper standard ARIA roles/labels, and disabled states.
- **Zero External Dependencies:** Only relies on React hooks (`useState`, `useEffect`, `useRef`) and pure EaseMotion CSS tokens.
- **Responsiveness & Dark Mode:** Adapts seamlessly to standard viewport breakpoints and respects standard dark mode media queries.

---

## Props Reference

The component can be customized using the following properties:

| Prop Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Controls the visibility of the drawer overlay and panel. |
| `onClose` | `function` | `undefined` | Callback invoked when the user clicks the overlay, close button, or presses Escape. |
| `initialCartItems` | `Array` | `[]` | Initial array of items to load into the cart. Each item must follow the `CartItem` schema (see below). |
| `onCheckout` | `function` | `undefined` | Callback function triggered with the final list of items when clicking "Proceed to Checkout". |
| `currency` | `string` | `"$"` | Currency symbol to prepend to price fields. |
| `minQty` | `number` | `1` | Minimum allowed value for item quantity. |
| `maxQty` | `number` | `10` | Maximum allowed value for item quantity. |

### CartItem Schema

Each object in the `initialCartItems` array should conform to this structure:

```typescript
interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  variant?: string;     // Optional variant (e.g. Size, Color)
  emoji?: string;       // Fallback emoji icon if no image URL is provided (e.g. "🎧")
  image?: string;       // URL for the product image
  bgColor?: string;     // Color string for the placeholder image container background
}
```

---

## Installation

1. Create a component folder in your React app.
2. Copy `ShoppingCartDrawer.jsx` and `style.css` into that directory.
3. Import the CSS file inside `ShoppingCartDrawer.jsx` (already done by default):
   ```javascript
   import "./style.css";
   ```

---

## Usage Example

Integrate it into your main App component like this:

```jsx
import React, { useState } from "react";
import ShoppingCartDrawer from "./ShoppingCartDrawer";

// Mock Product Data
const MOCK_CART_ITEMS = [
  {
    id: 1,
    name: "Acoustic Noise-Cancelling Headphones",
    variant: "Matte Black",
    price: 199.99,
    quantity: 1,
    emoji: "🎧",
    bgColor: "linear-gradient(135deg, #a09af8, #6c63ff)"
  },
  {
    id: 2,
    name: "Ergonomic Mechanical Keyboard",
    variant: "Linear Switches",
    price: 129.50,
    quantity: 2,
    emoji: "⌨️",
    bgColor: "linear-gradient(135deg, #a78bfa, #8b5cf6)"
  },
  {
    id: 3,
    name: "Wireless Charging Pad",
    price: 39.99,
    quantity: 1,
    emoji: "🔋",
    bgColor: "linear-gradient(135deg, #86efac, #15803d)"
  }
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckout = (finalItems) => {
    console.log("Proceeding to checkout with:", finalItems);
    alert(`Checking out subtotal of $${finalItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}`);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>My Store Page</h1>
      <button 
        onClick={() => setIsCartOpen(true)}
        style={{
          padding: "12px 24px",
          background: "#6c63ff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Open Cart Drawer
      </button>

      <ShoppingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        initialCartItems={MOCK_CART_ITEMS}
        onCheckout={handleCheckout}
        currency="$"
        minQty={1}
        maxQty={10}
      />
    </div>
  );
}

export default App;
```

---

## EaseMotion Classes Utilized

- `ease-fade-in` — entrance fade-in transition.
- `ease-hover-lift` — interactive lift effect on buttons.
- `ease-pulse` — subtle looping opacity scale on counter badge.
- `ease-flex`, `ease-justify-between`, `ease-items-center` — responsive flexbox arrangements.
- `ease-stack` — vertical layout spacing structure.
