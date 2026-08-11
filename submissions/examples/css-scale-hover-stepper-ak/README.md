# CSS Scale-Hover Stepper for Creative Portfolio Layouts

A modern portfolio stepper showcasing a creative workflow with elegant scale-hover animations. Built entirely with HTML5 and CSS3, this example is lightweight, responsive, accessible, and requires no JavaScript.

---

## Features

- 🎨 Creative portfolio workflow
- 🔍 Smooth scale-hover animation
- ✨ Active step highlighting
- 🚀 Pure HTML & CSS
- 📱 Fully responsive
- ⚙️ CSS Custom Properties
- ♿ Supports `prefers-reduced-motion`
- 🧩 Easy to customize

---

## Folder Structure

```text
css-scale-hover-stepper-ak/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Open `demo.html` directly in any modern browser.

No installation or build tools are required.

---

## HTML Example

```html
<div class="stepper">

    <article class="step active">

        <div class="step-number">1</div>

        <h2>Research</h2>

        <p>Understand project goals and user needs.</p>

    </article>

</div>
```

---

## CSS Custom Properties

```css
:root{

    --ease-primary:#6366f1;

    --ease-secondary:#8b5cf6;

    --ease-bg:#f5f7fb;

    --ease-card:#ffffff;

    --ease-radius:18px;

    --ease-duration:.4s;

    --ease-scale:1.06;

}
```

Example customization:

```css
:root{

    --ease-primary:#0ea5e9;

    --ease-secondary:#06b6d4;

    --ease-scale:1.1;

}
```

---

## Responsive Design

The stepper automatically adapts for:

- Desktop
- Tablet
- Mobile

---

## Accessibility

This example includes:

- Semantic HTML structure
- Responsive layout
- Keyboard-friendly content
- `prefers-reduced-motion` support
- No JavaScript dependency

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Transforms
- CSS Transitions
- CSS Custom Properties

---

## Why It Fits EaseMotion CSS

This example follows EaseMotion CSS's animation-first philosophy by providing a lightweight, reusable portfolio stepper with subtle hover interactions. CSS custom properties allow easy customization while maintaining accessibility and responsive behaviour.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.