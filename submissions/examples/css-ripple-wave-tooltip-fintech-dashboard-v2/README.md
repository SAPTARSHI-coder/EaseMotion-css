# CSS Ripple-Wave Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring ripple-wave hover animation, floating tooltip transitions, glassmorphism styling, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌊 Ripple-wave click effect animation
- 💎 Glassmorphism tooltip design
- ⚡ Smooth hover interactions
- 🎯 Floating tooltip appearance
- 🚀 Pure HTML and CSS implementation
- 📱 Responsive layout
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript dependency

---

## 📂 Folder Structure


css-ripple-wave-tooltip-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

Customize colors using CSS variables:

:root{

--bg:#050816;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Variables
Variable	Description
--bg	Dashboard background
--primary	Primary gradient color
--secondary	Secondary gradient color
--text	Text color
🌊 Animation Details

The ripple effect is created using CSS pseudo-elements.

Example:

.icon:hover::before{

animation:
ripple 1s ease-out;

}

Animation includes:

Expanding ripple wave
Smooth icon hover movement
Tooltip fade and scale transition
Lightweight CSS-only effects
📱 Responsive Support

The component supports:

Desktop screens
Tablets
Mobile devices

Tooltip items automatically adjust for smaller screens.

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