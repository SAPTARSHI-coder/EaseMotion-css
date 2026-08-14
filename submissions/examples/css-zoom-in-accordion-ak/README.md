# CSS Zoom-In Accordion for Gaming Hub Layouts

A modern gaming-themed accordion featuring smooth zoom-in animations for expanded content. Built entirely with HTML5 and CSS3, this example is lightweight, responsive, accessible, and requires no JavaScript.

---

## Features

- 🎮 Gaming-inspired UI
- 🔍 Smooth Zoom-In Animation
- 🚀 Pure HTML & CSS
- 📱 Fully Responsive
- ⚙️ CSS Custom Properties
- ♿ Supports `prefers-reduced-motion`
- 💡 Easy to Customize
- 🧩 No External Dependencies

---

## Folder Structure

```text
css-zoom-in-accordion-ak/
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
<details class="accordion-item">
    <summary>🎮 Featured Games</summary>

    <div class="content">
        <p>Explore the latest gaming experiences.</p>
    </div>
</details>
```

---

## CSS Custom Properties

Customize the appearance using CSS variables.

```css
:root{

    --ease-primary:#38bdf8;

    --ease-secondary:#8b5cf6;

    --ease-bg:#0f172a;

    --ease-surface:#1e293b;

    --ease-radius:16px;

    --ease-duration:.4s;

    --ease-scale:1.02;

}
```

Example customization:

```css
:root{

    --ease-primary:#22c55e;

    --ease-secondary:#84cc16;

}
```

---

## Responsive Design

The accordion adapts seamlessly across:

- Desktop
- Tablet
- Mobile

---

## Accessibility

This example includes:

- Semantic `<details>` and `<summary>`
- Keyboard accessibility
- Responsive typography
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
- CSS Transitions
- CSS Keyframes
- CSS Custom Properties

---

## Why It Fits EaseMotion CSS

This example demonstrates a clean, reusable accordion with animation-first interactions while remaining lightweight, responsive, and accessible. CSS custom properties make it easy to integrate into different themes and projects.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.