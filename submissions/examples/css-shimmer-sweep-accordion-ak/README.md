# CSS Shimmer-Sweep Accordion for Gaming Hub Layouts

A modern accordion component featuring a shimmer-sweep hover effect designed for gaming portals, esports websites, FAQs, and feature showcases. Built entirely with HTML5 and CSS3—no JavaScript required.

---

## Features

- 🎮 Gaming-inspired dark theme
- ✨ Shimmer sweep hover animation
- 📂 Pure HTML & CSS
- 📱 Fully responsive
- ⚙️ CSS custom properties
- ♿ Supports `prefers-reduced-motion`
- 🚀 Lightweight and performant
- 🧩 Easy to customize

---

## Folder Structure

```text
css-shimmer-sweep-accordion-ak/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Simply open `demo.html` in any modern browser.

No installation or build process is required.

---

## HTML Example

```html
<details class="accordion-item">
    <summary>🎮 Latest Releases</summary>

    <div class="content">
        <p>Explore the newest games and updates.</p>
    </div>
</details>
```

---

## CSS Custom Properties

The component can be customized using CSS variables.

```css
:root{

    --ease-primary:#22d3ee;

    --ease-secondary:#6366f1;

    --ease-bg:#0f172a;

    --ease-surface:#1e293b;

    --ease-radius:16px;

    --ease-duration:.45s;

}
```

Example customization:

```css
:root{

    --ease-primary:#f97316;

    --ease-secondary:#ef4444;

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

This example follows accessibility best practices.

- Semantic `<details>` and `<summary>`
- Keyboard accessible
- No JavaScript dependency
- Reduced motion support
- Responsive typography

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
- CSS Custom Properties
- CSS Transitions
- CSS Keyframes
- CSS Gradients

---

## Why It Fits EaseMotion CSS

This example demonstrates lightweight, animation-first UI interactions using only HTML and CSS. The shimmer-sweep hover effect enhances the gaming aesthetic while keeping the implementation reusable, accessible, and easy to customize.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.