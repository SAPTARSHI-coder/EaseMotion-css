# CSS Slide-Up Carousel (E-Commerce Checkout)

A pure CSS animated Carousel component showcasing a smooth **Slide-Up** interaction transition. This variant is specifically designed with a clean, high-trust aesthetic tailored for **E-Commerce Checkout** scenarios, such as displaying order upsells or recommended add-ons.

Like previous iterations, this component relies purely on HTML and CSS variables, providing a highly performant, script-free interactive element.

## Features
- **Pure CSS (No JS):** Utilizes the radio-button state hack (`:checked`) to maintain UI state without relying on javascript.
- **Slide-Up Transition:** Inactive items are scaled down and translated downward (`translateY`). As they are selected, they seamlessly slide up into focus at full scale.
- **Custom CSS Parameters:** Adjust transition timings, easings, vertical offset distances, and scale factors via exposed CSS variables in `:root`.
- **Keyboard Accessible:** Navigation is accessible via keyboard arrow keys (Tab into the carousel, then use left/right arrows), leveraging focus-visible indicators.
- **Checkout Aesthetics:** Polished with subtle shadows, crisp borders, and clean typography that instills trust in a checkout environment. Additionally includes internal staggered animations (like the SVG icons appearing when active).

## Usage
Simply launch `demo.html` in your browser. 
To implement this in your project, copy the HTML structure inside `.carousel-wrapper` and the associated CSS logic.

### Configurable CSS Properties
The core motion configuration is located at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.7s;
    --carousel-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --carousel-y-offset: 60px; /* Adjust the depth of the slide-up */
    --carousel-scale-inactive: 0.88;
    --carousel-opacity-inactive: 0.3;
    --carousel-blur-inactive: 3px;
    --carousel-gap: 1.5rem;
}
```
