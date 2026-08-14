# CSS Ripple-Wave Pricing Table for Gaming Hub Layouts

A modern gaming-inspired pricing table featuring animated ripple-wave effects, premium cards, and responsive layouts built using pure HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub themed pricing cards
- 🌊 Ripple-wave animation effect
- ✨ Smooth CSS keyframe animations
- 💎 Featured premium plan highlight
- 🌈 Gradient buttons and styling
- 📱 Fully responsive design
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-ripple-wave-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or frameworks are required.

🎨 CSS Custom Properties

The component uses CSS variables:

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
--bg	Main background
--card	Pricing card background
--primary	Primary accent color
--secondary	Gradient color
--text	Main text color
--muted	Secondary text color
🌊 Animation Details

The ripple effect uses CSS keyframes.

Initial state:

width:120px;
height:120px;
opacity:.8;

Final state:

width:500px;
height:500px;
opacity:0;

Multiple animation states create an expanding wave effect inside pricing cards.

📱 Responsive Support

The pricing layout adapts automatically:

Desktop → Three pricing cards
Tablet → Flexible layout
Mobile → Single column cards
♿ Accessibility

Supports reduced motion:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transitions
CSS Transforms
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.