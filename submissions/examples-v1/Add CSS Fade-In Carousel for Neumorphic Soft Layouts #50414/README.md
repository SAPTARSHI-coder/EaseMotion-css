# CSS Fade-In Carousel (Neumorphic Soft)

A pure CSS animated Carousel component utilizing a smooth **Fade-In** (cross-fade) interaction transition. It is beautifully styled with a **Neumorphic Soft** design language, showcased as a sleek Audio Player UI.

This component is entirely script-free, leveraging HTML structure and CSS variables to handle interactions, layout, and state.

## Features
- **Pure CSS State & Routing:** Utilizes the radio-button state hack (`:checked`). Uniquely, this iteration also implements a pure CSS "Next/Prev" routing logic by dynamically overlaying invisible labels over static UI buttons based on the current active state.
- **Fade-In Transition:** Unlike sliding carousels, items are stacked using `position: absolute`. Inactive items are scaled down, blurred, and faded to `opacity: 0`. The active item cross-fades in seamlessly.
- **Neumorphic Design:**
  - Soft, extruded shadows (`var(--neu-extruded)`) for the player body, album covers, and unpressed buttons.
  - Recessed, inset shadows (`var(--neu-pressed)`) applied when buttons are clicked (active state) and for the center of the vinyl record.
- **Custom CSS Parameters:** Adjust transition timings, easings, blur amounts, and scale factors via exposed CSS variables in `:root`.
- **Keyboard Accessible:** Navigation is accessible via keyboard arrow keys by focusing the hidden radio inputs.

## Usage
Simply launch `demo.html` in your browser. 
To implement this in your project, copy the HTML structure inside `.neumorphic-player` and the associated CSS logic.

### Configurable CSS Properties
The core motion configuration is located at the top of `style.css`:
```css
:root {
    --carousel-transition-timing: 0.8s;
    --carousel-easing: cubic-bezier(0.4, 0, 0.2, 1); /* Smooth crossfade ease */
    --carousel-scale-inactive: 0.92;
    --carousel-opacity-inactive: 0;
    --carousel-blur-inactive: 8px; /* Adds depth to the fade out */
    
    /* Neumorphic Tokens */
    --bg-color: #e0e5ec;
}
```
You can quickly alter `--bg-color` to change the entire physical surface color of the UI.
