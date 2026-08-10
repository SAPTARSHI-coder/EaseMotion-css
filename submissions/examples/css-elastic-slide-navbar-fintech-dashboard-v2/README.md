# CSS Elastic-Slide Navbar for Fintech Dashboard Layouts

A modern fintech dashboard navigation component featuring elastic slide hover effects, smooth transitions, glassmorphism styling, and pure CSS animations.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌀 Elastic-slide navigation hover animation
- 💎 Glassmorphism navbar design
- 📊 Fintech dashboard inspired layout
- ✨ Smooth CSS transitions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-elastic-slide-navbar-fintech-dashboard-v2/

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

The component uses CSS variables for customization:

:root {

--primary:#06b6d4;
--secondary:#8b5cf6;
--background:#050816;
--text:#ffffff;
--muted:#b8c4d9;

}
Customization Options
Variable	Description
--primary	Main accent color
--secondary	Gradient animation color
--background	Dashboard background
--text	Primary text color
--muted	Secondary text color
🌀 Animation Details

The navbar uses CSS transform animations with elastic easing.

Example:

.nav-links a:hover {

transform:
translateY(-5px);

}

Features:

Smooth underline slide effect
Elastic entrance animation
Hover lift interaction
Card motion effects
📱 Responsive Design

Supported layouts:

Desktop
Tablet
Mobile

Navigation links wrap automatically on smaller screens.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This improves usability for users who prefer minimal animation.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transforms
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.


