# CSS Skew-Active Badge for Fintech Dashboard Layouts

A modern fintech dashboard badge component featuring skew transforms, active status indicators, hover shine effects, glassmorphism styling, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🔥 Skew-based active badge animation
- 💎 Glassmorphism badge design
- ✨ Hover shine sweep effect
- 🟢 Animated status indicators
- 🚀 Pure HTML and CSS implementation
- 📱 Responsive layout
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript dependency

---

## 📂 Folder Structure


css-skew-active-badge-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or JavaScript are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root{

--bg:#050816;
--cyan:#06b6d4;
--purple:#8b5cf6;
--green:#22c55e;
--text:#fff;

}
Variables
Variable	Description
--bg	Dashboard background
--cyan	Primary badge color
--purple	Premium indicator color
--green	Success indicator color
--text	Text color
✨ Animation Details

The badge uses CSS transform animations.

Example:

.badge:hover{

transform:
skew(-12deg)
translateY(-10px)
scale(1.08);

}

Includes:

Skew active state
Floating hover effect
Shine sweep animation
Pulsing status indicator
📱 Responsive Support

The layout supports:

Desktop
Tablet
Mobile devices

Badges automatically stack on smaller screens.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transforms
CSS Animations
Flexbox
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.