# CSS Glitch-Flicker Stepper for Fintech Dashboard Layouts

A modern fintech dashboard stepper component featuring glitch-flicker animations, glassmorphism cards, and responsive progress tracking.

This component is developed using only HTML and CSS without JavaScript or external frameworks.


## ✨ Features

- ⚡ Glitch-flicker active step animation
- 🔄 Smooth CSS keyframe transitions
- 💎 Glassmorphism dashboard cards
- 📊 Fintech transaction progress UI
- 🎨 Modern gradient styling
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-glitch-flicker-stepper-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over the step cards to view the glitch effect.

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

The active step uses a glitch-flicker animation:

@keyframes glitch {

    0% {
        transform: translate(0);
    }

    20% {
        transform: translate(-3px,2px);
    }

    40% {
        transform: translate(3px,-2px);
    }

    100% {
        transform: translate(0);
    }

}

This creates a futuristic dashboard interaction effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transitions
Responsive Design
♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

📱 Responsive Support

Optimized for:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.