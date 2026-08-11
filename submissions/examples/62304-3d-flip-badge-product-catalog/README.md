# CSS 3D-Flip Badge for Product Catalog Layouts

## Overview

The **CSS 3D-Flip Badge for Product Catalog Layouts** is a modern interactive UI component built completely using pure HTML and CSS.

This component demonstrates a product catalog badge system with smooth 3D flip animations, hover interactions, glassmorphism styling, and responsive layouts without using any JavaScript.

It is created for the **EaseMotion CSS** collection to showcase lightweight, performant, and reusable CSS animation techniques.

---

## Features

- Pure HTML and CSS implementation
- CSS-only 3D flip animation
- Interactive product catalog badges
- Smooth hover-based transitions
- Perspective-based 3D transformations
- Glassmorphism card design
- Modern gradient styling
- Responsive layout support
- CSS custom properties for easy customization
- No JavaScript dependency
- Accessible motion handling with `prefers-reduced-motion`

---

## Folder Structure

```
62304-3d-flip-badge-product-catalog/
│
├── demo.html
├── style.css
└── README.md
```

---

## Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Transforms
- CSS Transitions
- CSS Animations
- Responsive Web Design

---

## Usage

1. Add this folder inside:

```
submissions/examples/
```

2. Open `demo.html` in any modern browser.

3. Hover over the product badges to see the 3D flip animation effect.

4. Customize the design by modifying CSS variables inside `style.css`.

---

## CSS Custom Properties

This component uses CSS variables for simple customization.

```css
:root {
    --background: #07111f;
    --card-background: rgba(255, 255, 255, 0.08);
    --border-color: rgba(255, 255, 255, 0.18);
    --text-color: #ffffff;

    --primary-color: #60a5fa;
    --secondary-color: #a78bfa;

    --card-radius: 24px;
    --transition-speed: 0.6s;
}
```

---

## Customization Examples

### Change Primary Color

```css
--primary-color: #22c55e;
```

### Change Card Radius

```css
--card-radius: 32px;
```

### Change Animation Speed

```css
--transition-speed: 0.8s;
```

---

# Animation Details

## 3D Flip Animation

The badge uses modern CSS 3D transformation features:

- `perspective`
- `transform-style: preserve-3d`
- `rotateY()`
- `backface-visibility`

When the user hovers over the badge, the card smoothly rotates and reveals additional information on the opposite side.

---

## Hover Interaction

The component provides:

- Smooth rotation effect
- Depth-based 3D appearance
- Animated shadow transitions
- Interactive product highlighting

All interactions are handled using CSS only.

---

# Responsive Design

The layout is optimized for multiple screen sizes:

### Desktop

- Multi-column product badge layout
- Large 3D interaction area
- Enhanced hover experience

### Tablet

- Flexible card arrangement
- Adjusted spacing
- Optimized dimensions

### Mobile

- Single-column layout
- Touch-friendly sizing
- Improved readability

---

# Accessibility

The component supports users who prefer reduced motion.

Implemented using:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- Animations are reduced
- Transitions become minimal
- User experience remains comfortable

---

# Browser Support

Supported browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Performance

The component is optimized for performance:

- No JavaScript execution
- Hardware-friendly CSS transforms
- Lightweight animations
- Minimal DOM structure

---

# Contribution

This component is created as part of the **EaseMotion CSS open-source contribution collection under GSSoC-26**.

The goal is to provide reusable CSS animation examples for developers and designers.

---

# License

This project follows the licensing guidelines of the **EaseMotion CSS repository**.