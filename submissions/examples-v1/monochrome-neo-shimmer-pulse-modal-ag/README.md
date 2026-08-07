# Monochrome Neo Shimmer Pulse Modal

## 1. What does this do?

This component provides a pure CSS overlay modal that fades, scales, and pulses into position with a single-shot spring overshoot while triggering an elegant silver shimmer sweep, styled in a minimalist Monochrome Neo aesthetic.

## 2. How is it used?

Anchor the modal to a trigger link using standard target IDs and wrap the inner contents with a shimmer highlight element.

### HTML Structure:

```html
<!-- Trigger Anchor Link -->
<a href="#neo-modal" class="neo-trigger-btn"> INITIALIZE MODAL </a>

<!-- Modal Overlay Wrapper (target ID matches the anchor link href) -->
<div
  id="neo-modal"
  class="ease-neo-modal-overlay"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title-id"
>
  <div class="ease-neo-modal-content">
    <!-- Shimmer Sweep Line Decorator -->
    <div class="ease-neo-shimmer-highlight"></div>

    <!-- Close Link (resolves target) -->
    <a href="#" class="neo-close-x" aria-label="Close modal">&times;</a>

    <div class="modal-title-wrap">
      <h2 id="modal-title-id" class="modal-title">SECURE CORE LINK</h2>
      <span class="modal-code-tag">SYSTEM CODE: MN-993-SHIMMER</span>
    </div>

    <p class="modal-desc">
      Access connection validated. The matrix is running overrides.
    </p>

    <div class="modal-actions">
      <a href="#" class="modal-btn-confirm">CONFIRM LINK</a>
      <a href="#" class="modal-btn-close">TERMINATE</a>
    </div>
  </div>
</div>
```

### CSS Custom Properties:

Exposed parameters can be modified on `:root` or locally inside custom wrapper classes:

- `--modal-duration`: Opening transition speed (default: `0.45s`).
- `--modal-scale-start`: Beginning scale factor of the content box (default: `0.94`).
- `--shimmer-duration`: Time duration for the silver sweep gradient loop (default: `1.6s`).
- `--shimmer-color`: High-contrast highlight sweep color (default: `rgba(255, 255, 255, 0.16)`).
- `--pulse-color`: Color and alpha glow used during the initial bounce shadow pulse (default: `rgba(255, 255, 255, 0.25)`).

---

## 3. Why is it useful?

It conforms to EaseMotion's framework principles by enabling highly interactive modal states and animations with zero JavaScript overhead. By using standard CSS `:target` triggers, browser-native dialog structures, and optimized keyframe animations, the modal ensures clean rendering, full keyboard accessibility support, and hardware acceleration, while maintaining an elegant design.
