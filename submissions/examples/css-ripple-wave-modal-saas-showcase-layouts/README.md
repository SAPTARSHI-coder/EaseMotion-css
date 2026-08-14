# CSS Ripple-Wave Modal for SaaS Showcase Layouts

A modern SaaS modal component featuring smooth ripple-wave animations, glassmorphism styling, and responsive design.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌊 Smooth ripple-wave animation
- ✨ CSS keyframe based wave expansion effect
- 💎 Glassmorphism modal interface
- 🎨 Modern SaaS showcase design
- 🔄 Smooth button hover interaction
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive design
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-ripple-wave-modal-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in a modern browser.

2. The modal automatically displays the ripple-wave animation.

3. Customize colors, animation speed, and modal styling using CSS variables.


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

The ripple-wave effect uses CSS animations:

.ripple {

    animation:

    rippleWave 3s ease-out infinite;

}


@keyframes rippleWave {

    0% {

        width:80px;

        height:80px;

        opacity:.8;

    }


    100% {

        width:500px;

        height:500px;

        opacity:0;

    }

}

The expanding circle creates a smooth wave-like animation inside the modal.

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