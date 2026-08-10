# CSS Rotate-Fade Tabs for Product Catalog Layouts

A modern pure CSS/HTML animated tab component designed for product catalog layouts.

This example demonstrates smooth rotate and fade transitions between product categories without using JavaScript or external libraries.

## ✨ Features

- Pure HTML and CSS implementation
- Smooth rotate-fade tab switching animation
- Responsive design for desktop, tablet, and mobile
- Modern product catalog UI
- Lightweight and performant animations
- Accessible reduced-motion support

## 📁 Structure
rotate-fade-tabs-product-catalog/
│
├── demo.html
├── style.css
└── README.md


## 🚀 Usage

1. Copy the folder into:


submissions/examples/


2. Open:


demo.html


in your browser.

No additional dependencies are required.

## 🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

```css
:root {
    --bg: #0f172a;
    --card: #1e293b;
    --primary: #38bdf8;
    --text: #f8fafc;
    --muted: #cbd5e1;
}

You can modify these values to change the theme.

⚙️ Animation Details

The component uses:

transform: rotate()
opacity transitions
CSS keyframe animations
Smooth hover interactions

All animations are handled completely through CSS.

♿ Accessibility

The component supports:

@media(prefers-reduced-motion: reduce)

Users who prefer reduced motion will experience minimized animations.

🛠 Technologies Used
HTML5
CSS3
CSS Animations
CSS Transitions
📌 Browser Support

Works on modern browsers including:

Chrome
Edge
Firefox
Safari
👨‍💻 Author

Created as a contribution for EaseMotion CSS under GSSoC'26.