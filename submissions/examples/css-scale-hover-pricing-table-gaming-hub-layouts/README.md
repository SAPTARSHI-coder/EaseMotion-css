# CSS Scale-Hover Pricing Table for Gaming Hub Layouts

A modern gaming-inspired pricing table featuring smooth scale-hover interactions, premium cards, and responsive layouts using only HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub themed pricing cards
- 🔍 Smooth scale-hover animation
- 💎 Premium featured plan highlight
- ✨ CSS transition effects
- 🌈 Gradient buttons and badges
- 📱 Fully responsive design
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-scale-hover-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external dependencies are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root {

    --bg:#050816;
    --card:#111827;
    --primary:#22d3ee;
    --secondary:#a855f7;
    --text:#ffffff;
    --muted:#94a3b8;

}
Variables
Variable	Description
--bg	Page background
--card	Pricing card background
--primary	Main accent color
--secondary	Gradient accent color
--text	Main text color
--muted	Secondary text color
⚡ Animation Details

Cards use a scale-hover interaction:

.plan-card:hover {

    transform:scale(1.08);

}

Featured cards have enhanced scaling:

.featured:hover {

    transform:scale(1.12);

}

The animation creates an interactive gaming dashboard experience.

📱 Responsive Support

The layout automatically adapts:

Desktop → Three-column pricing cards
Tablet → Flexible layout
Mobile → Single-column pricing cards
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations and transitions are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.