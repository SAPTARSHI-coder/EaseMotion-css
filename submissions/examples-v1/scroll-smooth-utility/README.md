# Scroll Smooth Utility

Introduces the browser kinetic scrolling motion modifier utility token (`.ease-scroll-smooth`) under issue #15121.

## Functional Mechanics

- **The Problem:** When building multi-section document layouts, single-page application indices, multi-step validation forms, or code dictionary listings, clicking internal hash reference anchor elements instantly snaps the view box to the target pixel. This sudden position skip disrupts spatial context and leaves the user disoriented.
- **The Solution:** Native motion interpolation. The `.ease-scroll-smooth` utility sets up clean browser-orchestrated panning via `scroll-behavior: smooth`. It can be applied globally to the root element or assigned straight to regional overflow windows, translating layout positions cleanly on click events without using expensive JavaScript tracking.

## Usage Layout Structure
```html
<div class="overflow-panel ease-scroll-smooth" style="overflow-y: auto; height: 300px;">
  <section id="target-node">Anchor Point</section>
</div>
```

Closes #15121
