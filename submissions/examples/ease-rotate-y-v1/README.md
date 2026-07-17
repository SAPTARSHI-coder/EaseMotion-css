# ease-rotate-y

A premium utility class for a smooth, tactile Y‑axis rotation (3D flip) effect.

## What's New
This component has been upgraded to provide a more natural, physics-based interaction:
- **Tactile Physics:** Uses a custom spring-like `cubic-bezier` curve for a satisfying bounce at the end of the rotation.
- **Dynamic Depth:** Adds a subtle `scale(1.05)` and an expanding `box-shadow` during the hover state to lift the element off the page.
- **Enhanced 3D Realism:** Implements `perspective: 1200px` and `transform-style: preserve-3d` for truer spatial rendering.

## Usage
Simply drop the CSS into your project and apply the class to your target element:

```html
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-rotate-y" tabindex="0">
  <span class="content">Hover or Focus me</span>
</div>