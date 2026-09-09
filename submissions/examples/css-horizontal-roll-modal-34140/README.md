# CSS Horizontal Roll Modal for E-Commerce Checkout Layouts

## Overview

This project demonstrates a responsive e-commerce checkout modal with a smooth **Horizontal Roll** entrance animation built entirely using HTML and CSS. The modal showcases a modern checkout interface enhanced with a rolling transition, providing an engaging user experience without requiring JavaScript.

---

## Features

- Pure HTML5 and CSS3 implementation
- Smooth Horizontal Roll entrance animation
- Responsive checkout modal layout
- Keyboard-accessible modal structure
- Modern e-commerce checkout interface
- CSS custom properties for easy customization
- Lightweight and reusable component
- No JavaScript or external libraries required

---

## Project Structure

```
css-horizontal-roll-modal/
│
├── demo.html
├── style.css
└── README.md
```

---

## Preview

The modal contains:

- Checkout heading
- Shipping address section
- Payment method section
- Order summary
- Total amount
- Place Order button

When the page loads:

- The background overlay fades in.
- The checkout modal performs a smooth horizontal roll animation from the right.
- The component settles into the center with a polished transition.

---

## How to Use

1. Download or clone the project.
2. Ensure the following files remain in the same folder:

```
demo.html
style.css
```

3. Open `demo.html` in any modern web browser.

No installation or build tools are required.

---

## Customization

Modify the CSS variables in `style.css` to customize:

```css
:root{
    --modal-width:420px;
    --radius:18px;
    --duration:.7s;
    --easing:cubic-bezier(0.22,1,0.36,1);
}
```

You can easily change:

- Modal width
- Border radius
- Animation duration
- Animation easing
- Colors
- Typography
- Button styling
- Shadow intensity

---

## Browser Compatibility

Tested on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari (Latest Version)

---

## Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Animations
- Flexbox

---

## Why This Component?

This component demonstrates how CSS-only horizontal roll animations can create visually engaging checkout experiences while maintaining responsiveness, accessibility, and excellent performance. It is suitable for modern e-commerce interfaces where smooth motion enhances user interaction without increasing complexity.

---

## License

This project is provided for educational and demonstration purposes.