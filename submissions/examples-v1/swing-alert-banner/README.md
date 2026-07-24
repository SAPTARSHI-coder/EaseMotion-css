# Swing Alert Banner

A modern **Swing Alert Banner** component built entirely with **HTML** and **CSS**, inspired by corporate dashboards and enterprise interfaces. The component features a subtle swing entrance animation, reusable alert variants, responsive layouts, and accessibility support—all without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Corporate-inspired alert banner design
- Smooth swing entrance animation
- Multiple reusable alert variants
- Responsive layout
- Keyboard accessible (`:focus-within`)
- Supports `prefers-reduced-motion`
- Easily customizable using CSS

---

## Folder Structure

```text
swing-alert-banner-amna/
├── demo.html
├── style.css
└── README.md
```

---

## Customization

You can easily customize the component by modifying the colors, typography, spacing, and animation timing in `style.css`.

Common customizations include:

- Alert colors
- Border accent colors
- Icon colors
- Border radius
- Animation duration
- Typography
- Shadows

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="banner info">

    <span class="icon">ℹ</span>

    <div class="content">

        <h3>Scheduled Maintenance</h3>

        <p>
            Our services will undergo maintenance on Sunday from 2:00–4:00 AM UTC.
        </p>

    </div>

    <a href="#">
        Learn More →
    </a>

</div>
```

Open **demo.html** directly in any modern browser to preview the component.

---

## Included Variants

- Info
- Success
- Warning

Each variant reuses the same banner component while applying different accent colors suitable for common enterprise notifications.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Semantic HTML structure
- Keyboard accessibility using `:focus-within`
- Responsive layout
- Supports `prefers-reduced-motion`
- High-contrast text for improved readability

---

## License

Created as a submission for the **EaseMotion CSS** examples library.