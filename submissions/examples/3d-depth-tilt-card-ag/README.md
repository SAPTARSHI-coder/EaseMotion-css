# 3D Depth Tilt Card Animation

1. **What does this do?** Creates a pure CSS 3D parallax tilt card effect that deforms and offsets layers along the Z-axis in response to hover positions.
2. **How is it used?** Add the `.tilt-wrapper` container with its 9 `.tilt-zone` children and wrap the card link element `.tilt-card` inside.
3. **Why is it useful?** It provides rich tactile feedback and depth perception on cards using lightweight, hardware-accelerated CSS calculations with zero script dependencies.

---

## Technical Documentation

### 1. What the 3D Depth Effect Demonstrates
It shows how flat 2D screen cards can be projected into 3D space, separating text, badges, and glows along the Z-axis to create a parallax shift as the card tilts.

### 2. How `perspective` Creates the 3D Space
The `perspective: 1000px` property on `.tilt-wrapper` establishes the distance between the user's viewport and the z=0 plane. Smaller values increase perspective distortion, while larger values make the tilt more subtle.

### 3. How `transform-style: preserve-3d` Works
By placing `transform-style: preserve-3d` on the `.tilt-card`, we tell the browser that the children of the card should be positioned in the same 3D coordinate space, rather than being flattened into the card plane.

### 4. How `rotateX()` and `rotateY()` Create the Tilt
The card space is mapped with a 3x3 grid of transparent hover sibling elements. When hovered, sibling combinators apply combinations of positive and negative `rotateX` (vertical tilt) and `rotateY` (horizontal tilt).

### 5. How `translateZ()` Creates Layer Separation
Each child layer (glow, tag, title, description, badge, footer) has a different `translateZ()` value (from `25px` to `115px`). This pushes them forward toward the user, causing them to move faster than the background when tilted (parallax).

### 6. Customizing the Tilt Intensity
To customize how far the card tilts, adjust the variables inside `style.css`:
```css
:root {
  --tilt-rx: 15deg; /* Maximum X-axis rotation angle */
  --tilt-ry: 15deg; /* Maximum Y-axis rotation angle */
}
```

### 7. Customizing Layer Depth
To adjust the distance between layers, increase or decrease their `translateZ()` coordinates. For example, to make a badge float higher, increase its Z value:
```css
.my-layer {
  transform: translateZ(120px);
}
```

### 8. Reduced-Motion Handling
If a user requests reduced motion, `@media (prefers-reduced-motion: reduce)` is activated. This completely disables the hover grid, drops rotations and scaling, and resets all inner child Z translations to `none`, flattening the card layout.
