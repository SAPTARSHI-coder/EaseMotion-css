# CSS Pulse Notification Badge

A notification badge with a continuous radiating pulse animation — pure CSS, no JavaScript.

## 🚀 Demo
Open `demo.html` in your browser.

## ✨ Features
- Continuous radiating pulse ring via `::before` and `@keyframes`
- No JavaScript dependencies
- Drop onto any icon/element with `position: relative`
- Customizable color and size

## 📁 Files
- `demo.html` — Demo page showing the badge
- `style.css` — Badge and pulse animation styles
- `README.md` — This file

## 🛠️ Usage
```html
<span class="pulse-badge-demo__icon">
  🔔
  <span class="pulse-badge">3</span>
</span>
```

## 🎨 Customization
Change `background` on `.pulse-badge` and `.pulse-badge::before` to recolor. Adjust `animation` duration on `::before` for pulse speed.

## 👤 Author
Contributed by [aaniya22](https://github.com/aaniya22) as part of GSSoC.