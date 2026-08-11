# Pendulum Spinner Example

A lightweight, CSS-only pendulum spinner that creates a smooth swinging animation using pure HTML and CSS.

---

## Features

- Pure HTML & CSS
- Smooth pendulum swing animation
- Lightweight and beginner-friendly
- Responsive design
- Accessible with ARIA support
- Respects `prefers-reduced-motion`

---

## File Structure

```
feature-pendulum-spinner-example-ag/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the HTML:

```html
<div class="pendulum-spinner-example-ag" role="img" aria-label="Animated pendulum spinner">
    <div class="pendulum-string-ag"></div>
    <div class="pendulum-ball-ag"></div>
</div>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Open `demo.html` in any modern web browser.

---

## Why is it Useful?

This example demonstrates how simple CSS transforms and keyframe animations can create smooth, visually appealing loading or idle animations without JavaScript. It serves as a reusable animation pattern for modern user interfaces while remaining lightweight and easy to customize.

---

## Accessibility

- Uses semantic HTML.
- Includes `role="img"` and `aria-label` for assistive technologies.
- Supports users who prefer reduced motion through the `prefers-reduced-motion` media query.

---

## Browser Support

Compatible with all modern browsers that support:

- CSS Animations
- CSS Transforms
- Flexbox
- `prefers-reduced-motion`

---

## License

This example is contributed as part of the EaseMotion CSS project.