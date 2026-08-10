# Liquid Morph Toast Stack - EaseMotion CSS

A fluid, organic toast notification stack component leveraging CSS morph keyframe animations and elastic physics curve timings.

## 1. What does this do?
This component renders system alert toasts that morph with liquid-like border adjustments and elastic entry transitions to draw user focus smoothly without jarring screen layout shifts.

## 2. How is it used?
Link `style.css` in your project and create your toast stack container:

```html
<link rel="stylesheet" href="style.css">

<div class="toast-stack">
  <div class="toast toast-success">
    <div class="toast-icon">✓</div>
    <div class="toast-content">
      <h4>Title</h4>
      <p>Description text</p>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
- **Organic Liquid Motion:** Creates visual interest through continuous sub-pixel border morphing.
- **Hardware Accelerated:** Uses `transform` and `opacity` properties for optimal 60 FPS performance.
- **Accessibility Friendly:** Built with `role="region"` and `aria-live="polite"` attributes.
