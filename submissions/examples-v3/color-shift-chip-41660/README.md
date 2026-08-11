# Color Shift Chip

A modern **Color Shift Chip** component built entirely with **HTML** and **CSS**, inspired by Analytics Dashboard design patterns. The component features animated gradient color transitions, responsive layouts, accessibility support, and customizable CSS variables without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Analytics Dashboard inspired design
- Smooth animated color shifting
- Responsive layout
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easily customizable using CSS custom properties

---

## Folder Structure

```
color-shift-chip-41660/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:.8s;
    --em-delay:0s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --chip-radius:999px;

}
```

These variables allow customization of:

- Animation duration
- Animation delay
- Animation easing
- Chip border radius

The gradient colors can also be customized by editing each chip's `background-image` property.

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<button class="chip active">

    <span class="dot"></span>

    Active

</button>
```

Open **demo.html** directly in any modern browser to preview the component.

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

---

## License

Created as a submission for the **EaseMotion CSS** examples library.