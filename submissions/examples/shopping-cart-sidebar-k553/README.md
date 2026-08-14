# Animated Shopping Cart Sidebar

A modern, responsive shopping cart sidebar with a slide-in drawer, animated backdrop, and smooth item-removal transitions.

## Features
- Sliding cart drawer (`transform: translateX`) with easing
- Animated dark backdrop overlay that fades in/out
- Remove-item animation (fade + slide + collapse)
- Live total recalculation on item removal
- Checkout button
- Fully mobile responsive (full-width drawer on small screens)

## Files
- `demo.html` — Markup and interaction logic
- `style.css` — Styling and animations

## Usage
1. Open `demo.html` in your browser.
2. Click **"View Cart"** to slide the sidebar in.
3. Click the backdrop or the **×** button to close it.
4. Click the **×** next to any item to remove it with an animation; the total updates automatically.

## Customization
Adjust the slide timing/easing in `.cart-sidebar`'s `transition` property, or change the sidebar width via the `width` property in `.cart-sidebar`.