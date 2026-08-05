# CSS Horizontal Roll Tabs for Glassmorphism UI Layouts

A modern pure CSS animated tab component designed for glassmorphism interface layouts.

The **CSS Horizontal Roll Tabs** component creates a smooth horizontal rolling interaction using CSS transforms, transitions, glass effects, and customizable CSS variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Smooth horizontal roll animation
- Glassmorphism UI design
- Responsive tab navigation
- Shimmer hover effect
- Modern blurred glass cards
- CSS custom property support
- Lightweight animation performance
- Keyboard accessible focus states
- prefers-reduced-motion support


## 📁 Project Structure


css-horizontal-roll-tabs-glassmorphism/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a glass tab:

<a href="#" class="tab active">

    <span class="icon">
        ✨
    </span>

    Overview

</a>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --roll-distance: 30px;

    --animation-time: .45s;

    --hover-scale: 1.06;

}
⚙️ Custom Parameters
Variable	Description
--roll-distance	Controls horizontal movement distance
--animation-time	Controls transition speed
--hover-scale	Controls hover scaling effect
⚡ Animation Details
Horizontal Roll Interaction

The component provides:

Smooth horizontal movement
Glass shimmer sweep effect
Scale transformation
Glow shadow feedback
Interactive hover response
Glass UI Styling

Includes:

Transparent glass surfaces
Backdrop blur effects
Soft borders
Gradient highlights
📱 Responsive Behaviour
Desktop
Horizontal tab navigation
Full rolling interaction effects
Tablet
Flexible wrapping layout
Optimized spacing
Mobile
Vertical tab arrangement
Touch-friendly controls
♿ Accessibility

The component supports accessible interactions.

Features:

Semantic navigation elements
Keyboard focus visibility
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
Modern glassmorphism pattern
Reusable SaaS/interface component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
Backdrop Filter
📌 Component Information

Component:

CSS Horizontal Roll Tabs

Category:

Glassmorphism Interface Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.