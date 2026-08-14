# CSS Slide-Up Popover for SaaS Showcase Layouts

A modern SaaS showcase component featuring smooth slide-up popover animations, interactive product cards, glassmorphism styling, and a pure CSS implementation.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ⬆️ Smooth slide-up popover animation
- 💎 Glassmorphism card design
- ✨ Hover-based interaction
- 🌈 Gradient popover styling
- 🚀 SaaS product showcase layout
- 📱 Responsive grid system
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-slide-up-popover-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external frameworks or JavaScript dependencies are required.

🎨 CSS Custom Properties

The component uses CSS variables:

:root {

--bg:#060817;
--card:#111827;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Variables
Variable	Description
--bg	Main background
--card	Card surface
--primary	Primary accent color
--secondary	Gradient color
--text	Text color
⬆️ Animation Details

The popover starts hidden and slides upward when the card is hovered.

Initial state:

opacity:0;
transform:translate(-50%,70px);

Hover state:

opacity:1;
transform:translate(-50%,0);

The animation uses CSS transitions with a smooth cubic-bezier timing function.

📱 Responsive Support

The layout adapts automatically:

Desktop → 4 column grid
Tablet → 2 column grid
Mobile → 1 column grid
♿ Accessibility

Supports reduced motion preferences:

@media(prefers-reduced-motion:reduce)

Animations and transitions are disabled for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transforms
CSS Transitions
Backdrop Filter
📜 License

Created as an open-source contribution for EaseMotion CSS.