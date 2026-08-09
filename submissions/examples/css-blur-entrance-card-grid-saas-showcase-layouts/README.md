# CSS Blur-Entrance Card Grid for SaaS Showcase Layouts

A modern SaaS feature card grid component with smooth blur entrance animations, glassmorphism styling, and responsive behavior.

This component is created using pure HTML and CSS without JavaScript or external frameworks.


## ✨ Features

- 🌫️ Blur entrance animation effect
- 🎨 Modern SaaS showcase card design
- 💎 Glassmorphism UI styling
- ⚡ Pure CSS animations
- 🔄 Smooth hover interactions
- 📱 Fully responsive card grid
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-blur-entrance-card-grid-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. View the animated SaaS card grid.

3. Customize colors and animations using CSS variables.


## 🎨 CSS Custom Properties

The component uses reusable CSS variables:

```css
:root {

    --bg: #020617;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    --text: #f8fafc;
    --muted: #94a3b8;

}
🌫️ Animation Details

Cards enter the viewport using a blur and movement animation:

@keyframes cardReveal {

    from {

        opacity: 0;

        filter: blur(20px);

        transform:
        translateY(50px)
        scale(.95);

    }


    to {

        opacity: 1;

        filter: blur(0);

        transform:
        translateY(0)
        scale(1);

    }

}

Each card has a staggered animation delay for a smooth sequential reveal effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transforms
Responsive Design
♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

This reduces animations for users who prefer minimal motion.

📱 Responsive Support

The layout adapts across:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.