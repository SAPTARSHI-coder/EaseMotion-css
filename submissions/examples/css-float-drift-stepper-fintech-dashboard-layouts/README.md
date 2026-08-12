# CSS Float-Drift Stepper for Fintech Dashboard Layouts

A modern fintech workflow stepper component featuring smooth floating animations, glassmorphism cards, and responsive design.

This component is created using only HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌊 Smooth float-drift animation
- 🎯 Fintech workflow progress layout
- 💎 Glassmorphism step cards
- ✨ Hover lift interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive design
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-float-drift-stepper-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in a browser.

2. Hover over the step cards for interactive effects.

3. Customize colors and animations using CSS variables.


## 🎨 CSS Custom Properties

```css
:root {

    --bg: #020617;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    --text: #f8fafc;
    --muted: #94a3b8;

}
✨ Animation Details

The floating effect is created using CSS keyframes:

@keyframes floatDrift {

    50% {

        transform: translateY(-20px);

    }

}

Each step card uses different animation delays to create a natural drifting effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframe Animations
CSS Transitions
Responsive Layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

📱 Responsive Support

Optimized for:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.