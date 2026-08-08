# CSS Spring Physics Tabs for Accessible Web Layouts

A modern pure CSS animated tab component designed for accessible web interfaces.

The **CSS Spring Physics Tabs** component provides a smooth elastic interaction experience using CSS transitions, spring-like easing, responsive layouts, keyboard focus support, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Spring physics inspired animation
- Smooth elastic hover movement
- Accessible keyboard focus support
- Responsive tab layout
- Glass UI styling
- CSS custom property controls
- Lightweight performance
- prefers-reduced-motion support


## 📁 Project Structure


css-spring-physics-tabs/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a spring animated tab:

<button class="tab active">

    <span class="icon">
        🏠
    </span>

    Dashboard

</button>
🎨 CSS Custom Properties

Animation behavior can be customized through CSS variables.

:root {

    --spring-distance: 12px;

    --spring-scale: 1.08;

    --spring-time: .45s;

}
⚙️ Custom Parameters
Variable	Description
--spring-distance	Controls upward spring movement
--spring-scale	Controls hover scaling effect
--spring-time	Controls animation duration
⚡ Animation Details
Spring Physics Interaction

The tabs create a natural spring feeling with:

Elastic hover movement
Smooth transform animation
Scale feedback
Glow highlight effect
Active Tab State

Active tabs include:

Gradient background
Enhanced border visibility
Clear navigation indication
♿ Accessibility

The component supports accessible interaction patterns.

Features:

Keyboard focus visibility
Reduced motion support
Semantic button elements
Clear visual states

Reduced motion support:

@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}
📱 Responsive Behaviour
Desktop
Horizontal tab navigation
Full spring animation
Tablet
Flexible wrapping layout
Balanced spacing
Mobile
Vertical tab arrangement
Touch-friendly controls
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
Accessible by default
Reusable animation pattern
🌐 Browser Support

Works with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
Backdrop Filter
📌 Component Information

Component:

CSS Spring Physics Tabs

Category:

Accessible Web Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.