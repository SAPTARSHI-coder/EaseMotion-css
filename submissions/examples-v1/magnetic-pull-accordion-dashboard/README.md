# Magnetic Pull Accordion - Responsive Dashboard

A modern **Pure CSS accordion** designed for responsive dashboard interfaces. The component features subtle magnetic pull interactions, semantic HTML, responsive layouts, customizable CSS variables and zero JavaScript.

---

## Features

- Pure CSS implementation
- Zero JavaScript
- Magnetic Pull interaction
- Responsive dashboard layout
- Semantic HTML using `details` and `summary`
- Keyboard accessible
- CSS Custom Properties
- Reduced motion support
- Lightweight and reusable
- Dashboard-inspired UI

---

## CSS Custom Properties

Customize the component using the following variables.

```css
:root {
  --duration: 0.55s;
  --easing: cubic-bezier(0.22, 1, 0.36, 1);

  --pull: 12px;
  --scale: 1.04;

  --primary: #38bdf8;
  --secondary: #22c55e;

  --radius: 22px;
}
```

### Motion

- `--duration`
- `--easing`
- `--pull`
- `--scale`

### Colors

- `--primary`
- `--secondary`

### Layout

- `--radius`

---

## Accessibility

The accordion is built using semantic HTML elements for improved accessibility.

Features include:

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

Works in all modern evergreen browsers.

- Chrome
- Edge
- Firefox
- Safari

---

## Usage

Open `demo.html` in any modern browser.

No installation is required.

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
        📊
      </div>

      <div class="summary-copy">
        <h2>Project Analytics</h2>
        <p>Track important business metrics.</p>
      </div>

      <span class="indicator"></span>

    </summary>

    <div class="content">
      <p>
        Dashboard content goes here.
      </p>
    </div>

  </details>

</section>
```

---

## Ideal Use Cases

- Admin Dashboards
- Analytics Platforms
- CRM Applications
- SaaS Products
- Knowledge Bases
- Project Management Tools
- Business Reporting Interfaces

---

## Folder Structure

```
magnetic-pull-accordion-dashboard/
│
├── demo.html
├── style.css
└── README.md
```

---

## Highlights

- Pure CSS
- Magnetic Pull interaction
- Dashboard-inspired interface
- Responsive
- Accessible
- Keyboard friendly
- Zero JavaScript
- Easy customization
