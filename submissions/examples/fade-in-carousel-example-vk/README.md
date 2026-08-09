# Fade-In Carousel for Accessible Web Layouts

A responsive carousel component built with pure HTML and CSS. The carousel showcases content using smooth fade-in transitions without relying on JavaScript, making it lightweight, accessible, and easy to integrate into modern web layouts.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth fade-in carousel animation
- Fully responsive across desktop, tablet, and mobile devices
- Easy customization using CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
fade-in-carousel-example-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. The carousel cycles through slides using CSS keyframe animations.
3. Customize the slide content, colors, animation duration, and timing as needed.

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --secondary: #4f46e5;
    --surface: #ffffff;
    --background: #f4f6fb;
    --text: #1f2937;

    --radius: 16px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    --duration: 9s;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Built using semantic HTML5 elements.
- Responsive layout adapts to desktop, tablet, and mobile viewports.

---

## Browser Support

Compatible with all modern browsers
---

## License

This example is provided as a showcase component for the EaseMotion CSS project.