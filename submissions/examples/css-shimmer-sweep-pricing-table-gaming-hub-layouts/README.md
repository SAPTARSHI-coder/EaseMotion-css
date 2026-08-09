# CSS Shimmer-Sweep Pricing Table for Gaming Hub Layouts

A modern gaming-inspired pricing table featuring a smooth shimmer sweep animation, premium cards, and responsive layouts built completely with HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub themed pricing cards
- ✨ Shimmer-sweep hover animation
- 🌈 Gradient buttons and headings
- 💎 Featured premium plan highlight
- ⚡ Lightweight pure CSS implementation
- 📱 Fully responsive design
- ♿ prefers-reduced-motion accessibility support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-shimmer-sweep-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet in your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in a browser.

No external frameworks or libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

    --bg: #050816;
    --card: #111827;
    --primary: #22d3ee;
    --secondary: #a855f7;
    --text: #ffffff;
    --muted: #94a3b8;

}
Variables
Variable	Description
--bg	Page background
--card	Pricing card background
--primary	Main accent color
--secondary	Gradient secondary color
--text	Primary text color
--muted	Supporting text color
✨ Animation Details

The shimmer sweep effect is created using a pseudo-element.

Initial position:

.card::before {

    left: -120%;

}

On hover:

.card:hover::before {

    left: 140%;

}

The animated light streak moves across the card surface to create a premium gaming UI effect.

📱 Responsive Support

The pricing table adapts across devices:

Desktop → Three-column pricing layout
Tablet → Flexible card scaling
Mobile → Single-column stacked cards
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations and transitions are reduced for users who prefer less motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transitions
CSS Transforms
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.