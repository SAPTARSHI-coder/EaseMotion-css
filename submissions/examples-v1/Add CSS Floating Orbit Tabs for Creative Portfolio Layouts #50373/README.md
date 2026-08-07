# Floating Orbit Tabs - Creative Portfolio

A pure CSS animated tab component featuring a true 3D floating orbit indicator and dynamic entrance animations, purposefully designed for high-end Creative Portfolio layouts.

## Features

- **Pure CSS State Logic:** Relies on the standard `:checked` radio button hack to toggle active tab panels without a single line of JavaScript logic.
- **True Orbit Indicator:** Replaces the traditional underline with a miniature planetary system. A glowing neon orb rotates continuously in a 3D-tilted circular path using `@keyframes`. When you select a new tab, the entire orbit system gracefully translates to the new label.
- **Dynamic Content Entrance:** Active tab panels animate into view using an `orbitIn` animation—rotating slightly and scaling up from the bottom as if settling into an orbit.
- **Creative Portfolio Theme:** Styled with a deep space aesthetic (`#050505` background), bold extended typography (`Space Grotesk`), striking neon cyan accents (`#00ffcc`), and monochromatic image hover reveals. Some portfolio items feature continuous floating animations to enhance the theme.
- **Responsive & Accessible:** CSS grid ensures the layout stacks perfectly on smaller screens (where the orbit is hidden for clarity). Keyboard accessibility is maintained with explicit focus outlines and a tiny accessibility script that simply maps Space/Enter keys to the hidden radio inputs.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Floating Orbit Transition Parameters */
    --orbit-transition-time: 0.7s;
    --orbit-easing: cubic-bezier(0.85, 0, 0.15, 1); /* Cinematic ease-in-out */
    
    /* Creative Portfolio Theme Palette */
    --bg-main: #050505;
    --accent-color: #00ffcc; /* Neon Cyan */
    --accent-glow: 0 0 10px rgba(0, 255, 204, 0.6), 0 0 20px rgba(0, 255, 204, 0.4);
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, taking care to preserve the hidden `<input type="radio">` tags alongside `.tabs-header` and `.tabs-content`.
2. Include the styles from `style.css`.
3. Fill the `.tab-panel` containers with your portfolio projects or studio information. The layout uses `.portfolio-grid` and `.work-card` structures designed specifically for creative work display.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    
    <nav class="tabs-header">
        <label for="tab1">Design</label>
        <label for="tab2">Motion</label>
        
        <div class="orbit-indicator">
            <div class="orbit-system">
                <div class="orbit-path"></div>
                <div class="orbit-planet"></div>
            </div>
        </div>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-1">...</div>
        <div class="tab-panel panel-2">...</div>
    </div>
</div>
```
