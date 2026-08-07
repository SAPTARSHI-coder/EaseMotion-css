# CSS Morph-Glow Carousel for SaaS Showcase Layouts

A modern SaaS carousel component featuring animated morphing glow effects, glassmorphism cards, and responsive design.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌈 Animated morph-glow effect
- ✨ Smooth CSS keyframe animations
- 💎 Glassmorphism carousel cards
- 🎨 Modern SaaS showcase UI
- 🔄 Interactive hover transformations
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-morph-glow-carousel-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in a modern browser.

2. Hover over carousel cards to view interactive effects.

3. Customize CSS variables to match your project theme.


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

The morphing glow effect uses CSS keyframes:

.glow {

    animation:
    morphGlow 5s infinite alternate;

}


@keyframes morphGlow {

    50% {

        transform:
        rotate(120deg)
        scale(1.2);

    }

}

The animated blurred gradient creates a dynamic glowing card appearance.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid/Flexbox
CSS Transforms
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