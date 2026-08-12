# CSS Rotate-Fade Badge for Accessible Web Layouts

A lightweight **Rotate-Fade Badge** component created using pure **HTML5 and CSS3**.

This example provides animated badges with smooth rotation and fade transitions, responsive layouts, customizable CSS variables, and accessibility support without JavaScript.

---

## ✨ Features

- 🔄 Rotate animation effect
- 🌫️ Smooth fade transitions
- ⚡ Lightweight CSS-only implementation
- 🎨 Custom CSS properties
- 📱 Fully responsive layout
- 🧊 Modern glass UI style
- 🚫 No JavaScript required
- ♿ `prefers-reduced-motion` support

---

## 📂 Folder Structure

```
rotate-fade-badge/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in a browser.
2. View animated badges.
3. Customize animation properties from CSS variables.
4. Use in dashboards, landing pages, cards, or portfolios.

---

## 🎨 CSS Custom Properties

Animation can be customized:

```css
:root {

    --rotate-angle:360deg;

    --fade-time:.7s;

    --transition:
        cubic-bezier(.22,1,.36,1);

}
```

### Customize Rotation

Change rotation amount:

```css
--rotate-angle:180deg;
```

### Customize Animation Speed

Faster animation:

```css
--fade-time:.4s;
```

Slower animation:

```css
--fade-time:1s;
```

---

## 🎬 Animation Details

Implemented effects:

- Badge rotation
- Fade-in transition
- Scale animation
- Hover interaction
- Card reveal animation
- Smooth CSS transitions

---

## 📱 Responsive Support

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

Features:

- CSS Grid layout
- Adaptive badge cards
- Mobile friendly design

---

## ♿ Accessibility

Includes:

- Semantic HTML
- Responsive structure
- Reduced motion support

Animations are disabled when users enable:

```css
prefers-reduced-motion: reduce;
```

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Animations
- CSS Transforms
- Media Queries

---

## 📄 License

Created as part of the **EaseMotion CSS** open-source showcase examples.