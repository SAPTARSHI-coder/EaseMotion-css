# CSS Float-Drift Pricing Table for Fintech Dashboard Layouts

A modern fintech pricing table component featuring smooth floating drift animations, glassmorphism cards, and responsive layout built completely with pure HTML and CSS.

Part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🌊 Smooth float-drift animation effect
- 💎 Glassmorphism pricing cards
- ⭐ Highlighted featured pricing plan
- 🎨 Modern fintech dashboard styling
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion accessibility support
- 🚀 No JavaScript or external dependencies

## 📂 Folder Structure


css-float-drift-pricing-table-fintech-dashboard-layouts/

├── demo.html
├── style.css
└── README.md


## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in your browser.

No JavaScript or additional libraries are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {

  --primary: #06b6d4;
  --secondary: #6366f1;
  --background: #07111f;
  --card: rgba(255,255,255,0.08);
  --text: #ffffff;

}
Customization Options
Variable	Description
--primary	Primary accent color
--secondary	Secondary gradient color
--background	Page background
--card	Pricing card background
--text	Text color
✨ Animation Details

Pricing cards use a smooth CSS keyframe animation:

@keyframes float-drift {

  50% {
    transform: translateY(-18px);
  }

}

The animation creates a lightweight floating effect while maintaining performance.

📱 Responsive Design

The pricing table adapts across:

Desktop screens
Tablets
Mobile devices

On smaller screens:

Cards stack vertically
Featured plan scaling is adjusted
Content remains accessible
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Users who prefer reduced motion receive a simplified experience.

🛠 Technologies
HTML5
CSS3
CSS Variables
CSS Keyframes
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.