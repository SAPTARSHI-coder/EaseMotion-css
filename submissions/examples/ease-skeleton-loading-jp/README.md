# EaseMotion CSS – Skeleton Loading Placeholder Utility

## Overview

The **Ease Skeleton Loading Placeholder Utility** provides a modern, CSS-only loading state with an animated shimmer effect. It helps improve perceived performance by displaying placeholder elements while content is loading.

This utility is lightweight, responsive, and requires **no JavaScript or external dependencies**.

---

## Features

- ✨ CSS-only shimmer animation
- 📝 Text line placeholders
- 👤 Circular avatar placeholders
- 🖼️ Rectangle/image placeholders
- 📏 Width utility classes
- 📱 Responsive design
- ⚡ Lightweight and easy to customize
- 🚫 Zero JavaScript dependency

---

## Included Files

```
ease-skeleton-loading-jp/
├── demo.html
├── style.css
└── README.md
```

---

## Available Classes

| Class | Description |
|--------|-------------|
| `.skeleton` | Base skeleton element |
| `.skeleton-line` | Text placeholder |
| `.skeleton-circle` | Circular avatar placeholder |
| `.skeleton-rect` | Image/card placeholder |
| `.w-30` – `.w-100` | Width utility classes |

---

## Example

```html
<div class="skeleton-card">
    <div class="skeleton skeleton-circle"></div>

    <div class="content">
        <div class="skeleton skeleton-line w-70"></div>
        <div class="skeleton skeleton-line w-40"></div>
    </div>
</div>
```

---

## Browser Support

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## Customization

You can easily customize:

- Skeleton background color
- Animation duration
- Border radius
- Placeholder sizes
- Width utility classes

---

## Preview

Open `demo.html` in any modern browser to see the animated shimmer effect in action.

---

## License

This submission is created for the **EaseMotion CSS** project and follows the repository's contribution guidelines.