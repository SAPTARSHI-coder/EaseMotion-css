# Fade-In Tabs for Accessible Web Layouts

A modern, responsive tab component built using pure HTML and CSS. Tabs smoothly fade into focus when hovered or selected, while the associated content panel fades into view using CSS-only interactions.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth fade-in interaction for tabs
- Fade-in content transition
- CSS-only tab switching
- Responsive three-tab layout
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
fade-in-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over a tab to bring it into focus with a fade effect.
3. Select a tab to reveal its corresponding content with a smooth fade-in animation.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --background:#f4f6fb;
    --surface:#ffffff;
    --text:#222222;

    --radius:14px;
    --duration:.45s;

    --shadow:0 12px 30px rgba(0,0,0,.12);
}
```

---

## Accessibility

- Keyboard navigation using `:focus-visible`.
- Supports `prefers-reduced-motion`.
- Uses semantic HTML for improved accessibility.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.