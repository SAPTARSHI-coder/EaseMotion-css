# CSS Rainbow Animated Border Example

This submission demonstrates the implementation of continuous cycling rainbow borders around elements using CSS conic-gradients and keyframe animations.

---

## Technical Overview

To implement a clean rainbow border without adding empty spacing tags inside the HTML markup:

1. **Outer Wrapper (`.rainbow-card`)**: A block container with a specific border radius and `overflow: hidden`. It uses padding (e.g. `1.5px`) representing the border thickness.
2. **Pseudo-Element Background (`::before`)**: An absolute pseudo-element containing a multi-color `conic-gradient` representing the rainbow colors. It spans larger than the wrapper (e.g., `width: 150%`) to cover boundaries.
3. **Rotation Keyframe**: The pseudo-element rotates continuously via a 360-degree rotation animation.
4. **Card Inner Overlay (`.card-inner`)**: The content panel nested inside the outer block is colored to match the dashboard background, masking out the center of the rotating gradient and revealing only a thin perimeter border.

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Observe two card layouts:
   - **Glow Dashboard:** A border containing a rotating conic-gradient cycling rainbow colors around the box edges.
   - **Aurora Wave:** A border containing a static gradient shifting colors continuously using the `hue-rotate()` filter.
3. Verify that the inner content of both cards remains static and readable.
4. Check that changing browser settings to `prefers-reduced-motion` pauses the rotation animation.
