# Skew-Active Tabs - Creative Portfolio Layouts

A pure CSS animated tab component featuring dynamic skewed geometry and vibrant sunset/coral aesthetics. Designed specifically for creative portfolio layouts, digital studios, and artist showcases.

## Features

- **Pure CSS State & Animation:** Utilizes the CSS "radio hack" (`:checked` paired with the general sibling combinator `~`) to manage active states and trigger smooth panel animations without JavaScript dependencies.
- **Skewed Geometry Slider:** The active tab background features a bold parallelogram geometry (`transform: skewX(-16deg)`) that translates across the tab bar with customizable cubic-bezier easing and subtle scale effects.
- **Creative Portfolio Aesthetics:** Tailored for digital design, 3D motion, and brand identity portfolios with responsive project grids, custom glassmorphism containers, and curated gradients.
- **Responsive & Accessible:** Adaptively shifts tab navigation to a vertical stack on mobile devices. Fully accessible with clear keyboard focus outlines and built-in support for `prefers-reduced-motion`. (Note: A tiny 10-line script is included in the HTML *solely* to map Enter and Spacebar keys on `<label role="tab">` to check the corresponding radio inputs for keyboard accessibility).
- **Customizable Parameters:** Exposes standard CSS Custom Properties on `:root` for effortless control over timing, geometry angles, scaling, and color themes.

## Customization

The component exposes standard CSS custom variables on the `:root` pseudo-class:

```css
:root {
    /* Animation & Geometry Parameters */
    --tab-transition-time: 0.45s;
    --tab-easing: cubic-bezier(0.25, 1, 0.5, 1);
    --tab-skew-angle: -16deg;
    --tab-scale-active: 1.03;
    --panel-fade-time: 0.5s;
    
    /* Creative Portfolio Palette */
    --accent-primary: #ff5e62;
    --accent-secondary: #ff9966;
    --accent-glow: 0 10px 25px rgba(255, 94, 98, 0.35);
    
    /* Theme Colors */
    --bg-main: #0f111a;
    --bg-panel: rgba(22, 25, 38, 0.85);
    --bg-surface: rgba(255, 255, 255, 0.04);
    /* ... see style.css for all variables */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, keeping the hidden `<input type="radio">` elements alongside `.tabs-header` and `.tabs-panels`.
2. Include `style.css` in your project.
3. Place your portfolio items and descriptions inside the respective `.tab-content` containers.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab-ui" name="portfolio-tabs" class="tab-input" checked>
    <input type="radio" id="tab-motion" name="portfolio-tabs" class="tab-input">
    <input type="radio" id="tab-brand" name="portfolio-tabs" class="tab-input">
    
    <div class="tabs-header" role="tablist">
        <label for="tab-ui" class="tab-label" role="tab" tabindex="0">🎨 Digital UI / UX</label>
        <label for="tab-motion" class="tab-label" role="tab" tabindex="0">✨ 3D Motion & VFX</label>
        <label for="tab-brand" class="tab-label" role="tab" tabindex="0">📐 Brand Identity</label>
        <div class="tab-slider"></div>
    </div>
    
    <div class="tabs-panels">
        <div id="panel-ui" class="tab-content content-ui" role="tabpanel">...</div>
        <div id="panel-motion" class="tab-content content-motion" role="tabpanel">...</div>
        <div id="panel-brand" class="tab-content content-brand" role="tabpanel">...</div>
    </div>
</div>
```
