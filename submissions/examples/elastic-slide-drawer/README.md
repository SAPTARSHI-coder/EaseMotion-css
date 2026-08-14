# 🎮 Elastic Slide Drawer for Gaming Hub Layouts

A modern **CSS-only Elastic Slide Drawer** designed for gaming dashboards and hub layouts. This example demonstrates a smooth elastic sidebar animation using only HTML and CSS, making it lightweight, responsive, and easy to integrate into any project.

---

## ✨ Features

- 🎮 Gaming-inspired dashboard UI
- 🚀 Pure HTML & CSS (No JavaScript)
- 🎯 Smooth elastic slide drawer animation
- 📱 Fully responsive layout
- ♿ Accessibility support using `prefers-reduced-motion`
- 🎨 CSS Custom Properties for easy customization
- 💻 Beginner-friendly project structure

---

## 📂 Folder Structure

```
elastic-slide-drawer/
│── demo.html
│── style.css
└── README.md
```

---

## 🚀 Usage

1. Open the project folder.

2. Open `demo.html` in your browser.

3. Click the **☰ Menu** button.

4. The drawer will slide in with an elastic animation.

---

## 🎨 CSS Custom Properties

The component can be customized by modifying the variables inside `:root`.

```css
:root{
    --bg:#0b1020;
    --surface:#141b34;
    --surface-light:#1c2442;

    --primary:#7c5cff;
    --secondary:#00d4ff;

    --text:#ffffff;
    --text-light:#b8bfd8;

    --radius:18px;
    --drawer-width:280px;
}
```

---

## 📱 Responsive Design

The layout adapts for:

- Desktop
- Tablet
- Mobile devices

Media queries ensure the drawer and content scale properly across different screen sizes.

---

## ♿ Accessibility

This example includes support for:

```css
@media (prefers-reduced-motion: reduce)
```

When users prefer reduced motion, animations and transitions are disabled automatically.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Variables
- CSS Keyframe Animations

---

## 🎯 Highlights

- No external libraries
- No JavaScript required
- Lightweight and fast
- Easy to customize
- Gaming-themed interface
- Smooth elastic animation
- Responsive cards and layout

---

## 📄 Browser Support

- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Opera

---

## 📸 Preview

The demo showcases:

- Elastic sliding navigation drawer
- Gaming dashboard hero section
- Interactive game cards
- Responsive layout
- Modern UI styling

---

## 📃 License

This example is provided as a contribution to the **EaseMotion CSS** project and follows the repository's contribution guidelines.