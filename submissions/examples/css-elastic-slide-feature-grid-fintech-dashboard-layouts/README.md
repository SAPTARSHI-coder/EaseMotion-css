# CSS Elastic-Slide Feature Grid for Fintech Dashboard Layouts

A modern fintech dashboard feature grid featuring smooth elastic-slide entrance animations, glassmorphism cards, and responsive design using only HTML and CSS.

Part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🌀 Elastic slide entrance animation
- 💎 Glassmorphism feature cards
- 📊 Fintech dashboard inspired UI
- 🎨 Smooth hover interactions
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion support
- 🚀 No JavaScript required

## 📂 Folder Structure


css-elastic-slide-feature-grid-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in the browser.

🎨 CSS Custom Properties
:root {

--primary:#06b6d4;
--secondary:#6366f1;
--background:#07111f;
--card:rgba(255,255,255,0.08);

}
✨ Animation

The cards use a CSS elastic slide animation:

@keyframes elastic-slide {

from {
 transform:translateX(-80px) scale(.8);
 opacity:0;
}

to {
 transform:translateX(0) scale(1);
 opacity:1;
}

}

The effect combines:

Horizontal movement
Scale transformation
Elastic easing
Opacity transition
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)
🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.