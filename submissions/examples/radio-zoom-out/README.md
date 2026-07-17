# EaseMotion Radio Zoom Out Animation

## Overview

This submission introduces a reusable `ease-zoom-out` animation for radio buttons. The animation provides a smooth zoom-out effect when a radio option is selected or receives keyboard focus while maintaining accessibility and performance.

---

## Features

- Reusable `ease-zoom-out` utility class
- Smooth GPU-friendly animation
- Keyboard accessible
- Responsive layout
- Supports `prefers-reduced-motion`
- No modifications to framework core files

---

## Folder Structure

```
submissions/examples/radio-zoom-out-ss/
├── demo.html
├── style.css
└── README.md
```

---

## Installation

Simply open `demo.html` in any modern browser.

---

## Usage

Apply the `ease-zoom-out` class to the custom radio indicator.

```html
<span class="radio-circle ease-zoom-out"></span>
```

The animation automatically plays when:

- A radio button is selected
- A radio button receives keyboard focus

---

## Customization

You can modify:

- Animation duration
- Scale amount
- Border color
- Fill color
- Easing function

by editing the CSS.

---

## Accessibility

- Supports keyboard navigation.
- Respects `prefers-reduced-motion`.
- Uses semantic HTML labels for improved usability.

---

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

---

## Responsive

Works on:

- Mobile
- Tablet
- Desktop