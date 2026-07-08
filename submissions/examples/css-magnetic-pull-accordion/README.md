# CSS Magnetic Pull Accordion for Product Catalog Layouts

A pure CSS **Magnetic Pull Accordion** designed for product catalog interfaces. It features a smooth magnetic pull-inspired expand animation, responsive layout, keyboard accessibility, and customizable CSS variables without using JavaScript.

## Features

- Pure HTML & CSS
- Magnetic pull expand animation
- Responsive design
- Keyboard accessible using native `<details>` and `<summary>`
- Customizable with CSS custom properties
- No JavaScript required

## Files

```
css-magnetic-pull-accordion/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="accordion">
  <details>
    <summary>Product Category</summary>
    <div class="content">
      <p>Your content goes here.</p>
    </div>
  </details>
</div>
```

## Customization

Modify the CSS variables in `:root`:

```css
:root{
  --primary:#2563eb;
  --radius:16px;
  --duration:.45s;
  --ease:cubic-bezier(.2,.9,.2,1);
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a lightweight, reusable, JavaScript-free accordion with smooth magnetic pull motion, responsive behavior, accessibility, and simple customization through CSS custom properties.