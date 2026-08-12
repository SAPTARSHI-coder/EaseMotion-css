# CSS Shimmer-Sweep Pricing Table for Fintech Dashboard Layouts

A modern fintech pricing table component featuring animated shimmer sweep effects, glassmorphism cards, and responsive subscription layouts.

This component is built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- ✨ Animated shimmer-sweep effect
- 💳 Fintech subscription pricing cards
- 💎 Glassmorphism UI design
- 🌈 Gradient themed buttons
- ⭐ Featured pricing plan highlight
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-shimmer-sweep-pricing-table-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over pricing cards to see interactive effects.

3. Customize colors and animation speed using CSS variables.


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

The shimmer sweep effect is created using CSS pseudo animation:

.shimmer {

    animation:

    shimmerSweep 3s infinite;

}


@keyframes shimmerSweep {

    60% {

        left:140%;

    }

}

A moving light gradient creates a premium fintech card animation.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframe Animations
CSS Transitions
Responsive Grid Layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are reduced for users who prefer minimal motion.

📱 Responsive Support

Optimized for:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.