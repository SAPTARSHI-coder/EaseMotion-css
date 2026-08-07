# CSS Zoom-In Feature Grid for Creative Portfolio Layouts

A modern, responsive portfolio feature grid showcasing smooth CSS zoom-in interactions. Built entirely with HTML and CSS, this example demonstrates lightweight, accessible hover animations suitable for portfolios, landing pages, and product showcases.

---

## Features

- 🎨 Pure HTML5 & CSS3
- 🚀 Smooth Zoom-In Hover Animation
- 📱 Fully Responsive Layout
- ⚙️ CSS Custom Properties
- ♿ Supports `prefers-reduced-motion`
- 💻 No JavaScript Required
- 🧩 Easy to Customize
- 🎯 Portfolio-Friendly Design

---

## Folder Structure

```text
css-zoom-in-feature-grid-ak/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

Open `demo.html` directly in your browser.

No dependencies or build tools are required.

---

## HTML Example

```html
<div class="feature-grid">

    <article class="feature-card">

        <div class="icon">🎨</div>

        <h2>Creative Design</h2>

        <p>Beautiful UI components.</p>

    </article>

</div>
```

---

## CSS Custom Properties

The example exposes several variables for easy customization.

```css
:root{

    --ease-primary:#4f46e5;

    --ease-secondary:#7c3aed;

    --ease-duration:.45s;

    --ease-scale:1.08;

    --ease-radius:18px;

    --ease-shadow:0 12px 30px rgba(0,0,0,.12);

}
```

Example customization:

```css
:root{

    --ease-primary:#0f766e;

    --ease-secondary:#14b8a6;

    --ease-scale:1.12;

}
```

---

## Responsive Design

The feature grid automatically adapts to different screen sizes using CSS Grid.

- Desktop
- Tablet
- Mobile

---

## Accessibility

This example follows accessibility best practices:

- Semantic HTML structure
- Responsive layout
- Keyboard-friendly content
- Supports `prefers-reduced-motion`
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
- CSS Custom Properties
- CSS Transforms
- CSS Transitions

---

## Why It Fits EaseMotion CSS

This submission aligns with EaseMotion CSS's animation-first philosophy by providing a clean, reusable portfolio layout with lightweight hover interactions. It demonstrates modern UI patterns while remaining responsive, accessible, and easy to customize through CSS variables.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.