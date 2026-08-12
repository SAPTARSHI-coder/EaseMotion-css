# CSS Shimmer-Sweep Tooltip for Gaming Hub Layouts

A modern gaming-themed tooltip component featuring a smooth shimmer-sweep animation on hover. Built entirely with HTML5 and CSS3, this example is lightweight, responsive, accessible, and requires no JavaScript.

---

## Features

- 🎮 Gaming-inspired tooltip design
- ✨ Shimmer-sweep hover animation
- 💬 Supports Top, Right, Bottom, and Left tooltips
- 🚀 Pure HTML & CSS
- 📱 Fully responsive
- ⚙️ CSS Custom Properties
- ♿ Supports `prefers-reduced-motion`
- 🧩 Easy to customize

---

## Folder Structure

```text
css-shimmer-sweep-tooltip-ak/
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
<div class="tooltip top">

    <button class="action-btn">🎮 Play</button>

    <span class="tooltip-box">
        Launch your favorite game instantly.
    </span>

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

    --ease-radius:14px;

    --ease-duration:.35s;

}
```

Example customization:

```css
:root{

    --ease-primary:#22c55e;

    --ease-secondary:#10b981;

}
```

---

## Responsive Design

The tooltip layout adapts across:

- Desktop
- Tablet
- Mobile

---

## Accessibility

This example includes:

- Semantic HTML
- Keyboard-friendly interactive buttons
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
- CSS Custom Properties
- CSS Transitions
- CSS Gradients

---

## Why It Fits EaseMotion CSS

This example follows EaseMotion CSS's animation-first philosophy by providing lightweight, reusable tooltip interactions with a subtle shimmer-sweep effect. It is responsive, accessible, and easily customizable using CSS variables.

---

## License

Created as a contribution for the EaseMotion CSS examples collection.