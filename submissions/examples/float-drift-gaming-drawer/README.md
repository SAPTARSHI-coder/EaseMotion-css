# CSS Float-Drift Drawer for Gaming Hub Layouts

A modern **Float-Drift Drawer** component built using pure **HTML5 and CSS3**.

This example creates a gaming hub inspired drawer interface with smooth floating animations, glass effects, responsive behavior, and accessibility support without JavaScript.

---

## ✨ Features

- 🎮 Gaming hub drawer layout
- 🌊 Smooth float-drift animation
- 🧊 Glassmorphism interface
- ⚡ Hover interactions
- 🎨 CSS custom properties
- 📱 Fully responsive design
- 🚫 No JavaScript dependency
- ♿ `prefers-reduced-motion` support

---

## 📂 Folder Structure

```
float-drift-gaming-drawer/

├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

1. Open `demo.html` in a browser.
2. View the animated gaming drawer component.
3. Customize animation properties using CSS variables.
4. Integrate into gaming dashboards, portfolios, or navigation layouts.

---

## 🎨 CSS Custom Properties

Animation values can be customized:

```css
:root {

    --float-distance:18px;

    --float-time:4s;

    --drawer-time:.55s;

    --drawer-ease:
        cubic-bezier(.34,1.56,.64,1);

}
```

### Customize Floating Movement

Increase floating distance:

```css
--float-distance:30px;
```

Change animation speed:

```css
--float-time:6s;
```

---

## 🎬 Animation Details

Implemented:

- Floating drawer movement
- Icon drift animation
- Hover slide interactions
- Glass glow effects
- Smooth transitions

---

## 📱 Responsive Design

Supported devices:

- Desktop
- Laptop
- Tablet
- Mobile

Features:

- Flexible drawer sizing
- Responsive spacing
- Mobile optimized layout

---

## ♿ Accessibility

Includes:

- Semantic HTML structure
- Reduced motion support
- Accessible content layout

Animations are disabled for users who enable:

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

Created as part of the **EaseMotion CSS** open-source showcase collection.