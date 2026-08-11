# Animated Credit Card Payment Form

A sleek, modern, and fully responsive **Credit Card Payment Form** featuring a live-updating 3D card preview. This example demonstrates how to combine **EaseMotion CSS** for staggered form entrances, bouncy logo reveals, and glowing focus states, paired with custom CSS for a realistic 3D card flip effect when the user enters their CVV.

## 🚀 Features

- **Live 3D Card Preview**: A realistic credit card that updates in real-time as the user types.
- **3D Flip Animation**: The card smoothly flips to the back to reveal the CVV field when the CVV input is focused, using CSS 3D transforms.
- **Staggered Form Entrances**: Form fields fade in sequentially using `ease-fade-in-up` and `ease-delay-*` for a premium cascading load effect.
- **Glowing Focus States**: Inputs feature a smooth glowing border and icon scale animation when focused.
- **Bouncy Card Logo**: The card provider logo (Visa, Mastercard) pops in using `ease-bounce-in` when detected.
- **Pulsing Security Badge**: A "256-bit SSL Encrypted" badge uses `ease-pulse` to build user trust.
- **Interactive Pay Button**: Uses `ease-hover-grow` and an animated arrow for satisfying tactile feedback.
- **Input Formatting**: JavaScript automatically formats the card number (spaces every 4 digits) and expiry date (MM/YY).
- **Fully Responsive**: The layout stacks vertically on tablets/mobile, and the 3D card scales down gracefully.

## 📂 File Structure

```text
submissions/examples/animated-credit-card-form/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for 3D card, glowing inputs, and responsive behavior
└── README.md    # Documentation