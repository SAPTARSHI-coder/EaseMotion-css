# CSS Slide-Up Carousel (Neumorphic Soft)

A pure CSS animated Carousel component showcasing a smooth **Slide-Up** interaction transition. This specific version is beautifully styled using the **Neumorphic Soft** design trend, creating the illusion of elements extruding from or recessing into the background using carefully crafted CSS drop-shadows and light/dark color layering.

Like previous iterations, this component relies purely on HTML and CSS variables, providing a highly performant, script-free interactive element.

## Features
- **Pure CSS (No JS):** Utilizes the radio-button state hack (`:checked`) to manage the state of the active slide.
- **Slide-Up Transition:** Inactive items are scaled down and translated downward (`translateY`). As they are selected, they seamlessly slide up into focus at full scale.
- **Neumorphic Design:**
  - Soft, extruded shadows (`var(--neu-extruded)`) for active cards, dial faces, toggle knobs, and unselected dots.
  - Recessed, inset shadows (`var(--neu-pressed)`) for active dots, slider tracks, and indicator backgrounds.
- **Custom CSS Parameters:** Adjust transition timings, easings, vertical offset distances, and scale factors via exposed CSS variables in `:root`.
- **Keyboard Accessible:** Navigation is accessible via keyboard arrow keys, utilizing dashed outlines to visibly track focus.

## Usage
Simply launch `demo.html` in your browser. 
To implement this in your project, copy the HTML structure inside `.carousel-wrapper` and the associated CSS logic.

### Configurable CSS Properties
The core motion configuration is located at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.85s;
    --carousel-easing: cubic-bezier(0.2, 0.9, 0.3, 1.1); /* Smooth, slightly bouncy ease */
    --carousel-y-offset: 50px;
    --carousel-scale-inactive: 0.85;
    --carousel-opacity-inactive: 0.4;
    --carousel-gap: 2rem;
    
    /* Neumorphic Tokens */
    --bg-color: #e0e5ec;
    --shadow-light: #ffffff;
    --shadow-dark: #a3b1c6;
}
```
You can quickly change the base color `--bg-color` and its corresponding light/dark shadow tones to adapt the Neumorphic look to dark mode or other color palettes.
