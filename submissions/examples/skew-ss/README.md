# Skew Hover State Example

## Overview

This example demonstrates a reusable **Skew Hover State** using EaseMotion CSS principles. When users hover over a card, a smooth skew transformation creates an engaging interactive effect while maintaining responsiveness and accessibility.

---

## Features

- Smooth skew hover animation
- Responsive card layout
- Keyboard focus support
- Accessible design
- Supports `prefers-reduced-motion`
- Self-contained implementation
- No framework source files modified

---

## Folder Structure

```
submissions/examples/skew-ss/

├── demo.html
├── style.css
└── README.md
```

---

## Installation

Open `demo.html` in any modern browser.

---

## Usage

Apply the utility class to any element:

```html
<div class="card ease-skew-hover">
    Hover Me
</div>
```

---

## Customization

You can customize:

- Skew angle
- Animation duration
- Scale amount
- Shadow intensity
- Border radius
- Background colors

by editing `style.css`.

---

## Accessibility

- Keyboard focus supported using `:focus-visible`.
- Respects `prefers-reduced-motion`.
- Uses semantic HTML.
- Responsive on desktop, tablet, and mobile devices.

---

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge