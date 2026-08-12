# CSS Skew-Active Carousel

A pure CSS animated Carousel component utilizing a smooth **Skew-Active** interaction transition, specifically styled to complement modern Dashboard Analytics interface aesthetics. 

This component relies entirely on HTML structure and CSS variables, providing a robust, javascript-free interactive element with advanced transitions.

## Features
- **Pure CSS (No JS):** Utilizes the radio-button state hack (`:checked`) to maintain UI state.
- **Skew-Active Transition:** Inactive items are gracefully skewed and scaled down, shifting perspective when brought into focus.
- **Custom CSS Parameters:** Adjust transition timings, easings, skew angles, and scale factors via easily accessible CSS variables in `:root`.
- **Keyboard Accessible:** Radio buttons are visually hidden but remain focusable and perfectly navigable via keyboard arrow keys, paired with focus-visible visual outlines.
- **Dashboard Aesthetics:** Comes with glassmorphism hover reflections, layered blur effects, and semantic token-based coloring out of the box.

## Usage
Simply load the `index.html` file into any modern browser. 
To integrate into another project, copy the HTML structure and adapt the CSS Custom Variables in `style.css` under the `:root` block to fit your theme.

### Configurable CSS Properties
You can easily customize the core motion feel by editing these properties at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.6s;
    --carousel-easing: cubic-bezier(0.25, 1, 0.5, 1);
    --carousel-skew-angle: 12deg;
    --carousel-scale-inactive: 0.85;
    --carousel-opacity-inactive: 0.3;
    --carousel-blur-inactive: 4px;
    --carousel-gap: 2rem;
}
```
