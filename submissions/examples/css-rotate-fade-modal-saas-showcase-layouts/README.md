# CSS Rotate-Fade Modal for SaaS Showcase Layouts

A modern SaaS modal component featuring smooth rotate-fade entrance animation, glassmorphism styling, and responsive design.

This component is created using only HTML and CSS without JavaScript or external frameworks.


## ✨ Features

- 🔄 Smooth rotate-fade entrance animation
- 💎 Glassmorphism modal design
- 🎨 Modern SaaS showcase styling
- ⚡ Pure HTML and CSS implementation
- ✨ Smooth button hover transitions
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-rotate-fade-modal-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The modal animation will automatically play on page load.

3. Customize the component styles through CSS variables.


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

The modal uses a CSS rotate-fade animation:

@keyframes rotateFade {

    from {

        opacity:0;

        transform:
        rotateX(60deg)
        translateY(50px);

    }


    to {

        opacity:1;

        transform:
        rotateX(0)
        translateY(0);

    }

}

The animation creates a smooth 3D entrance effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transitions
Responsive Design
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This reduces animations for users who prefer limited motion.

📱 Responsive Support

The modal adapts across:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.