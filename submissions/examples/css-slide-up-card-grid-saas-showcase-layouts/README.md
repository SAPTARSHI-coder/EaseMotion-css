# CSS Slide-Up Card Grid for SaaS Showcase Layouts

A modern SaaS showcase card grid featuring smooth slide-up entrance animations, glassmorphism styling, hover elevation effects, and a pure CSS implementation.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⬆️ Slide-up entrance animation
- 🎨 Modern SaaS showcase design
- 💎 Glassmorphism cards
- ✨ Hover lift interaction
- 🌈 Gradient badges
- 📱 Responsive card grid
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-slide-up-card-grid-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the CSS file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external frameworks or libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root {

--bg: #050816;
--card: #111827;
--primary: #06b6d4;
--secondary: #8b5cf6;
--text: #ffffff;

}
Variables
Variable	Description
--bg	Background color
--card	Card surface color
--primary	Primary accent
--secondary	Gradient accent
--text	Text color
⬆️ Animation Details

Cards appear using a smooth slide-up animation.

@keyframes slideUp {

from {

opacity:0;
transform:translateY(80px);

}

to {

opacity:1;
transform:translateY(0);

}

}

Animation includes:

Fade entrance
Vertical movement
Staggered card reveal
Smooth hover transition
📱 Responsive Support

The grid adapts to:

Desktop
Tablet
Mobile devices

Cards automatically rearrange based on screen size.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are disabled for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transforms
Responsive Design
📜 License

Contribution created for EaseMotion CSS open-source animation examples.