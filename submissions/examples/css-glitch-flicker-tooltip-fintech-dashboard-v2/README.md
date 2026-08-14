# CSS Glitch-Flicker Tooltip for Fintech Dashboard Layouts

A modern fintech dashboard tooltip component featuring glitch-flicker animations, smooth CSS transitions, glassmorphism styling, and a pure HTML/CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⚡ Glitch-flicker tooltip animation
- 🌫️ Smooth blur entrance effect
- 💎 Glassmorphism dashboard cards
- 📊 Fintech dashboard inspired UI
- 🎨 CSS-only hover interactions
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-glitch-flicker-tooltip-fintech-dashboard-v2/

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

The component uses CSS variables for easy customization.

:root{

--bg:#050816;
--card:rgba(255,255,255,.08);
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Customization
Variable	Description
--bg	Dashboard background
--card	Glass card background
--primary	Accent color
--secondary	Gradient color
--text	Text color
⚡ Animation Details

The tooltip combines multiple CSS effects:

Blur removal animation
Scale entrance transition
Glitch movement effect
Hover-triggered reveal

Example:

.tooltip-container:hover .tooltip{

opacity:1;
visibility:visible;
filter:blur(0);

}
📱 Responsive Support

The layout automatically adapts for:

Desktop screens
Tablets
Mobile devices

Cards resize using CSS Grid.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transforms
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.