# Checkout Summary Accordion with Animated Height (React Component)

A highly polished, mobile-friendly e-commerce checkout summary component. It leverages a dynamic height calculation technique using React `useRef` to create buttery-smooth accordion transitions without relying on rigid CSS pixel heights.

## Features
- **Dynamic Height Transition:** Uses React hooks (`useRef`, `useEffect`, `useState`) to read the actual DOM height of the inner content and animates `height: auto` limitations cleanly.
- **EaseMotion Integration:** Embedded with EaseMotion utility classes for fluid entrance transitions (`ease-fade-in-up`), staggered list animations (`ease-slide-right`), and micro-interactions on hover (`ease-bounce-hover`).
- **Clean Mobile UI:** The design mirrors high-end e-commerce experiences (like Shopify) where the order summary is cleanly tucked away until requested by the user.
- **Zero External Dependencies:** Built with pure React hooks and vanilla CSS.

## Installation

1. Copy `CheckoutSummary.jsx` into your components directory.
2. Copy `style.css` (or merge its contents into your layout stylesheet).
3. Ensure you feed the component the proper schema array for your cart items.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cartItems` | Array | `[]` | Array of cart items (schema below). |
| `subtotal` | Number | `0` | Subtotal amount before tax/shipping. |
| `tax` | Number | `0` | Calculated tax amount. |
| `shipping` | Number | `0` | Calculated shipping amount. |
| `total` | Number | `0` | Grand total. |
| `currency` | String | `"$"` | Currency prefix string. |

### Cart Item Schema
```js
{
  name: String,      // e.g. "Premium Cotton T-Shirt"
  variant: String,   // e.g. "Color: Black, Size: L"
  price: Number,     // e.g. 29.99
  quantity: Number,  // e.g. 2
  image: String      // e.g. "https://via.placeholder.com/64"
}
```

## Usage Example

```jsx
import React from 'react';
import CheckoutSummary from './CheckoutSummary';

const mockCart = [
  {
    name: "Wireless ANC Headphones",
    variant: "Color: Midnight Black",
    price: 199.99,
    quantity: 1,
    image: "https://via.placeholder.com/64?text=Headphones"
  },
  {
    name: "USB-C Fast Charger",
    variant: "Type: 65W GaN",
    price: 34.50,
    quantity: 2,
    image: "https://via.placeholder.com/64?text=Charger"
  }
];

function App() {
  const subtotal = 268.99;
  const tax = 18.83;
  const shipping = 0; // Free
  const total = subtotal + tax + shipping;

  return (
    <div style={{ padding: '50px', background: '#e5e7eb', minHeight: '100vh' }}>
      <CheckoutSummary 
        cartItems={mockCart}
        subtotal={subtotal}
        tax={tax}
        shipping={shipping}
        total={total}
        currency="$"
      />
    </div>
  );
}

export default App;
```
