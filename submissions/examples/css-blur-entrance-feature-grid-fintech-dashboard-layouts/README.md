# CSS Blur-Entrance Feature Grid for Fintech Dashboard Layouts

A modern fintech dashboard feature grid featuring smooth blur-entrance animations, glassmorphism cards, and responsive design built completely with pure HTML and CSS.

Part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🌫️ Smooth blur-entrance animation
- 💎 Glassmorphism feature cards
- 📊 Fintech dashboard inspired layout
- 🎨 Modern animated feature grid
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript or external dependencies

## 📂 Folder Structure


css-blur-entrance-feature-grid-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in your browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root {
  --primary: #06b6d4;
  --secondary: #6366f1;
  --background: #07111f;
  --card: rgba(255,255,255,0.08);
  --text: #ffffff;
}
Customization
Variable	Purpose
--primary	Primary accent color
--secondary	Gradient highlight color
--background	Page background
--card	Card background
--text	Text color
✨ Animation Details

Feature cards use CSS keyframes:

@keyframes blur-entrance {

  from {
    opacity: 0;
    filter: blur(15px);
    transform: translateY(40px) scale(.95);
  }

  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }

}

The animation creates a smooth entrance effect by combining:

Blur reduction
Opacity transition
Scale transformation
Vertical movement
📱 Responsive Design

The layout supports:

Desktop screens
Tablets
Mobile devices

Grid columns automatically adjust according to screen size.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Users who prefer reduced animations receive a simplified experience.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.