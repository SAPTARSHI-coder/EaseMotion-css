# Neon Glow Tooltip

A lightweight, **pure CSS animated tooltip** featuring a smooth **Neon Glow** interaction, crafted to complement modern **Interactive Interface** designs. Built with accessibility and responsiveness in mind, this component delivers premium micro-interactions without requiring any JavaScript.

---

## ✨ Features

- 🎨 Pure CSS implementation
- ⚡ Zero JavaScript dependency
- 💡 Smooth neon glow animation
- 📱 Fully responsive across devices
- ♿ Keyboard accessible with `:focus-visible`
- 🎛️ Easily customizable using CSS Custom Properties
- 🚀 Hardware-accelerated animations
- 🌙 Modern interactive interface aesthetic
- 🧩 Lightweight and easy to integrate

---

## 📸 Overview

The tooltip appears whenever the trigger element is **hovered** or **focused**, combining a subtle fade, scale, and glowing effect to create an engaging yet unobtrusive interaction.

Designed for modern dashboards, SaaS applications, portfolios, documentation websites, and component libraries.

---

## 🚀 Getting Started

Simply include the stylesheet in your project.

```html
<link rel="stylesheet" href="style.css">
```

Create a tooltip element.

```html
<div class="tooltip">
    Hover Me

    <span class="tooltip-content">
        Pure CSS Neon Tooltip
    </span>
</div>
```

No JavaScript setup or build process is required.

---

## 🎨 Customization

The component exposes its key animation and styling values through CSS Custom Properties.

```css
:root{
    --tooltip-bg:#101827;
    --tooltip-color:#ffffff;

    --tooltip-padding:12px;
    --tooltip-radius:12px;

    --tooltip-duration:300ms;
    --tooltip-easing:cubic-bezier(.22,1,.36,1);

    --tooltip-scale:.9;

    --tooltip-glow:#00e5ff;

    --tooltip-shadow:
        0 0 10px rgba(0,229,255,.4),
        0 0 24px rgba(0,229,255,.25);
}
```

### Available Variables

| Variable | Description |
|-----------|-------------|
| `--tooltip-bg` | Tooltip background color |
| `--tooltip-color` | Text color |
| `--tooltip-padding` | Internal spacing |
| `--tooltip-radius` | Corner radius |
| `--tooltip-duration` | Transition duration |
| `--tooltip-easing` | Animation easing |
| `--tooltip-scale` | Initial scale before appearing |
| `--tooltip-glow` | Glow color |
| `--tooltip-shadow` | Neon glow shadow |

---

## ♿ Accessibility

Accessibility is a core part of this component.

- Supports keyboard navigation
- Uses `:focus-visible` for focus states
- High-contrast styling
- Semantic HTML compatible
- No JavaScript required
- Responsive typography

---

## 📱 Responsive Design

The tooltip is designed to adapt gracefully across:

- Desktop
- Laptop
- Tablet
- Mobile

Spacing and sizing remain consistent regardless of screen size.

---

## ⚡ Animation

The interaction combines several CSS transitions to create a polished experience.

- Opacity transition
- Scale animation
- Neon glow effect
- Smooth easing curve
- Hardware-accelerated transforms

The result is a clean, responsive micro-interaction suitable for modern interfaces.

---

## 🎯 Use Cases

Ideal for:

- SaaS Dashboards
- Interactive UI Components
- Admin Panels
- Developer Portfolios
- Documentation Sites
- Design Systems
- Landing Pages
- Analytics Platforms

---

## 🌐 Browser Support

Compatible with all modern browsers, including:

- Chrome
- Firefox
- Edge
- Safari
- Opera
- Brave

---

## 🚀 Performance

Since the component is built entirely with CSS:

- No runtime JavaScript
- Minimal rendering overhead
- GPU-friendly animations
- Lightweight stylesheet
- Excellent performance on modern devices

---

## 🤝 Contributing

Contributions are welcome!

Ideas for future improvements include:

- Additional placement options
- Theme presets
- Glassmorphism variant
- Reduced motion support
- RTL compatibility
- Additional animation styles

---

## 📄 License

Released under the MIT License.

Feel free to use, modify, and distribute this component in personal or commercial projects.

---

## ❤️ Acknowledgements

Created for the **EaseMotion Examples Library** to provide a reusable, accessible, and visually engaging CSS-only tooltip component that demonstrates modern interaction design without relying on JavaScript.

---

If you find this component useful, consider giving the project a ⭐ to support future improvements.