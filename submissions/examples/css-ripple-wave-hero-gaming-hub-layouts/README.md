# CSS Ripple-Wave Hero Section for Gaming Hub Layouts

A modern gaming hero section featuring animated ripple-wave effects, gradient call-to-action buttons, and immersive visual interactions built with pure HTML and CSS.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌊 Animated ripple-wave background effect
- 🎮 Gaming hub inspired hero layout
- ✨ Smooth CSS keyframe animations
- 🌈 Gradient typography and buttons
- 📱 Fully responsive design
- ⚡ Lightweight pure CSS implementation
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-ripple-wave-hero-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or JavaScript frameworks are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {
    --bg: #050816;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --text: #ffffff;
    --muted: #94a3b8;
}
Variables
Variable	Description
--bg	Hero background color
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Main text color
--muted	Description text color
🌊 Animation Details

The ripple effect is created using CSS pseudo layers and keyframes.

Initial state:

width:120px;
height:120px;
opacity:0.8;

Final state:

width:900px;
height:900px;
opacity:0;

Multiple ripple layers use different animation delays to create a continuous wave effect.

📱 Responsive Support

The hero section adapts across devices:

Desktop → Large immersive layout
Tablet → Flexible content scaling
Mobile → Stacked buttons and optimized spacing
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframes
CSS Transforms
CSS Flexbox
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26 contributions.