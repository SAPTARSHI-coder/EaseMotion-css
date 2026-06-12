# 🪟 Modal / Dialog — EaseMotion CSS

Beautifully animated modal & dialog components built with the `ease-` naming convention. Includes three entrance animations: **fade**, **slide-up**, and **scale-bounce**.

---

## ✨ Features

- 🎬 **Three entrance animations** — Fade, Slide Up, Scale Bounce
- 🌫️ **Blurred backdrop** — Modern frosted-glass effect
- 🖱️ **Click outside to close** — Intuitive UX out of the box
- 📱 **Responsive** — Works on mobile and desktop
- 🌙 **Dark mode ready** — Matches the EaseMotion aesthetic
- ♿ **Accessible** — Semantic markup with proper structure

---

## 🚀 Usage

### Basic Modal Structure

```html
<div class="ease-modal-backdrop" id="my-modal">
  <div class="ease-modal-card ease-fade-in">
    <h2>Hello!</h2>
    <p>This is a modal dialog.</p>
    <button class="ease-btn-primary" onclick="closeModal('my-modal')">
      Close
    </button>
  </div>
</div>
```

### Open / Close Logic

```javascript
function openModal(id) {
  document.getElementById(id).classList.add("ease-modal-open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("ease-modal-open");
}
```

---

## 🎨 Available Classes

| Class                 | Description                           |
| --------------------- | ------------------------------------- |
| `ease-modal-backdrop` | Full-screen backdrop with blur effect |
| `ease-modal-open`     | Toggle class to show the modal        |
| `ease-modal-card`     | The actual modal content container    |
| `ease-fade-in`        | Smooth fade entrance animation        |
| `ease-slide-up`       | Slide up from bottom animation        |
| `ease-scale-bounce`   | Bouncy scale-in animation             |
| `ease-btn-primary`    | Primary action button                 |

---

## 🎬 Available Animations

| Animation Class     | Effect               | Duration | Best For                 |
| ------------------- | -------------------- | -------- | ------------------------ |
| `ease-fade-in`      | Smooth opacity fade  | 0.4s     | Subtle, professional UIs |
| `ease-slide-up`     | Slides up from below | 0.45s    | Mobile-style modals      |
| `ease-slide-down`   | Drops from top       | 0.45s    | Notifications, alerts    |
| `ease-slide-left`   | Glides in from right | 0.45s    | Side panels              |
| `ease-slide-right`  | Glides in from left  | 0.45s    | Side panels              |
| `ease-scale-bounce` | Springy pop-in       | 0.5s     | Playful confirmations    |
| `ease-zoom-in`      | Grows from tiny      | 0.4s     | Image previews, gallery  |
| `ease-flip-in`      | 3D Y-axis flip       | 0.6s     | Eye-catching reveals     |
| `ease-rotate-in`    | Spins into place     | 0.5s     | Fun, energetic UIs       |
| `ease-swing-in`     | Pendulum swing       | 0.7s     | Playful notifications    |

---

## 🎨 Customization

Override the CSS variables to match your theme:

```css
:root {
  --ease-primary: #7c3aed; /* Accent color */
  --ease-bg: #1a1a2e; /* Page background */
  --ease-card-bg: #25253f; /* Modal card background */
  --ease-text: #f5f5f5; /* Text color */
  --ease-glow: rgba(124, 58, 237, 0.4);
  --ease-backdrop: rgba(0, 0, 0, 0.6);
}
```

---

## 📂 Files

```
modal-dialog/
├── demo.html      # Live demo with 3 modal variations
├── style.css      # All modal styles & animations
└── README.md      # This file
```

---

## 🖥️ Preview

Open `demo.html` in your browser:

```bash
# Windows
start demo.html

# Mac
open demo.html

# Linux
xdg-open demo.html
```

---

## 💡 Tips

- ✅ Always pair `ease-modal-backdrop` with one entrance animation class on `ease-modal-card`
- ✅ Use `onclick` handlers or attach JS listeners to control open/close
- ✅ The backdrop click-to-close is built into the demo's JS
- ⚡ For accessibility, consider adding `role="dialog"` and `aria-modal="true"`

---

## 🛠️ Browser Support

✅ Chrome / Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Opera (latest)

> Note: `backdrop-filter` may not work in older browsers — the modal will still function, just without the blur effect.

---

## 👨‍💻 Author

Created with ❤️ by [@aryanmalhotraug25-hash](https://github.com/aryanmalhotraug25-hash)

---

## 📜 License

MIT — Part of the [EaseMotion CSS](https://github.com/saptarshi-coder/EaseMotion-CSS) library.

---

## 🙏 Acknowledgments

Thanks to [@saptarshi-coder](https://github.com/saptarshi-coder) for creating EaseMotion CSS!
