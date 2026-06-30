# 📂 Accordion / FAQ — EaseMotion CSS

A clean, accessible accordion component built with the `ease-` naming convention. Supports **3 animation styles**, **2 modes**, and **custom variants**.

---

## ✨ Features

- 🎬 **3 Animations** — Slide, Fade, Flip (3D)
- 🔁 **2 Modes** — Single open or Multi open
- 🎨 **Bordered variant** for visual separation
- ♿ **Accessible** — Keyboard-friendly with focus styles
- 📱 **Fully responsive**
- 🪶 **Lightweight** — Pure CSS + minimal JS

---

## 🚀 Usage

### Basic Accordion (Single open mode)

```html
<div class="ease-accordion" data-mode="single">
  <div class="ease-accordion-item ease-accordion-slide">
    <button class="ease-accordion-header">
      Question 1
      <span class="ease-accordion-icon">+</span>
    </button>
    <div class="ease-accordion-body">
      <p>Answer to question 1.</p>
    </div>
  </div>
</div>
```

### Multi-open Accordion

```html
<div class="ease-accordion" data-mode="multi">
  <!-- items -->
</div>
```

### Bordered Variant

```html
<div class="ease-accordion-item ease-accordion-slide ease-accordion-bordered">
  <!-- header & body -->
</div>
```

---

## 🎨 Available Classes

### Core

| Class                   | Description                 |
| ----------------------- | --------------------------- |
| `ease-accordion`        | Main container              |
| `ease-accordion-item`   | Each collapsible item       |
| `ease-accordion-header` | Clickable title button      |
| `ease-accordion-body`   | Collapsible content         |
| `ease-accordion-icon`   | + / × icon indicator        |
| `ease-accordion-open`   | Toggled state (added by JS) |

### Animations

| Class                  | Effect                        |
| ---------------------- | ----------------------------- |
| `ease-accordion-slide` | Smooth height slide (default) |
| `ease-accordion-fade`  | Fade + slide combo            |
| `ease-accordion-flip`  | 3D rotateX flip               |

### Variants

| Class                     | Description             |
| ------------------------- | ----------------------- |
| `ease-accordion-bordered` | Adds individual borders |

### Modes (via `data-mode`)

| Value    | Behavior                     |
| -------- | ---------------------------- |
| `single` | Only one item open at a time |
| `multi`  | Multiple items can be open   |

---

## 🔧 JavaScript

The accordion needs minimal JS to toggle items. Just include this script:

```javascript
document.querySelectorAll(".ease-accordion").forEach((accordion) => {
  const mode = accordion.dataset.mode || "single";
  const items = accordion.querySelectorAll(".ease-accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".ease-accordion-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("ease-accordion-open");
      if (mode === "single") {
        items.forEach((i) => i.classList.remove("ease-accordion-open"));
      }
      if (!isOpen) {
        item.classList.add("ease-accordion-open");
      } else {
        item.classList.remove("ease-accordion-open");
      }
    });
  });
});
```

---

## 🎨 Customization

Override CSS variables to match your theme:

```css
:root {
  --ease-primary: #7c3aed;
  --ease-card-bg: #25253f;
  --ease-text: #f5f5f5;
  --ease-muted: #b8b8d4;
  --ease-border: #3a3a5e;
}
```

---

## 💡 Tips

- ✅ Use `single` mode for FAQs (cleaner UX)
- ✅ Use `multi` mode for settings panels
- ✅ The `ease-accordion-bordered` variant works great in sidebars
- ⚡ Increase `max-height` in CSS if your content is very long
- ♿ Built-in keyboard support — `Tab` to navigate, `Enter` to toggle

---

## 📂 Files

```
accordion-faq/
├── demo.html      # Interactive demo of all variants
├── style.css      # Accordion styles & animations
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
