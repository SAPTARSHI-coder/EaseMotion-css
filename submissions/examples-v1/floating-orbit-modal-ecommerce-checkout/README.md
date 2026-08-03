# Floating Orbit Modal for E-Commerce Checkout Layouts

A pure CSS modal featuring smooth floating orbit animations designed for modern checkout confirmation interfaces.

---

## Features

- Pure HTML & CSS
- Floating orbit animation
- Responsive layout
- Keyboard accessible buttons
- CSS Custom Properties
- No JavaScript required for animation
- Smooth modal entrance
- Modern e-commerce appearance

---

## Folder Structure

```
floating-orbit-modal-ecommerce/
│
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Create the modal.

```html
<div class="orbit-overlay show">
    <div class="orbit-modal">
        ...
    </div>
</div>
```

---

## CSS Variables

```css
:root{

--modal-width:420px;
--radius:20px;
--primary:#2563eb;
--speed:.6s;
--orbit-speed:10s;
--ease:cubic-bezier(.22,1,.36,1);

}
```

These variables allow developers to customize:

- Animation duration
- Easing
- Modal width
- Border radius
- Brand color

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

---

## Accessibility

- Responsive layout
- Large touch-friendly buttons
- Supports `prefers-reduced-motion`
- High contrast colors

---

## Why this fits EaseMotion CSS

This component follows EaseMotion CSS principles by delivering a reusable, animation-first UI component built entirely with HTML and CSS. The floating orbit effect enhances visual feedback while remaining lightweight, customizable, and free from JavaScript animation dependencies.