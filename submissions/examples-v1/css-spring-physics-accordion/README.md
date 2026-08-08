# CSS Spring Physics Accordion for Neumorphic Soft Layouts

A **pure CSS Spring Physics Accordion** designed for modern **Neumorphic Soft UI** layouts. The component uses the native HTML `<details>` and `<summary>` elements to provide smooth expand/collapse interactions without JavaScript.

## Features

- 🎨 Pure HTML & CSS
- 🌱 Spring-inspired expand/collapse animation
- 💡 Neumorphic soft design
- 📱 Fully responsive
- ♿ Keyboard accessible
- ⚙️ Easy customization using CSS Custom Properties
- 🚀 No JavaScript required

## Folder Structure

```text
css-spring-physics-accordion/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click any accordion section to expand or collapse it.
3. Customize the appearance by modifying the CSS variables in `style.css`.

## Customization

Edit the variables inside `:root`:

```css
:root {
  --accent: #5b7cfa;
  --duration: .45s;
  --easing: cubic-bezier(.22,1,.36,1);
  --radius: 18px;
}
```

You can customize:

- Accent color
- Animation duration
- Easing function
- Border radius
- Background colors
- Neumorphic shadow intensity

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by delivering a lightweight, animation-first accordion built entirely with HTML and CSS. It provides smooth spring-like transitions, responsive behavior, accessibility, and simple customization while requiring zero JavaScript.