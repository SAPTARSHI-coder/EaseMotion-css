# CSS Blur-Entrance Navbar for Fintech Dashboard Layouts

A modern fintech dashboard navigation component featuring a smooth blur entrance animation, glassmorphism UI, animated navigation links, and pure CSS implementation.

Created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌫️ Blur entrance navbar animation
- 💎 Glassmorphism navigation design
- 🎨 Gradient branding style
- ✨ Animated navigation underline
- 📊 Fintech dashboard hero section
- 📱 Responsive layout support
- ♿ prefers-reduced-motion accessibility
- 🚫 Zero JavaScript dependency

---

## 📂 Folder Structure


css-blur-entrance-navbar-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or frameworks are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root {

--bg: #050816;
--card: #111827;
--primary: #06b6d4;
--secondary: #8b5cf6;
--text: #ffffff;

}
Variables
Variable	Description
--bg	Dashboard background
--card	Glass card background
--primary	Primary accent color
--secondary	Secondary gradient color
--text	Main text color
🌫️ Animation Details

The navbar uses a blur entrance keyframe animation.

@keyframes blurEntrance {

from {

opacity:0;
transform:
translateY(-50px)
scale(.9);

filter:blur(20px);

}

to {

opacity:1;

transform:
translateY(0)
scale(1);

filter:blur(0);

}

}

Animation includes:

Fade entrance
Blur reduction effect
Scale transition
Smooth movement
📱 Responsive Support

The layout adapts for:

Desktop screens
Tablets
Mobile devices

Navigation automatically adjusts on smaller viewports.

♿ Accessibility

Reduced motion support is provided:

@media(prefers-reduced-motion:reduce)

Animations are disabled for users who prefer minimal motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transforms
Flexbox
Responsive Design
📜 License

Contribution created for EaseMotion CSS open-source examples.