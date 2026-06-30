# Fire Flicker Animation (`ease-fire`)

### 1. What does this do?

The `ease-fire` utility creates a dynamic, flickering effect that mimics the natural movement of a flame. It combines irregular opacity changes, subtle scaling, and a warm multi-tone glow (`box-shadow`) to create an organic atmospheric presence.

### 2. How is it used?

Apply the `ease-fire` class to icons, buttons, or decorative elements.

```html
<span class="ease-fire">🔥</span>

<button class="ease-fire">Urgent Action</button>
```

### 3. Why is it useful?

Unlike standard rhythmic pulsing, `ease-fire` uses irregular keyframe stops to break the mechanical feel of CSS animations. This makes it ideal for:

- Creating ambient "living" UI elements.
- Drawing urgent attention to limited-time offers or warnings.
- Adding character to icons and decorative graphics.
- Success or failure states that require a "hot" dramatic flair.

---

**Implementation Details:**

- Follows specification from Issue #11903.
- Features **8 irregular keyframe stops** for a natural flicker.
- Combines `scale(0.98)` to `scale(1.03)` with shifting warm glows.
- Performance-optimized using hardware-accelerated transforms.
