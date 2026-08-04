# CSS Float-Drift Carousel for Gaming Hub Layouts

A modern pure CSS animated carousel component designed for gaming hub interfaces.

The **CSS Float-Drift Carousel** provides smooth floating motion effects, responsive card layouts, hover interactions, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Smooth float-drift animation
- Gaming hub inspired UI design
- Responsive carousel card layout
- Continuous floating motion
- Hover pause interaction
- CSS custom property support
- Lightweight animation performance
- prefers-reduced-motion support


## 📁 Project Structure


css-float-drift-carousel-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a gaming carousel card:

<article class="game-card">

    <div class="game-icon">
        🎮
    </div>

    <h2>
        Cyber Arena
    </h2>

    <p>
        Enter futuristic battles.
    </p>

    <button>
        Play
    </button>

</article>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --drift-distance: 18px;

    --animation-speed: 4s;

}
⚙️ Custom Parameters
Variable	Description
--drift-distance	Controls floating movement distance
--animation-speed	Controls drift animation duration
⚡ Animation Details
Float-Drift Interaction

The component provides:

Smooth vertical floating motion
Continuous carousel movement
Hover elevation effect
Animation pause on interaction
Dynamic gaming card experience
Gaming Hub Styling

Includes:

Dark futuristic theme
Gradient highlights
Modern game cards
Responsive grid layout
📱 Responsive Behaviour
Desktop
Multi-card grid layout
Full floating animations
Tablet
Adaptive card arrangement
Optimized spacing
Mobile
Single-column cards
Touch-friendly controls
♿ Accessibility

Built with accessibility support:

Semantic HTML structure
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
CSS Grid
Media Queries
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Modern gaming UI animation
Reusable CSS component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Animation
CSS Transform
CSS Grid
Flexbox
📌 Component Information

Component:

CSS Float-Drift Carousel

Category:

Gaming Hub Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.