# CSS Slide-Up Carousel (Product Catalog) 

A pure CSS animated Carousel component showcasing a smooth **Slide-Up** interaction transition. This version is meticulously styled for a **Product Catalog** interface, prioritizing large imagery, clean typography, price tags, and pronounced call-to-action buttons.

This component relies purely on HTML structure and CSS variables, providing a robust, highly performant interactive element without the need for JavaScript.

## Features
- **Pure CSS (No JS):** Utilizes the radio-button state hack `:checked` to maintain UI state seamlessly.
- **Slide-Up Transition:** Inactive product cards are scaled down and translated downward `translateY`, keeping them out of primary focus. As a user selects an item, it smoothly slides up into full view.
- **Internal Staggered Animations:** Beyond the card itself sliding up, the product imagery and the "Add to Cart" buttons have delayed staggered entrance animations triggered exclusively when their parent slide becomes active.
- **Custom CSS Parameters:** Adjust transition timings, easings, vertical offset depths, and scale factors via exposed CSS variables in `:root`.
- **Keyboard Accessible:** Navigation is fully accessible via keyboard arrow keys (Tab into the carousel group and use left/right arrows), complete with focus-visible visual outlines on the corresponding dots.
- **Catalog Aesthetics:** Clean sans-serif typography, sale/new badges, color swatches, and prominent CTA buttons provide a premium shopping experience.

## Usage
Simply load `demo.html` into your web browser. 
To integrate this into a production project, copy the HTML structure inside `.carousel-wrapper` and tailor the CSS logic.

### Configurable CSS Properties
You can adjust the core motion "physics" by modifying these properties at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.75s;
    --carousel-easing: cubic-bezier(0.19, 1, 0.22, 1); /* Elegant, swift deceleration */
    --carousel-y-offset: 50px;
    --carousel-scale-inactive: 0.85;
    --carousel-opacity-inactive: 0.35;
    --carousel-blur-inactive: 2px;
    --carousel-gap: 2rem;
}
```
