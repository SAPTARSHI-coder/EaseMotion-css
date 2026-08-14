# CSS Morph-Glow Modal for Product Catalog Layouts

<<<<<<< Updated upstream
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
=======
A modern **pure HTML & CSS** product catalog featuring a **Morph-Glow Modal** interaction. Each product card opens a beautifully animated modal with glowing effects, product details, pricing, and action buttons—without using JavaScript.

---

## ✨ Features

- Pure HTML5 & CSS3
- Morphing modal animation using `:target`
- Glowing visual effects
- Modern product catalog layout
- Responsive design
- CSS Custom Properties
- Accessible with `prefers-reduced-motion`
- No JavaScript required
- Lightweight and reusable

---

## 📂 Folder Structure

```
submissions/
└── examples/
    └── 62235-morph-glow-modal-product-catalog/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## 🚀 Usage

1. Navigate to:

```
submissions/examples/62235-morph-glow-modal-product-catalog/
```

2. Open `demo.html` in your browser.

3. Click **Quick View** on any product card to open the animated Morph-Glow modal.

---

## 🎨 CSS Custom Properties

```css
:root{
    --bg:#0f172a;
    --surface:#1e293b;
    --surface-light:#334155;
    --primary:#8b5cf6;
    --secondary:#06b6d4;
    --text:#f8fafc;
    --muted:#cbd5e1;
    --radius:22px;
    --shadow:0 25px 60px rgba(0,0,0,.35);
    --transition:.45s ease;
}
```

Customize these variables to change:

- Theme colors
- Glow effects
- Border radius
- Shadows
- Animation speed
- Typography

---

## 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile devices

The modal automatically switches to a single-column layout on smaller screens.

---

## ♿ Accessibility

Supports:

- `prefers-reduced-motion`
- Semantic HTML5
- Keyboard-friendly navigation
- Responsive typography

---

## 💡 Highlights

- Morphing modal animation
- CSS glow effects
- Product preview modal
- Smooth transitions
- Product badges
- Gradient buttons
- Modern glassmorphism UI
- Pure CSS implementation

---

## 🛠 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Grid
- Flexbox
- CSS Transitions
- Media Queries

---

## 📄 License

Created for the **EaseMotion CSS** project following the repository contribution guidelines.
>>>>>>> Stashed changes
