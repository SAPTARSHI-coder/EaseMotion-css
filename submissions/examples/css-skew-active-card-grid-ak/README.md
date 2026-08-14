# CSS Skew-Active Card Grid for Gaming Hub Layouts

A modern gaming-themed feature grid that combines subtle skew animations, active card highlighting, and smooth hover effects. Built entirely with HTML5 and CSS3, this example is lightweight, responsive, accessible, and requires no JavaScript.

---

## Features

- 🎮 Gaming-inspired card grid
- 📐 Smooth skew hover animation
- ✨ Active featured card highlight
- 🚀 Pure HTML & CSS
- 📱 Fully responsive
- ⚙️ CSS Custom Properties
- ♿ Supports `prefers-reduced-motion`
- 🧩 Easy to customize

---

## Folder Structure

```text
css-skew-active-card-grid-ak/
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
<div class="card-grid">

    <article class="game-card">

        <div class="icon">🎮</div>

        <h2>Featured Games</h2>

        <p>Discover exciting gaming experiences.</p>

    </article>

</div>
```

---

## CSS Custom Properties

```css
:root{

    --ease-primary:#38bdf8;

    --ease-secondary:#8b5cf6;

    --ease-bg:#0f172a;

    --ease-surface:#1e293b;

    --ease-radius:18px;

    --ease-duration:.4s;

    --ease-skew:-6deg;

}
```

Example customization:

```css
:root{

    --ease-primary:#22c55e;

    --ease-secondary:#14b8a6;

    --ease-skew:-8deg;

}
```

---

## Responsive Design

The layout adapts automatically for:

- Desktop
- Tablet
- Mobile

---

## Accessibility

This example includes:

- Semantic HTML structure
- Keyboard-friendly content
- Responsive layout
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

This example demonstrates lightweight, animation-first UI interactions using only HTML and CSS. The skew hover effect and active card highlight create an engaging gaming-inspired interface while remaining reusable, responsive, and easy to customize.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.