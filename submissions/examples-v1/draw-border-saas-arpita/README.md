# Draw Border SaaS Modal
A pure HTML and CSS modal featuring a smooth animated draw-border effect with a modern SaaS-inspired interface.

---

## ✨ Features
- Pure HTML & CSS (No JavaScript)
- Animated sequential border drawing
- Modern SaaS design
- Responsive layout
- Smooth hover effects
- Keyboard accessible using the checkbox technique
- Easy to customize

---

## 📁 Files
```
draw-border-saas-arpita/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Preview
Open `demo.html` directly in your browser.

Click **Launch Modal** to view the animated border drawing effect.

---

## 💻 Usage
Include the HTML structure and stylesheet:

```html
<link rel="stylesheet" href="style.css">

<input type="checkbox" id="modal-toggle" hidden>

<label for="modal-toggle" class="open-btn">
    Launch Modal
</label>

<div class="overlay">
    <div class="modal">
        <!-- Modal Content -->
    </div>
</div>
```

---

## 🎨 Customization
You can easily customize the colors by editing the CSS variables.

```css
:root{
    --primary:#5b4df5;
    --primary-dark:#4338ca;
    --border:#6d5dfc;
}
```

You can also adjust:
- Border animation speed
- Modal width
- Border thickness
- Shadow intensity
- Button colors
- Border radius

---

## 🌐 Browser Support
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari

---

## 📌 Why is it useful?
This component demonstrates how a polished SaaS-style modal with an animated draw-border interaction can be built using only HTML and CSS. It aligns with EaseMotion CSS by providing a lightweight, reusable, animation-focused UI pattern that requires no JavaScript and is easy for developers to customize and integrate into their own projects.

---

Created for **EaseMotion CSS** GSSoC contribution.