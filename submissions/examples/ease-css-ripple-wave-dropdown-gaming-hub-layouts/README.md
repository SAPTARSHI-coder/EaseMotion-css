# CSS Ripple-Wave Dropdown for Gaming Hub Layouts

A modern gaming navigation dropdown component featuring ripple-wave hover effects, animated menu transitions, and a futuristic gaming hub interface.

This component is built completely using pure HTML and CSS without JavaScript or external libraries.


## ✨ Features

- 🎮 Gaming hub navigation design
- 🌊 Ripple-wave dropdown animation
- ✨ Smooth hover transitions
- 💎 Glassmorphism interface
- ⚡ Pure HTML and CSS implementation
- 🌈 Gradient gaming theme
- 📱 Fully responsive layout
- 🔄 CSS transform animations
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


ease-css-ripple-wave-dropdown-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` directly in your browser.

2. Hover over navigation buttons to reveal animated dropdown menus.

3. Customize CSS variables inside `style.css` to match your gaming theme.


## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

```css
:root {

    --bg:#020617;
    --card:#111827;
    --primary:#22d3ee;
    --secondary:#a855f7;
    --accent:#ec4899;
    --text:#f8fafc;
    --muted:#94a3b8;

}

You can modify these values to create different themes.

🌊 Animation Details

The ripple-wave effect is created using CSS pseudo-elements.

Example:

.drop-btn::before {

    content:"";

    border-radius:50%;

    transition:.6s;

}

On hover, the ripple expands smoothly to create a wave interaction.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Flexbox
CSS Gradients
CSS Transforms
CSS Transitions
Responsive Design
♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

📱 Responsive Behavior

The dropdown adapts across:

Desktop screens
Tablets
Mobile devices
📜 License

Part of the EaseMotion CSS animation showcase collection.