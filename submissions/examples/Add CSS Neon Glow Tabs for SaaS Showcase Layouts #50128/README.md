# Neon Glow Tabs - SaaS Showcase

A pure CSS animated tab component featuring a modern, pill-shaped neon glow slider transition. Designed specifically to complement sleek, dark-themed SaaS (Software as a Service) showcase and marketing landing page layouts.

## Features

- **Pure CSS Interaction:** State management is handled completely by the CSS "radio hack" (`:checked` paired with the general sibling combinator `~`), requiring zero JavaScript for logic or animations.
- **Neon Glow Pill Slider:** Instead of a traditional underline, this component uses a glowing pill shape that smoothly translates behind the active tab label.
- **SaaS Themed Mockups:** Includes styled feature panels demonstrating common SaaS use cases (Integrations, Automations, Security), complete with typography, list styles, and CSS-based visual placeholders.
- **Responsive & Accessible:** Fully responsive layout that elegantly shifts the tab navigation to a vertical stack on mobile devices. Keyboard accessible with clear focus states. (Note: A tiny 5-line script is included in the HTML *solely* to map the Enter/Spacebar keys to the radio inputs for robust keyboard support on labels).
- **Customizable Properties:** Exposes standard CSS Custom Properties for easy theming and integration.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization. 

```css
:root {
    /* Animation Parameters */
    --tab-transition-time: 0.5s;
    --tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
    
    /* Neon Glow & Colors */
    --neon-primary: #a855f7; /* Vibrant Purple */
    --neon-secondary: #ec4899; /* Vibrant Pink */
    --neon-glow: 0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(236, 72, 153, 0.2);
    
    /* SaaS Theme Palette */
    --bg-main: #030712;
    --bg-panel: rgba(17, 24, 39, 0.7);
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring you keep the hidden `<input type="radio">` elements alongside the `.tabs-header` and `.tabs-panels`.
2. Include the styles from `style.css`.
3. Add your feature content inside the respective `.tab-content` divs.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" class="tab-input" checked>
    <input type="radio" id="tab2" name="tabs" class="tab-input">
    
    <div class="tabs-header">
        <label for="tab1" class="tab-label">Tab 1</label>
        <label for="tab2" class="tab-label">Tab 2</label>
        <div class="tab-slider"></div>
    </div>
    
    <div class="tabs-panels">
        <div class="tab-content content-1">...</div>
        <div class="tab-content content-2">...</div>
    </div>
</div>
```
