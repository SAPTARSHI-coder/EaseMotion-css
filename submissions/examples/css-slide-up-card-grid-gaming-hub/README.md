# CSS Slide-Up Card Grid for Gaming Hub Layouts

A modern pure CSS animated card grid component designed for gaming hub interfaces.

The **CSS Slide-Up Card Grid** provides smooth slide-up entrance animations, hover interactions, responsive grid layouts, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Smooth slide-up entrance animation
- Gaming hub inspired UI design
- Responsive card grid layout
- Staggered card animations
- Hover elevation effects
- CSS custom property support
- Lightweight animation performance
- prefers-reduced-motion support


## 📁 Project Structure


css-slide-up-card-grid-gaming-hub/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a gaming card:

<article class="game-card">

    <div class="card-icon">
        🎮
    </div>

    <h2>
        Battle Arena
    </h2>

    <p>
        Experience competitive gaming.
    </p>

    <button>
        Play Now
    </button>

</article>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --slide-distance: 40px;

    --animation-time: .6s;

}
⚙️ Custom Parameters
Variable	Description
--slide-distance	Controls slide-up movement distance
--animation-time	Controls entrance animation speed
⚡ Animation Details
Slide-Up Interaction

The component provides:

Smooth upward entrance animation
Staggered card appearance
Hover lift effect
Interactive gaming experience
Gaming Hub Styling

Includes:

Dark gaming theme
Gradient highlights
Modern card design
Responsive layouts
📱 Responsive Behaviour
Desktop
Multi-column card grid
Full animation effects
Tablet
Adaptive grid layout
Optimized spacing
Mobile
Single-column card layout
Touch-friendly controls
♿ Accessibility

Built with accessibility support:

Semantic HTML elements
Keyboard focus states
Reduced motion compatibility
@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Keyframes
CSS Transform
CSS Transition
Grid Layout
Media Queries
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Modern gaming UI pattern
Reusable CSS animation
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Animation
CSS Grid
CSS Transform
Flexbox
📌 Component Information

Component:

CSS Slide-Up Card Grid

Category:

Gaming Hub Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.