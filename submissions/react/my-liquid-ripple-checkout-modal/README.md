# Liquid Ripple Checkout Modal React Component

A React modal component with a smooth Liquid Ripple animation designed for modern E-Commerce checkout interfaces.

## Features

- React reusable modal component
- Liquid ripple transition effect
- Checkout-focused UI design
- EaseMotion utility class support
- Customizable content

## Props

| Prop | Type | Description |
|------|------|-------------|
| isOpen | Boolean | Controls modal visibility |
| onClose | Function | Closes modal |
| title | String | Modal heading |
| description | String | Modal description |
| children | ReactNode | Additional checkout content |

## Usage

```jsx
import LiquidRippleCheckoutModal from "./LiquidRippleCheckoutModal";

function App() {
  return (
    <LiquidRippleCheckoutModal
      isOpen={true}
      title="Payment Successful"
      description="Your order has been placed."
      onClose={() => console.log("close")}
    >
      <button>Continue Shopping</button>
    </LiquidRippleCheckoutModal>
  );
}

export default App;