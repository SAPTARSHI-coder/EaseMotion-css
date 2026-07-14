# Magnetic Button

A button that subtly follows the cursor when hovered, creating a magnetic attraction effect, and smoothly snaps back to its resting position when the cursor leaves.

## Usage
Wrap the button in a container with enough padding to give the cursor room to move around it. Attach `mousemove` and `mouseleave` listeners (see `demo.html`) to translate the button toward the cursor position.

```html
<div class="magnetic-wrapper">
  <button class="magnetic-btn">Hover Me</button>
</div>
```

## Browser support
Works in all modern browsers — uses `getBoundingClientRect()` and a CSS `transform: translate()` transition.

## Notes
Requires JavaScript for cursor tracking and distance calculation. The `strength` variable (0–1) controls how strongly the button follows the cursor — lower values feel more subtle.