# CSS Morph-Glow Progress Bar for Fintech Dashboard Layouts

A modern fintech dashboard progress bar component featuring smooth morph-glow animations, gradient effects, glassmorphism styling, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌈 Smooth morph-glow progress animation
- ✨ Animated gradient progress fill
- 💎 Glassmorphism dashboard cards
- 📊 Fintech dashboard inspired layout
- ⚡ Pure HTML and CSS implementation
- 📱 Responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

---

## 📂 Folder Structure


css-morph-glow-progress-bar-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

  --primary: #06b6d4;
  --secondary: #8b5cf6;
  --background: #050816;
  --card: rgba(255,255,255,0.08);
  --text: #ffffff;

}
Customization
Variable	Description
--primary	Main progress color
--secondary	Glow gradient color
--background	Dashboard background
--card	Card glass effect
--text	Primary text color
✨ Animation Details

The progress bar uses CSS keyframe animations:

@keyframes morph-glow {

from {

box-shadow:
0 0 10px var(--primary);

transform:scaleX(.98);

}

to {

box-shadow:
0 0 35px var(--secondary);

transform:scaleX(1);

}

}

Animation effects include:

Dynamic glow pulse
Smooth scaling
Gradient shine movement
Entry animation blur removal
📱 Responsive Design

The layout supports:

Desktop screens
Tablets
Mobile devices

Cards and statistics automatically adjust for smaller screens.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This provides a better experience for users who prefer limited animations.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.