# Tada-Click Tooltip

A responsive, CSS-only tooltip component featuring a smooth **Tada-Click** interaction designed for creative portfolio interfaces. The component is lightweight, customizable through CSS custom properties, keyboard accessible, and requires no JavaScript.

---

## Features

- 🎨 Modern Creative Portfolio aesthetic
- ✨ Smooth Tada-Click animation
- 💡 Pure HTML & CSS
- ♿ Keyboard accessible (`:focus-visible`)
- 📱 Fully responsive
- ⚡ GPU-friendly transform animations
- 🎛️ Customizable using CSS variables
- 🚫 Zero JavaScript dependencies

---

## Folder Structure

```
submissions/
└── examples/
    └── tada-click-tooltip/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create a tooltip trigger:

```html
<button class="tooltip-trigger">
    View Project

    <span class="tooltip">
        Creative Portfolio Tooltip
    </span>

</button>
```

The tooltip appears on both **hover** and **keyboard focus**.

---

## CSS Custom Properties

The component exposes several CSS variables for easy customization.

| Variable | Description | Default |
|----------|-------------|---------|
| `--duration` | Animation duration | `.45s` |
| `--easing` | Animation easing | `cubic-bezier(.22,1,.36,1)` |
| `--scale` | Maximum animation scale | `1.08` |
| `--primary` | Primary button color | `#6366f1` |
| `--secondary` | Secondary button color | `#06b6d4` |
| `--accent` | Accent button color | `#ec4899` |
| `--tooltip-bg` | Tooltip background | `#111827` |
| `--tooltip-color` | Tooltip text color | `#ffffff` |

Example customization:

```css
:root{

    --duration:.6s;
    --scale:1.12;
    --primary:#7c3aed;

}
```

---

## Accessibility

The component includes:

- Keyboard navigation support
- `:focus-visible` styling
- Semantic HTML
- CSS-only interaction
- Reduced motion support using:

```css
@media (prefers-reduced-motion: reduce)
```

---

## Responsive Design

The layout adapts to:

- Desktop
- Tablet
- Mobile devices

Buttons stack vertically on smaller screens while maintaining tooltip usability.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Performance

The component uses only:

- `transform`
- `opacity`

for animation, allowing modern browsers to render smooth 60fps animations using GPU acceleration.

No JavaScript or external libraries are required.

---

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Human-readable class names
- Animation-first design
- Pure CSS implementation
- Reusable UI component
- Lightweight architecture
- Modern responsive styling
- Easy customization using CSS variables

---

## Live Preview

Simply open `demo.html` in any modern browser.

No build tools or installation are required.

---

## License

Created as an example component for the EaseMotion CSS examples library.