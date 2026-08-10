# CSS Fade-In Card Grid for SaaS Showcase Layouts

A modern SaaS feature card grid component with smooth fade-in animations, responsive layout, and a clean glassmorphism inspired design.

This component is built completely with pure HTML and CSS without JavaScript or external libraries.


## ✨ Features

- 🌅 Smooth fade-in card animations
- 🎨 Modern SaaS showcase layout
- 💎 Glassmorphism card styling
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive grid system
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-fade-in-card-grid-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. View the animated SaaS feature cards.

3. Customize colors, spacing, and animations inside `style.css`.


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

Cards appear using a CSS fade-in animation:

@keyframes fadeCard {

    from {

        opacity: 0;

        transform:
        translateY(40px);

    }


    to {

        opacity: 1;

        transform:
        translateY(0);

    }

}

Each card includes a small delay to create a smooth staggered reveal effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transitions
Responsive Design
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This minimizes animations for users who prefer reduced motion.

📱 Responsive Support

The card grid adapts across:

Desktop
Tablet
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.