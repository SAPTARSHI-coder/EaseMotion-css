# CSS Scale-Hover Navbar for Product Catalog Layouts

## Overview

The CSS Scale-Hover Navbar for Product Catalog Layouts is a modern navigation component created using pure HTML and CSS.

This component demonstrates a smooth scale-based hover interaction for product catalog interfaces without requiring JavaScript.

It is developed for the EaseMotion CSS collection to showcase lightweight, responsive, and accessible animation techniques.

---

## Features

- Pure HTML and CSS implementation
- CSS-only hover animations
- Smooth scale-hover navigation effects
- Glassmorphism navbar design
- Product catalog showcase layout
- Responsive design support
- CSS custom properties
- prefers-reduced-motion accessibility support

---

## Folder Structure


scale-hover-navbar-product-catalog/

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


2. Open `demo.html` in a modern browser.

3. Customize CSS variables inside `style.css`.

---

## CSS Custom Properties

```css
:root {

    --background:#08111f;
    --surface:rgba(255,255,255,0.08);
    --text:#ffffff;
    --accent:#38bdf8;
    --border:rgba(255,255,255,0.18);
    --radius:20px;

}
Animation Details
Scale Hover Effect

Navbar links use CSS transforms to create smooth scaling interactions.

Effects include:

Scale transformation
Color transition
Background highlight
Entrance Animation

The navbar appears using:

Fade effect
Vertical slide animation
Responsive Design

The layout supports:

Desktop screens
Tablets
Mobile devices

The navbar automatically adjusts for smaller screens.

Accessibility

Reduced motion support is included using:

@media(prefers-reduced-motion:reduce)

Animations and transitions are minimized for users who prefer reduced motion.

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