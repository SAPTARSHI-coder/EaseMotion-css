# Floating Orbit Accordion - SaaS Showcase

A premium Pure CSS accordion designed for modern SaaS landing pages, feature showcases, FAQs and product documentation.

The component uses floating orbit-inspired animations, glassmorphism styling and responsive layouts while remaining completely JavaScript-free.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Floating Orbit transition effects
- Modern SaaS glassmorphism design
- Responsive layout
- Keyboard accessible
- Semantic HTML using `details` and `summary`
- CSS Custom Properties
- Reduced motion support
- Lightweight and dependency-free

---

## CSS Custom Properties

The component exposes several CSS variables for customization.

```css
:root{
  --duration:.6s;
  --easing:cubic-bezier(.22,1,.36,1);

  --scale:1.08;

  --primary:#60a5fa;
  --secondary:#8b5cf6;

  --orbit:#7dd3fc;

  --radius:22px;
}
```

### Animation

- `--duration`
- `--easing`
- `--scale`

### Colors

- `--primary`
- `--secondary`
- `--orbit`

### Layout

- `--radius`

---

## Accessibility

The accordion is built using semantic HTML elements.

Accessibility features include:

- Keyboard navigation
- Native `details` / `summary`
- Visible focus styles
- Responsive layout
- Reduced motion support using:

```css
@media (prefers-reduced-motion: reduce)
```

---

## Browser Support

Works in all modern evergreen browsers.

- Chrome
- Edge
- Firefox
- Safari

---

## Usage

Open `demo.html` in any modern browser.

No installation is required.

No JavaScript is required.

Simply include:

```html
<link rel="stylesheet" href="style.css">
```

and use the provided accordion markup.

---

## Ideal Use Cases

- SaaS Landing Pages
- Product Features
- Pricing Pages
- Documentation
- FAQs
- Knowledge Bases
- Dashboard Help Sections

---

## Folder Structure

```
floating-orbit-accordion-saas/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Floating Orbit animation
- Responsive
- Modern SaaS aesthetics
- Accessible
- Zero JavaScript
