# Jello Hover Dashboard Modal
A modern **pure CSS dashboard analytics modal** featuring a smooth **Jello Hover** interaction. The component uses a glassmorphism-inspired design, is fully responsive, keyboard accessible, and requires **no JavaScript**.

---

## Features
-  Pure HTML & CSS
-  Smooth Jello Hover animation
-  Dashboard analytics inspired layout
-  Glassmorphism design
-  Fully responsive
-  Keyboard accessible
-  Customizable using CSS variables
-  No JavaScript required

---

## Folder Structure

```
jello-hover-modal-arpita/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Copy the HTML structure from `demo.html`.
2. Include `style.css` in your project.

```html
<link rel="stylesheet" href="style.css">
```

Use the modal component:

```html
<div class="modal-overlay">
    <div class="analytics-modal" tabindex="0">
        <!-- Modal Content -->
    </div>
</div>
```

The **Jello Hover** animation is automatically triggered when the modal is hovered or focused.

---

## Customization

The component exposes several CSS custom properties for easy customization.

```css
:root{
    --primary:#4f8cff;
    --secondary:#22c55e;
    --radius:20px;
    --jello-duration:.8s;
    --transition:.35s ease;
}
```

You can modify:

- Primary color
- Accent color
- Border radius
- Animation duration
- Transition timing
- Background styling

without changing the component structure.

---

## Browser Support
- ✅ Chrome
- ✅ Edge
- ✅ Firefox
- ✅ Safari

---

## Accessibility
- Keyboard focus support using `tabindex="0"`
- Semantic dialog structure
- ARIA labels included
- Visible focus state
- Responsive layout for different screen sizes

---

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Human-readable class names
- Zero JavaScript dependency
- Reusable animation-first design
- Easy customization through CSS variables
- Lightweight and responsive implementation

It demonstrates how expressive interface animations can be achieved using only CSS while remaining clean, maintainable, and production-friendly.