# CSS Float-Drift Modal

A pure-CSS animated modal dialog utilizing a continuous Float-Drift interaction aesthetic, designed specifically for critical E-Commerce Checkout layouts (e.g., Order Confirmation). It features a smooth entrance that seamlessly transitions into a gentle, continuous floating animation, bringing the modal to life without requiring JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a togglable modal overlay. When a user clicks a trigger button (like "Confirm & Pay"), the background overlay fades in, and the modal card scales and fades into view. Once the initial entrance transition completes, the modal begins to slowly and continuously drift up and down along the Y-axis. This subtle, organic animation ensures the modal feels prominent and distinct from the static background content. 

### 2. How is it used?

The component relies on a pure CSS checkbox hack for state management. The `.modal-checkbox` controls the visibility of the `.modal-overlay`. Inside the overlay is the `.float-drift-modal` which handles the entrance and the continuous keyframe animation.

```html
<!-- Example: Confirm Order Trigger -->
<!-- 1. The Trigger -->
<label for="modal-toggle" class="pay-btn">Confirm & Pay</label>

<!-- 2. The Hidden State Controller -->
<input type="checkbox" id="modal-toggle" class="modal-checkbox">

<!-- 3. The Modal Overlay & Container -->
<div class="modal-overlay">
  <!-- Invisible backdrop to allow clicking outside to close -->
  <label for="modal-toggle" class="modal-close-backdrop"></label>
  
  <div class="float-drift-modal">
    <!-- Modal Content (Header, Body, Footer) -->
    <label for="modal-toggle" class="modal-close-btn">X</label>
  </div>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --modal-entrance-duration: 0.4s;
  --modal-entrance-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --modal-drift-duration: 4s; /* How slowly it floats */
  --modal-drift-distance: 8px; /* How far it floats vertically */
}
```

### 3. Why is it useful?

In checkout flows, modals are often used as "gates" for critical actions—like confirming a final charge or accepting terms. Standard static modals can feel abrupt. By implementing a two-phase animation (a snappy `transition` entrance followed by an infinite `animation` drift), the interface feels highly polished, organic, and premium. Managing this entirely with CSS ensures zero JS execution delay, preventing layout jank and providing an instantly responsive UI. Additionally, the component respects user accessibility preferences, automatically degrading to a static, non-animated state if `prefers-reduced-motion` is enabled.
