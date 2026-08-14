# CSS Elastic-Slide Carousel for SaaS Showcase Layouts

A modern SaaS showcase carousel component featuring smooth elastic-slide entrance animation, glassmorphism cards, responsive layout, and pure CSS implementation.

Built completely with HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌀 Smooth elastic-slide entrance animation
- ✨ CSS transform based slide effect
- 💎 Glassmorphism carousel cards
- 🎨 Modern SaaS showcase interface
- 🖱️ Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-elastic-slide-carousel-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. The carousel cards appear with elastic slide animation.

3. Customize card content, colors, and animation timing inside `style.css`.


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

Cards use CSS keyframe animation:

.card {

    animation:

    elasticSlide .9s cubic-bezier(.68,-0.55,.27,1.55);

}

The elastic effect combines:

Opacity transition
Horizontal movement
Scale bounce effect
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