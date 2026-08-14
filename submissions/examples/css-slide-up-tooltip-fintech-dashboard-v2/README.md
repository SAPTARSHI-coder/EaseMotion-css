# CSS Slide-Up Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring smooth slide-up entrance animation, floating tooltip interaction, glassmorphism styling, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⬆️ Smooth slide-up tooltip animation
- 💎 Glassmorphism tooltip UI
- 🎯 Floating contextual information
- ✨ Smooth hover transitions
- 🚀 Pure HTML and CSS implementation
- 📱 Responsive layout
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript dependency

---

## 📂 Folder Structure


css-slide-up-tooltip-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or JavaScript are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root{

--bg:#050816;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Variables
Variable	Description
--bg	Dashboard background
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Text color
⬆️ Animation Details

The tooltip uses a smooth translate and opacity animation.

Example:

.tooltip-card:hover .tooltip{

opacity:1;

transform:
translateX(-50%)
translateY(0);

}

Animation includes:

Slide-up entrance effect
Fade-in transition
Icon hover movement
Smooth CSS transitions
📱 Responsive Support

The component supports:

Desktop
Tablet
Mobile devices

Layout automatically adjusts for smaller screens.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transforms
Flexbox
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.