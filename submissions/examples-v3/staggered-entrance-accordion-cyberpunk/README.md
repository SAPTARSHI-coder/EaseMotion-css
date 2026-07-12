# Staggered Entrance Accordion - Cyberpunk Neon

A Pure CSS accordion featuring smooth staggered entrance animations with a futuristic cyberpunk neon aesthetic. Built using semantic HTML, responsive layouts, CSS custom properties and zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Staggered Entrance animation
- Cyberpunk Neon design
- Responsive layout
- Semantic HTML using `details` and `summary`
- Keyboard accessible
- CSS Custom Properties
- Reduced motion support
- Lightweight and reusable

---

## CSS Custom Properties

Customize the component using the following variables.

```css
:root {
  --duration: 0.55s;
  --delay: 0.12s;
  --easing: cubic-bezier(0.22, 1, 0.36, 1);

  --scale: 1.03;

  --primary: #00f5ff;
  --secondary: #ff2ea6;

  --radius: 22px;
}
```

### Motion

- `--duration`
- `--delay`
- `--easing`
- `--scale`

### Colors

- `--primary`
- `--secondary`

### Layout

- `--radius`

---

## Accessibility

The accordion is built using native HTML elements.

Accessibility features include:

- Native `details` and `summary`
- Keyboard navigation
- Visible keyboard focus styles
- Responsive layout
- Reduced motion support

```css
@media (prefers-reduced-motion: reduce)
```

---

## Browser Support

Compatible with modern evergreen browsers.

- Chrome
- Edge
- Firefox
- Safari

---

## Usage

Open `demo.html` in any modern browser.

No installation is required.

No JavaScript is required.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<section class="accordion">

  <details open>

    <summary>

      <div class="icon">
        01
      </div>

      <div class="summary-copy">

        <h2>
          Neon Entrance
        </h2>

        <p>
          Items animate sequentially with glow.
        </p>

      </div>

      <span class="plus"></span>

    </summary>

    <div class="content">

      <p>
        Each accordion panel fades upward with
        staggered timing while maintaining a
        futuristic neon appearance.
      </p>

    </div>

  </details>

</section>
```

---

## Ideal Use Cases

- Cyberpunk Dashboards
- SaaS Landing Pages
- Documentation
- FAQ Sections
- Admin Panels
- Gaming Interfaces
- Modern Product Showcases

---

## Folder Structure

```
staggered-entrance-accordion-cyberpunk/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Staggered Entrance animation
- Cyberpunk Neon UI
- Responsive
- Accessible
- Keyboard friendly
- Zero JavaScript
- Easy customization
