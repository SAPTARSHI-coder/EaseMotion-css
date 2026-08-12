# CSS Magnetic Pull Tabs for Product Catalog Layouts

A modern pure CSS animated tab component designed for product catalog interfaces.

The **CSS Magnetic Pull Tabs** component creates a smooth magnetic pull interaction where tabs attract attention using hover movement, scaling effects, glow transitions, and smooth motion without any JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Magnetic pull hover interaction
- Smooth scale and lift animation
- Glassmorphism UI design
- Product catalog inspired layout
- Responsive across all devices
- CSS custom property controls
- Keyboard-friendly button elements
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-magnetic-pull-tabs/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create tabs using the provided structure:

<button class="tab active">
    <span class="icon">🛒</span>
    Electronics
</button>

The component automatically provides magnetic hover effects.

🎨 CSS Custom Properties

The animation behaviour can be customized using CSS variables.

:root {

    --pull-distance: 12px;

    --scale-factor: 1.08;

    --motion-time: 0.45s;

}
Available Parameters
Variable	Description
--pull-distance	Controls magnetic upward movement
--scale-factor	Controls hover scaling intensity
--motion-time	Controls animation speed
⚡ Animation Details
Magnetic Pull Effect

When users hover over a tab:

Tab moves upward
Scale increases slightly
Border glow appears
Light sweep animation activates
Active Tab State

The selected tab receives:

Gradient background
Glow shadow
Strong visual feedback
Product Card Interaction

Product cards include:

Smooth elevation animation
Glassmorphism effect
Responsive layout behaviour
📱 Responsive Design

The component adapts automatically:

Desktop
Horizontal tab navigation
Multi-column product cards
Tablet
Flexible wrapping layout
Balanced spacing
Mobile
Vertical tab stacking
Full-width buttons
Optimized readability
♿ Accessibility

The component supports reduced motion preferences.

@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}

Benefits:

Better experience for motion-sensitive users
Maintains usability without animations
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Transitions
CSS Grid
Flexbox
Media Queries
Backdrop Filter
✅ Advantages
Lightweight implementation
No external dependencies
Easy customization
Modern UI animation pattern
Reusable product catalog component
Framework independent
🌐 Browser Support

Works in modern browsers supporting:

CSS Variables
CSS Grid
CSS Flexbox
CSS Transitions
Backdrop Filter
📌 Component Details

Component:

CSS Magnetic Pull Tabs

Category:

Product Catalog UI Animation

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.