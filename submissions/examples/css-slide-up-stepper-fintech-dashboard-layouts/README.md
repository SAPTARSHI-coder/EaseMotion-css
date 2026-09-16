# CSS Slide-Up Stepper for Fintech Dashboard Layouts

A modern fintech dashboard stepper component featuring smooth slide-up entrance animation, glassmorphism styling, responsive behavior, and a pure CSS implementation.

Built completely with HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- ⬆️ Smooth slide-up entrance animation
- ✨ CSS transform based reveal effect
- 💎 Glassmorphism stepper interface
- 📊 Fintech dashboard inspired design
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-slide-up-stepper-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The stepper items automatically appear with slide-up animation.

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

The step items use CSS keyframe animation:

.step {

    animation:

    slideUp .8s ease forwards;

}

The slide-up effect combines:

Opacity transition
Vertical movement
Smooth entrance timing
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