# CSS 3D Flip Card Grid

A modern **3D Flip Card Grid** built using only **HTML** and **CSS** for creative portfolio layouts. Each card features a smooth 3D flip animation to reveal additional project details while maintaining a responsive and accessible design.

---

## Features

- ✨ Pure HTML & CSS (No JavaScript required)
- 🎴 Smooth 3D flip card animation
- 🎨 Modern creative portfolio layout
- 📱 Fully responsive for desktop, tablet, and mobile
- ♿ Supports `prefers-reduced-motion`
- 🎭 CSS custom properties for easy customization
- 🚀 Lightweight and easy to integrate

---

## Folder Structure

```
3d-flip-card-grid-ss/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern web browser.
2. Hover over a card to reveal the back side with additional project information.
3. Customize colors, spacing, and animation using the CSS variables in `style.css`.

No JavaScript or external frameworks are required.

---

## CSS Custom Properties

The following variables can be customized in `style.css`:

```css
:root{
    --bg:#070b17;
    --surface:#111827;
    --surface-2:#1f2937;
    --text:#f8fafc;
    --muted:#94a3b8;
    --primary:#6366f1;
    --secondary:#06b6d4;
    --radius:22px;
    --transition:.45s cubic-bezier(.2,.8,.2,1);
}
```

These variables allow quick customization of colors, border radius, and animation timing without changing the component structure.

---

## Accessibility

This example includes:

- Support for `prefers-reduced-motion`
- Semantic HTML (`section`, `article`)
- Keyboard-friendly focus styles
- Responsive layout for multiple screen sizes

---

## Browser Support

Compatible with modern browsers including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Transitions
- CSS Keyframe Animations
- CSS 3D Transforms

---

## Why It Fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a reusable, animation-first UI component built entirely with HTML and CSS. It focuses on smooth motion, clean structure, responsive design, accessibility, and easy customization.

---

## Preview

This example showcases a responsive portfolio grid with interactive 3D flip cards that reveal additional project information using only HTML and CSS.
