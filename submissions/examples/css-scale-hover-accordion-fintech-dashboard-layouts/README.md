# CSS Scale-Hover Accordion for Fintech Dashboard Layouts

A modern fintech dashboard accordion component featuring smooth scale-hover interactions, glassmorphism styling, and responsive behavior using pure HTML and CSS.

Part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🔍 Smooth scale-hover accordion animation
- 💎 Glassmorphism fintech card design
- 🎨 Modern dashboard-inspired layout
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive design
- ♿ Supports prefers-reduced-motion
- 🚀 No JavaScript or external dependencies

## 📂 Folder Structure


css-scale-hover-accordion-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No frameworks or JavaScript are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {
  --primary: #06b6d4;
  --secondary: #6366f1;
  --background: #07111f;
  --card: rgba(255,255,255,0.08);
  --text: #ffffff;
}
Customization
Variable	Purpose
--primary	Main accent color
--secondary	Gradient highlight
--background	Page background
--card	Card transparency
--text	Text color
✨ Animation Details

The accordion cards use CSS transitions:

transition:
transform .35s ease,
background .35s ease,
box-shadow .35s ease;

On hover:

Cards smoothly scale upward
Background changes
Shadow depth increases
📱 Responsive Design

The layout adapts automatically for:

Desktop
Tablet
Mobile devices

Mobile view changes cards into a vertically optimized layout.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Users who prefer reduced animations get a simplified experience.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Transitions
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.