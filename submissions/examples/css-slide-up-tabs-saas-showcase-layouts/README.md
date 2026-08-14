# CSS Slide-Up Tabs for SaaS Showcase Layouts

A modern SaaS tab component featuring smooth slide-up animations, glassmorphism styling, and responsive design.

This component is created using only HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- ⬆️ Smooth slide-up tab animation
- 🔄 CSS transform transitions
- 💎 Glassmorphism UI design
- 🎨 Modern SaaS dashboard appearance
- ✨ Interactive hover effects
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-slide-up-tabs-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over the tabs to view the slide-up animation.

3. Customize animation and colors using CSS variables.


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

The slide-up effect is created using CSS transforms:

.tab:hover,
.tab.active {

    transform:
    translateY(-12px);

}

The active tab smoothly rises above other tabs creating a modern dashboard interaction.

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

Animations are minimized for users who prefer reduced motion.

📱 Responsive Support

Optimized for:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.