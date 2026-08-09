# CSS Fade-In Stepper for Fintech Dashboard Layouts

A modern fintech dashboard stepper component featuring smooth fade-in entrance animations, glassmorphism cards, responsive design, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🌫️ Smooth fade-in entrance animation
- 💎 Glassmorphism dashboard cards
- 📊 Fintech dashboard inspired design
- 🎨 Modern gradient styling
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript or external dependencies

---

## 📂 Folder Structure


css-fade-in-stepper-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the stylesheet inside your HTML file:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

--primary:#06b6d4;
--secondary:#8b5cf6;
--bg:#050816;
--card:rgba(255,255,255,0.08);
--text:#ffffff;
--muted:#b8c4d9;

}
Customization Options
Variable	Description
--primary	Primary accent color
--secondary	Secondary gradient color
--bg	Background color
--card	Card background
--text	Main text color
--muted	Secondary text color
✨ Animation Details

Each step uses a CSS fade-in keyframe animation.

@keyframes fadeIn {

from {

opacity:0;
filter:blur(12px);
transform:translateY(50px);

}

to {

opacity:1;
filter:blur(0);
transform:translateY(0);

}

}

Animation includes:

Opacity transition
Blur removal effect
Vertical entrance movement
Sequential step delays
📱 Responsive Design

The component adapts to:

Desktop screens
Tablet devices
Mobile layouts

On smaller screens, step cards automatically stack vertically.

♿ Accessibility

The component supports users who prefer reduced motion.

@media(prefers-reduced-motion:reduce)

Animations are minimized to provide a comfortable browsing experience.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.