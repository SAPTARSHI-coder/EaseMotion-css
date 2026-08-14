# CSS Magnetic Pull Tabs for Creative Portfolio Layouts

A pure CSS animated tabs component designed for creative portfolio interface layouts.

This component provides smooth magnetic pull hover interactions using only HTML and CSS without requiring JavaScript.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript dependency
- Smooth magnetic pull hover effect
- Creative Portfolio inspired design
- Responsive tab layout
- CSS custom property support
- Keyboard accessible navigation
- prefers-reduced-motion support
- Lightweight and performant animation


## 📁 Project Structure


css-magnetic-pull-tabs-creative-portfolio-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create tab controls:

<input
type="radio"
name="tabs"
id="tab1"
checked>

<label for="tab1">
    Projects
</label>

Add tab content:

<article class="tab-card">

    <h2>
        Creative Projects
    </h2>

    <p>
        Showcase portfolio work.
    </p>

</article>
🎨 CSS Custom Properties

Customize the animation:

:root {

    --magnetic-strength: 1.08;

    --transition-speed: .35s;

    --radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--magnetic-strength	Controls hover scaling intensity
--transition-speed	Controls interaction speed
--radius	Controls rounded corners
🎯 Animation Details

The component uses:

CSS transform scaling
Smooth hover transitions
Radio button based navigation
Hardware accelerated animations
CSS variables for customization
📱 Responsive Behaviour
Desktop
Large interactive portfolio tabs
Smooth magnetic hover effects
Tablet
Flexible spacing
Adaptive cards
Mobile
Wrapped navigation
Compact content layout
♿ Accessibility

Supported features:

Semantic HTML structure
Native keyboard interaction
Reduced motion compatibility
@media (prefers-reduced-motion: reduce){

    * {

        transition:none !important;

        animation:none !important;

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
✅ Advantages
Zero JavaScript dependency
Framework independent
Easy customization
Reusable portfolio component
Performance optimized
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
📜 License

Created for the EaseMotion CSS examples collection.

Licensed under MIT License.