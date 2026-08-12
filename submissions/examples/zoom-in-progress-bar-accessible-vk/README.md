# Zoom-In Progress Bar for Accessible Web Layouts

A responsive progress bar component built with pure HTML and CSS. The progress bars feature a smooth zoom-in fill animation with staggered transitions, making them ideal for dashboards, analytics pages, and accessibility-focused interfaces.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth zoom-in progress bar animation
- Staggered animation timing for each progress bar
- Fully responsive across desktop, tablet, and mobile devices
- Easy customization using CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
zoom-in-progress-bar-accessible-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. The progress bars animate automatically with a smooth zoom-in effect.
3. Customize the progress values, colors, and animation timing to fit your project.

---

## CSS Custom Properties

```css
:root {
    --primary: #2563eb;
    --secondary: #3b82f6;
    --success: #10b981;
    --warning: #f59e0b;
    --purple: #8b5cf6;

    --background: #f4f7fb;
    --surface: #ffffff;
    --text: #1f2937;

    --radius: 16px;
    --shadow: 0 12px 28px rgba(0, 0, 0, 0.12);

    --duration: 0.9s;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Built with semantic HTML5 for improved readability.
- Fully responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.