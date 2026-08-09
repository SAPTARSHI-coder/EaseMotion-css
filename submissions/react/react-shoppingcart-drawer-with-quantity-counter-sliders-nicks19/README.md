# ShoppingCart Drawer with Quantity Counter Sliders

A polished React component providing a slide-out right-side drawer for an e-commerce shopping cart. It features smooth entrance animations for the drawer and list items, plus a dynamic quantity counter that slides numbers up or down when values change.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `isOpen` | `boolean` | **Required** | Toggles the visibility of the drawer |
| `onClose` | `() => void` | **Required** | Callback fired when the drawer should close |
| `items` | `Array<Object>` | `[]` | Array of cart items (see structure below) |
| `onCheckout` | `(items) => void`| `undefined` | Callback fired when the checkout button is clicked |

### Item Object Structure
```typescript
{
  id: string | number,
  name: string,
  price: number,
  quantity: number,
  image: string
}
```

## Installation

1. Copy `ShoppingCartDrawer.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React, { useState } from 'react';
import ShoppingCartDrawer from './ShoppingCartDrawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const initialItems = [
    {
      id: 1,
      name: "Minimalist Desk Lamp",
      price: 89.99,
      quantity: 1,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 2,
      name: "Ergonomic Keycap Set",
      price: 45.00,
      quantity: 2,
      image: "https://via.placeholder.com/80"
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <button onClick={() => setIsOpen(true)}>Open Cart</button>

      <ShoppingCartDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={initialItems}
        onCheckout={(items) => console.log('Checking out with:', items)}
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Slide Animations**: Uses `.ease-slide-in-right` for the drawer entrance and `.ease-fade-in-up` for staggered item reveals, both utilizing the signature `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve.
- **Dynamic Counters**: The quantity component implements `.ease-slide-up-in` and `.ease-slide-down-in` based on user interaction (increment vs decrement), giving tactile feedback to quantity changes.
- **Micro-interactions**: All buttons (close, remove, quantity, checkout) use the `.ease-squish-button` utility for a satisfying click feel.
