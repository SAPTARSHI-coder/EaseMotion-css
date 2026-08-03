# CSS Elastic Slide Tooltip - Responsive Dashboard Layout

A lightweight CSS-only tooltip component designed for responsive dashboard interfaces. It provides a smooth slide and scale interaction while keeping the implementation simple, reusable, and JavaScript-free.

## ✨ Features

- Pure HTML & CSS implementation
- Smooth tooltip transition animation
- Responsive dashboard-friendly layout
- Keyboard accessibility support
- Customizable using CSS variables
- No JavaScript dependency
- Lightweight and easy to integrate

## 📁 Folder Structure

```
elastic-slide-tooltip-responsive-dashboard/
│
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Basic structure:

```html
<div class="tooltip-wrapper">

  <button class="tooltip-trigger">
    Hover Me
  </button>

  <div class="tooltip" role="tooltip">
    Tooltip content
  </div>

</div>
```

## 🎨 Customization

The component can be customized using CSS variables:

```css
:root {
  --tooltip-bg: #111827;
  --tooltip-text: #ffffff;
  --transition-time: 0.4s;
  --tooltip-scale: 0.85;
}
```

### Available Variables

| Variable | Purpose |
|---|---|
| `--tooltip-bg` | Tooltip background color |
| `--tooltip-text` | Tooltip text color |
| `--transition-time` | Animation duration |
| `--tooltip-scale` | Initial tooltip scale |

## ♿ Accessibility

- Supports keyboard focus interaction.
- Uses semantic HTML structure.
- Includes tooltip roles and descriptions.
- Works without additional scripts.

## 📱 Responsive Design

The layout adapts across:
- Desktop screens
- Tablets
- Mobile devices

The tooltip automatically adjusts its size and positioning for smaller screens.

## 🌐 Browser Support

Compatible with modern browsers:

- Chrome
- Firefox
- Edge
- Safari

## 💡 Design Philosophy

This component follows an animation-first approach by using simple CSS transitions to create engaging interactions while maintaining performance and usability.

## 📄 License

Created as a CSS component example for the EaseMotion CSS library.