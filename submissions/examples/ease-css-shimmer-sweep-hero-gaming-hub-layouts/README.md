# CSS Shimmer-Sweep Hero Section for Gaming Hub Layouts

A futuristic gaming hero section featuring a smooth shimmer-sweep light animation, modern navigation, gradient effects, and responsive dashboard-style statistics.

This component is built completely with pure HTML and CSS without any JavaScript or external frameworks.


## ✨ Features

- 🎮 Modern gaming hub hero design
- ✨ Smooth shimmer-sweep light animation
- 🌈 Gradient text effects
- 🕹️ Gaming focused UI layout
- ⚡ Pure HTML and CSS implementation
- 💎 Glassmorphism statistics cards
- 🔄 CSS keyframe animations
- 📱 Fully responsive design
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


ease-css-shimmer-sweep-hero-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` directly in your browser.

2. Hover over buttons and cards to see interactive animations.

3. Customize CSS variables inside `style.css` according to your gaming theme.


## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

```css
:root {

    --bg:#030712;
    --card:#111827;
    --primary:#22d3ee;
    --secondary:#a855f7;
    --accent:#f43f5e;
    --text:#f8fafc;
    --muted:#94a3b8;

}

Update these values to match your brand identity.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Flexbox
CSS Grid
CSS Transform
CSS Transitions
CSS Keyframe Animations
Responsive Design
✨ Animation Details

The hero section includes a shimmer sweep effect created using CSS keyframes:

@keyframes shimmer {

    0% {
        left:-50%;
    }

    100% {
        left:130%;
    }

}

The animation creates a moving light reflection across the gaming hero background.

♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations and transitions are minimized for users who prefer reduced motion.

📱 Responsive Behavior

The layout adapts smoothly across:

Desktop screens
Tablets
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.