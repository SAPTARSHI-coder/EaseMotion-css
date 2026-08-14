# CSS 3D Perspective Tilt Tabs for Minimalist Tech Layouts

A modern **3D Perspective Tilt Tabs** component built using pure **HTML5 and CSS3**.

This example provides a futuristic minimalist tech interface with smooth 3D perspective transformations, tilt interactions, animated cards, and customizable CSS properties without JavaScript.

---

## ✨ Features

- 🎯 3D perspective tilt animation
- ⚡ Smooth hover transitions
- 🧊 Glassmorphism card design
- 🎨 CSS custom properties
- 📱 Fully responsive layout
- 🚀 Pure HTML + CSS implementation
- ♿ `prefers-reduced-motion` support
- 🚫 Zero JavaScript dependency

---

## 📂 Folder Structure

```
3d-perspective-tilt-tabs/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in your browser.
2. Hover over cards to activate 3D tilt effects.
3. Customize animation values using CSS variables.
4. Integrate into tech dashboards, landing pages, or portfolios.

---

## 🎨 CSS Custom Properties

The component exposes animation controls:

```css
:root {

    --tilt-angle:12deg;

    --tilt-scale:1.05;

    --transition-time:.45s;

    --ease:cubic-bezier(.22,1,.36,1);

}
```

### Customize

Change tilt intensity:

```css
--tilt-angle:20deg;
```

Change hover scale:

```css
--tilt-scale:1.1;
```

Change animation speed:

```css
--transition-time:.6s;
```

---

## 🎬 Animation Details

Implemented animations:

- 3D perspective rotation
- Card entrance reveal
- Depth layering using `translateZ`
- Hover scale interaction
- Gradient glow effects
- Smooth easing transitions

---

## 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile screens

Features:

- Responsive grid layout
- Flexible card sizing
- Mobile single-column support

---

## ♿ Accessibility

Includes:

- Semantic HTML structure
- Accessible content hierarchy
- Reduced motion support
- `prefers-reduced-motion` handling

When reduced motion is enabled, animated transformations are disabled.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Grid
- CSS Transforms
- CSS Animations
- Media Queries

---

## 📄 License

Created as part of the **EaseMotion CSS** open-source showcase examples.