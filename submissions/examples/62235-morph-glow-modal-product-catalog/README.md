# CSS Morph-Glow Modal for Product Catalog Layouts

A modern pure CSS animated modal component created for the EaseMotion CSS library.

This showcase demonstrates a glowing morphing modal effect suitable for product catalog layouts.

## ✨ Features

- Pure HTML and CSS implementation
- Smooth morphing border animation
- Dynamic glow effect using CSS blur
- Responsive product card layout
- Lightweight and framework-free
- Smooth hover interactions
- Mobile friendly design
- Accessibility support with `prefers-reduced-motion`

## 📂 Files


62235-morph-glow-modal-product-catalog/
│
├── demo.html
├── style.css
└── README.md


## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Add the modal HTML structure from demo.html into your project.

The animation works automatically using CSS keyframes.

🎨 CSS Custom Properties

You can customize the appearance by modifying:

background
border-radius
box-shadow
animation-duration

Example:

.modal-content {
    border-radius: 35px;
    box-shadow: 0 0 40px rgba(56,189,248,.5);
}
⚡ Animations
Morph Glow Animation

The modal smoothly changes:

Border radius
Scale
Glow intensity

using CSS keyframes.

Floating Glow

The background glow moves continuously to create a modern animated effect.

♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion:reduce){
    *{
        animation:none;
        transition:none;
    }
}

Users who prefer reduced motion will see a static version.

🛠 Technologies
HTML5
CSS3
Keyframe Animations
Responsive CSS
📜 License

Part of the EaseMotion CSS open-source contribution project.