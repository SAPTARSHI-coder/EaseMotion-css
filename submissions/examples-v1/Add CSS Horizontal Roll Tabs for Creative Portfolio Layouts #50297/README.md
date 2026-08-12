# Horizontal Roll Tabs

A pure CSS animated tab component featuring a cinematic horizontal roll transition, precisely styled to complement bold and modern Creative Portfolio interface aesthetics.

## Features

- **Pure CSS State Management:** Utilizes the "radio button hack" (`:checked` paired with sibling combinators) to manage tab states entirely without JavaScript.
- **Cinematic Horizontal Roll Transition:** Instead of fading out individual panels, all tab panels are placed on a single wide horizontal "track". Selecting a tab translates the entire track along the X-axis, creating a continuous, film-strip-like rolling transition.
- **Creative Portfolio Aesthetics:** Designed with a high-contrast dark theme, bold extended typography (`Syne` font), monochromatic imagery with hover effects, and a vibrant chartreuse accent color (`#ccff00`).
- **Responsive & Accessible:** Fluid grid layouts scale gracefully down to mobile. Keyboard navigation is supported via clear focus states (with a minimal JS snippet included solely to map Space/Enter keys to radio checks when focused on labels).
- **Customizable:** Exposes standard CSS Custom Properties for easy theming of the roll transition timing, easing, and color palette.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Horizontal Roll Transition Parameters */
    --roll-transition-time: 0.8s;
    --roll-easing: cubic-bezier(0.77, 0, 0.175, 1);
    
    /* Creative Portfolio Theme Palette */
    --bg-main: #0a0a0a;
    --text-main: #f5f5f5;
    --accent-color: #ccff00; /* Vibrant Chartreuse / Lime */
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`. Pay close attention to the structural nesting: `.tabs-wrapper` > `.tabs-viewport` > `.tabs-track` > `.tab-panel`.
2. Include the styles from `style.css`.
3. Add your portfolio content inside the respective `.tab-panel` divs. The width of `.tabs-track` and `.tab-panel` is configured for exactly 3 tabs (300% / 33.333%). If you add more tabs, you must update the CSS widths and `translateX` percentages accordingly.

```html
<!-- Core Structure Example (for 3 tabs) -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    <input type="radio" id="tab3" name="tabs">
    
    <div class="tabs-header">
        <label for="tab1">Tab 1</label>
        <label for="tab2">Tab 2</label>
        <label for="tab3">Tab 3</label>
    </div>
    
    <div class="tabs-viewport">
        <!-- The track that rolls horizontally -->
        <div class="tabs-track">
            <div class="tab-panel">Panel 1 Content</div>
            <div class="tab-panel">Panel 2 Content</div>
            <div class="tab-panel">Panel 3 Content</div>
        </div>
    </div>
</div>
```
