# Oscilloscope CRT Retrace

## What does this do?
Renders a self-contained CSS-only `ease-oscilloscope-crt-retrace` demo: CRT oscilloscope beam drawing a sine then retracing.

## How is it used?
Open `demo.html` in a browser. The animated face uses classes like `ease-oscilloscope-crt-retrace`, `ease-oscilloscope-crt-retrace__arm`, and `ease-oscilloscope-crt-retrace__core`. No build step or JavaScript is required for the motion.

```html
<section class="ease-oscilloscope-crt-retrace">
  <div class="ease-oscilloscope-crt-retrace__housing">...</div>
</section>
```

## Why is it useful?
It packs a recognizable real-world motion metaphor into three submission files, fitting EaseMotion's curated CSS-first model and giving maintainers a concrete effect to standardize into `ease-*` utilities.
