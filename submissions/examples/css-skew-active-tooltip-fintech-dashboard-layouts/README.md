# CSS Skew-Active Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring a skew-active hover interaction, smooth CSS transitions, glowing effects, and a pure CSS implementation.

Built for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 📐 Skew-based tooltip reveal animation
- 💎 Glass-inspired fintech card design
- 🌈 Gradient tooltip styling
- ✨ Hover glow interaction
- ⚡ Smooth cubic-bezier transitions
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-skew-active-tooltip-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet in your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in a browser to view the animation.

No frameworks or JavaScript dependencies are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

--bg: #050816;
--card: #111827;
--primary: #06b6d4;
--secondary: #8b5cf6;
--text: #ffffff;

}
Available Variables
Variable	Purpose
--bg	Dashboard background
--card	Card surface color
--primary	Primary accent
--secondary	Secondary gradient color
--text	Text color
📐 Animation Details

The tooltip uses skew transformation with smooth entrance animation.

Example:

.card:hover .tooltip {

opacity:1;

transform:
translateX(-50%)
translateY(0)
skewX(-8deg);

}

Animation includes:

Initial hidden tooltip state
Vertical slide reveal
Skew transformation
Smooth easing effect
Hover-based interaction
📱 Responsive Support

Supported screen sizes:

Desktop
Tablet
Mobile

Cards automatically adjust using CSS Grid breakpoints.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This disables animations for users who prefer reduced motion.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transform
CSS Transition
Responsive Design
📜 License

Contribution created for EaseMotion CSS open-source animation examples.