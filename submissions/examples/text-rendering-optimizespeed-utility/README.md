# Text Rendering OptimizeSpeed Utility

Introduces the high-performance text painting performance utility token (`.ease-text-render-speed`) under issue #15191.

## Functional Mechanics

- **The Problem:** When rendering heavy realtime dashboard logs, streaming terminals, or infinite lists, the browser spends extensive graphics overhead parsing complex OpenType ligature tables and character micro-kerning. This causes dropped animation frames.
- **The Solution:** Prioritizes painting velocity over fine aesthetics. The `.ease-text-render-speed` layout class tells the rendering engine to disable micro-spacing passes, letting huge batches of text print out instantly.

## Usage Layout Structure
```html
<div class="ease-text-render-speed">
  <p>Dynamic high-frequency telemetry streams...</p>
</div>
```

Closes #15191
