# CSS Horizontal Roll Tabs for Product Catalog Layouts

A pure CSS animated tabs component designed for modern Product Catalog interface layouts.

This component provides smooth horizontal roll transitions between product categories using only HTML and CSS without requiring JavaScript.


## ✨ Features

- Pure HTML and CSS implementation
- No JavaScript dependency
- Smooth horizontal roll animation
- Product Catalog inspired UI
- Responsive tab layout
- CSS custom property support
- Keyboard accessible navigation
- prefers-reduced-motion support
- Lightweight and performant


## 📁 Project Structure


css-horizontal-roll-tabs-product-catalog-layouts/

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
name="products"
id="tab1"
checked>

<label for="tab1">
    Electronics
</label>

Create product content:

<article class="product-card">

    <h2>
        Electronics
    </h2>

    <p>
        Explore latest products.
    </p>

</article>
🎨 CSS Custom Properties

Customize animation behavior:

:root {

    --roll-speed: .7s;

    --radius: 24px;

}
⚙️ Custom Parameters
Variable	Description
--roll-speed	Controls horizontal transition speed
--radius	Controls card corner radius
🎯 Animation Details

The component uses:

CSS transform translateX()
Smooth transitions
Radio button based navigation
CSS variables for customization
Hardware accelerated animations
📱 Responsive Behaviour
Desktop
Large product showcase cards
Smooth horizontal rolling effect
Tablet
Flexible navigation layout
Adaptive product cards
Mobile
Wrapped category navigation
Optimized card spacing
♿ Accessibility

Supported features:

Semantic HTML structure
Keyboard navigation
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
Reusable product component
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