# CSS Elastic-Slide Navbar for Accessible Web Layouts

A modern pure CSS animated navigation component designed for accessible web interfaces.

The **CSS Elastic-Slide Navbar** creates a smooth elastic sliding interaction using CSS transitions, transform animations, responsive layouts, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Elastic slide hover animation
- Smooth navigation transitions
- Accessible navigation structure
- Responsive navbar layout
- Glassmorphism UI styling
- CSS custom property controls
- Lightweight performance
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-elastic-slide-navbar/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create an elastic navigation item:

<a href="#" class="nav-item active">

    <span>
        🏠
    </span>

    Home

</a>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --elastic-distance: 18px;

    --elastic-scale: 1.06;

    --animation-time: .45s;

}
⚙️ Custom Parameters
Variable	Description
--elastic-distance	Controls upward slide movement
--elastic-scale	Controls hover scaling
--animation-time	Controls transition speed
⚡ Animation Details
Elastic-Slide Interaction

The navbar provides:

Smooth elastic movement
Hover elevation effect
Scale feedback
Glow highlighting
Natural transition timing
Active Navigation State

Active links include:

Gradient background
Enhanced border
Clear navigation visibility
📱 Responsive Behaviour
Desktop
Horizontal navigation layout
Full animation experience
Tablet
Flexible wrapping navigation
Optimized spacing
Mobile
Vertical navigation layout
Touch-friendly links
♿ Accessibility

The component supports accessible navigation.

Features:

Semantic anchor elements
Keyboard focus indicators
Reduced motion support
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
CSS Transform
CSS Transition
Flexbox
Media Queries
Backdrop Filter
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Accessible by default
Reusable navbar pattern
🌐 Browser Support

Works with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
Backdrop Filter
📌 Component Information

Component:

CSS Elastic-Slide Navbar

Category:

Accessible Web Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.