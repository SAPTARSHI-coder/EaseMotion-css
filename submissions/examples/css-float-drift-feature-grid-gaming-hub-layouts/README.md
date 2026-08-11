# CSS Float-Drift Feature Grid for Gaming Hub Layouts

A modern gaming-themed feature grid with smooth floating drift animations created using only HTML and CSS.

This component is part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub inspired feature cards
- 🌊 Smooth float-drift animation
- ⚡ Pure CSS keyframe animations
- 🎨 Gradient based visual styling
- 🖱️ Interactive hover effects
- 📱 Fully responsive grid layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-float-drift-feature-grid-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or frameworks are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

    --bg:#050816;
    --card:#111827;
    --primary:#38bdf8;
    --secondary:#a855f7;
    --text:#ffffff;
    --muted:#94a3b8;

}
Variables
Variable	Description
--bg	Main background color
--card	Feature card background
--primary	Primary accent color
--secondary	Gradient accent color
--text	Main text color
--muted	Secondary text color
⚡ Animation Details

Cards use a floating drift animation:

@keyframes floatDrift {

    25% {
        transform:translateY(-15px) translateX(5px);
    }

    75% {
        transform:translateY(12px) translateX(3px);
    }

}

Each card receives a different animation delay to create a natural floating effect.

Hovering pauses the animation and adds elevation:

.feature-card:hover {

    transform:translateY(-15px) scale(1.05);

}
📱 Responsive Support

The layout adapts according to screen size:

Desktop → Four column grid
Tablet → Two column grid
Mobile → Single column layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Grid
CSS Variables
CSS Keyframes
CSS Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.