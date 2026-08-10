# CSS Zoom-In Pricing Table for Gaming Hub Layouts

A modern gaming-inspired pricing table featuring smooth zoom-in hover animations, premium plan cards, and responsive layouts built completely with HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub inspired pricing cards
- 🔍 Smooth zoom-in hover animation
- 💎 Featured premium plan highlight
- ⚡ CSS transition effects
- 🌈 Gradient badges and buttons
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-zoom-in-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

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
--bg	Page background
--card	Card background
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Main text color
--muted	Supporting text color
⚡ Animation Details

Pricing cards use zoom-in scaling on hover:

.pricing-card:hover {

    transform: scale(1.12);

}

Featured cards have an enhanced zoom effect:

.featured:hover {

    transform: scale(1.16);

}

The animation creates an interactive gaming dashboard experience.

📱 Responsive Support

The layout adapts across devices:

Desktop → Three-column pricing layout
Tablet → Flexible card arrangement
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


