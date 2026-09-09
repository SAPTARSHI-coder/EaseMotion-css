# Card Flip Animation

### 1. What does this do?
This component provides a smooth 180-degree 3D rotation (flip) of a card on hover or focus to reveal content on the back face.

### 2. How is it used?
Apply the `.flip-card` class to the outer wrapper, and wrap the front and back faces in a `.flip-card-inner` container:

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <!-- Front face -->
    <div class="flip-card-front">
      <h3>Card Title</h3>
    </div>
    <!-- Back face -->
    <div class="flip-card-back">
      <p>Revealed information on flip.</p>
    </div>
  </div>
</div>
```

**Variants:**
- `.flip-card-vertical`: Flips along the X-axis (top to bottom).
- `.flip-card-click`: Flips via focus or click (using `:focus-within`), ideal for mobile tap support. Add `tabindex="0"` to the `.flip-card` wrapper for best results.
- `.flip-slow`: Slows the transition duration to 1.1 seconds.
- `.flip-fast`: Quickens the transition duration to 0.35 seconds.

### 3. Why is it useful?
It introduces native 3D transformations (`perspective`, `transform-style`, and `backface-visibility`) to EaseMotion CSS in a purely declarative, zero-dependency, and accessible layout that degrades gracefully to a simple opacity transition for users with reduced motion preferences.
