# CSS Slide-Up Feature Grid for Fintech Dashboard Layouts

A modern fintech dashboard feature grid component featuring smooth slide-up entrance animations, glassmorphism cards, responsive design, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⬆️ Smooth slide-up card entrance animation
- 💎 Glassmorphism feature cards
- 📊 Fintech dashboard inspired UI
- ✨ CSS keyframe animations
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-slide-up-feature-grid-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet to your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root{

--bg:#050816;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;
--card:rgba(255,255,255,.08);

}
Customization
Variable	Description
--bg	Dashboard background
--primary	Primary accent color
--secondary	Secondary gradient color
--card	Glass card background
--text	Main text color
⬆️ Animation Details

Cards use CSS keyframes for a smooth upward entrance.

Example:

@keyframes slideUp{

from{
opacity:0;
transform:translateY(80px);
}

to{
opacity:1;
transform:translateY(0);
}

}

Animation includes:

Fade-in effect
Vertical movement
Staggered card appearance
Smooth hover interaction
📱 Responsive Support

The layout supports:

Desktop screens
Tablets
Mobile devices

CSS Grid automatically adjusts the number of columns based on viewport size.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This reduces animation effects for users who prefer limited motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.