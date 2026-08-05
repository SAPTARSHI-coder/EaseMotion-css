# GPU Acceleration Best Practices

## What does this do?
Documents best practices for achieving smooth, GPU-accelerated animations.

## How is it used?
```css
/* Use transform and opacity for GPU acceleration */
.animated {
  will-change: transform, opacity;
}
```

## Why is it useful?
- 60fps animations
- Reduced CPU usage
- Smoother scrolling and interactions

## GPU-Accelerated Properties
- transform
- opacity
- filter (with some caveats)

## Non-Accelerated Properties
- width, height
- margin, padding
- left, top, right, bottom
- border-width
