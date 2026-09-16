# CSS Glitch-Flicker Tabs for Product Catalog Layouts

A modern pure CSS/HTML animated tab component featuring glitch effects, flickering transitions, and futuristic product showcase styling.

## ✨ Features

- Pure HTML + CSS implementation
- No JavaScript required
- Glitch flicker heading animation
- Smooth tab switching animation
- Neon cyber-style UI
- Responsive design for desktop, tablet, and mobile
- Hardware-friendly CSS animations
- Accessibility support with `prefers-reduced-motion`

---

## 📂 Structure
glitch-flicker-tabs-product-catalog/
│
├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

1. Copy the folder into:


submissions/examples/


2. Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
Create tab inputs and connect labels using matching IDs.

Example:

<input type="radio" id="tab1" name="tabs" checked>

<label for="tab1">
    Product
</label>

The active tab content will automatically display using CSS selectors.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root {

    --bg: #070714;
    --card: #111126;
    --primary: #00f7ff;
    --secondary: #ff00c8;
    --text: #ffffff;
    --muted: #b8b8c9;

}
Variable Description
Variable	Purpose
--bg	Main background color
--card	Card background
--primary	Main neon accent
--secondary	Secondary glitch color
--text	Primary text color
--muted	Secondary text color
🎭 Animation Details
Glitch Title

Uses pseudo-elements:

::before
::after

to create RGB split glitch layers.

Animations:

glitchTop
glitchBottom
Flicker Effect

The heading uses:

@keyframes flicker

to create an electronic screen flickering effect.

Tab Transition

Active panels animate using:

@keyframes glitchEnter

which creates:

sliding motion
skew distortion
fade-in effect
♿ Accessibility

Reduced motion is supported:

@media(prefers-reduced-motion: reduce)

Animations are minimized for users who prefer less motion.

📱 Responsive Support

Optimized for:

Desktop screens
Tablets
Mobile devices

Mobile layout automatically converts tabs into full-width buttons.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframe Animations
Modern Layout Techniques
📌 Browser Support

Works on modern browsers supporting:

CSS Variables
Flexbox
CSS Animations
Backdrop Filter
Author

Created for EaseMotion CSS
as part of GSSoC 2026 Contribution 🚀