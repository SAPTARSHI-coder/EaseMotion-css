# CSS Ripple-Wave Hero Section for Fintech Dashboard Layouts

A modern fintech dashboard hero section featuring animated ripple waves, glassmorphism cards, gradient buttons, and smooth CSS motion effects.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌊 Smooth CSS ripple-wave animation
- 💎 Glassmorphism statistics cards
- ⚡ Pure HTML and CSS implementation
- 🎨 Gradient fintech dashboard theme
- 🚀 Lightweight animation effects
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript or external dependencies

---

## 📂 Folder Structure


css-ripple-wave-hero-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet inside your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript framework or external library is required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root {

--primary:#06b6d4;
--secondary:#8b5cf6;
--bg:#050816;
--text:#ffffff;
--muted:#b8c4d9;

}
Customization Options
Variable	Purpose
--primary	Main ripple and gradient color
--secondary	Secondary glow color
--bg	Hero background
--text	Main text color
--muted	Secondary text color
🌊 Animation Details

The ripple effect is created using pure CSS keyframes.

@keyframes ripple-wave {

0% {

transform:scale(.5);
opacity:.8;

}

100% {

transform:scale(1.5);
opacity:0;

}

}

Multiple ripple layers create a continuous wave effect.

📱 Responsive Support

The layout adapts to:

Desktop screens
Tablets
Mobile devices

Buttons and dashboard cards stack automatically on smaller screens.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Users who prefer reduced animation will get a simplified experience.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.