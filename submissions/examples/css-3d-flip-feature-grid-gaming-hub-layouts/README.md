# CSS 3D-Flip Feature Grid for Gaming Hub Layouts

A modern gaming-inspired feature grid featuring interactive 3D card flip animations built completely with HTML and CSS.

This component is part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub inspired feature cards
- 🔄 Smooth 3D flip animation
- ⚡ Pure CSS transform effects
- 🎨 Gradient card styling
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-3d-flip-feature-grid-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in a browser.

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
Variable	Purpose
--bg	Page background
--card	Card background
--primary	Primary accent
--secondary	Gradient color
--text	Main text
--muted	Secondary text
⚡ Animation Details

The flip effect is created using CSS 3D transforms.

Main animation:

.flip-card:hover .flip-inner {

    transform:rotateY(180deg);

}

The card uses:

perspective
transform-style: preserve-3d
backface-visibility

to create a realistic 3D flip interaction.

📱 Responsive Support

Layout adapts across devices:

Desktop → 4 column grid
Tablet → 2 column grid
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
CSS 3D Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.