# CSS Spring Physics Component

A demonstration of the modern CSS `linear()` easing function to replicate complex physics (springs, overshoots, and dampening) entirely in CSS.

## Features
- **Zero Animation Libraries**: Historically, achieving realistic spring physics required heavy JavaScript libraries like Framer Motion, React Spring, or GSAP. By using the new CSS `linear()` easing function, we can approximate the exact mathematical curve of a spring using a multi-point linear graph.
- **Hardware Accelerated**: Because the transition is purely CSS, properties like `transform` run entirely on the GPU, avoiding main-thread blocking.
- **Accessible Fallback**: Complex spring curves inherently overshoot (`> 1.0` multiplier on the animation end state) and wobble. This can trigger vestibular disorders. This component gracefully falls back to a standard, non-wobbly `ease-out` transition if `@media (prefers-reduced-motion: reduce)` is detected.

## Usage
Open `demo.html` in a modern browser.
- **Spring Modal**: Click the "Toggle Modal" button. The modal will slide up, shoot past its final resting position, and wobble back into place—just like a physical spring attached to a rubber band.
- **Overshoot Button**: Hover over the "Hover Me" button. The scale transform will bounce elastically before settling.

The magic lives in this single CSS variable:
```css
--spring-easing: linear(
    0, 0.057, 0.198, 0.395, 0.612, 0.812, 0.972, 1.082, 
    1.147, 1.171, 1.166, 1.137, 1.092, 1.042, 0.999, 
    0.967, 0.951, 0.947, 0.953, 0.968, 0.985, 1.002, 
    1.013, 1.019, 1.018, 1.013, 1.007, 1.001, 0.997, 
    0.995, 0.995, 0.996, 0.998, 1.000, 1.001, 1.002, 1
);
```

## Files
- `demo.html`: The HTML structure containing the interactive triggers.
- `style.css`: The styling rules where the complex `linear()` approximation curve is defined and applied to the transforms.
