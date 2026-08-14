# CSS Scale-Hover Stepper for Creative Portfolio Layouts

A pure CSS animated stepper component designed for creative portfolio interface layouts.

This component provides smooth scale-hover interactions with step-based navigation using only HTML and CSS without requiring JavaScript.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript dependency
- Smooth scale hover animation
- Creative Portfolio inspired UI
- Responsive stepper layout
- CSS custom property support
- Keyboard accessible navigation
- prefers-reduced-motion support
- Lightweight and performant


## 📁 Project Structure


css-scale-hover-stepper-creative-portfolio-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create step controls:

<input
type="radio"
name="steps"
id="step1"
checked>

<label for="step1">
    Discover
</label>

Create step content:

<article class="step-card">

    <h2>
        Discover Ideas
    </h2>

    <p>
        Explore creative concepts.
    </p>

</article>
🎨 CSS Custom Properties

Customize the animation:

:root {

    --scale-factor: 1.08;

    --hover-speed: .35s;

    --radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--scale-factor	Controls hover scaling amount
--hover-speed	Controls hover transition speed
--radius	Controls component corner radius
🎯 Animation Details

The component uses:

CSS transform scale()
Smooth hover transitions
Radio button based navigation
CSS transform sliding
Hardware accelerated animations
📱 Responsive Behaviour
Desktop
Large step cards
Smooth scale interactions
Tablet
Flexible spacing
Adaptive layout
Mobile
Wrapped navigation
Compact cards
♿ Accessibility

Supported features:

Semantic HTML structure
Native keyboard navigation
Reduced motion support
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