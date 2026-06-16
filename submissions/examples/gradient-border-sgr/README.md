# Dynamic Gradient Border Animation

### 1. What does this do?
This component creates a colorful, rotating gradient border perimeter around cards or buttons using modern CSS conic gradients and Houdini properties.

### 2. How is it used?
Apply the `.gradient-border` class to any card or button wrapper:

```html
<div class="gradient-border">
  <!-- Card Content -->
  <h3>Aurora Card</h3>
  <p>Some description...</p>
</div>
```

**Variants:**
- **Themes**:
  - `.gradient-duo`: Two-color subtle cyan/indigo sweep.
  - `.gradient-brand`: Uses customizable pink/rose brand stops.
- **Behaviors**:
  - `.gradient-pulse`: Rotates while breathing in opacity and blur glows.
  - `.gradient-hover`: Idles as a standard dark border and activates the rotating color gradient only on hover.

**Custom Properties:**
- `--border-width`: Stroke thickness of the border ring (default: `2px`).
- `--border-speed`: Rotation sweep cycle speed (default: `4s`).
- `--border-radius`: Perimeter corner radius (default: `16px`).
- `--border-gradient`: Custom conic-gradient sequence defining border colors.

### 3. Why is it useful?
It brings premium animated border states to frameworks natively without layout thrashing. By registering Houdini's `@property --border-angle`, transitions are handled smoothly directly on the angle variable without needing heavy CPU-bound JavaScript loops. It also degrades gracefully into a beautiful static gradient border on older browsers or when prefers-reduced-motion is active.
