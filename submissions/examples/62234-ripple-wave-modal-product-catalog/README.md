# CSS Ripple-Wave Modal for Product Catalog Layouts

## Overview

The CSS Ripple-Wave Modal for Product Catalog Layouts is a modern UI component created using pure HTML and CSS.

This component demonstrates an interactive product catalog modal with smooth ripple-wave animations, glassmorphism styling, and CSS-only interactions without JavaScript.

It is developed for the EaseMotion CSS collection to showcase lightweight, performant, and responsive animation techniques.

---

## Features

- Pure HTML and CSS implementation
- Smooth ripple-wave animation effect
- Product catalog modal layout
- Glassmorphism card design
- CSS-only hover interaction
- Smooth scale and opacity transitions
- Responsive design for desktop, tablet, and mobile
- CSS custom properties for easy customization
- Accessible motion handling with prefers-reduced-motion support

---

## Folder Structure


62234-ripple-wave-modal-product-catalog/

├── demo.html
├── style.css
└── README.md


---

## Technologies Used

- HTML5
- CSS3
- CSS Animations
- CSS Variables
- Responsive Web Design

---

## Usage

1. Place this folder inside:


submissions/examples/


2. Open `demo.html` in any modern browser.

3. Customize CSS variables inside `style.css` according to your design needs.

---

## CSS Custom Properties

The component uses CSS variables for easy customization.

```css
:root {

    --background: #07111f;
    --card-bg: rgba(255,255,255,0.08);
    --border: rgba(255,255,255,0.18);
    --text: #ffffff;
    --accent: #22d3ee;
    --radius: 24px;

}
Animation Details
Ripple-Wave Effect

The component uses CSS keyframe animations to create a smooth ripple expansion effect.

The animation includes:

Circular wave expansion
Opacity fading
Smooth modal appearance
Scale transformation
Modal Reveal Effect

The modal uses:

Scale transition
Blur glass effect
Fade-in animation
Smooth hover interaction
Responsive Design

The layout is optimized for:

Desktop screens
Tablets
Mobile devices

Responsive features include:

Flexible product cards
Adaptive grid layout
Mobile-friendly spacing
Optimized typography
Accessibility

The component supports users who prefer reduced motion.

Using:

@media (prefers-reduced-motion: reduce)

animations and transitions are minimized to provide a comfortable experience.

Browser Support

Compatible with modern browsers:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
Contribution

This component is created as part of the EaseMotion CSS open-source contribution collection under GSSoC-26.

License

This project follows the licensing guidelines of the EaseMotion CSS repository.