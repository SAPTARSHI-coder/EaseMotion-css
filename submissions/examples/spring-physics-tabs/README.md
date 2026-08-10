# CSS Spring Physics Tabs for Glassmorphism UI Layouts

A modern **Spring Physics Tabs** component created using pure **HTML5 and CSS3**.

This component provides a smooth spring-like interaction effect with a glassmorphism interface style, responsive layout, and customizable CSS animation parameters without requiring JavaScript.

---

## ✨ Features

- 🌊 Spring physics inspired animations
- 🧊 Glassmorphism UI design
- ⚡ Smooth hover interactions
- 🎨 CSS custom property controls
- 📱 Fully responsive layout
- 🚫 No JavaScript dependency
- ♿ Reduced motion accessibility support
- 💻 Minimalist modern interface

---

## 📂 Folder Structure

```
spring-physics-tabs/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in any modern browser.
2. Hover over the tabs to experience spring animations.
3. Customize animation values from CSS variables.
4. Integrate the component into dashboards, portfolios, or landing pages.

---

## 🎨 CSS Custom Properties

The component exposes animation controls:

```css
:root {

    --spring-scale:1.08;

    --spring-time:.55s;

    --spring-ease:
        cubic-bezier(.34,1.56,.64,1);

}
```

### Customize Spring Strength

Increase bounce:

```css
--spring-scale:1.15;
```

Reduce animation speed:

```css
--spring-time:.8s;
```

Change easing:

```css
--spring-ease:
cubic-bezier(.22,1,.36,1);
```

---

## 🎬 Animation Details

Implemented effects:

- Spring-based entrance animation
- Smooth scale bounce
- Glass shine sweep
- Hover elevation
- Icon rotation effect
- CSS transform transitions

---

## 📱 Responsive Support

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive features:

- CSS Grid layout
- Adaptive card sizing
- Mobile single-column view

---

## ♿ Accessibility

Includes:

- Semantic HTML structure
- Keyboard-friendly controls
- Reduced motion support using:

```css
@media(prefers-reduced-motion:reduce)
```

Animations are disabled when users prefer reduced motion.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Grid
- CSS Animations
- CSS Transforms
- Media Queries

---

## 📄 License

Created as part of the **EaseMotion CSS** open-source animation showcase.