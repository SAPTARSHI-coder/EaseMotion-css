# CSS Magnetic Pull Modal for Creative Portfolio Layouts

A pure CSS **Magnetic Pull Modal** designed for creative portfolio interfaces. The modal smoothly animates into view with a subtle magnetic pull effect using only CSS transitions and transforms—no JavaScript required.

## Features

- 🎨 Pure CSS implementation
- 🧲 Smooth magnetic pull entrance animation
- 📱 Fully responsive layout
- ♿ Keyboard-accessible checkbox/label modal pattern
- ⚙️ Customizable using CSS custom properties
- 🚫 No JavaScript required
- 💼 Portfolio-inspired modern design

## Folder Structure

```
magnetic-pull-modal-creative-portfolio/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the modal structure from `demo.html`.

## Customization

Modify the CSS variables in `:root`:

```css
:root{
  --duration: 0.55s;
  --easing: cubic-bezier(.22,1,.36,1);
  --scale: .82;
  --pull-distance: 60px;
  --modal-width: 420px;
  --accent: #7c3aed;
}
```

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by providing:

- Human-readable CSS
- Animation-first design
- Zero JavaScript dependency
- Reusable and customizable styles
- Lightweight, responsive, and accessible implementation

## Demo

Open `demo.html` directly in any modern browser—no build tools or server required.

## License

Created as an EaseMotion CSS example submission for GSSoC 2026.