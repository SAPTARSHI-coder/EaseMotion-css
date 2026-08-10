# CSS Fade-In Feature Grid for Gaming Hub Layouts

A modern gaming dashboard feature grid with smooth fade-in entrance animations, glassmorphism cards, hover effects, and a fully responsive pure CSS implementation.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming dashboard inspired UI
- 🌟 Smooth fade-in entrance animation
- ⬆️ Vertical reveal effect
- 💎 Glassmorphism feature cards
- ✨ Hover elevation interaction
- 🌈 Gradient glow effects
- 📱 Responsive grid layout
- ♿ prefers-reduced-motion support
- 🚫 Pure HTML and CSS

---

## 📂 Folder Structure
css-fade-in-feature-grid-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet in your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external dependencies are required.

🎨 CSS Custom Properties

The component uses customizable CSS variables:

:root {

--bg: #080b1a;
--card: #151b35;
--primary: #7c3aed;
--secondary: #ec4899;
--text: #ffffff;

}
Variables
Variable	Description
--bg	Main background color
--card	Card background
--primary	Primary accent color
--secondary	Glow effect color
--text	Text color
🌟 Animation Details

Feature cards use CSS keyframe animations.

Initial state:

opacity:0;
transform:translateY(40px);

Animated state:

opacity:1;
transform:translateY(0);

Each card has a staggered animation delay for a smooth appearance sequence.

📱 Responsive Support

The grid adapts automatically:

Desktop → 3 column layout
Tablet → 2 column layout
Mobile → Single column layout
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations and transitions are disabled for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Grid
CSS Variables
CSS Animations
CSS Transforms
Responsive Design
📜 License

Created as an open-source contribution for EaseMotion CSS.