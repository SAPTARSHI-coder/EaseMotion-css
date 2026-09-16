# CSS Rotate-Fade Badge for Fintech Dashboard Layouts

A modern fintech dashboard badge component featuring smooth rotate-fade entrance animation, glassmorphism styling, animated status indicators, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🔄 Rotate-fade entrance animation
- 💎 Glassmorphism badge design
- ✨ Hover glow sweep effect
- 🟢 Animated status indicators
- 🚀 Pure HTML and CSS implementation
- 📱 Responsive layout
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript dependency

---

## 📂 Folder Structure


css-rotate-fade-badge-fintech-dashboard-v2/

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

The component uses CSS variables for easy customization.

:root{

--bg:#050816;
--cyan:#06b6d4;
--green:#22c55e;
--yellow:#eab308;
--purple:#8b5cf6;
--text:#fff;

}
Variables
Variable	Description
--bg	Dashboard background
--cyan	Default accent color
--green	Success badge color
--yellow	Warning badge color
--purple	Premium badge color
--text	Text color
🔄 Animation Details

The badge entrance uses CSS rotate and fade animation.

Example:

@keyframes rotateFade{

from{

opacity:0;

transform:
rotate(-25deg)
translateY(40px);

}

to{

opacity:1;

transform:
rotate(0)
translateY(0);

}

}

Animation includes:

Rotation entrance effect
Fade transition
Hover scale interaction
Shine sweep animation
📱 Responsive Support

The component supports:

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