# CSS Spring Physics Tabs for Creative Portfolio Layouts

A modern pure CSS animated tab component designed for creative portfolio websites.

The **CSS Spring Physics Tabs** component provides a smooth elastic interaction experience using CSS transforms, spring-inspired easing, responsive layouts, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Spring physics inspired animation
- Smooth elastic hover movement
- Creative portfolio focused design
- Glassmorphism style interface
- Responsive tab navigation
- CSS custom property support
- Lightweight animations
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-spring-physics-tabs-portfolio/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a portfolio tab:

<button class="tab active">

    <span class="icon">
        🎨
    </span>

    Designs

</button>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --spring-y: -14px;

    --spring-scale: 1.08;

    --spring-duration: .5s;

}
⚙️ Custom Parameters
Variable	Description
--spring-y	Controls spring movement distance
--spring-scale	Controls hover scaling
--spring-duration	Controls animation speed
⚡ Animation Details
Spring Physics Interaction

The component provides:

Elastic hover movement
Smooth spring easing
Scale feedback
Shimmer highlight effect
Interactive portfolio navigation
Active Tab State

Active tabs include:

Gradient background
Highlighted border
Improved visual focus
📱 Responsive Behaviour
Desktop
Horizontal portfolio navigation
Full animation effects
Tablet
Flexible wrapping layout
Balanced spacing
Mobile
Vertical tab layout
Touch-friendly buttons
♿ Accessibility

The component supports accessible interactions.

Features:

Semantic button elements
Visible keyboard focus
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
CSS Flexbox
Media Queries
Backdrop Filter
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Modern portfolio UI pattern
Reusable animation component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
Backdrop Filter
📌 Component Information

Component:

CSS Spring Physics Tabs

Category:

Creative Portfolio Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.