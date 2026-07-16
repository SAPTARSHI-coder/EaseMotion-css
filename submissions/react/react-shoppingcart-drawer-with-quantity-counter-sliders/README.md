# React Shopping Cart Drawer with Quantity Counter Slider

## Description

A simple, copy-paste ready React Shopping Cart Drawer component built using React Hooks. It allows users to adjust the product quantity using increment/decrement buttons or a quantity slider while utilizing EaseMotion CSS animation utilities.

---

## Features

- Shopping cart drawer layout
- Quantity counter using React `useState`
- Increment (`+`) and decrement (`-`) buttons
- Quantity slider (`input type="range"`)
- Uses EaseMotion CSS animation classes
- No external dependencies
- Easy to copy and integrate into any React project

---

## Installation

Copy the `ShoppingCartDrawer.jsx` file into your React project.

---

## Usage

```jsx
import ShoppingCartDrawer from "./ShoppingCartDrawer";

function App() {
  return (
    <div>
      <ShoppingCartDrawer />
    </div>
  );
}

export default App;
```

---

## Props

This component currently does not require any props.

---

## Technologies Used

- React
- React Hooks (`useState`)
- EaseMotion CSS animation utilities

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-hover-lift` *(if applied to the buttons)*

---

## Component Behavior

- Displays a shopping cart with a sample product.
- Users can increase or decrease the product quantity.
- Quantity cannot go below **1**.
- Users can also adjust the quantity using the slider.
- The displayed quantity updates instantly.

---

## Folder Structure

```
react-shoppingcart-drawer-with-quantity-counter-sliders/
│── ShoppingCartDrawer.jsx
└── README.md
```

---

## License

This component is provided as part of the EaseMotion CSS React Track and is intended for learning and reuse.