# Pure-CSS Animated Sliding Tabs Component

An isolated navigation component submission introducing the sliding underline indicator layout preset (`.ease-tabs-container`). Uses native CSS sibling combinator streams to drive sliding state changes without causing JavaScript layout recalculations.

## Functional Controls

- **Zero JS State Tracking:** Leverages standard radio inputs (`:checked`) to coordinate component layout changes. It completely skips the need for expensive `.getBoundingClientRect()` layout calls or resize event polling hooks.
- **Hardware Accelerated Sliding:** Animates active tracking indicator changes entirely via 3D matrix shifts (`translate3d()`). This keeps paint times low and isolates operations strictly within the GPU compositor stream for steady 60fps animations.
- **Keyboard Navigation Compliant:** Works naturally with standard keyboard controls. Users can cycle through navigation groups seamlessly using arrow keys while focus outlines maintain visibility bounds (`:focus-visible`).

## Usage Layout Structure

```html
<input
  type="radio"
  id="tab-1"
  name="tab-group"
  class="ease-tab-input"
  checked
/>
<input type="radio" id="tab-2" name="tab-group" class="ease-tab-input" />

<div class="ease-tabs-container">
  <label for="tab-1" class="ease-tab-label">Label One</label>
  <label for="tab-2" class="ease-tab-label">Label Two</label>
  <div class="ease-tabs-indicator"></div>
</div>
```

Closes #13305
