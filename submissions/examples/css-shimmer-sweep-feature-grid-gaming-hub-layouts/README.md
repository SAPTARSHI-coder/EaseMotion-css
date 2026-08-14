# CSS Shimmer-Sweep Feature Grid for Gaming Hub Layouts

A modern gaming-inspired feature grid with a smooth shimmer-sweep hover animation built using pure HTML and CSS.

This component is designed for the EaseMotion CSS showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub themed feature cards
- ✨ Shimmer-sweep hover animation
- ⚡ Smooth CSS transitions
- 🌈 Gradient accent styling
- 📱 Fully responsive grid layout
- ♿ prefers-reduced-motion accessibility support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-shimmer-sweep-feature-grid-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet inside your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or frameworks are required.

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
Variable	Purpose
--bg	Main page background
--card	Feature card background
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Main text color
--muted	Description text color
⚡ Animation Details

Cards use a shimmer sweep effect using CSS pseudo-elements.

.feature-card::before

creates a moving light layer that slides across the card on hover.

Hover interaction:

.feature-card:hover::before {

    left: 140%;

}

The card also lifts slightly:

.feature-card:hover {

    transform: translateY(-10px);

}
📱 Responsive Support

The grid adapts according to screen size:

Desktop → 3 column layout
Tablet → 2 column layout
Mobile → Single column layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This reduces animations for users who prefer minimal motion.

🛠 Technologies Used
HTML5
CSS3
CSS Grid
CSS Variables
CSS Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.