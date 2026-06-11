# 🎚️ Animated Tabs — EaseMotion CSS

A versatile tabs component built with the `ease-` naming convention. Supports **4 styles**, **3 animations**, and **12 unique combinations** — perfect for organizing content.

---

## ✨ Features

- 🎨 **4 Styles** — Underline, Pill, Bordered, Vertical
- 🎬 **3 Animations** — Fade, Slide, Zoom
- 📱 **Fully responsive** — Vertical converts to horizontal on mobile
- ♿ **Accessible** — Keyboard navigable with focus styles
- 🪶 **Lightweight** — Pure CSS + minimal JS
- 🌙 **Dark-mode ready**

---

## 🚀 Usage

### Basic Tabs (Underline style)
```html
<div class="ease-tabs ease-tabs-underline ease-tabs-fade">
  <div class="ease-tab-list">
    <button class="ease-tab ease-tab-active" data-target="tab1">Home</button>
    <button class="ease-tab" data-target="tab2">Profile</button>
  </div>
  <div class="ease-tab-panel ease-tab-active" id="tab1">Home content</div>
  <div class="ease-tab-panel" id="tab2">Profile content</div>
</div>
```

### Pill Style with Slide Animation
```html
<div class="ease-tabs ease-tabs-pill ease-tabs-slide">
  <!-- tab list & panels -->
</div>
```

### Vertical Tabs
```html
<div class="ease-tabs ease-tabs-vertical ease-tabs-fade">
  <div class="ease-tab-list">
    <button class="ease-tab ease-tab-active" data-target="v1">Account</button>
    <button class="ease-tab" data-target="v2">Privacy</button>
  </div>
  <div class="ease-tab-content">
    <div class="ease-tab-panel ease-tab-active" id="v1">Account settings</div>
    <div class="ease-tab-panel" id="v2">Privacy settings</div>
  </div>
</div>
```

---

## 🎨 Available Classes

### Core
| Class | Description |
|-------|-------------|
| `ease-tabs` | Main container |
| `ease-tab-list` | Wrapper for tab buttons |
| `ease-tab` | Each clickable tab |
| `ease-tab-active` | Active state (added/removed by JS) |
| `ease-tab-panel` | Content panel for each tab |
| `ease-tab-content` | Panel wrapper (vertical only) |

### Styles
| Class | Effect |
|-------|--------|
| `ease-tabs-underline` | Sliding underline indicator |
| `ease-tabs-pill` | Rounded pill background |
| `ease-tabs-bordered` | Boxed/bordered tabs |
| `ease-tabs-vertical` | Vertical sidebar layout |

### Animations
| Class | Effect |
|-------|--------|
| `ease-tabs-fade` | Smooth opacity fade |
| `ease-tabs-slide` | Slides from the right |
| `ease-tabs-zoom` | Scales up with bounce |

---

## 🔧 JavaScript

Minimal JS to toggle active state — include this script:

```javascript
document.querySelectorAll('.ease-tabs').forEach(tabs => {
  const tabButtons = tabs.querySelectorAll('.ease-tab');
  const panels = tabs.querySelectorAll('.ease-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      tabButtons.forEach(b => b.classList.remove('ease-tab-active'));
      btn.classList.add('ease-tab-active');
      panels.forEach(p => p.classList.remove('ease-tab-active'));
      const activePanel = tabs.querySelector(`#${target}`);
      if (activePanel) activePanel.classList.add('ease-tab-active');
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
  --ease-primary-light: #a78bfa;
  --ease-card-bg: #25253f;
  --ease-text: #f5f5f5;
  --ease-muted: #b8b8d4;
  --ease-border: #3a3a5e;
}
```

---

## 💡 Tips

- ✅ Use **underline** for clean, modern UIs
- ✅ Use **pill** for playful, app-like designs
- ✅ Use **bordered** for traditional/classic look
- ✅ Use **vertical** for settings pages with many sections
- ⚡ Combine any style with any animation freely
- ♿ Built-in keyboard support — `Tab` to navigate, `Enter` to activate

---

## 📂 Files

```
animated-tabs/
├── demo.html      # Interactive demo of all variants
├── style.css      # Tab styles & animations
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