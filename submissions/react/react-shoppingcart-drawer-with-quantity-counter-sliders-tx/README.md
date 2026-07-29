# React ShoppingCart Drawer with Quantity Counter Sliders

## Description
A modular, animated shopping cart drawer built with React hooks. It features a sliding panel entrance, staggered list item animations, and a unique range slider for dynamically updating item quantities with smooth UI feedback. The component leverages standard EaseMotion CSS utility classes for lightweight, 60fps animations.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls the visibility of the drawer overlay and panel. |
| `onClose` | `function` | Callback triggered when the backdrop or close button is clicked. |
| `cartItems` | `array` | Array of item objects. Each object should have: `{ id, name, price, image, quantity }`. |
| `onUpdateQuantity` | `function` | Callback triggered when the range slider changes. Signature: `(itemId, newQuantity) => void`. |
| `onCheckout` | `function` | Callback triggered when the checkout button is clicked. |

## Usage Example

```jsx
import React, { useState } from 'react';
import ShoppingCartDrawer from './ShoppingCartDrawer';
import 'easemotion.css'; // Make sure EaseMotion core CSS is imported globally

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299.99,
      image: "https://via.placeholder.com/80",
      quantity: 1
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.50,
      image: "https://via.placeholder.com/80",
      quantity: 2
    }
  ]);

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    );
  };

  return (
    <div>
      <button onClick={() => setIsCartOpen(true)} className="ease-btn ease-hover-lift">
        Open Cart ({cartItems.length})
      </button>

      <ShoppingCartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => alert('Proceeding to checkout...')}
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **`ease-fade-in` & `ease-slide-left`**: Used for the backdrop and main drawer panel to create a smooth, native-like entrance.
- **Staggered Animations**: The `cart-item` components utilize inline `animationDelay` dynamically generated via their index to slide in sequentially (`ease-slide-left`).
- **`ease-hover-lift`**: Applied to the close button, range slider thumbs, and checkout button for tactile micro-interactions.
- **Range Slider Inputs**: Instead of standard +/- buttons, this component uses `<input type="range">` customized with CSS to act as an interactive, draggable quantity counter.
- **Zero External Dependencies**: Powered purely by React state (`useState`, `useEffect`) and standard EaseMotion CSS keyframes.
