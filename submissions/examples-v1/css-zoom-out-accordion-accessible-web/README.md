# CSS Zoom-Out Accordion for Accessible Web Layouts

A **pure CSS Zoom-Out Accordion** designed for **Accessible Web Layouts**. The component provides a smooth zoom-out interaction, responsive layout, keyboard accessibility, and easy customization using CSS custom properties—all without JavaScript.

## Features

- ♿ Accessibility-first design
- 🔍 Smooth zoom-out accordion animation
- 🎨 Pure HTML & CSS (No JavaScript)
- 📱 Fully responsive
- ⌨️ Keyboard accessible using native `<details>` and `<summary>`
- 🎛️ Customizable with CSS Custom Properties
- ⚡ Lightweight and reusable

## Folder Structure

```text
css-zoom-out-accordion-accessible-web/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern browser.
2. Click or use the keyboard to expand and collapse accordion sections.
3. Customize colors, animation timing, spacing, and zoom scale by editing the CSS variables in `style.css`.

## Customization

Modify the variables inside the `:root` selector:

```css
:root {
  --primary: #2563eb;
  --accent: #16a34a;
  --radius: 16px;
  --duration: .4s;
  --easing: cubic-bezier(.22,1,.36,1);
  --zoom-scale: .96;
}
```

You can customize:

- Primary and accent colors
- Zoom scale
- Animation duration
- Easing function
- Border radius
- Shadows and spacing

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a lightweight, reusable, animation-first accordion with smooth zoom-out transitions, responsive behavior, keyboard accessibility, and flexible customization using only HTML and CSS.