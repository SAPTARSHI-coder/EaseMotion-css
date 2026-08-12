# CSS Zoom-In Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring smooth zoom-in animations, glassmorphism styling, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🔍 Smooth zoom-in tooltip animation
- 💎 Glassmorphism dashboard cards
- 📊 Fintech dashboard inspired interface
- ✨ CSS transform based interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-zoom-in-tooltip-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in a modern browser.

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
--primary	Main accent color
--secondary	Gradient color
--card	Glass card background
--text	Text color
🔍 Animation Details

The tooltip uses CSS scale and opacity transitions.

Example:

.tooltip-box:hover .tooltip{

opacity:1;
visibility:visible;

transform:
translateX(-50%)
scale(1);

}

Animation includes:

Zoom entrance effect
Smooth scaling transition
Glassmorphism reveal
Hover based interaction
📱 Responsive Support

The layout supports:

Desktop screens
Tablets
Mobile devices

Cards automatically resize using CSS Grid.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This improves usability for users who prefer limited animations.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transforms
CSS Transitions
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.