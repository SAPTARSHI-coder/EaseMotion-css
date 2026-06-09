# 🍞 Toast Notifications — EaseMotion CSS

Animated, accessible toast notifications built with the `ease-` naming convention. Supports **4 types**, **4 positions**, and **4 entry animations**.

---

## ✨ Features

- 🎨 **4 Toast Types** — Success, Error, Warning, Info
- 📍 **4 Positions** — Top Left, Top Right, Bottom Left, Bottom Right
- 🎬 **4 Entry Animations** — Slide, Fade, Bounce, Pop
- ⏱️ **Auto-dismiss** — Disappears after 4 seconds
- ❌ **Manual close** — Click the × button anytime
- 📱 **Fully responsive** — Adapts to mobile screens
- ♿ **Accessible** — Semantic markup with clear actions

---

## 🚀 Usage

### Basic Toast Trigger
```html
<button onclick="showToast('success', 'Done!')">Show Toast</button>
```

### Custom Position
```html
<button onclick="showToast('error', 'Oops!', 'bottom-left')">Error Toast</button>
```

### Custom Animation
```html
<button onclick="showToast('info', 'Hi!', 'top-right', 'bounce')">Bounce Toast</button>
```

### Required HTML Containers
```html
<div class="ease-toast-container ease-pos-top-left" id="container-top-left"></div>
<div class="ease-toast-container ease-pos-top-right" id="container-top-right"></div>
<div class="ease-toast-container ease-pos-bottom-left" id="container-bottom-left"></div>
<div class="ease-toast-container ease-pos-bottom-right" id="container-bottom-right"></div>
```

---

## 🎨 Available Classes

| Class | Description |
|-------|-------------|
| `ease-toast-container` | Container that holds the toasts |
| `ease-toast` | Individual toast element |
| `ease-toast-success` | Green success variant |
| `ease-toast-error` | Red error variant |
| `ease-toast-warning` | Yellow warning variant |
| `ease-toast-info` | Blue info variant |
| `ease-pos-top-left` | Position: top-left |
| `ease-pos-top-right` | Position: top-right |
| `ease-pos-bottom-left` | Position: bottom-left |
| `ease-pos-bottom-right` | Position: bottom-right |
| `ease-anim-slide` | Slide-in animation |
| `ease-anim-fade` | Fade-in animation |
| `ease-anim-bounce` | Bounce-in animation |
| `ease-anim-pop` | Pop-in animation |

---

## 🎬 Animation Details

| Animation | Duration | Easing | Best For |
|-----------|----------|--------|----------|
| `ease-anim-slide` | 0.4s | cubic-bezier | Default, professional |
| `ease-anim-fade` | 0.4s | ease | Subtle notifications |
| `ease-anim-bounce` | 0.6s | spring | Playful confirmations |
| `ease-anim-pop` | 0.4s | spring | Quick alerts |

---

## 🎨 Customization

Override CSS variables to match your brand:

```css
:root {
  --ease-success: #10b981;
  --ease-error: #ef4444;
  --ease-warning: #f59e0b;
  --ease-info: #3b82f6;
}
```

---

## 🔧 JavaScript API

```javascript
showToast(type, message, position, animation);

// Parameters:
// type       → 'success' | 'error' | 'warning' | 'info'   (default: 'info')
// message    → string                                      (default: 'Hello!')
// position   → 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' (default: 'top-right')
// animation  → 'slide' | 'fade' | 'bounce' | 'pop'        (default: 'slide')
```

### Examples
```javascript
showToast('success', 'Saved successfully!');
showToast('error', 'Failed to save', 'bottom-right');
showToast('warning', 'Check your input', 'top-left', 'bounce');
showToast('info', 'New update available', 'bottom-left', 'pop');
```

---

## 📂 Files

```
toast-notifications/
├── demo.html      # Interactive demo
├── style.css      # Toast styles & animations
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