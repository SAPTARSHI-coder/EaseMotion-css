# CSS Blur-Entrance Popover for SaaS Showcase Layouts

A modern pure CSS popover component featuring blur-based entrance animation, smooth scaling, and SaaS-style showcase cards.

Built for the EaseMotion CSS animation collection.

---

## ✨ Features

- 🌫️ Blur entrance animation
- ⬆️ Smooth slide-up reveal
- 🔍 Scale transition effect
- 💎 Glassmorphism UI
- 🎨 Gradient popover design
- 📱 Fully responsive layout
- ♿ Reduced motion accessibility
- 🚫 No JavaScript required

---

## 📂 Structure


css-blur-entrance-popover-saas-showcase-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in a browser.

No frameworks or external libraries are required.

🎨 CSS Variables

The component uses customizable CSS properties:

:root {

--bg:#050816;
--card:#111827;
--primary:#06b6d4;
--secondary:#8b5cf6;
--text:#ffffff;

}
Customization
Variable	Purpose
--bg	Main background
--card	Card surface
--primary	Primary gradient color
--secondary	Secondary gradient color
--text	Text color
🌫️ Animation Details

The popover uses:

opacity transition
blur removal
scale animation
vertical movement

Initial state:

opacity:0;
filter:blur(15px);
transform:translateY(60px) scale(.8);

Hover state:

opacity:1;
filter:blur(0);
transform:translateY(0) scale(1);
📱 Responsive Support

The layout adapts for:

Desktop screens
Tablets
Mobile devices

CSS Grid automatically changes columns according to viewport size.

♿ Accessibility

Supports users who prefer reduced motion:

@media(prefers-reduced-motion:reduce)

All transitions are disabled when reduced motion is enabled.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transforms
CSS Transitions
Backdrop Filter
📜 License

Created as an open-source contribution for EaseMotion CSS.