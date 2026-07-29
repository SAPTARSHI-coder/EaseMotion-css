# Swing-Hover Tabs - Modern SaaS

A pure CSS animated tab component featuring a playful swing-hover interaction and an overshooting sliding indicator, styled perfectly for modern SaaS settings interfaces.

## Features

- **Pure CSS Logic:** Completely JavaScript-free state management using the `:checked` pseudo-class and sibling combinators (`~`).
- **Playful Swing-Hover Animation:** Tab labels feature SVG icons that playfully swing back and forth (like a pendulum) when hovered or focused, adding a delightful micro-interaction to the interface.
- **Bouncy Slider Transition:** The active tab background indicator (`.tabs-slider`) smoothly glides between options using a `cubic-bezier` timing function with an intentional overshoot (bounce effect).
- **SaaS Settings Aesthetics:** Designed with a clean, functional light theme typical of B2B SaaS platforms. Includes fully styled mock content: input groups, user lists with avatars and badges, and billing plan cards.
- **Responsive & Accessible:** Fluidly stacks vertically on small screens (hiding the horizontal slider and converting to bordered cards). Fully accessible via keyboard with clear focus states. (Includes a minimal inline script purely to map Space/Enter keys to radio triggers when focusing labels).

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Swing Interaction Parameters */
    --swing-slider-transition: 0.5s;
    --swing-slider-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy overshoot */
    --hover-swing-duration: 0.7s;
    
    /* SaaS Theme Palette */
    --primary-color: #4f46e5; /* Indigo */
    --bg-main: #f3f4f6; /* Very light gray */
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the hidden `<input type="radio">` tags remain on the same hierarchical level as the `.tabs-header` and `.tabs-content`.
2. Include the styles from `style.css`.
3. Fill the `.tab-panel` containers with your application settings or content.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    
    <nav class="tabs-header">
        <div class="tabs-slider"></div>
        <label for="tab1" class="tab-label">
            <span class="icon">svg_here</span> General
        </label>
        <label for="tab2" class="tab-label">
            <span class="icon">svg_here</span> Team
        </label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-1">...</div>
        <div class="tab-panel panel-2">...</div>
    </div>
</div>
```
