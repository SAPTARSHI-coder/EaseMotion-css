# CSS Morph-Glow Dropdown for SaaS Showcase Layouts

A modern **Morph-Glow Dropdown** built with pure HTML and CSS for SaaS dashboards, landing pages, and product showcase websites. The component features morphing glow effects, smooth dropdown animations, glassmorphism styling, responsive layouts, and accessibility support.

---

## ✨ Features

- Pure HTML5 & CSS3
- Morph-glow button animation
- Glassmorphism dropdown panel
- Smooth hover transitions
- Animated gradient borders
- Icon-based dropdown items
- Floating card animation
- Responsive design
- CSS Custom Properties
- `prefers-reduced-motion` support
- No JavaScript required

---

## 📁 Folder Structure

```
submissions/
└── examples/
    └── 62098-morph-glow-dropdown-saas-showcase/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Copy the dropdown component from `demo.html` into your project.

---

## 🎨 CSS Custom Properties

```css
:root{
    --bg:#07131f;
    --panel:#0f2235;
    --card:#132c44;

    --text:#eef8ff;
    --muted:#98b2c7;

    --primary:#4fd7ff;
    --secondary:#7a7dff;
    --accent:#78ffd6;

    --radius:18px;

    --transition:.45s cubic-bezier(.22,1,.36,1);
}
```

These variables allow easy customization of:

- Colors
- Glow intensity
- Border radius
- Animation timing
- Theme appearance

---

## 📱 Responsive

The component adapts automatically for:

- Desktop
- Laptop
- Tablet
- Mobile devices

On smaller screens, dropdowns expand naturally while maintaining usability.

---

## ♿ Accessibility

- Semantic HTML
- Keyboard-friendly navigation using `:focus-within`
- High contrast colors
- Reduced motion support via:

```css
@media (prefers-reduced-motion: reduce)
```

---

## 🌟 Animations

- Morph Glow
- Floating Cards
- Arrow Rotation
- Shimmer Sweep Hover
- Icon Scale
- Soft Glow Pulse
- Smooth Dropdown Reveal

---

## 💡 Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Opera

Latest modern browsers are fully supported.

---

## 📄 License

Created for the **EaseMotion CSS** examples collection.

MIT License.