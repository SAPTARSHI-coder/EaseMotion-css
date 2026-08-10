# CSS Ripple-Wave Pricing Table for Product Catalog Layouts

A modern **pure HTML + CSS Ripple-Wave Pricing Table** created for EaseMotion CSS.

This component adds animated ripple effects, glassmorphism pricing cards, and smooth hover interactions without using JavaScript.

## ✨ Features

- Pure HTML and CSS implementation
- Animated ripple-wave background effect
- Modern glassmorphism pricing cards
- Smooth hover elevation animation
- Responsive layout for desktop, tablet, and mobile
- CSS custom properties for easy customization
- Accessible `prefers-reduced-motion` support

## 📂 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
Create pricing cards using the provided HTML structure:

<article class="price-card">
    <div class="ripple"></div>

    <h2>Starter</h2>

    <div class="price">
        $19<span>/month</span>
    </div>

    <button>
        Get Started
    </button>
</article>
🎨 CSS Custom Properties

You can customize the design by modifying variables inside :root.

:root {

    --bg: #08111f;

    --card: #111c33;

    --primary: #00d9ff;

    --secondary: #7c3aed;

    --text: #ffffff;

    --muted: #b8c1d9;

}
🎞️ Animation Details
Ripple Wave

The ripple effect uses CSS keyframes:

@keyframes rippleMove {

    50% {

        transform: scale(1.8);

    }

}
Hover Interaction

Cards smoothly lift on hover:

.price-card:hover {

    transform: translateY(-15px);

}
♿ Accessibility

The component supports reduced motion preferences:

@media(prefers-reduced-motion: reduce)

Animations are minimized for users who prefer less motion.

🛠 Technologies
HTML5
CSS3
CSS Animations
CSS Variables
Responsive Grid Layout
📌 Issue

Created for:

Enhancement: Add CSS Ripple-Wave Pricing Table for Product Catalog Layouts (#62387)