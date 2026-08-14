# 3D Perspective Tilt Modal for Responsive Dashboard Layouts
A pure HTML and CSS modal featuring a smooth 3D perspective tilt animation inspired by modern responsive dashboard interfaces. The component uses CSS transforms and transitions to create an engaging interactive experience without requiring JavaScript.

---

## ✨ Features
- Pure HTML & CSS
- CSS-only modal using `:target`
- Smooth 3D perspective tilt effect
- Responsive dashboard-style layout
- Hover animations
- Keyboard-friendly structure
- Easy customization using CSS variables
- No JavaScript required

---

## 📂 Files

```
demo.html
style.css
README.md
```

---

## 🚀 Usage
Open `demo.html` directly in any modern browser.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example structure:

```html
<div class="overlay" id="modal">
    <div class="modal">
        <a href="#" class="close">&times;</a>

        <h2>Dashboard Modal</h2>

        <div class="cards">
            <div class="card">
                <h3>Analytics</h3>
                <p>Interactive dashboard card.</p>
            </div>
        </div>
    </div>
</div>
```

---

## 🎨 Customization
Modify the CSS variables inside `:root`.

```css
:root{
    --primary:#2563eb;
    --accent:#60a5fa;
    --radius:22px;
    --transition:.4s ease;
}
```

You can also adjust:

- Tilt angle
- Perspective depth
- Animation duration
- Card spacing
- Colors
- Border radius
- Shadows

---

## 💡 Why it fits EaseMotion CSS
This component follows the EaseMotion CSS philosophy by showcasing a modern, reusable animation built entirely with CSS. It provides a clean, human-readable implementation that demonstrates smooth motion, responsive design, and interactive visual effects without relying on JavaScript.

---

## 🌐 Browser Support
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari

---

## 📄 License
Created for EaseMotion CSS GSSoC contribution.