# CSS Ripple-Wave Progress Bar for Fintech Dashboard Layouts

A modern fintech dashboard progress bar component featuring a ripple-wave animation effect, smooth scaling transitions, glassmorphism styling, and responsive behavior.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌊 Smooth ripple-wave animation effect
- ✨ CSS transform based wave interaction
- 💎 Glassmorphism dashboard card
- 📊 Modern fintech progress visualization
- 🎨 Gradient progress indicator
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-ripple-wave-progress-bar-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The ripple-wave progress animation will start automatically.

3. Customize colors, progress width, and animation timing inside `style.css`.


## 🎨 CSS Custom Properties

```css
:root {

    --bg: #020617;
    --primary: #06b6d4;
    --secondary: #3b82f6;
    --accent: #22c55e;
    --text: #f8fafc;
    --muted: #94a3b8;

}
✨ Animation Details

The dashboard card uses a smooth entrance animation:

.progress-card {

    animation:
    rippleEntrance .9s ease;

}

The ripple-wave effect is created using CSS keyframes:

.wave {

    animation:
    ripple 1.8s infinite;

}

The progress indicator creates a dynamic wave pulse effect without JavaScript.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transform
CSS Keyframe Animations
Responsive Design
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