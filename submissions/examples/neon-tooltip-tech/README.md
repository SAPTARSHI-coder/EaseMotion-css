# Neon Glow Tooltip

A modern **pure CSS animated tooltip** featuring a smooth **Neon Glow** interaction designed for minimalist tech interfaces. The component delivers polished micro-interactions with **zero JavaScript**, making it lightweight, accessible, and easy to customize.

---

## ✨ Features

- Pure CSS implementation
- Zero JavaScript required
- Smooth fade + scale animation
- Neon glow transition
- Minimalist Tech inspired design
- Fully responsive
- Keyboard accessible
- Hover & focus support
- CSS Custom Properties for easy customization
- Lightweight and dependency-free
- Easy integration into existing projects
- GPU-friendly animations

---

## 📸 Preview

When hovering or focusing on the trigger element, the tooltip smoothly:

- Fades in
- Scales into place
- Emits a subtle neon glow
- Maintains clean modern styling

---

## 🚀 Getting Started

Clone the repository.

```bash
git clone https://github.com/yourusername/neon-glow-tooltip.git
```

Open the project.

```text
demo.html
style.css
README.md
```

No installation or build process is required.

---

## 📂 Project Structure

```
.
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Create a tooltip.

```html
<div class="tooltip">
    Hover me

    <span class="tooltip-content">
        Pure CSS Tooltip
    </span>
</div>
```

Done.

---

## 🎨 CSS Variables

Every important property is configurable.

```css
:root{

--tooltip-bg:#111827;
--tooltip-text:#ffffff;

--tooltip-padding:12px;
--tooltip-radius:12px;

--tooltip-duration:300ms;
--tooltip-easing:cubic-bezier(.22,1,.36,1);

--tooltip-scale:.9;

--tooltip-glow:#00e5ff;

--tooltip-shadow:
0 0 10px rgba(0,229,255,.35),
0 0 25px rgba(0,229,255,.25);

}
```

---

## Available Variables

| Variable | Purpose |
|----------|---------|
| `--tooltip-bg` | Background color |
| `--tooltip-text` | Text color |
| `--tooltip-padding` | Inner spacing |
| `--tooltip-radius` | Rounded corners |
| `--tooltip-duration` | Animation duration |
| `--tooltip-easing` | Transition easing |
| `--tooltip-scale` | Initial scale |
| `--tooltip-glow` | Glow color |
| `--tooltip-shadow` | Glow shadow |

---

## ♿ Accessibility

The component follows accessibility best practices.

- Keyboard friendly
- Uses `:focus-visible`
- Responsive typography
- High contrast colors
- No JavaScript dependency
- Works with screen-reader friendly markup

---

## 📱 Responsive

Works seamlessly on:

- Desktop
- Laptop
- Tablet
- Mobile

The tooltip automatically scales for smaller screens.

---

## ⚡ Animation

The tooltip combines several subtle effects.

- Opacity transition
- Scale transition
- Neon shadow glow
- Smooth easing
- GPU accelerated transforms

Resulting in a polished interaction suitable for modern interfaces.

---

## 🎛 Customization

### Purple Glow

```css
--tooltip-glow:#7c3aed;
```

### Green Glow

```css
--tooltip-glow:#22c55e;
```

### Faster Animation

```css
--tooltip-duration:180ms;
```

### Slower Animation

```css
--tooltip-duration:500ms;
```

### Different Easing

```css
--tooltip-easing:ease-in-out;
```

---

## 💡 Design Philosophy

The tooltip was designed around three principles.

- Minimal visual noise
- Smooth interaction
- Easy customization

Rather than relying on JavaScript, all behavior is achieved through modern CSS features, reducing complexity while maintaining a premium user experience.

---

## 🌟 Use Cases

Perfect for:

- SaaS Dashboards
- Admin Panels
- Documentation Websites
- Developer Portfolios
- Landing Pages
- Component Libraries
- Design Systems
- Settings Panels
- Analytics Tools

---

## 🌐 Browser Support

Compatible with all modern browsers.

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Brave

---

## 🚀 Performance

This component is optimized for speed.

- Zero JavaScript
- No layout thrashing
- Uses `transform` and `opacity`
- Hardware accelerated animations
- Small CSS footprint

---

## 🤝 Contributing

Contributions are welcome.

Feel free to:

- Improve accessibility
- Add new animation presets
- Enhance responsiveness
- Report bugs
- Suggest new features

---

## 📌 Roadmap

- [ ] Tooltip placement options
- [ ] Theme presets
- [ ] Reduced motion support
- [ ] Glassmorphism variant
- [ ] RTL support
- [ ] Animation presets

---

## 📄 License

Released under the MIT License.

You are free to use, modify, and distribute this component.

---

## ❤️ Credits

Created for the **EaseMotion Examples Library** to showcase modern CSS-only interaction patterns with clean, reusable, and accessible design.

---

If you found this component useful, consider giving the project a ⭐.