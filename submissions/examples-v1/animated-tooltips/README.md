# 💬 Animated Tooltips — EaseMotion CSS

Pure-CSS animated tooltips built with the `ease-` naming convention. Supports **4 positions**, **4 animations**, and **5 themes** — no JavaScript required!

---

## ✨ Features

- 📍 **4 Positions** — Top, Bottom, Left, Right
- 🎬 **4 Animations** — Fade, Slide, Pop, Scale
- 🎨 **5 Themes** — Dark, Light, Primary, Success, Error
- 🎯 **Pure CSS** — No JavaScript dependencies
- ♿ **Accessible** — Works on `:hover` and `:focus`
- 📱 **Responsive** — Mobile-friendly
- 🪶 **Lightweight** — Tiny CSS footprint

---

## 🚀 Usage

### Basic Tooltip
```html
<button class="ease-tooltip-wrap">
  Hover me
  <span class="ease-tooltip ease-tooltip-top ease-tooltip-fade">Hello!</span>
</button>
```

### With Theme
```html
<button class="ease-tooltip-wrap">
  Click me
  <span class="ease-tooltip ease-tooltip-bottom ease-tooltip-pop ease-tooltip-primary">
    Primary tooltip
  </span>
</button>
```

### Icon Tooltip
```html
<span class="ease-icon-btn ease-tooltip-wrap">
  ⚙️
  <span class="ease-tooltip ease-tooltip-right ease-tooltip-slide">Settings</span>
</span>
```

---

## 🎨 Available Classes

### Wrapper
| Class | Description |
|-------|-------------|
| `ease-tooltip-wrap` | Required on the parent element |
| `ease-tooltip` | Base tooltip class |

### Positions
| Class | Description |
|-------|-------------|
| `ease-tooltip-top` | Tooltip appears above |
| `ease-tooltip-bottom` | Tooltip appears below |
| `ease-tooltip-left` | Tooltip appears to the left |
| `ease-tooltip-right` | Tooltip appears to the right |

### Animations
| Class | Effect | Duration |
|-------|--------|----------|
| `ease-tooltip-fade` | Smooth opacity fade | 0.25s |
| `ease-tooltip-slide` | Slides from direction | 0.30s |
| `ease-tooltip-pop` | Bouncy spring pop | 0.40s |
| `ease-tooltip-scale` | Scale-up reveal | 0.25s |

### Themes
| Class | Color |
|-------|-------|
| `ease-tooltip-dark` | Dark gray (default) |
| `ease-tooltip-light` | Light/white |
| `ease-tooltip-primary` | Brand purple |
| `ease-tooltip-success` | Green |
| `ease-tooltip-error` | Red |

---

## 🎨 Customization

Override CSS variables to match your theme:

```css
:root {
  --ease-primary: #7c3aed;
  --ease-tooltip-dark-bg: #1f2937;
  --ease-tooltip-light-bg: #f9fafb;
  --ease-tooltip-success: #10b981;
  --ease-tooltip-error: #ef4444;
}
```

---

## 💡 Tips

- ✅ Always wrap the trigger element with `ease-tooltip-wrap`
- ✅ Combine position + animation + theme classes freely
- ✅ Use `ease-tooltip-light` on dark backgrounds for contrast
- ✅ Tooltips show on both `:hover` and `:focus` for accessibility
- ⚡ For long text, you may want to adjust `white-space: nowrap` to `normal`

---

## 📂 Files

```
animated-tooltips/
├── demo.html      # Interactive demo of all variants
├── style.css      # Tooltip styles & animations
└── README.md      # This file
```

---

## 🖥️ Preview

```bash
# Windows
start demo.html

# Mac
open demo.html

# Linux
xdg-open demo.html
```

---

## 🛠️ Browser Support

✅ Chrome / Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Opera (latest)

---

## 👨‍💻 Author

Created with ❤️ by [@aryanmalhotraug25-hash](https://github.com/aryanmalhotraug25-hash)

---

## 📜 License

MIT — Part of the [EaseMotion CSS](https://github.com/saptarshi-coder/EaseMotion-CSS) library.