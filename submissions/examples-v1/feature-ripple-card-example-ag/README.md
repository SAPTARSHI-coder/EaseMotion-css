# Ripple Card Example (Disabled State)

A CSS-only ripple card example that demonstrates a smooth ripple animation on a disabled card using pure HTML and CSS.

---

## Features

- Pure HTML & CSS
- Smooth ripple animation
- Disabled-state styling
- Lightweight and beginner-friendly
- Responsive design
- Accessible with ARIA support
- Respects `prefers-reduced-motion`

---

## File Structure

feature-ripple-card-example-ag/
├── demo.html
├── style.css
└── README.md

---

## Usage

Include the HTML:

```html
<div class="ripple-card-example-ag" role="button" aria-disabled="true" tabindex="-1">
    Ripple Card (Disabled)
</div>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Open `demo.html` in any modern web browser.

---

## Why is it Useful?

This example demonstrates how CSS animations can create a smooth ripple effect for a disabled card without JavaScript. It provides a simple, reusable pattern for indicating a pending or unavailable state while remaining lightweight and easy to customize.

---

## Accessibility

- Uses semantic HTML.
- Includes `role="button"` and `aria-disabled="true"` for assistive technologies.
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