# CSS Slide-Up Progress Bar

A modern **CSS Slide-Up Progress Bar** built entirely with **HTML5** and **CSS3**. This showcase demonstrates a clean, minimalist tech-inspired progress bar featuring a smooth slide-up fill animation, animated highlight sweep, responsive layout, and accessibility support—without any JavaScript.

---

## ✨ Features

- 🚀 Pure HTML5 & CSS3
- ⬆️ Smooth slide-up fill animation
- ✨ Animated highlight sweep
- 💻 Minimalist tech-inspired design
- 📱 Fully responsive layout
- ♿ Accessible progress bar with ARIA attributes
- 🎨 Easy customization using CSS Custom Properties
- 🌙 Supports `prefers-reduced-motion`
- ⚙️ No JavaScript or external dependencies

---

## 📂 Folder Structure

```text
minimalist-slide-up-progress-bar/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern web browser.
2. The progress bar animates with a smooth slide-up effect.
3. Update the progress value by changing the CSS custom property:

```css
:root{
    --progress:68%;
}
```

Update the displayed percentage in `demo.html` if you change the progress value.

---

## 🎨 CSS Custom Properties

| Variable | Description |
|----------|-------------|
| `--bg` | Page background color |
| `--surface` | Card background |
| `--track` | Progress track color |
| `--primary` | Primary fill color |
| `--secondary` | Secondary fill color |
| `--success` | Status indicator color |
| `--text` | Primary text color |
| `--muted` | Secondary text color |
| `--radius` | Border radius |
| `--progress` | Progress fill percentage |
| `--transition` | Animation timing |

Example:

```css
:root{
    --primary:#38bdf8;
    --secondary:#0ea5e9;
    --progress:68%;
}
```

---

## 📱 Responsive Design

Optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Tablet
- 📱 Mobile

The layout adjusts spacing and typography automatically for smaller screens.

---

## ♿ Accessibility

This example includes:

- Semantic HTML5 structure
- `role="progressbar"`
- `aria-valuenow`
- `aria-valuemin`
- `aria-valuemax`
- Responsive layout
- `prefers-reduced-motion` support

---

## 🌐 Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## 📄 License

This example follows the same license as the EaseMotion CSS project.