# Staggered Entrance Accordion

A Pure CSS accordion featuring smooth staggered entrance animations for accessible web layouts. Built using semantic HTML, responsive styling, CSS custom properties and zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Staggered Entrance animation
- Responsive layout
- Semantic HTML using `details` and `summary`
- Keyboard accessible
- CSS Custom Properties
- Reduced motion support
- Lightweight and reusable
- Accessible Web Layout design

---

## CSS Custom Properties

The component exposes several CSS variables for customization.

```css
:root {
  --duration: .55s;
  --delay: .12s;
  --easing: cubic-bezier(.22,1,.36,1);

  --scale: 1.02;

  --primary: #2563eb;
  --accent: #60a5fa;

  --radius: 18px;
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
- Visible focus styles
- Responsive layout
- Reduced motion support

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
          Accessible Structure
        </h2>

        <p>
          Built with semantic HTML.
        </p>

      </div>

      <span class="plus"></span>

    </summary>

    <div class="content">

      <p>
        Uses native
        <code>&lt;details&gt;</code>
        and
        <code>&lt;summary&gt;</code>
        elements for accessible interaction.
      </p>

    </div>

  </details>

</section>
```

---

## Ideal Use Cases

- Documentation
- Knowledge Bases
- FAQ Sections
- Dashboard Panels
- Settings Pages
- Educational Websites
- Accessible Interfaces

---

## Folder Structure

```
staggered-entrance-accordion/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Staggered Entrance animation
- Responsive
- Accessible
- Keyboard friendly
- Zero JavaScript
- Easy customization
