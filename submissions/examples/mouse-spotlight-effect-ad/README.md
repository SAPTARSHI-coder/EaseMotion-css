# Interactive Mouse Spotlight Effect

## What does this do?

Adds a reusable interactive spotlight effect that follows the user's cursor with a smooth radial glow, creating an engaging hover experience for cards and other UI elements.

---

## How is it used?

### HTML

```html
<div class="spotlight-card">
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
</div>
```

### CSS

```css
.spotlight-card {
    /* Apply the spotlight styles from style.css */
}
```

The included JavaScript updates the CSS variables `--x` and `--y` based on the mouse position to create the moving spotlight effect.

---

## Why is it useful?

This effect enhances user interaction by adding subtle cursor-responsive animations without external libraries. It aligns with EaseMotion CSS's animation-first philosophy by providing a lightweight, reusable utility suitable for hero sections, feature cards, buttons, and interactive containers.

---

## Features

- ✨ Cursor-following spotlight effect
- 🎨 Soft radial glow animation
- ⚡ Lightweight vanilla JavaScript
- 📱 Fully responsive
- ♻️ Reusable across different UI components
- 🚀 No external dependencies