# CSS Blur-Entrance Carousel for Gaming Hub Layouts

A pure CSS animated carousel component created for Gaming Hub interfaces with a smooth blur and fade entrance animation effect.

This component uses only HTML and CSS to create modern gaming UI interactions without any JavaScript dependency.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript required
- Smooth blur entrance animation
- Fade-in transition effect
- Gaming Hub inspired design
- Responsive carousel layout
- CSS custom properties support
- Keyboard accessible controls
- prefers-reduced-motion support
- Lightweight performance-focused animation


## 📁 Project Structure


css-blur-entrance-carousel-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create carousel items:

<input 
type="radio" 
name="carousel" 
id="card1" 
checked>

<article class="game-card">

    <h2>
        Cyber Arena
    </h2>

    <p>
        Experience futuristic gaming worlds.
    </p>

</article>
🎨 CSS Custom Properties

Customize animation values:

:root {

    --blur-strength: 12px;

    --animation-speed: .8s;

    --card-radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--blur-strength	Controls blur intensity during entrance
--animation-speed	Controls animation duration
--card-radius	Controls card corner rounding
🎮 Animation Details

The carousel uses:

CSS filter: blur()
CSS opacity transitions
CSS transform animations
Keyframe based entrance effects
📱 Responsive Behaviour
Desktop
Large gaming cards
Smooth blur reveal animation
Tablet
Adaptive card sizing
Flexible spacing
Mobile
Compact layout
Touch-friendly navigation
♿ Accessibility

Supported features:

Semantic HTML structure
Native keyboard controls
Reduced motion preferences
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
CSS Filter
Flexbox
Media Queries
✅ Advantages
No external libraries
Framework independent
Lightweight component
Easy customization
Reusable gaming UI pattern
🌐 Browser Support

Works with modern browsers supporting:

CSS Variables
CSS Transform
CSS Filter
CSS Animation
Flexbox
📜 License

Created for the EaseMotion CSS examples collection.

Licensed under MIT License.