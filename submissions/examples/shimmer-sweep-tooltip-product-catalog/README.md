# CSS Shimmer-Sweep Tooltip for Product Catalog Layouts

## Overview

The CSS Shimmer-Sweep Tooltip for Product Catalog Layouts is a modern UI component created using pure HTML and CSS.

This component provides animated product cards with shimmer sweep effects and interactive tooltips without using JavaScript.

It is designed for the EaseMotion CSS collection to demonstrate lightweight, responsive, and accessible CSS animation patterns.

---

## Features

- Pure HTML and CSS implementation
- CSS-only tooltip interaction
- Smooth shimmer sweep animation
- Product catalog card layout
- Glassmorphism UI design
- Hover based interactions
- Responsive layout support
- CSS custom properties for customization
- prefers-reduced-motion accessibility support

---

## Folder Structure


62284-shimmer-sweep-tooltip-product-catalog/

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

1. Add this folder inside:


submissions/examples/


2. Open `demo.html` in any modern browser.

3. Customize the CSS variables in `style.css`.

---

## CSS Custom Properties

```css
:root {

    --bg: #08111f;
    --card: rgba(255,255,255,0.08);
    --text: #ffffff;
    --accent: #38bdf8;
    --border: rgba(255,255,255,0.2);
    --radius:22px;

}
Animation Details
Shimmer Sweep Effect

The tooltip badge uses CSS keyframes to create a moving light sweep effect.

The animation includes:

Gradient movement
Smooth light reflection
Continuous hover enhancement
Tooltip Reveal

Tooltip animation provides:

Fade-in effect
Smooth movement
Visibility transition
Responsive Design

The component supports:

Desktop screens
Tablets
Mobile devices

The grid automatically adjusts according to screen size.

Accessibility

The component supports reduced motion preferences.

Implemented using:

@media(prefers-reduced-motion:reduce)

Animations and transitions are disabled for users who prefer less motion.

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