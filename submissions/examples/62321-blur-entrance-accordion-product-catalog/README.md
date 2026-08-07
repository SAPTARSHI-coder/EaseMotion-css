# CSS Blur-Entrance Accordion for Product Catalog Layouts

## Overview

The CSS Blur-Entrance Accordion for Product Catalog Layouts is a modern UI component built using pure HTML and CSS.

This component showcases a product catalog accordion with smooth blur entrance animations, glassmorphism cards, and interactive expandable sections without using any JavaScript.

It is created for the EaseMotion CSS collection to demonstrate lightweight, performant, and responsive animation patterns.

---

## Features

- Pure HTML and CSS implementation
- Smooth blur entrance animation
- Product catalog accordion layout
- Glassmorphism card design
- CSS-only interactions
- Smooth hover transitions
- Responsive design for desktop, tablet, and mobile
- CSS custom properties for easy customization
- Accessible motion handling with `prefers-reduced-motion` support

---

## Folder Structure

```
62321-blur-entrance-accordion-product-catalog/

├── demo.html
├── style.css
└── README.md
```

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

```
submissions/examples/
```

2. Open `demo.html` in any modern browser.

3. Modify CSS variables inside `style.css` to customize colors, spacing, and animation behavior.

---

## CSS Custom Properties

The component uses CSS variables for simple customization.

```css
:root {
    --bg-color: #08111f;
    --card-bg: rgba(255, 255, 255, 0.08);
    --border-color: rgba(255, 255, 255, 0.18);
    --text-color: #ffffff;
    --accent-color: #60a5fa;
    --accent-secondary: #a78bfa;
    --radius: 24px;
}
```

### Customization Examples

Change the primary accent color:

```css
--accent-color: #22c55e;
```

Change card border radius:

```css
--radius: 32px;
```

---

## Animation Details

### Blur Entrance Effect

The component uses CSS keyframe animations to create a smooth entrance effect.

The animation combines:

- Opacity transition
- Blur reduction
- Vertical movement

### Content Reveal Effect

Accordion content uses a smooth reveal animation with:

- Fade-in effect
- Blur removal
- Slide-up transition

---

## Responsive Design

The layout is optimized for:

- Desktop screens
- Tablets
- Mobile devices

Responsive improvements include:

- Flexible product cards
- Mobile-friendly navigation
- Adjusted typography and spacing

---

## Accessibility

The component supports users who prefer reduced motion.

Using:

```css
@media (prefers-reduced-motion: reduce)
```

animations and transitions are minimized to provide a comfortable experience.

---

## Browser Support

Compatible with modern browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Contribution

This component is created as part of the EaseMotion CSS open-source contribution collection under GSSoC-26.

---

## License

This project follows the licensing guidelines of the EaseMotion CSS repository.