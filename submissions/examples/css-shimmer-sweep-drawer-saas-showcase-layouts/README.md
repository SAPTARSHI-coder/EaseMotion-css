# CSS Shimmer-Sweep Drawer for SaaS Showcase Layouts

A modern SaaS drawer component featuring a smooth shimmer sweep animation, glassmorphism styling, and responsive behavior.

This component is built completely using pure HTML and CSS without JavaScript or external frameworks.


## ✨ Features

- ✨ Shimmer sweep loading effect
- 🎨 Modern SaaS showcase drawer design
- 💎 Glassmorphism UI styling
- 🚀 Pure HTML and CSS implementation
- 🔄 Smooth hover interactions
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- ⚡ Lightweight and framework-free


## 📂 Folder Structure


css-shimmer-sweep-drawer-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in a browser.

2. View the animated SaaS drawer component.

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
✨ Animation Details

The drawer uses a shimmer sweep effect:

.drawer::before {

    content:"";

    position:absolute;

    left:-120%;

    background:
    linear-gradient(
        120deg,
        transparent,
        rgba(255,255,255,.35),
        transparent
    );

    animation:
    shimmer 2.5s infinite;

}

The effect creates a moving highlight across the drawer surface.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transitions
Flexbox
Responsive Design
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This reduces animations for users who prefer minimal motion.

📱 Responsive Support

The drawer adapts across:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.