# Liquid Fluid Magnetic Button

## What does this do?

This component implements a pure CSS button with an organic, liquid "gooey" blending effect on hover. When hovered, the button scales up slightly, and a secondary-colored fluid bubble expands from the center, merging smoothly with the main button body.

## How is it used?

Wrap the button and its expanding droplet in the liquid blend wrapper:

```html
<div class="ease-liquid-blend-wrapper">
  <button class="ease-magnetic-btn">
    <span class="ease-btn-text-shield">Button Text</span>
    <span class="ease-fluid-drop"></span>
  </button>
</div>
```

## Why is it useful?

- **Zero JS Event Listeners**: Achieves fluid, organic morphs using native CSS transitions, saving scripting execution overhead.
- **Organic Blending Filter**: Combines CSS `blur` and high `contrast` on the container element to force adjacent colors to blend organically like droplets.
- **Isolate Text Distortion**: The `.ease-btn-text-shield` utilizes z-indexing and color contrast to ensure the text remains legible and is not warped by the filter.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to test the interactive gooey blending transitions inside the showcase panel.
