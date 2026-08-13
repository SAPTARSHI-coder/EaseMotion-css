# CSS Bounce-Pulse Feature Grid for Gaming Hub Layouts

A modern gaming-themed feature grid with interactive bounce-pulse animations, glowing effects, and responsive card layouts built completely with HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub inspired feature cards
- ⚡ Bounce-pulse hover animation
- 🔥 Animated glowing background effect
- ✨ Smooth CSS keyframe animations
- 🌈 Gradient styling
- 📱 Fully responsive grid layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-bounce-pulse-feature-grid-gaming-hub-layouts/

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

    --bg: #050816;
    --card: #111827;
    --primary: #38bdf8;
    --secondary: #a855f7;
    --text: #ffffff;
    --muted: #94a3b8;

}
Variables
Variable	Description
--bg	Main background color
--card	Feature card background
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Main text color
--muted	Description text color
⚡ Animation Details

Cards use a bounce-pulse animation on hover:

.feature-card:hover {

    animation: bouncePulse .8s ease;

}

Animation stages:

0%   → Normal scale
35%  → Enlarged bounce
60%  → Slight compression
100% → Returns to normal

A glowing pulse layer is created using:

.feature-card::before

to provide a dynamic gaming-style visual effect.

📱 Responsive Support

The layout adapts automatically:

Desktop → Three-column feature grid
Tablet → Two-column layout
Mobile → Single-column cards
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.