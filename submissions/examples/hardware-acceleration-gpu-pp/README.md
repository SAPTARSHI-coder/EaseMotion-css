# GPU Hardware Acceleration Utility (`ease-gpu`)

This feature introduces a performance-boosting utility class `.ease-gpu` to offload intensive CSS animations and transitions onto the device's GPU, resolving mobile and Safari micro-stutters and frame drops as detailed in Issue #10700.

## What does this do?

Offloads layout painting to the GPU compositing layer by triggering hardware acceleration. This ensures that complex, continuous, or high-density animations (e.g. rotating loaders, infinite loops, scale changes) remain smooth at 60 FPS even on lower-end mobile devices.

## How is it used?

Apply the `.ease-gpu` class directly to any animating elements:

```html
<div class="loading-spinner ease-gpu"></div>
```

## Why is it useful for EaseMotion CSS?

EaseMotion CSS focuses on lightweight, high-performance animation. Without hardware acceleration hints, modern browsers (especially mobile Safari and Chrome) may calculate animation frames on the CPU, causing rendering jank. By adding a performance helper utility class (`.ease-gpu`), developers can selectively optimize high-stress sections of their page to guarantee smooth rendering.
