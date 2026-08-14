# CSS Shimmer-Sweep Tabs for SaaS Showcase Layouts

A modern SaaS tab component featuring a smooth shimmer-sweep animation, glassmorphism UI, and responsive layout.

This component is built using only HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- ✨ Shimmer sweep hover animation
- 🔄 Smooth CSS transitions
- 💎 Glassmorphism tab design
- 🎨 Modern SaaS dashboard styling
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-shimmer-sweep-tabs-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over the tabs to view the shimmer sweep animation.

3. Customize colors and effects using CSS variables.


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

The shimmer effect is created using CSS gradients and keyframes:

@keyframes shimmer {

    from {
        left:-120%;
    }

    to {
        left:150%;
    }

}

This creates a smooth light sweep animation over the active tab.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transitions
Responsive Design
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations are reduced for users who prefer minimal motion.

📱 Responsive Support

Optimized for:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.