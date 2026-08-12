# CSS Morph-Glow Pricing Table for Fintech Dashboard Layouts

A modern fintech dashboard pricing component featuring morphing glow effects, animated pricing cards, glassmorphism styling, responsive behavior, and a pure CSS implementation.

Built completely with HTML and CSS without JavaScript or external dependencies.


## ✨ Features

- 🌈 Smooth morph-glow animation effect
- ✨ CSS keyframe based entrance animation
- 💎 Glassmorphism pricing cards
- 💰 Modern fintech pricing dashboard UI
- 🔥 Animated gradient glow effects
- 🔄 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 Lightweight and framework-free


## 📂 Folder Structure


css-morph-glow-pricing-table-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

1. Open `demo.html` in any modern browser.

2. Hover over pricing cards to view interactive effects.

3. Customize pricing plans, colors, and animation timing in `style.css`.


## 🎨 CSS Custom Properties

```css
:root {

    --bg:#020617;
    --primary:#38bdf8;
    --secondary:#8b5cf6;
    --accent:#22c55e;
    --text:#f8fafc;
    --muted:#94a3b8;

}
✨ Animation Details

Pricing cards use CSS animations:

.card {

    animation:

    morphEntrance .9s ease forwards;

}

Glow effects are created using pseudo-elements:

.card::before {

    filter:blur(40px);

    animation:

    glowMorph 4s infinite alternate;

}

The animation includes:

Smooth card entrance
Dynamic glow morphing
Scale transformation
Hover elevation effect
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframe Animations
CSS Transforms
Glassmorphism Design
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