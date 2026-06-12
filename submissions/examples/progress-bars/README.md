# 📊 Animated Progress Bars — EaseMotion CSS

A complete progress indicator collection built with the `ease-` naming convention. Includes **linear**, **circular**, **stepped**, **striped**, and **indeterminate** variants — all with smooth animations.

---

## ✨ Features

- 📏 **Linear bars** — with sizes (sm, md, lg)
- ⭕ **Circular SVG progress** — fully customizable
- 🪜 **Stepped progress** — perfect for checkouts & forms
- 🎬 **Striped & animated** — eye-catching loading bars
- ⏳ **Indeterminate** — for unknown-duration tasks
- 🎨 **4 Themes** — Primary, Success, Warning, Error
- 🪶 **Pure CSS** — Zero JavaScript required

---

## 🚀 Usage

### Linear Progress

```html
<div class="ease-progress-linear ease-progress-md ease-progress-primary">
  <div class="ease-progress-fill" style="width: 70%"></div>
</div>
```

### With Label

```html
<div class="ease-progress-linear ease-progress-lg ease-progress-success">
  <div class="ease-progress-fill" style="width: 65%">
    <span class="ease-progress-label">65%</span>
  </div>
</div>
```

### Striped & Animated

```html
<div
  class="ease-progress-linear ease-progress-md ease-progress-striped ease-progress-animated ease-progress-primary"
>
  <div class="ease-progress-fill" style="width: 50%"></div>
</div>
```

### Indeterminate (Loading)

```html
<div
  class="ease-progress-linear ease-progress-md ease-progress-indeterminate ease-progress-primary"
>
  <div class="ease-progress-fill"></div>
</div>
```

### Circular Progress

```html
<div
  class="ease-progress-circular ease-progress-success"
  style="--ease-progress: 75"
>
  <svg viewBox="0 0 100 100">
    <circle class="ease-circle-bg" cx="50" cy="50" r="42"></circle>
    <circle class="ease-circle-fill" cx="50" cy="50" r="42"></circle>
  </svg>
  <span class="ease-circle-text">75%</span>
</div>
```

### Stepped Progress

```html
<div class="ease-progress-stepped">
  <div class="ease-step ease-step-done">
    <div class="ease-step-circle">✓</div>
    <span>Cart</span>
  </div>
  <div class="ease-step-line ease-step-done"></div>
  <div class="ease-step ease-step-active">
    <div class="ease-step-circle">2</div>
    <span>Shipping</span>
  </div>
  <div class="ease-step-line"></div>
  <div class="ease-step">
    <div class="ease-step-circle">3</div>
    <span>Payment</span>
  </div>
</div>
```

---

## 🎨 Available Classes

### Linear

| Class                  | Description         |
| ---------------------- | ------------------- |
| `ease-progress-linear` | Container           |
| `ease-progress-fill`   | Filled portion      |
| `ease-progress-label`  | Optional text label |

### Sizes

| Class              | Height |
| ------------------ | ------ |
| `ease-progress-sm` | 6px    |
| `ease-progress-md` | 12px   |
| `ease-progress-lg` | 22px   |

### Themes

| Class                   | Color            |
| ----------------------- | ---------------- |
| `ease-progress-primary` | Purple (default) |
| `ease-progress-success` | Green            |
| `ease-progress-warning` | Yellow           |
| `ease-progress-error`   | Red              |

### Modifiers

| Class                         | Effect                    |
| ----------------------------- | ------------------------- |
| `ease-progress-striped`       | Diagonal stripes overlay  |
| `ease-progress-animated`      | Animates the stripes      |
| `ease-progress-indeterminate` | Endless loading animation |

### Circular

| Class                    | Description                               |
| ------------------------ | ----------------------------------------- |
| `ease-progress-circular` | Container (use `--ease-progress` CSS var) |
| `ease-circle-bg`         | Background ring                           |
| `ease-circle-fill`       | Progress ring                             |
| `ease-circle-text`       | Centered percent text                     |

### Stepped

| Class                   | Description            |
| ----------------------- | ---------------------- |
| `ease-progress-stepped` | Container              |
| `ease-step`             | Each step              |
| `ease-step-circle`      | The number circle      |
| `ease-step-line`        | Connector line         |
| `ease-step-done`        | Completed step (green) |
| `ease-step-active`      | Current step (pulsing) |

---

## 🎨 Customization

Override CSS variables to match your theme:

```css
:root {
  --ease-primary: #7c3aed;
  --ease-success: #10b981;
  --ease-warning: #f59e0b;
  --ease-error: #ef4444;
  --ease-track: #2f2f4a;
}
```

For circular progress, set the percentage via the `--ease-progress` CSS variable:

```html
<div class="ease-progress-circular" style="--ease-progress: 65">...</div>
```

---

## 💡 Tips

- ✅ Use **linear** for general progress (uploads, downloads)
- ✅ Use **circular** for compact spaces (dashboards, cards)
- ✅ Use **stepped** for multi-step processes (checkouts, forms)
- ✅ Use **indeterminate** when duration is unknown
- ⚡ Animate `width` via JS for real-time updates
- 🎨 Add `ease-progress-label` only with `ease-progress-lg` for best readability

---

## 📂 Files

```
progress-bars/
├── demo.html      # Interactive demo of all variants
├── style.css      # All progress styles & animations
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
