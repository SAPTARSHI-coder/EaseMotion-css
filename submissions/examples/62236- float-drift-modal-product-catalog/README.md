# CSS Float-Drift Modal for Product Catalog Layouts

## Overview

The CSS Float-Drift Modal for Product Catalog Layouts is a modern UI component created using pure HTML and CSS.

This component provides floating modal cards with smooth drift animations for product catalog interfaces without using JavaScript.

It is developed for the EaseMotion CSS collection to demonstrate lightweight, responsive, and accessible CSS animations.

---

## Features

- Pure HTML and CSS implementation
- Floating drift animation effect
- Product catalog modal layout
- Glassmorphism design
- Smooth CSS transitions
- Hover-based interactions
- Responsive layout support
- CSS custom properties
- prefers-reduced-motion accessibility support

---

## Folder Structure


float-drift-modal-product-catalog/

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


2. Open `demo.html` in a browser.

3. Customize variables inside `style.css`.

---

## CSS Custom Properties

```css
:root {

    --bg:#08111f;
    --card:rgba(255,255,255,.08);
    --border:rgba(255,255,255,.18);
    --text:white;
    --accent:#38bdf8;
    --radius:22px;

}
Animation Details
Float Drift Effect

The modal uses CSS keyframes to create a floating movement.

Animation includes:

Vertical floating motion
Smooth reveal transition
Scale transformation
Opacity animation
Responsive Design

Optimized for:

Desktop
Tablet
Mobile devices

The grid automatically adjusts according to screen size.

Accessibility

Supports reduced motion preference:

@media(prefers-reduced-motion:reduce)

Animations and transitions are disabled for users who prefer reduced motion.

Browser Support

Compatible with:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
Contribution

This component is created as part of the EaseMotion CSS open-source contribution collection under GSSoC-26.

License

This project follows the licensing guidelines of the EaseMotion CSS repository.