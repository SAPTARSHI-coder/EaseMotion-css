# CSS Blur-Entrance Stepper for Fintech Dashboard Layouts

A modern fintech dashboard stepper component featuring smooth blur-entrance animation, glassmorphism styling, responsive behavior, and a pure CSS implementation.

Built completely with HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌫️ Smooth blur-entrance animation
- ✨ CSS filter and transform based reveal effect
- 💎 Glassmorphism stepper interface
- 📊 Fintech dashboard inspired design
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-blur-entrance-stepper-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The stepper items automatically appear with blur-entrance animation.

3. Customize steps, colors, and animation timing inside `style.css`.


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

The stepper items use CSS keyframe animation:

.step {

    animation:

    blurEntrance .9s ease forwards;

}

The blur-entrance effect combines:

Opacity transition
Blur filter animation
Vertical movement
Scale transformation
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Filter
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