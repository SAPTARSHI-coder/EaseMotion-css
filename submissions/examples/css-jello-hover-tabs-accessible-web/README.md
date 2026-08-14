# CSS Jello-Hover Tabs for Accessible Web Layouts

A clean and accessible pure CSS animated tab component designed for modern web interfaces.

The **CSS Jello-Hover Tabs** component provides a smooth elastic hover interaction using CSS keyframes, transforms, transitions, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Smooth jello hover animation
- Accessible web interface design
- Keyboard navigation support
- Responsive tab layout
- CSS custom property support
- Lightweight animation performance
- Focus-visible accessibility states
- prefers-reduced-motion support


## 📁 Project Structure


css-jello-hover-tabs-accessible-web/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create an accessible tab:

<a href="#" class="tab active">

    <span class="icon">
        🏠
    </span>

    Home

</a>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --jello-intensity: 1.08;

    --animation-time: .5s;

}
⚙️ Custom Parameters
Variable	Description
--jello-intensity	Controls elastic hover strength
--animation-time	Controls transition timing
⚡ Animation Details
Jello Hover Effect

The component provides:

Elastic bounce animation
Smooth scaling movement
Clear hover feedback
Active navigation state
Improved interaction experience
Accessibility Focus

Includes:

Semantic navigation structure
Keyboard focus indicators
Reduced motion support
Responsive interaction
📱 Responsive Behaviour
Desktop
Horizontal tab layout
Full hover animation
Tablet
Flexible wrapping tabs
Optimized spacing
Mobile
Vertical navigation layout
Touch-friendly controls
♿ Accessibility

Built with accessibility best practices:

Semantic HTML elements
Visible keyboard focus state
Motion reduction compatibility
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
Flexbox
Media Queries
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Accessible UI pattern
Reusable animation component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Animation
CSS Transform
CSS Transition
Flexbox
📌 Component Information

Component:

CSS Jello-Hover Tabs

Category:

Accessible Web Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.