# CSS Spring Physics Tabs for Neumorphic Soft Layouts

A modern pure CSS animated tabs component designed for neumorphic soft interface layouts.

The **CSS Spring Physics Tabs** provides smooth spring-based interactions, soft UI styling, responsive tab navigation, and customizable animation controls using only HTML and CSS.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Smooth spring physics animation
- Neumorphic soft UI design
- Responsive tab navigation
- Radio button based switching
- CSS custom property support
- Keyboard focus support
- Lightweight animations
- prefers-reduced-motion support


## 📁 Project Structure


css-spring-physics-tabs-neumorphic-soft-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a tab:

<input type="radio" id="design" name="tab" checked>

<label for="design">
    Design
</label>

Create tab content:

<article class="panel">

    <h2>
        Soft Design
    </h2>

    <p>
        Create elegant neumorphic interfaces.
    </p>

</article>
🎨 CSS Custom Properties

Animation values can be customized using CSS variables.

:root {

    --spring-time: .65s;

    --spring-scale: 1.08;

    --radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--spring-time	Controls spring animation duration
--spring-scale	Controls bounce scale intensity
--radius	Controls panel corner radius
⚡ Animation Details
Spring Physics Interaction

The component provides:

Natural bounce movement
Smooth scale transition
Elastic tab activation
Soft interface feedback
Neumorphic Styling

Includes:

Raised soft surfaces
Inner shadow active states
Minimal UI appearance
Smooth gradients
📱 Responsive Behaviour
Desktop
Horizontal tab navigation
Large content panels
Tablet
Adaptive spacing
Flexible layout
Mobile
Vertical tab arrangement
Touch-friendly controls
♿ Accessibility

Built with accessibility support:

Semantic HTML structure
Keyboard focus indicators
Native radio controls
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
Lightweight animation component
Easy customization
Modern neumorphic UI pattern
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

CSS Spring Physics Tabs

Category:

Neumorphic Soft UI Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.