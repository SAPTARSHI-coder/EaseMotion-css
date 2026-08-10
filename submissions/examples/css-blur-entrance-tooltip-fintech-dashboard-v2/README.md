# CSS Blur-Entrance Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring smooth blur entrance animations, glassmorphism styling, responsive cards, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌫️ Smooth blur entrance tooltip animation
- 💎 Glassmorphism tooltip design
- 📊 Fintech dashboard inspired feature grid
- ✨ CSS transition and keyframe animations
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-blur-entrance-tooltip-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root {

--primary: #06b6d4;
--secondary: #8b5cf6;
--background: #050816;
--card: rgba(255,255,255,0.08);
--text: #ffffff;
--muted: #b8c4d9;

}
Customization
Variable	Description
--primary	Primary accent color
--secondary	Tooltip glow color
--background	Dashboard background
--card	Glass card background
--text	Main text color
🌫️ Animation Details

The tooltip uses CSS blur and transform effects.

.tooltip:hover .tooltip-box {

opacity:1;

visibility:visible;

transform:
translateX(-50%)
translateY(0);

filter:blur(0);

}

Animation includes:

Blur removal effect
Smooth upward entrance
Glassmorphism reveal
Hover-based interaction
📱 Responsive Support

The component adapts to:

Desktop screens
Tablets
Mobile devices

Feature cards automatically resize based on viewport width.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This provides a comfortable experience for users who prefer limited animations.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transitions
CSS Animations
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.