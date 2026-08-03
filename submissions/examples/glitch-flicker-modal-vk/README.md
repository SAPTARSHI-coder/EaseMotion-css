# Glitch-Flicker Modal for Accessible Web Layouts

A responsive modal built with pure HTML and CSS that uses a subtle glitch-flicker entrance animation. The modal is opened using the CSS `:target` selector, making it lightweight, accessible, and free from JavaScript dependencies.

---

## Features

- Pure HTML5 and CSS3
- CSS-only modal using the `:target` selector
- Subtle glitch-flicker entrance animation
- Fully responsive layout
- CSS custom properties for easy customization
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Keyboard accessible using `:focus-visible`

---

## Folder Structure

```
glitch-flicker-modal-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Click the **Open Modal** button to display the modal.
3. The modal appears with a subtle glitch-flicker animation.
4. Customize colors, spacing, animation timing, and content using the CSS variables.

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --background: #f4f7fb;
    --surface: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;

    --radius: 18px;
    --shadow: 0 16px 40px rgba(0, 0, 0, 0.18);

    --transition: 0.3s ease;
    --animation: 0.6s ease;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Keyboard accessible using `:focus-visible`.
- Uses semantic HTML5 structure.
- Responsive across desktop, tablet, and mobile devices.
- No JavaScript required.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.