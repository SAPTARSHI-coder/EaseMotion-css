# 3D Perspective Tilt Accordion

A Pure CSS accordion featuring subtle 3D perspective tilt interactions designed for accessible web layouts. The component uses semantic HTML, responsive styling, customizable motion parameters and zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- 3D Perspective Tilt interaction
- Accessibility-first design
- Responsive layout
- Semantic HTML using `details` and `summary`
- Keyboard accessible
- Visible focus indicators
- CSS Custom Properties
- Reduced motion support
- Lightweight and reusable

---

## CSS Custom Properties

The component exposes several CSS variables for customization.

```css
:root{
  --duration:.55s;
  --easing:cubic-bezier(.22,1,.36,1);

  --tilt:8deg;
  --perspective:900px;

  --primary:#2563eb;
  --accent:#60a5fa;

  --radius:20px;
}
```

### Motion

- `--duration`
- `--easing`
- `--tilt`
- `--perspective`

### Colors

- `--primary`
- `--accent`

### Layout

- `--radius`

---

## Accessibility

This component is built using native HTML elements.

Accessibility features include:

- Native `details` and `summary`
- Keyboard navigation
- Visible focus styles
- High contrast color palette
- Responsive typography
- Reduced motion support

```css
@media (prefers-reduced-motion: reduce)
```

---

## Browser Support

Compatible with modern browsers.

- Chrome
- Edge
- Firefox
- Safari

---

## Usage

Open `demo.html` in a modern browser.

No installation is required.

No JavaScript is required.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the provided accordion markup inside your page.

---

## Ideal Use Cases

- Documentation
- Knowledge Base
- Accessible FAQs
- Help Centers
- Dashboard Panels
- Settings Pages
- Educational Websites

---

## Folder Structure

```
3d-perspective-tilt-accordion/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- 3D Perspective animation
- Accessibility-first
- Responsive
- Keyboard friendly
- Zero JavaScript
- Easy customization
