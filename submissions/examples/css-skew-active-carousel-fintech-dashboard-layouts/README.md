# CSS Skew-Active Carousel for Fintech Dashboard Layouts

A modern fintech dashboard carousel featuring skew-active card interactions built completely with HTML and CSS.

This component is designed for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 💳 Fintech dashboard inspired UI
- 📊 Interactive finance cards
- 📐 Skew transformation effects
- ⚡ Smooth CSS transitions
- 🌈 Gradient accent styling
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-skew-active-carousel-fintech-dashboard-layouts/

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

The component uses CSS variables for easy customization:

:root {

    --bg:#07111f;
    --card:#111827;
    --primary:#22d3ee;
    --secondary:#6366f1;
    --text:#ffffff;
    --muted:#94a3b8;

}
Variables
Variable	Description
--bg	Dashboard background
--card	Card background
--primary	Highlight color
--secondary	Gradient color
--text	Main text color
--muted	Secondary text
⚡ Animation Details

Cards use CSS skew transformations:

.finance-card {

    transform:skewX(-8deg);

}

The active card receives additional emphasis:

.finance-card.active {

    transform:
    skewX(-8deg)
    translateY(-20px)
    scale(1.08);

}

Hover interaction increases elevation and focus:

.finance-card:hover {

    transform:
    skewX(-8deg)
    translateY(-25px)
    scale(1.1);

}
📱 Responsive Support

The carousel adapts across devices:

Desktop → Horizontal card layout
Tablet → Flexible card arrangement
Mobile → Vertical stacked cards
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations and transitions are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Flexbox
CSS Transform
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.