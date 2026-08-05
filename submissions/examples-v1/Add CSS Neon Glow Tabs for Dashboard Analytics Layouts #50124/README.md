# Neon Glow Tabs

A pure CSS animated tab component utilizing a smooth sliding neon glow transition, specifically styled to complement modern, dark-themed dashboard analytics interfaces.

## Features

- **Pure CSS State Management:** Utilizes the hidden radio button hack (`:checked` pseudo-class and sibling combinators) to manage tab states entirely without JavaScript.
- **Neon Glow Transition:** A dedicated slider element that smoothly translates under the active tab, complete with multi-layered box-shadows to simulate a neon tube light.
- **Accessible:** Features visible focus rings for keyboard navigation and basic ARIA roles. (Note: A tiny 5-line script is included in the HTML *solely* to map the Enter/Spacebar keys to the radio inputs for robust keyboard support on labels, but the core functionality and animations remain pure CSS).
- **Dashboard Aesthetics:** Includes mock content (stat cards, a pure CSS bar chart placeholder, and revenue lists) to demonstrate real-world application in analytics interfaces.
- **Customizable:** Exposes standard CSS Custom Properties on the `:root` for effortless theming.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization. 

```css
:root {
    /* Animation Parameters */
    --tab-transition-time: 0.4s;
    --tab-easing: cubic-bezier(0.25, 1, 0.5, 1);
    
    /* Neon Glow & Colors */
    --neon-color: #00f3ff;
    --neon-glow-primary: 0 0 10px rgba(0, 243, 255, 0.6);
    --neon-glow-secondary: 0 0 20px rgba(0, 243, 255, 0.3), 0 0 30px rgba(0, 243, 255, 0.1);
    
    /* Dashboard Theme Palette */
    --bg-main: #0b1121;
    --bg-panel: #111a31;
    --bg-card: #1e293b;
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, preserving the order of `<input type="radio">`, `.tabs-header`, and `.tabs-panels`.
2. Include the styles from `style.css`.
3. Add or modify the `.tab-content` divs as needed. The matching logic relies on the sibling selector `~` tied to the checked radio button.

```html
<!-- Example of the core structure -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" class="tab-input" checked>
    <input type="radio" id="tab2" name="tabs" class="tab-input">
    
    <div class="tabs-header">
        <label for="tab1" class="tab-label">Tab 1</label>
        <label for="tab2" class="tab-label">Tab 2</label>
        <div class="tab-slider"><div class="slider-glow"></div></div>
    </div>
    
    <div class="tabs-panels">
        <div class="tab-content content-1">...</div>
        <div class="tab-content content-2">...</div>
    </div>
</div>
```
