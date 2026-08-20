# CSS Float-Drift Stepper

A modern **CSS Float-Drift Stepper** built entirely with **HTML5** and **CSS3**. This showcase demonstrates a clean, minimalist stepper component featuring a subtle floating animation for the active step, responsive layouts, and accessibility-friendly semantic markup—without any JavaScript.

---

## ✨ Features

- 🚀 Pure HTML5 & CSS3
- ✨ Smooth float-drift animation for the active step
- ✅ Completed and active step states
- 💻 Minimalist tech-inspired design
- 📱 Fully responsive layout
- ♿ Semantic HTML structure
- 🎨 Easy customization using CSS Custom Properties
- 🌙 Supports `prefers-reduced-motion`
- ⚙️ No JavaScript or external libraries

---

## 📂 Folder Structure

```text
minimalist-float-drift-stepper/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern web browser.
2. Update the step states by changing the CSS classes:
   - `completed`
   - `active`
   - default (upcoming)
3. Customize colors and spacing using the CSS custom properties.

---

## 🎨 CSS Custom Properties

| Variable | Description |
|----------|-------------|
| `--bg` | Page background color |
| `--surface` | Card background |
| `--primary` | Active step color |
| `--success` | Completed step color |
| `--border` | Border and connector color |
| `--text` | Primary text color |
| `--muted` | Secondary text color |
| `--radius` | Border radius |
| `--shadow` | Card shadow |

Example:

```css
:root{
    --primary:#2563eb;
    --success:#16a34a;
}
```

---

## 📱 Responsive Design

Optimized for:

- 💻 Desktop (4 columns)
- 💼 Laptop
- 📱 Tablet (2 columns)
- 📱 Mobile (single column)

The stepper automatically adjusts its layout based on the screen size.

---

## ♿ Accessibility

This example includes:

- Semantic HTML (`main`, `header`, `section`, `article`)
- Clear visual distinction between completed, active, and upcoming steps
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