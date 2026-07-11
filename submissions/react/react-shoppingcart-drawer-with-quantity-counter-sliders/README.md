# React ShoppingCart Drawer with Quantity Counter Sliders

A reusable Shopping Cart Drawer component built with React Hooks and CSS.

## Features

- React Hooks (`useState`)
- Quantity increment/decrement controls
- Remove items
- Automatic total calculation
- Empty cart state
- Responsive drawer layout
- No external dependencies

## Installation

```bash
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import "./style.css";
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | "Shopping Cart" | Drawer heading |
| initialCart | array | Demo items | Initial cart items |

## Usage

```jsx
<ShoppingCartDrawer
    title="My Cart"
    initialCart={products}
/>
```

Each product should have:

```js
{
  id:1,
  name:"Product",
  price:99,
  quantity:1
}
```

## Files

- ShoppingCartDrawer.jsx
- style.css
- README.md

## Requirements

- React only
- No external dependencies