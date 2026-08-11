# CSS Magnetic Pull Tabs for Glassmorphism UI Layouts

A modern pure CSS animated tab component designed for glassmorphism-based user interfaces.

The **CSS Magnetic Pull Tabs** component creates a smooth magnetic interaction effect using CSS transforms, glass effects, responsive layouts, and customizable animation variables without JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Magnetic pull hover interaction
- Glassmorphism UI design
- Smooth CSS transitions
- Active tab highlighting
- Responsive layout support
- CSS custom property controls
- Lightweight animation effects
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-magnetic-pull-tabs-glassmorphism/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a magnetic tab:

<button class="tab active">

    <span class="icon">
        🏠
    </span>

    Home

</button>
🎨 CSS Custom Properties

The animation behavior can be customized using CSS variables.

:root {

    --pull-distance: 14px;

    --motion-time: 0.45s;

}
⚙️ Custom Parameters
Variable	Description
--pull-distance	Controls magnetic movement distance
--motion-time	Controls transition speed
⚡ Animation Details
Magnetic Pull Interaction

When users hover over a tab:

Tab moves toward the interaction point
Smooth floating movement appears
Glow effect activates
Glass surface highlights
Active Tab State

The active tab provides:

Gradient background
Enhanced border glow
Better navigation visibility
📱 Responsive Behaviour

The component adapts across devices.

Desktop
Horizontal tab navigation
Full magnetic interaction
Tablet
Flexible wrapping layout
Optimized spacing
Mobile
Vertical tab arrangement
Full-width buttons
Touch-friendly interface
♿ Accessibility

Supports reduced motion preferences.

@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}

Benefits:

Improved accessibility
Comfortable experience for motion-sensitive users
Content remains fully accessible
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Flexbox
CSS Transform
CSS Transitions
Media Queries
Backdrop Filter
✅ Advantages
No JavaScript required
Framework independent
Lightweight component
Easy customization
Modern glass UI pattern
Reusable navigation component
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transitions
Flexbox
Backdrop Filter
📌 Component Information

Component:

CSS Magnetic Pull Tabs

Category:

Glassmorphism UI Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.