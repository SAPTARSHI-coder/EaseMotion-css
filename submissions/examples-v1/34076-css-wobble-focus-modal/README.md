# CSS Wobble-Focus Modal

A pure CSS animated Modal utilizing a smooth Wobble-Focus interaction transition, styled to complement Accessible Web interface aesthetics.

## Features
- **Zero JavaScript:** Powered entirely by CSS using the hidden checkbox state hack.
- **Accessible Aesthetics:** High contrast, clear focus indicators, and smooth animation easing.
- **Customizable:** Exposes parameters via CSS Custom Properties.
- **Responsive:** Fluid scaling for all device sizes.

## CSS Custom Properties
```css
:root {
    --wobble-timing: 0.6s;
    --wobble-easing: cubic-bezier(0.25, 1, 0.5, 1);
    --wobble-rotate-start: -4deg;
    --wobble-rotate-mid: 2deg;
    --wobble-rotate-end: -1deg;
    --modal-bg-overlay: rgba(15, 23, 42, 0.7);
}
```
