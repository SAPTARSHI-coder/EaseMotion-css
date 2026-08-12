# Text Rendering Auto Utility

Introduces the standard engine typographic restoration utility token (`.ease-text-render-auto`) under issue #15185.

## Functional Mechanics

- **The Problem:** When inheriting performance-heavy rules (`optimizeSpeed`) or rendering-heavy constraints (`optimizeLegibility`) down the DOM tree, nested content areas can inherit sluggish frame times or sub-optimal kerning defaults that ruin layout flexibility.
- **The Solution:** Resets font rendering controls. The `.ease-text-render-auto` class lets the browser dynamically balance speed, legibility, and subpixel drawing paths based on the current hardware context.

## Usage Layout Structure
```html
<div class="ease-text-render-auto">
  <p>Returns text shaping parameters to user-agent defaults...</p>
</div>
```

Closes #15185
