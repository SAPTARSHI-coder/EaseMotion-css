# CSS Slide-Up Progress Bar for Fintech Dashboard Layouts

A modern fintech dashboard progress bar component featuring a smooth slide-up entrance animation, gradient progress indicator, glassmorphism card design, and responsive layout.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 📈 Smooth slide-up entrance animation
- ⬆️ CSS transform based progress reveal effect
- 💎 Glassmorphism dashboard card
- 🎨 Modern fintech dashboard UI
- 🌈 Gradient animated progress indicator
- 🔄 Smooth hover interaction
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-slide-up-progress-bar-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The progress card appears with a smooth slide-up animation.

3. Customize colors, progress value, and animation timing using CSS.


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

The card entrance animation uses CSS keyframes:

.progress-card {

    animation:

    slideUp .8s cubic-bezier(.16,1,.3,1);

}


@keyframes slideUp {

    from {

        opacity:0;

        transform:
        translateY(80px);

    }


    to {

        opacity:1;

        transform:
        translateY(0);

    }

}

The progress bar fill animation creates a smooth upward reveal effect:

.progress {

    animation:

    progressSlide 1.5s ease forwards;

}
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