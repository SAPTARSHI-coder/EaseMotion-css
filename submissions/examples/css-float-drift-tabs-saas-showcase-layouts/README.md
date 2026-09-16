# CSS Float-Drift Tabs for SaaS Showcase Layouts

A modern SaaS tab component featuring smooth floating drift animations, glassmorphism styling, and responsive layouts.

Built completely with pure HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌊 Smooth float-drift animation
- ✨ CSS transform based motion effects
- 💎 Glassmorphism tab cards
- 🎨 Modern SaaS showcase interface
- 🔄 Interactive hover animations
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive design
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-float-drift-tabs-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Tabs automatically animate with a smooth floating drift effect.

3. Customize colors, animation speed, and spacing using CSS variables.


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

The floating drift effect is created using CSS keyframes:

.tab {

    animation:

    floatDrift 4s ease-in-out infinite;

}


@keyframes floatDrift {

    0% {

        transform:
        translateY(0px);

    }


    50% {

        transform:
        translateY(-18px);

    }


    100% {

        transform:
        translateY(0px);

    }

}

Each tab uses different animation delays to create a natural floating effect.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
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