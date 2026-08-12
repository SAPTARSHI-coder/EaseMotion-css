# CSS Scale-Hover Carousel for SaaS Showcase Layouts

A modern SaaS carousel component featuring smooth scale-hover interactions, glassmorphism styling, and responsive card layouts.

This component is built completely with pure HTML and CSS without JavaScript or external frameworks.


## ✨ Features

- 🔍 Smooth scale-hover card animation
- ✨ CSS transform based interactions
- 💎 Glassmorphism card design
- 🎨 Modern SaaS showcase layout
- 🔄 Smooth hover transitions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-scale-hover-carousel-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in a browser.

2. Hover over carousel cards to see the scaling animation.

3. Customize the colors and animation values inside `style.css`.


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

Cards use CSS transform scaling:

.card:hover {

    transform:
    scale(1.12)
    translateY(-15px);

}

This creates a smooth hover-focused carousel effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transitions
CSS Animations
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