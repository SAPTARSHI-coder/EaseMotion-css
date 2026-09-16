# CSS Rotate-Fade Stepper for Fintech Dashboard Layouts

A modern fintech dashboard stepper component featuring smooth rotate-fade entrance animations, glassmorphism styling, and responsive behavior built completely with pure HTML and CSS.

Part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🔄 Smooth rotate-fade entrance animation
- 💎 Glassmorphism step cards
- 📊 Fintech dashboard inspired timeline
- 🎨 Modern gradient styling
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive across desktop, tablet, and mobile
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript dependencies

## 📂 Folder Structure


css-rotate-fade-stepper-fintech-dashboard-layouts/

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
  --secondary: #8b5cf6;
  --background: #050816;
  --card: rgba(255,255,255,0.08);
  --text: #ffffff;

}
Customization
Variable	Description
--primary	Primary accent color
--secondary	Secondary gradient color
--background	Page background
--card	Card background
--text	Text color
✨ Animation Details

Steps use a rotate-fade keyframe animation:

@keyframes rotate-fade {

from {
  opacity:0;
  filter:blur(12px);
  transform:
  rotate(-12deg)
  translateY(50px);
}

to {
  opacity:1;
  filter:blur(0);
  transform:
  rotate(0)
  translateY(0);
}

}

The animation combines:

Rotation transition
Blur removal
Vertical movement
Opacity fade
📱 Responsive Design

The stepper adapts to:

Desktop screens
Tablets
Mobile devices

Mobile layouts automatically stack content vertically.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

This provides a simplified experience for users who prefer less animation.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection