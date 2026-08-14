# CSS Zoom-Out Tabs for Creative Portfolio Layouts

A pure CSS animated tabs component designed for creative portfolio interface layouts.

This component provides a smooth zoom-out transition effect between tabs using only HTML and CSS without requiring JavaScript.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript dependency
- Smooth zoom-out transition animation
- Creative Portfolio inspired UI
- Responsive tab layout
- CSS custom property support
- Keyboard accessible navigation
- prefers-reduced-motion support
- Lightweight and performant


## 📁 Project Structure


css-zoom-out-tabs-creative-portfolio-layouts/

├── demo.html
├── style.css
└── README.md



## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Create tab inputs and controls:

<input
type="radio"
name="portfolio-tabs"
id="tab1"
checked>

<label for="tab1">
    Projects
</label>

Create content cards:

<article class="tab-card">

    <h2>
        Creative Projects
    </h2>

    <p>
        Showcase portfolio work.
    </p>

</article>
🎨 CSS Custom Properties

The animation can be customized using CSS variables:

:root {

    --zoom-scale: .85;

    --zoom-speed: .7s;

    --radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--zoom-scale	Controls inactive card scale
--zoom-speed	Controls zoom animation duration
--radius	Controls rounded corners
🎯 Animation Details

The component uses:

CSS transform scale()
Opacity transitions
Smooth content sliding
Hardware accelerated transforms
📱 Responsive Behaviour
Desktop
Large portfolio panels
Smooth zoom transitions
Tablet
Flexible tab spacing
Adaptive card sizing
Mobile
Wrapped navigation
Compact content display
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

Works with modern browsers supporting:

CSS Variables
CSS Transform
CSS Transition
Flexbox
📜 License

Created for the EaseMotion CSS examples collection.

Licensed under MIT License.