# Color Shift Tag

A modern **Color Shift Tag** component built entirely with **HTML** and **CSS**, inspired by modern e-commerce interfaces and analytics dashboards. The component features smooth animated gradient transitions, reusable color variants, responsive layouts, and accessibility support—all without JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Modern e-commerce inspired design
- Smooth animated color shift effect
- Multiple reusable tag variants
- Responsive layout
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easily customizable using CSS custom properties

---

## Folder Structure

```text
color-shift-tag-amna/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
.tag {

  --start: #6366f1;
  --end: #8b5cf6;

}
```

These variables allow customization of:

- Gradient start color
- Gradient end color
- Tag color themes
- Component appearance

Additional variants can be created by overriding the `--start` and `--end` variables.

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<button class="tag tag-premium">
    <span class="dot"></span>
    Premium
</button>
```

Open **demo.html** in any modern browser to preview the component.

---

## Included Variants

- New
- Sale
- Premium
- Beta
- Trending
- Pro

Each variant reuses the same base component while applying different gradient color combinations using CSS custom properties.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Keyboard navigation supported
- Visible focus styles using `:focus-visible`
- Responsive layout
- Supports `prefers-reduced-motion`
- High-contrast text for improved readability

---

## License

Created as a submission for the **EaseMotion CSS** examples library.