# Printer Layer Build

## What does this do?
Renders a self-contained CSS-only `ease-printer-layer-build` demo: 3D printer nozzle laying successive filament layers.

## How is it used?
Open `demo.html` in a browser. The animated face uses classes like `ease-printer-layer-build`, `ease-printer-layer-build__arm`, and `ease-printer-layer-build__core`. No build step or JavaScript is required for the motion.

```html
<section class="ease-printer-layer-build">
  <div class="ease-printer-layer-build__housing">...</div>
</section>
```

## Why is it useful?
It packs a recognizable real-world motion metaphor into three submission files, fitting EaseMotion's curated CSS-first model and giving maintainers a concrete effect to standardize into `ease-*` utilities.
