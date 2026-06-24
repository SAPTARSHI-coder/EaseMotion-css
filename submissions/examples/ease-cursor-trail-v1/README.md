# ⚡ Ease Cursor Trail Effect

A smooth animated cursor trail effect for EaseMotion CSS.

## ✨ What it does
Creates glowing dots that follow the user's cursor and fade 
out smoothly, adding a magical micro-interaction to any webpage.

## 🚀 How to Use
```html
<div class="ease-cursor-trail">
  <!-- Your content here -->
</div>

<link rel="stylesheet" href="style.css" />
```

## 🎨 Customization
Change trail color using the JavaScript variable:
```js
let trailColor = '#6366f1'; // any hex color
```

## 📱 Mobile
Automatically disabled on touch devices using:
```css
@media (hover: none) {
  .ease-cursor-trail { cursor: auto; }
}
```

## 📁 Files
| File | Description |
|------|-------------|
| `demo.html` | Interactive demo with color switcher |
| `style.css` | Trail animation styles |
| `README.md` | Documentation |

## 🌍 Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |