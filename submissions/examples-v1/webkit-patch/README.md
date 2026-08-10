# Safari/WebKit Rendering & Flicker Patch

## What does this do?

This utility resolves sub-pixel layout shifting, vibration blur, and flickers in Safari/WebKit engines during continuous transformation keyframes (e.g., rotating loading rings, scale animations, or hover shifts).

## How is it used?

Attach the rendering shield utility class to any element undergoing infinite looping animations or sub-pixel transitions:

```html
<div class="your-rotating-animation ease-webkit-rendering-patch">
  Your rotating logo or spinner here
</div>
```

## Why is it useful?

- **Restricts WebKit Recalculations**: Prevents the browser engine from recalculating surrounding parent box offsets on each sub-pixel step.
- **Hardware-Compositor Layer Anchor**: By specifying `-webkit-backface-visibility: hidden` and `transform-style: preserve-3d`, the element is separated onto a dedicated GPU rendering layer.
- **Alias Correction**: Controls font-smoothing distortions (`-webkit-font-smoothing: antialiased`) to ensure text remains crisp and blur-free throughout scale/rotation sequences.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser or diagnostic terminal to test the side-by-side performance differences on Safari/iOS devices.
