# Skew-Active Popover

A pure CSS animated popover component utilizing a smooth skew-active interaction transition, designed to complement accessible web interface aesthetics.

## Features

- **Pure CSS Animation:** No JavaScript required for the interaction or animation.
- **Skew-Active Transition:** Uses `transform: skewX()` combined with scale and translation to create a dynamic, fluid reveal effect.
- **Accessible & Keyboard-Friendly:** Fully operable via keyboard navigation using the `:focus-within` CSS pseudo-class.
- **Responsive:** Adjusts its layout smoothly for mobile devices.
- **Customizable:** Exposes standard CSS Custom Properties for easy integration and configuration.

## Customization

The component exposes several CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Popover parameters */
    --popover-transition-timing: 0.5s;
    --popover-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
    --popover-scale-factor: 1.02;
    --popover-skew-angle: -8deg;
    
    /* Design Aesthetics */
    --bg-color: #0f172a;
    --text-color: #f8fafc;
    --primary: #3b82f6;
    --popover-bg: rgba(30, 41, 59, 0.85);
    /* ... see style.css for all properties */
}
```

## How to use

Simply copy the HTML structure from `demo.html` into your project and include the styles from `style.css`. The interaction is completely handled by CSS `:hover` and `:focus-within` on the `.popover-wrapper` element.

```html
<div class="popover-wrapper">
    <button class="popover-trigger">Open</button>
    <div class="popover-content">
        <!-- Your content here -->
    </div>
</div>
```
