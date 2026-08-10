# CSS calc-size() Height Animation Feature

Submits intrinsic height animation utility architectures (`.ease-calc-height-auto`) under issue #15433.

## Functional Mechanics

- **The Problem:** Animating an element from `height: 0` to `height: auto` has historically been impossible in CSS without triggering reflows, measuring content via JavaScript `scrollHeight`, or using messy CSS grid hacks. This causes jank, layout shifts, and massive overhead in dynamic UI components like accordions.
- **The Solution:** Native interpolation via `calc-size()`. The `.ease-calc-height-auto` utility leverages `calc-size(auto, size)` to tell the browser engine to transition specifically between the `0` state and the computed intrinsic layout size, enabling buttery-smooth transitions for accordion panels, dropdown menus, and collapsing widgets.



## Usage Layout Structure
```html
<div class="ease-calc-height-auto" style="height: 0;">
  <div>Content to expand into...</div>
</div>
```

Closes #15433
