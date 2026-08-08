# Spring Physics Accordion for Glassmorphism UI Layouts
A pure HTML and CSS accordion featuring a smooth spring physics animation with a modern glassmorphism design.

---

## ✨ Features
- Pure HTML & CSS
- No JavaScript required
- Spring-style accordion animation
- Glassmorphism UI
- Responsive design
- Smooth hover interactions
- Easy customization using CSS variables
- Keyboard accessible with checkbox inputs

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
<div class="accordion">

    <div class="item">
        <input type="checkbox" id="item1">

        <label for="item1">
            <span>Accordion Title</span>
            <span class="icon">+</span>
        </label>

        <div class="content">
            <p>Your accordion content goes here.</p>
        </div>

    </div>

</div>
```

---

## 🎨 Customization

Modify the CSS variables inside `:root`.

```css
:root{
    --glass: rgba(255,255,255,.15);
    --primary:#4fd1ff;
    --radius:18px;
    --transition:.45s cubic-bezier(.175,.885,.32,1.275);
}
```

You can customize:
- Glass transparency
- Accent colors
- Animation timing
- Spring effect
- Border radius
- Shadows
- Typography
- Spacing

---

## 💡 Why it fits EaseMotion CSS
This component follows the EaseMotion CSS philosophy by providing a lightweight, reusable, CSS-only accordion with smooth spring-inspired motion and a clean glassmorphism interface. It demonstrates modern UI interactions without relying on JavaScript while remaining responsive and easy to customize.

---

## 🌐 Browser Support
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari

---

## 📄 License
Created for EaseMotion CSS GSSoC contribution.