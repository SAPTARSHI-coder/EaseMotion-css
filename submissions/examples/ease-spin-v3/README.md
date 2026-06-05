# Ease Spin

A fundamental utility for continuous, smooth 360-degree rotation.

## What it does
The `ease-spin` class provides an infinite, linear rotation animation. Unlike standard ease-based rotations which speed up and slow down (creating a staggered or pulsing effect), this utility uses a strictly `linear` timing function to ensure the spin is perfectly smooth and continuous, making it ideal for loading spinners, gear icons, or ambient background elements.

## How to use it
Apply the class to any element you want to rotate. 

```html
<!-- Standard clockwise rotation -->
<div class="ease-spin">↻</div>

<!-- Counter-clockwise rotation -->
<div class="ease-spin-reverse">↺</div>
```

You can customize the speed of the rotation globally or locally using the CSS custom property:
```css
:root {
    --ease-spin-speed: 1s; /* Default is 1 second per full rotation */
}

/* Example: Making a specific spinner slower */
.my-slow-spinner {
    --ease-spin-speed: 3s;
}
```

## Why it fits EaseMotion CSS
* **Core Utility:** Fills a highly requested gap in standard animation libraries by providing a dedicated, infinite linear loop instead of a one-shot ease rotation.
* **Performant:** Operates exclusively on the `transform` property, ensuring the browser can offload the continuous animation to the GPU for buttery-smooth rendering without repainting the layout.
* **DRY (Don't Repeat Yourself):** The `ease-spin-reverse` class elegantly reuses the exact same `@keyframes` definition, simply instructing the CSS animation engine to play it in reverse, keeping the bundle size down.