# Interactive Component Showcase Gallery (EaseMotion CSS)

A modern, highly responsive, dashboard-style Component Showcase Gallery. It highlights eight essential UI components built exclusively with pure HTML and CSS, eliminating JavaScript dependencies to show off lightweight layout engineering.

---

## 📋 Overview

The **Interactive Component Showcase Gallery** demonstrates how core UI parts can act and react natively inside the browser using standard CSS selectors (`:hover`, `:active`, `:checked`, `:focus-within`), hardware-accelerated CSS animations (`@keyframes`), and transforms.

This gallery is ideal as a reference template for contributors looking to understand how to write clean component utilities that align with **EaseMotion CSS** standards.

---

## ✨ Features

The gallery showcases exactly eight distinct UI cards:

1. **Buttons**: Glow fills, transition scales, and pulse effects triggered on cursor pointer interaction.
2. **CSS Modal Dialog**: A full modal popup activated and dismissed using a hidden root checkbox sibling selector hack.
3. **Tooltips**: Directional helper overlays (top, bottom, left, right) that fade and slide into view on target hover.
4. **Badges**: Alert pill overlays, count indicators, and status trackers with pulsing circular rings.
5. **Toggles**: Clean iOS-style switch controls holding checked values.
6. **Cards**: Content layout cards that scale and rotate dynamically on pointer enter (3D tilt illusion).
7. **Loaders**: Continuous spinning rings, jumping loader dots, and linear skeleton cards with moving shimmer gradients.
8. **Navbar**: Top header bar containing menu links that slide an underline element relative to hover status.

---

## 💼 Use Cases

- **Design Systems & UI Kits**: Set up clean preview panels to showcase project styling.
- **Static Pages (No-JS / Jamstack)**: Build websites with interactive triggers (like modals, toggles, dropdowns, and overlays) that function securely even when scripts are blocked or disabled.
- **Low Footprint Mobile UI**: Minimize script payload sizes on mobile landing pages to maximize lighthouse and speed metrics.

---

## 🎨 How to Customize

All component details are structured using CSS Variables in the stylesheet, making updates straightforward.

### 1. Theme Configuration
Modify the colors directly inside `:root` (for Light mode) and `@media (prefers-color-scheme: dark)` (for Dark mode) in `style.css`:

```css
:root {
  --bg-primary: #f8fafc;
  --bg-card: #ffffff;
  --border-color: #e2e8f0;
  --accent-blue: #3b82f6; /* Custom Primary Color */
  --accent-purple: #8b5cf6; /* Custom Secondary Color */
}
```

### 2. Modifying Modal Transitions
To change the modal dialog entrance from a scale-bounce to a slide-up, adjust the transform properties:

```css
/* In style.css */
.ease-modal-box {
  transform: translateY(30px); /* Starts 30px lower */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.ease-modal-input:checked ~ .ease-modal-overlay .ease-modal-box {
  transform: translateY(0); /* Slides up to normal position */
}
```

### 3. Adding Tooltip Directions
To add custom directions or modify existing positions, change the absolute offsets of `.ease-tooltip-box`:

```css
/* Example: Custom Top Right Position */
.ease-tooltip-top-right .ease-tooltip-box {
  bottom: 120%;
  left: 100%;
  transform: translate(-10px, 8px);
}
.ease-tooltip-top-right:hover .ease-tooltip-box {
  opacity: 1;
  transform: translate(0, 0);
}
```
