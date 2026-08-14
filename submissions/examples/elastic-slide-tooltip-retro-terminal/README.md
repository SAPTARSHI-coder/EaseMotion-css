# CSS Elastic Slide Tooltip for Retro Terminal Layouts

A pure CSS animated tooltip featuring a smooth **Elastic Slide** transition inspired by classic **Retro Terminal** interfaces. The component is lightweight, responsive, keyboard accessible, and fully customizable using CSS custom properties.

## ✨ Features

- 🎯 Pure HTML & CSS (No JavaScript)
- 💚 Retro terminal inspired design
- ⚡ Smooth elastic slide animation
- 📱 Fully responsive
- ♿ Keyboard accessible using `:focus-within`
- 🎨 Easily customizable with CSS variables
- 🚀 Lightweight and easy to integrate

## 📂 Folder Structure

```
elastic-slide-tooltip-retro-terminal/
│── demo.html
│── style.css
└── README.md
```

## 🚀 Usage

1. Copy `demo.html` and `style.css` into your project.
2. Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

3. Wrap any element inside `.tooltip-wrapper` and add a `.tooltip`.

```html
<div class="tooltip-wrapper">
    <button class="terminal-btn">Hover Me</button>

    <div class="tooltip">
        This is an Elastic Slide Tooltip.
    </div>
</div>
```

## 🎨 Customization

Modify the following CSS variables inside `:root` to change the appearance.

| Variable | Description |
|----------|-------------|
| `--bg` | Page background |
| `--terminal` | Terminal background |
| `--border` | Border color |
| `--text` | Terminal text color |
| `--tooltip-bg` | Tooltip background |
| `--tooltip-color` | Tooltip text color |
| `--tooltip-radius` | Tooltip border radius |
| `--tooltip-padding` | Tooltip padding |
| `--tooltip-distance` | Distance from trigger |
| `--tooltip-scale` | Initial animation scale |
| `--tooltip-duration` | Animation duration |
| `--tooltip-easing` | Animation easing |

Example:

```css
:root{
    --tooltip-bg:#00ff99;
    --tooltip-color:#000;
    --tooltip-duration:.6s;
    --tooltip-scale:.85;
}
```

## ♿ Accessibility

- Supports keyboard navigation.
- Tooltips appear on both **hover** and **focus**.
- Uses semantic HTML with `role="tooltip"`.
- Compatible with screen readers through `aria-describedby`.

## 📱 Responsive

The component automatically adjusts for tablets and mobile devices.

## 🌐 Browser Support

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## 📄 License

Created for the **EaseMotion CSS Components Library**.

---

Made with ❤️ using HTML and CSS.