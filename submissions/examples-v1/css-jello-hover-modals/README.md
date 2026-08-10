# CSS Jello-Hover Modal for SaaS Showcase Layouts

A modern **pure CSS Jello-Hover Modal** designed for SaaS landing pages and showcase websites. The modal uses the CSS `:target` selector for opening and closing, eliminating the need for JavaScript while providing a smooth hover animation and responsive design.

## Features

- 🎨 Pure HTML & CSS (No JavaScript)
- ✨ Jello-Hover animation on modal hover
- 📱 Fully responsive layout
- ♿ Keyboard accessible with visible focus styles
- ⚙️ Customizable using CSS Custom Properties
- 🚀 Lightweight and easy to integrate

## Folder Structure

```text
css-jello-hover-modal/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click the **Launch Modal** button.
3. Hover over the modal to see the **Jello** animation.
4. Close the modal using the **×** icon or **Cancel** button.

## Customization

The component exposes several CSS variables for easy customization:

```css
:root {
  --primary: #4f46e5;
  --duration: .45s;
  --easing: cubic-bezier(.22,1,.36,1);
  --radius: 18px;
}
```

You can customize:

- Primary color
- Animation duration
- Animation easing
- Border radius
- Background colors
- Shadow and overlay

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a reusable, animation-first UI component built entirely with CSS. It demonstrates smooth motion, accessibility, responsiveness, and easy customization while requiring zero JavaScript, making it suitable for modern SaaS interfaces.