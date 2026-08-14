# CSS Rotate-Click Carousel for Creative Portfolio Layouts

A modern pure CSS animated carousel component designed for creative portfolio interfaces.

The **CSS Rotate-Click Carousel** provides an interactive card rotation experience using CSS transforms, smooth transitions, responsive layouts, and customizable animation properties without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Rotate-click interaction effect
- Smooth hover animations
- Active carousel card styling
- Creative portfolio focused design
- Glassmorphism UI appearance
- Responsive grid layout
- CSS custom property support
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-rotate-click-carousel/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a carousel card:

<article class="carousel-card">

    <div class="card-inner">

        <div class="icon">
            🎨
        </div>

        <h2>
            Creative Design
        </h2>

        <p>
            Portfolio description.
        </p>

    </div>

</article>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --rotate-angle: 360deg;

    --rotate-time: 0.7s;

}
⚙️ Custom Parameters
Variable	Description
--rotate-angle	Controls click rotation amount
--rotate-time	Controls rotation speed
⚡ Animation Details
Rotate-Click Interaction

The component provides:

Smooth card rotation
Scale feedback on click
Hover elevation effect
Glow animation
Depth perspective
Active Card State

The active card includes:

Gradient highlight
Enhanced shadow
Visual focus
📱 Responsive Behaviour

The carousel adapts automatically.

Desktop
Multi-column portfolio cards
Large interaction area
Tablet
Flexible card sizing
Balanced spacing
Mobile
Single-column layout
Touch-friendly cards
♿ Accessibility

Supports reduced motion preferences.

@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}

Benefits:

Comfortable experience for motion-sensitive users
Maintains complete content accessibility
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Transform
CSS Perspective
CSS Transitions
Media Queries
Backdrop Filter
✅ Advantages
No JavaScript required
Lightweight implementation
Framework independent
Easy customization
Modern portfolio animation pattern
Reusable component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Grid
CSS Transform
CSS Transitions
Backdrop Filter
📌 Component Information

Component:

CSS Rotate-Click Carousel

Category:

Creative Portfolio Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.