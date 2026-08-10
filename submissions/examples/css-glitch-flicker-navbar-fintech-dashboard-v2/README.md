# CSS Glitch-Flicker Navbar for Fintech Dashboard Layouts

A futuristic fintech dashboard navigation component featuring glitch-flicker text animation, glassmorphism styling, responsive navigation layout, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⚡ Glitch-flicker logo animation
- 💎 Glassmorphism navbar design
- 🎨 CSS pseudo-element glitch layers
- 🚀 Pure HTML and CSS implementation
- 📱 Responsive navbar layout
- ✨ Smooth hover interactions
- ♿ prefers-reduced-motion accessibility support
- ❌ No JavaScript dependency

---

## 📂 Folder Structure


css-glitch-flicker-navbar-fintech-dashboard-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No frameworks or JavaScript are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root{

--bg:#050816;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Variables
Variable	Description
--bg	Dashboard background
--primary	Main accent color
--secondary	Gradient accent color
--text	Text color
⚡ Animation Details

The glitch effect is created using CSS pseudo-elements.

.glitch::before,
.glitch::after{

content:attr(data-text);

}

Features:

RGB split glitch layers
Flickering text movement
Smooth CSS keyframe animation
Lightweight performance-friendly effects
📱 Responsive Support

The navbar adapts to:

Desktop screens
Tablets
Mobile devices

Mobile layout changes navigation items into a vertical arrangement.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Users who prefer reduced animations will get minimized motion effects.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
Flexbox
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.