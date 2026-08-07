# CSS Rotate-Fade Navbar for Product Catalog Layouts

## Overview

The **CSS Rotate-Fade Navbar for Product Catalog Layouts** is a modern navigation component built completely using pure HTML and CSS.

This component demonstrates a smooth rotate and fade entrance animation with a glassmorphism navbar design, interactive hover effects, and responsive product catalog layouts without using any JavaScript.

It is created for the **EaseMotion CSS** collection to showcase lightweight, reusable, and performant CSS animation patterns.

---

## Features

- Pure HTML and CSS implementation
- Smooth rotate-fade entrance animation
- Modern product catalog navbar layout
- Glassmorphism UI design
- CSS-only hover interactions
- Smooth transitions and animations
- Responsive design for desktop, tablet, and mobile
- CSS custom properties for easy customization
- No JavaScript dependency
- Accessibility support with `prefers-reduced-motion`

---

## Folder Structure

```
62276-rotate-fade-navbar-product-catalog/
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
- CSS Animations
- CSS Transforms
- Responsive Web Design

---

## Usage

1. Place this folder inside:

```
submissions/examples/
```

2. Open `demo.html` in any modern browser.

3. Customize colors, spacing, and animation speed using CSS variables inside `style.css`.

---

## CSS Custom Properties

The component provides reusable CSS variables for easy customization.

```css
:root {
    --bg-color: #07111f;
    --card-bg: rgba(255,255,255,0.08);
    --border-color: rgba(255,255,255,0.18);
    --text-color: #ffffff;

    --primary: #60a5fa;
    --secondary: #a78bfa;

    --radius: 22px;
    --transition: 0.5s;
}
```

---

## Customization Examples

### Change Accent Color

```css
--primary: #22c55e;
```

### Change Navbar Radius

```css
--radius: 30px;
```

### Adjust Animation Speed

```css
--transition: 0.8s;
```

---

# Animation Details

## Rotate-Fade Entrance

The navbar uses CSS keyframe animation to create a smooth entrance effect.

The animation combines:

- Opacity transition
- 3D rotation movement
- Vertical slide effect
- Smooth visibility transition

---

## Hover Effects

Interactive elements include:

- Navigation link hover animation
- Button scale and rotation effect
- Product card elevation effect
- Smooth transform transitions

All interactions are implemented using CSS only.

---

# Responsive Design

The layout is optimized for:

### Desktop

- Horizontal navigation layout
- Multi-card product showcase
- Enhanced animation experience

### Tablet

- Flexible navigation spacing
- Adjusted card sizing

### Mobile

- Stacked navigation layout
- Single-column product cards
- Improved readability

---

# Accessibility

The component supports reduced motion preferences.

Implemented using:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- Animations are minimized
- Transitions are reduced
- User comfort is prioritized

---

# Browser Support

Compatible with modern browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Performance

This component is optimized with:

- CSS-only animations
- No JavaScript execution
- Lightweight DOM structure
- Hardware-friendly transforms

---

# Contribution

This component is created as part of the **EaseMotion CSS open-source contribution collection under GSSoC-26**.

The purpose is to provide reusable CSS animation examples for developers and designers.

---

# License

This project follows the licensing guidelines of the EaseMotion CSS repository.