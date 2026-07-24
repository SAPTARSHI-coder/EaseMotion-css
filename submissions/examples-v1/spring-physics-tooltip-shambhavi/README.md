# Spring Physics Tooltip

A standalone CSS-only tooltip component featuring a smooth spring-inspired animation and a modern glassmorphism design for dashboard analytics interfaces.

---

## Features

- Pure HTML & CSS
- Spring physics inspired animation
- Glassmorphism tooltip
- Responsive layout
- Keyboard accessible using `:focus-within`
- Customizable with CSS custom properties
- No JavaScript required

---

## Folder Structure

```
spring-physics-tooltip-shambhavi/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="tooltip-wrapper">

<button class="info-btn">i</button>

<div class="tooltip">

Revenue generated this month.

</div>

</div>
```

---

## CSS Custom Properties

```css
--tooltip-duration
--tooltip-scale
--tooltip-distance
--tooltip-easing
```

These variables can be modified to customize the animation speed, scaling, movement, and easing.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## License

MIT