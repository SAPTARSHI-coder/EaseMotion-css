# CSS Wobble-Focus Modal for Dashboard Analytics Layouts

A completely JavaScript-free animated Modal featuring a dynamic "Wobble-Focus" entrance sequence. Designed specifically for **Dashboard Analytics Layouts**, this component draws immediate user attention through a physics-based, horizontal settling motion, combining translation and rotation in a single `@keyframes` animation.

## Files
- `demo.html` – Structural layout showcasing the integration of semantic HTML, SVG icons, mockup analytics charts, and the hidden checkbox hack for pure CSS state management.
- `style.css` – The stylesheet containing the custom `easeModalWobbleEntrance` keyframes, state transitions, and accessibility guardrails.

## How it works
This modal utilizes the "Checkbox Hack" to handle state without any JavaScript:
1. **State Management**: A hidden `<input type="checkbox">` dictates the open/close state. When checked, sibling selectors (`~`) expose the modal backdrop and dialog.
2. **The Wobble-Focus Entrance (`@keyframes easeModalWobbleEntrance`)**: Instead of a standard fade-in, the dialog drops in and translates rapidly across the X-axis while oscillating slightly on its rotational axis. This simulates a "settling" or "wobble" effect, drawing the user's eye directly to the modal content.
3. **Closing**: Unchecking the box removes the keyframe animation and gracefully transitions the opacity and scale back down via standard CSS transitions.

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<!-- Trigger Button -->
<label for="wobble-modal-trigger" class="ease-btn-trigger" tabindex="0">
  View Weekly Report
</label>

<!-- Hidden Checkbox -->
<input type="checkbox" id="wobble-modal-trigger" class="ease-modal-trigger-hidden" aria-hidden="true" />

<!-- Modal Structure -->
<div class="ease-modal-backdrop">
  <label for="wobble-modal-trigger" class="ease-modal-backdrop-close" aria-label="Close modal"></label>
  <div class="ease-modal-dialog" role="dialog">
    <div class="ease-modal-header">
      <h2 class="ease-modal-title">Weekly Analytics</h2>
      <label for="wobble-modal-trigger" class="ease-btn-close" tabindex="0">✖</label>
    </div>
    <div class="ease-modal-body">
      <p>Your analytics content here.</p>
    </div>
  </div>
</div>
```

## Accessibility (prefers-reduced-motion)
The component implements a strict `@media (prefers-reduced-motion: reduce)` media query. Because the "Wobble" effect relies on horizontal oscillation, it is completely bypassed (`animation: none`) for users with system-level motion reduction enabled. It safely falls back to a standard opacity and scale fade-in. The component also implements robust keyboard accessibility via `tabindex="0"` on all interactive labels.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero JavaScript overhead. Analytics dashboards often require modals to grab immediate attention for alerts or detailed reports. By offloading a complex entrance animation (the wobble focus effect) to the CSS engine, this component guarantees buttery-smooth, unblocked rendering without adding any JavaScript event listeners or animation libraries.
