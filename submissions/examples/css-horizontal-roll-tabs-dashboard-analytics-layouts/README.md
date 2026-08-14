# CSS Horizontal Roll Tabs for Dashboard Analytics Layouts

A pure CSS animated tabs component designed for modern Dashboard Analytics interfaces.

This component provides a smooth horizontal roll transition between tab panels using only HTML and CSS without any JavaScript dependency.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript required
- Smooth horizontal roll animation
- Dashboard Analytics inspired UI
- Responsive tab layout
- CSS custom property support
- Keyboard accessible navigation
- prefers-reduced-motion support
- Lightweight and performant


## 📁 Project Structure


css-horizontal-roll-tabs-dashboard-analytics-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create tabs using radio inputs:

<input 
type="radio"
name="tab"
id="tab1"
checked>

<label for="tab1">
    Overview
</label>

Add tab content:

<div class="tab-content">

    <h2>
        Analytics
    </h2>

    <p>
        View dashboard insights.
    </p>

</div>
🎨 CSS Custom Properties

Customize animation and appearance:

:root {

    --roll-speed: .7s;

    --tab-radius: 20px;

}
⚙️ Custom Parameters
Variable	Description
--roll-speed	Controls horizontal transition speed
--tab-radius	Controls tab panel corner radius
📊 Animation Details

The component uses:

CSS transform transitions
Horizontal sliding movement
Smooth roll interaction
Keyframe entrance animation
📱 Responsive Behaviour
Desktop
Large analytics panels
Smooth horizontal transitions
Tablet
Adaptive tab spacing
Flexible content sizing
Mobile
Wrapped navigation buttons
Compact dashboard cards
♿ Accessibility

Supported features:

Semantic HTML structure
Native keyboard navigation
Reduced motion preference
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
CSS Keyframes
Flexbox
Media Queries
✅ Advantages
Framework independent
Zero JavaScript dependency
Easy customization
Reusable dashboard UI component
Performance friendly animations
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Animation
Flexbox
📜 License

Created for the EaseMotion CSS examples collection.

Licensed under MIT License.