# 🌀 Loading States — EaseMotion CSS

A complete collection of **loading spinners** and **skeleton loaders** built with the `ease-` naming convention. Pure CSS, zero JavaScript.

---

## ✨ Features

- 🌀 **6 spinner variants** — Circle, Dots, Pulse, Bars, Ripple, Orbit
- 📏 **3 size options** — Small, Medium, Large
- 💀 **4 skeleton types** — Text, Circle, Rectangle, Composed
- ✨ **Smooth shimmer animation** for skeletons
- 🎨 **Customizable** via CSS variables
- 🌙 **Dark mode ready**
- ⚡ **Pure CSS** — no JS required

---

## 🚀 Usage

### Basic Spinner

```html
<div class="ease-spinner-circle"></div>
```

### Spinner with Size

```html
<div class="ease-spinner-circle ease-spinner-sm"></div>
<div class="ease-spinner-circle ease-spinner-md"></div>
<div class="ease-spinner-circle ease-spinner-lg"></div>
```

### Spinner in Button

```html
<button class="ease-btn">
  <span class="ease-spinner-circle ease-spinner-sm"></span>
  Loading...
</button>
```

### Skeleton Card

```html
<div class="ease-skeleton-card">
  <div class="ease-skeleton-rect"></div>
  <div class="ease-skeleton-text"></div>
  <div class="ease-skeleton-text ease-skeleton-short"></div>
</div>
```

### Skeleton Profile

```html
<div class="ease-skeleton-profile">
  <div class="ease-skeleton-circle"></div>
  <div class="ease-skeleton-info">
    <div class="ease-skeleton-text"></div>
    <div class="ease-skeleton-text ease-skeleton-short"></div>
  </div>
</div>
```

---

## 🎨 Available Classes

### Spinners

| Class                 | Description           |
| --------------------- | --------------------- |
| `ease-spinner-circle` | Classic rotating ring |
| `ease-spinner-dots`   | Three bouncing dots   |
| `ease-spinner-pulse`  | Pulsing circle        |
| `ease-spinner-bars`   | Audio-style bars      |
| `ease-spinner-ripple` | Expanding ripple      |
| `ease-spinner-orbit`  | Dual orbiting rings   |

### Sizes

| Class             | Dimensions |
| ----------------- | ---------- |
| `ease-spinner-sm` | 18×18px    |
| `ease-spinner-md` | 32×32px    |
| `ease-spinner-lg` | 56×56px    |

### Skeletons

| Class                   | Description             |
| ----------------------- | ----------------------- |
| `ease-skeleton-text`    | Text line placeholder   |
| `ease-skeleton-short`   | 60% width modifier      |
| `ease-skeleton-circle`  | Circular placeholder    |
| `ease-skeleton-rect`    | Rectangular placeholder |
| `ease-skeleton-card`    | Full card wrapper       |
| `ease-skeleton-profile` | Avatar + text wrapper   |

---

## 🎨 Customization

Override CSS variables to match your theme:

```css
:root {
  --ease-primary: #7c3aed;
  --ease-muted: #3a3a5e;
  --ease-shimmer: rgba(255, 255, 255, 0.08);
}
```

---

## 🎬 Animation Details

| Animation   | Duration | Type           |
| ----------- | -------- | -------------- |
| Circle spin | 0.8s     | Linear loop    |
| Dot bounce  | 1.4s     | Staggered      |
| Pulse       | 1.2s     | Scale + fade   |
| Bar stretch | 1.2s     | Staggered      |
| Ripple      | 1.4s     | Expanding      |
| Orbit       | 1s       | Dual rotation  |
| Shimmer     | 1.4s     | Gradient sweep |

---

## ♿ Accessibility Tip

Always add ARIA attributes for screen readers:

```html
<div class="ease-spinner-circle" role="status" aria-label="Loading"></div>
```

---

## 📂 Files

```
loading-states/
├── demo.html      # Interactive demo of all variants
├── style.css      # All spinner & skeleton styles
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

---

## 🙏 Acknowledgments

Thanks to [@saptarshi-coder](https://github.com/saptarshi-coder) for creating EaseMotion CSS!
