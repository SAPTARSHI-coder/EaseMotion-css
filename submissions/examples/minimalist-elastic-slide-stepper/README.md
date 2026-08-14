# CSS Elastic-Slide Stepper

A modern **CSS Elastic-Slide Stepper** built entirely with **HTML5** and **CSS3**. This showcase demonstrates a minimalist multi-step workflow with a smooth elastic-slide animation for the active step, responsive layouts, and accessibility-friendly semantic markup—without requiring JavaScript.

---

## ✨ Features

- 🚀 Pure HTML5 & CSS3
- 🎯 Elastic-slide animation for the active step
- ✅ Completed, active, and upcoming step states
- 💻 Minimalist tech-inspired interface
- 📱 Fully responsive layout
- ♿ Semantic HTML structure
- 🎨 Easy customization using CSS Custom Properties
- 🌙 Supports `prefers-reduced-motion`
- ⚙️ No JavaScript or external dependencies

---

## 📂 Folder Structure

```text
minimalist-elastic-slide-stepper/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern web browser.
2. Update the workflow state by changing the CSS classes:
   - `completed`
   - `active`
   - default (upcoming)
3. Modify colors, spacing, and sizing through the CSS custom properties.

---

## 🎨 CSS Custom Properties

| Variable | Description |
|----------|-------------|
| `--bg` | Page background color |
| `--surface` | Step card background |
| `--primary` | Active step color |
| `--success` | Completed step color |
| `--text` | Primary text color |
| `--muted` | Secondary text color |
| `--border` | Border and connector color |
| `--radius` | Card border radius |
| `--shadow` | Card shadow |
| `--transition` | Transition timing |

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

- 💻 Desktop (4-column layout)
- 💼 Laptop
- 📱 Tablet (2-column layout)
- 📱 Mobile (single-column layout)

The layout automatically adapts for smaller screens to maintain readability and usability.

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