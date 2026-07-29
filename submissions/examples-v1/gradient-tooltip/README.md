# Gradient Tooltip

A modern **Gradient Tooltip** component built entirely with **HTML** and **CSS**, inspired by Glassmorphism design patterns. The component features animated gradient backgrounds, frosted glass effects, multiple placement options, responsive layouts, and accessibility support—all without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Glassmorphism-inspired design
- Animated gradient background
- Multiple tooltip placements (Top, Bottom, Left, Right)
- Responsive layout
- Keyboard accessible (`:focus-visible` and `:focus-within`)
- Supports `prefers-reduced-motion`
- Easily customizable using CSS custom properties

---

## Folder Structure

```text
gradient-tooltip/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

The component uses CSS custom properties for its gradient colors.

```css
.tooltip {

  --start: #6366f1;
  --end: #ec4899;

}
```

These variables allow customization of:

- Gradient colors
- Tooltip appearance
- Theme styling

Additional themes can be created by overriding the gradient color variables.

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="tooltip-wrapper">

    <button class="btn">
        Hover Me
    </button>

    <span class="tooltip tooltip-top">
        Premium Feature
    </span>

</div>
```

Open **demo.html** directly in any modern browser to preview the component.

---

## Included Placements

- Top
- Bottom
- Left
- Right

Each placement reuses the same tooltip component while adjusting its position using modifier classes.

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
- Tooltips displayed on keyboard focus using `:focus-within`
- Responsive layout
- Supports `prefers-reduced-motion`
- High-contrast text for improved readability

---

## License

Created as a submission for the **EaseMotion CSS** examples library.