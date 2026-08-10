# CSS Zoom-In Progress Bar for Fintech Dashboard Layouts

A modern fintech dashboard progress bar component featuring smooth zoom-in entrance animation, animated progress indicators, glassmorphism styling, responsive behavior, and a pure CSS implementation.

Built completely with HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🔍 Smooth zoom-in entrance animation
- 📈 Animated progress indicators
- ✨ CSS transform based reveal effect
- 💎 Glassmorphism dashboard card design
- 📊 Fintech analytics inspired interface
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-zoom-in-progress-bar-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Progress bars automatically animate with zoom-in effects.

3. Customize progress values, colors, and animation timing inside `style.css`.


## 🎨 CSS Custom Properties

```css
:root {

    --bg: #020617;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --accent: #22c55e;
    --text: #f8fafc;
    --muted: #94a3b8;

}
✨ Animation Details

The progress container uses zoom-in animation:

.progress-card {

    animation:

    zoomIn .9s ease forwards;

}

Progress bars use transform-based animation:

.fill {

    animation:

    zoomProgress 1.2s ease forwards;

}

The animation combines:

Opacity transition
Scale transformation
Horizontal progress reveal
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