# Animated E-commerce Product Card

A clean, modern, and fully responsive **E-commerce Product Card** perfect for online stores and catalogs. This example demonstrates how to combine **EaseMotion CSS** for staggered content loading and bouncy badges with custom CSS for image zooming and sliding action icons, creating a highly interactive shopping experience.

## 🚀 Features

- **Staggered Content Entrance**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so the category, title, rating, price, and button cascade in sequentially on page load.
- **Bouncy Sale Badge**: The discount badge uses `ease-bounce-in` to playfully pop into view.
- **Smooth Image Zoom**: The product image smoothly scales up when hovering over the card using custom CSS transitions.
- **Sliding Action Icons**: The "Wishlist" and "Quick View" buttons slide in from the right and fade in when the card is hovered.
- **Pure CSS Star Rating**: A custom half-star implementation using CSS clipping, no images or SVGs required.
- **Interactive Add to Cart Button**: Uses `ease-hover-grow` for a satisfying click target with enhanced shadow transitions.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted padding and font sizes.

## 📂 File Structure

```text
submissions/examples/animated-ecommerce-product-card/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, hover effects, and responsive behavior
└── README.md    # Documentation