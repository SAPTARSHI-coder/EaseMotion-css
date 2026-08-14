# CSS Glitch-Flicker Progress Bar

A modern **Glitch-Flicker Progress Bar** built entirely with **HTML5** and **CSS3**. This showcase demonstrates a minimalist tech-inspired progress indicator with a subtle glitch animation, animated gradient fill, responsive design, and accessibility support—without any JavaScript.

---

## ✨ Features

- 🚀 Pure HTML5 & CSS3
- ⚡ Glitch flicker animation
- 🌈 Animated gradient progress fill
- 💻 Minimalist tech-inspired design
- 📱 Fully responsive layout
- ♿ Accessible progress bar with ARIA attributes
- 🎨 Easy customization using CSS Custom Properties
- 🌙 Supports `prefers-reduced-motion`
- ⚙️ No JavaScript or external libraries

---

## 📂 Folder Structure

```text
minimalist-glitch-flicker-progress-bar/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern web browser.
2. The progress bar displays a loading state with a glitch-flicker effect.
3. Change the progress value by updating the CSS custom property:

```css
:root{
    --progress:72%;
}
```

You can also update the displayed percentage in `demo.html` to match.

---

## 🎨 CSS Custom Properties

| Variable | Description |
|----------|-------------|
| `--bg` | Page background color |
| `--surface` | Card background |
| `--track` | Progress track color |
| `--primary` | Primary progress color |
| `--secondary` | Secondary progress color |
| `--success` | Status indicator color |
| `--text` | Main text color |
| `--muted` | Secondary text color |
| `--radius` | Border radius |
| `--progress` | Progress fill percentage |

Example:

```css
:root{
    --primary:#00d9ff;
    --secondary:#7c3aed;
    --progress:72%;
}
```

---

## 📱 Responsive Design

Optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Tablet
- 📱 Mobile

The layout automatically adjusts spacing and typography for smaller screens.

---

## ♿ Accessibility

This example includes:

- Semantic HTML5 structure
- `role="progressbar"`
- `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`
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