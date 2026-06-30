# Contain Paint Utility

Introduces the advanced render performance painting containment token (`.ease-contain-paint`) under issue #15161.

## Functional Mechanics

- **The Problem:** When building high-performance maps, animations, or sliding canvas drawers, elements that float partially off-screen or outside their parent envelopes continue to force the browser to execute expensive tracking and paint rasterization loops.
- **The Solution:** Offloads GPU threads. The `.ease-contain-paint` class acts as an explicit visual boundary box. It clips content exactly at its margins (similar to `overflow: hidden` but with deeper engine optimizations) and entirely skips painting sub-nodes if the container itself drops out of the active window viewport.

## Usage Layout Structure

```html
<div class="ease-contain-paint"></div>
```

Closes #15161
