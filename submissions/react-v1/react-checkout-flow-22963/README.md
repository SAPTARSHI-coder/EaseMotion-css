# Animated Checkout Flow (#22963)

A multi-step checkout component heavily enhanced with EaseMotion entrances.

## Included Files
- `CheckoutFlow.jsx` - The checkout component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- Dynamically swaps between `slide-left` and `slide-up` entrances as the `step` state increments.
- Utilizes the `key` prop to ensure React triggers the animation on every step change.
