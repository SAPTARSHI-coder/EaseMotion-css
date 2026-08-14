# CSS Shimmer-Sweep Popover for E-Commerce Checkout Layouts

A lightweight, pure CSS/HTML popover component featuring a continuous shimmer-sweep background animation on the trigger element, ideal for highlighting promo codes or coupons in checkout flows.

## Features
- **Pure CSS State Logic:** Operates seamlessly without JavaScript using the checkbox-hack pattern.
- **Continuous Shimmer Animation:** Utilizes keyframes and a skewed CSS linear-gradient overlay (`transform: skewX(-25deg)`).
- **Smooth Popover Entry:** Includes scaling and vertical translation transitions with cubic-bezier easing.
- **Accessibility Friendly:** Fully respects `prefers-reduced-motion` media query by disabling continuous animations.

## CSS Custom Properties
Customize options directly in `style.css`:

```css
:root {
  --primary-color: #f59e0b;
  --accent-color: #10b981;
  --bg-dark: #0f172a;
  --popover-bg: #334155;
  --shimmer-speed: 2.5s;
}