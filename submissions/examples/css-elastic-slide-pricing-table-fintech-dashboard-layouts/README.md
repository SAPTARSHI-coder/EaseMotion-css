# CSS Elastic-Slide Pricing Table for Fintech Dashboard Layouts

A modern fintech pricing table component featuring smooth elastic-slide entrance animations, glassmorphism cards, and responsive layout behavior.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌀 Smooth elastic-slide entrance animation
- ✨ CSS transform based reveal effect
- 💎 Glassmorphism pricing cards
- 🎨 Modern fintech dashboard UI
- 🔄 Smooth hover interactions
- ⭐ Highlighted featured pricing plan
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-elastic-slide-pricing-table-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Pricing cards automatically appear with elastic slide animation.

3. Customize colors, spacing, and animation timing using CSS variables.


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

The elastic entrance animation is created using CSS keyframes:

.card {

    animation:

    elasticSlide .9s cubic-bezier(.68,-0.55,.27,1.55);

}


@keyframes elasticSlide {

    from {

        opacity:0;

        transform:
        translateY(80px)
        scale(.7);

    }


    60% {

        transform:
        translateY(-15px)
        scale(1.05);

    }


    to {

        opacity:1;

        transform:
        translateY(0)
        scale(1);

    }

}

The animation creates a spring-like elastic motion when pricing cards enter the viewport.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
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