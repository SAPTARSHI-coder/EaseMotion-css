# CSS Zoom-In Popover for SaaS Showcase Layouts

A modern SaaS showcase popover component featuring a smooth zoom-in entrance animation, glassmorphism styling, and responsive behavior.

Built completely with pure HTML and CSS without JavaScript or external libraries.


## ✨ Features

- 🔍 Smooth zoom-in entrance animation
- ✨ CSS transform based reveal effect
- 💎 Glassmorphism popover design
- 🎨 Modern SaaS showcase UI
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-zoom-in-popover-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over the trigger button.

3. The popover appears with a smooth zoom-in animation.


## 🎨 CSS Custom Properties

```css
:root {

    --bg: #020617;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    --text: #f8fafc;

}
✨ Animation Details

The zoom-in effect is created using CSS transforms:

.popover {

    transform:
    translateX(-50%)
    scale(.6);

    opacity:0;

}


.popover-wrapper:hover .popover {

    transform:
    translateX(-50%)
    scale(1);

    opacity:1;

}

The popover smoothly scales from a smaller size into its active state.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transforms
CSS Transitions
Responsive Layout
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