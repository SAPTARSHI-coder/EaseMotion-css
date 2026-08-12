# CSS Skew-Active Pricing Table for Gaming Hub Layouts

A modern gaming-themed pricing table featuring skew hover interactions, animated highlights, and responsive card layouts built using pure HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming hub inspired pricing layout
- 📐 Skew-active hover animation
- ✨ Smooth CSS transitions
- 🌈 Gradient buttons and typography
- 💎 Featured pricing card highlight
- 📱 Responsive grid layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-skew-active-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet inside your HTML:

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
    --secondary: #8b5cf6;
    --text: #ffffff;
    --muted: #94a3b8;

}
Variables
Variable	Purpose
--bg	Main background color
--card	Pricing card background
--primary	Primary accent color
--secondary	Gradient secondary color
--text	Heading color
--muted	Supporting text color
📐 Animation Details

Cards use skew transformation on hover:

.card:hover {

    transform:
        translateY(-15px)
        skewY(-3deg);

}

A shimmer sweep effect is created using a pseudo-element:

.card::before {

    transform: translateX(-120%);

}

On hover:

.card:hover::before {

    transform: translateX(120%);

}
📱 Responsive Support

The layout automatically adapts:

Desktop → Three-column pricing cards
Tablet → Flexible card sizing
Mobile → Single-column layout
♿ Accessibility

Reduced motion preference is supported:

@media(prefers-reduced-motion:reduce)

Animations and transitions are minimized for users who prefer less motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transforms
CSS Transitions
CSS Keyframes
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.