# CSS Zoom-Out Modal for Minimalist Tech Layouts

A lightweight **pure CSS Zoom-Out Modal** designed for modern minimalist interfaces. The component uses the `:target` selector, requiring **no JavaScript**, while providing a smooth opening animation, responsive layout, and keyboard-friendly focus styles.

## Features

- 🎨 Pure HTML & CSS (No JavaScript)
- ✨ Smooth Zoom-Out animation
- 📱 Fully responsive design
- ♿ Keyboard accessible with visible focus states
- ⚙️ Easy customization using CSS Custom Properties
- 🚀 Lightweight and easy to integrate

## Folder Structure

```
css-zoom-out-modal-minimalist/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` directly in any modern browser.
2. Click the **Open Modal** button.
3. Close the modal using the **×** icon or the **Close** button.

## Customization

Modify the CSS variables in `style.css`:

```css
:root {
  --duration: 0.45s;
  --easing: cubic-bezier(.22, 1, .36, 1);
  --start-scale: 1.12;
  --end-scale: 1;
  --accent: #38bdf8;
}
```

You can easily change:

- Animation duration
- Easing curve
- Zoom scale
- Accent color
- Border radius
- Background colors

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by providing a reusable, animation-first UI component built entirely with CSS. It demonstrates smooth motion, clean code structure, accessibility, responsiveness, and simple customization without relying on JavaScript.