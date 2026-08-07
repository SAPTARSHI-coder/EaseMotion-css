# CSS Bounce-Pulse Pricing Table for Gaming Hub Layouts

A gaming-inspired pricing table featuring smooth bounce and pulse animations using pure HTML and CSS.

This component is created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub themed pricing cards
- 🔄 Smooth bounce-pulse animation
- ⚡ CSS keyframe animations
- 💎 Highlighted premium plan
- 🌈 Gradient buttons and badges
- 📱 Responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-bounce-pulse-pricing-table-gaming-hub-layouts/

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

The design uses CSS variables for easy customization:

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
--card	Pricing card background
--primary	Main accent color
--secondary	Gradient accent color
--text	Main text color
--muted	Secondary text color
⚡ Animation Details

The pricing cards use a bounce-pulse keyframe animation:

@keyframes bouncePulse {

    40% {
        transform: translateY(-12px) scale(1.03);
    }

}

Cards continuously create a dynamic gaming dashboard feel.

Hovering over cards pauses the animation and adds elevation:

.pricing-card:hover {

    transform: translateY(-15px);

}
📱 Responsive Support

The pricing table adapts to different screen sizes:

Desktop → Three-column layout
Tablet → Flexible grid
Mobile → Single-column layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Keyframes
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.