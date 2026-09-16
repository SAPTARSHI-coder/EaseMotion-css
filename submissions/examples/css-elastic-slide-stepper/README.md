# CSS Elastic-Slide Stepper for Responsive Dashboard Layouts

A modern pure CSS animated stepper component featuring elastic slide interactions for responsive dashboard interfaces.

The **CSS Elastic-Slide Stepper** creates a smooth motion experience using CSS transitions, keyframe animations, and customizable properties without requiring JavaScript.


## ✨ Features

- Pure HTML5 and CSS3 implementation
- Zero JavaScript dependency
- Elastic slide animation effect
- Smooth hover interactions
- Active step highlighting
- Glassmorphism dashboard design
- Responsive layout support
- CSS custom properties
- Lightweight animation system
- prefers-reduced-motion accessibility support


## 📁 Project Structure


css-elastic-slide-stepper/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create a step component:

<article class="step active">

    <div class="step-number">
        01
    </div>

    <div class="step-content">

        <h2>
            Research
        </h2>

        <p>
            Analyze project requirements.
        </p>

    </div>

</article>
🎨 CSS Custom Properties

The animation behavior can be customized using CSS variables.

:root {

    --slide-distance: 18px;

    --elastic-time: 0.55s;

}
⚙️ Custom Parameters
Variable	Description
--slide-distance	Controls horizontal slide movement
--elastic-time	Controls animation speed
⚡ Animation Details
Elastic Slide Effect

When hovering over a step:

Card slides horizontally
Elastic bounce motion appears
Glow shadow activates
Light sweep animation runs
Active Step

The active state provides:

Gradient background
Enhanced visibility
Highlighted dashboard progress
📱 Responsive Behaviour

The component adapts automatically.

Desktop
Full horizontal spacing
Large interactive cards
Smooth hover animations
Tablet
Flexible card sizing
Optimized spacing
Mobile
Vertical card alignment
Touch-friendly interaction
Reduced transformations
♿ Accessibility

Supports users who prefer reduced motion.

@media (prefers-reduced-motion: reduce){

    * {

        animation:none !important;

        transition:none !important;

    }

}

Benefits:

Improved accessibility
Prevents uncomfortable motion
Keeps content readable
🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Flexbox
CSS Transform
CSS Keyframes
Media Queries
Backdrop Filter
✅ Advantages
No external dependencies
Framework independent
Lightweight implementation
Easy customization
Modern dashboard UI component
Reusable animation pattern
🌐 Browser Support

Compatible with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transitions
CSS Animations
Flexbox
📌 Component Information

Component:

CSS Elastic-Slide Stepper

Category:

Responsive Dashboard Animation Component

Implementation:

HTML + CSS Only

📜 License

Created for the EaseMotion CSS examples collection.

Licensed under the MIT License.