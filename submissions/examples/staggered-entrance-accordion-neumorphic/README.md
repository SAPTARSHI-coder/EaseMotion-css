# Staggered Entrance Accordion - Neumorphic Soft UI

A Pure CSS accordion featuring smooth staggered entrance animations with a modern neumorphic design. Built using semantic HTML, responsive layouts, CSS custom properties and zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Staggered Entrance animation
- Soft Neumorphic interface
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

  --scale: 1.02;

  --primary: #5b7cfa;
  --accent: #7aa6ff;

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
- `--accent`

### Layout

- `--radius`

---

## Accessibility

The accordion is built using native HTML elements.

Accessibility features include:

- Native `details` and `summary`
- Keyboard navigation
- Visible keyboard focus indicators
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
          Smooth Entrance
        </h2>

        <p>
          Items animate into view sequentially.
        </p>

      </div>

      <span class="plus"></span>

    </summary>

    <div class="content">

      <p>
        Each accordion card appears using a staggered
        CSS animation without JavaScript.
      </p>

    </div>

  </details>

</section>
```

---

## Ideal Use Cases

- FAQ Sections
- Dashboard Interfaces
- Documentation
- Knowledge Bases
- SaaS Landing Pages
- Admin Panels
- Settings Pages

---

## Folder Structure

```
staggered-entrance-accordion-neumorphic/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Staggered Entrance animation
- Neumorphic UI
- Responsive
- Accessible
- Keyboard friendly
- Zero JavaScript
- Easy customization
