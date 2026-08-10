# Floating Orbit Tabs

A pure CSS animated tab component featuring a glowing, floating orbit indicator and dynamic entrance animations, expertly styled to complement high-converting Marketing Landing Page layouts.

## Features

- **Pure CSS State Management:** Utilizes the "radio button hack" (`:checked` paired with sibling combinators) to manage active tab states entirely without JavaScript.
- **Floating Orbit Indicator:** Replaces the standard tab underline with a glowing "orb" indicator. The orb features a continuous CSS `animation` (bobbing up and down) and smoothly glides between tabs when selected, creating a highly engaging "floating" effect.
- **Orbit Entrance Animation:** When a new tab panel becomes active, its content scales up and rotates slightly into place (`animation: orbitIn`), as if arriving from an orbit, reinforcing the component's theme.
- **Marketing Page Aesthetics:** Designed with a clean, high-contrast light theme, vibrant indigo call-to-actions, checkmark lists, and pure CSS abstract visual mockups (a UI layout and a growth chart).
- **Responsive & Accessible:** Fluid CSS Grid layouts ensure the content stacks perfectly on mobile devices. Keyboard navigation is fully supported with explicit `:focus-visible` states. (A tiny inline script is included solely to map the Space/Enter keys to radio checks for maximum usability when focusing labels).

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Floating Orbit Transition Parameters */
    --orbit-transition-time: 0.6s;
    --orbit-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
    
    /* Marketing Theme Palette */
    --primary-color: #4f46e5; /* Vibrant Indigo */
    --bg-main: #f8fafc;
    /* ... see style.css for all properties */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, keeping the hidden `<input type="radio">` elements alongside the `.tabs-header` and `.tabs-content`.
2. Include the styles from `style.css`.
3. Add your marketing content inside the respective `.tab-panel` divs. The layout uses CSS grid (`.marketing-grid`) for easy two-column text/visual arrangements.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">
    
    <div class="tabs-header">
        <label for="tab1" class="tab-label">Tab 1</label>
        <label for="tab2" class="tab-label">Tab 2</label>
        
        <div class="orbit-indicator">
            <div class="orbit-orb"></div>
        </div>
    </div>
    
    <div class="tabs-content">
        <div class="tab-panel panel-1">...</div>
        <div class="tab-panel panel-2">...</div>
    </div>
</div>
```
