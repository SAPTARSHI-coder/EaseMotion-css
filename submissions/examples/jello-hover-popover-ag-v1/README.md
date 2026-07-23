# Jello-Hover Popover

An interactive pure CSS popover featuring a playful layout and elastic jello skew hover states.

## 1. What does this do?

This component provides a clean popover card that reveals itself and plays an elastic, damped jello-shake skew animation when its trigger badge is hovered or focused, built entirely in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern:

```html
<div
  class="popover-wrapper-ag"
  style="--jello-skew-x: -12deg; --jello-skew-y: -12deg;"
>
  <!-- Trigger Button -->
  <button type="button" class="badge-trigger-ag">?</button>

  <!-- Popover Content Card -->
  <div class="popover-content-ag">
    <div class="popover-header-ag">Diagnostics Info</div>
    <h3 class="popover-title-ag">Card Title</h3>
    <p class="popover-desc-ag">Content description goes here...</p>
  </div>
</div>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

- `--jello-duration`: Animation duration (defaults to `0.72s`).
- `--jello-skew-x`: Horizontal skew factor (defaults to `-13deg`).
- `--jello-skew-y`: Vertical skew factor (defaults to `-13deg`).
- `--jello-ease`: Wobble timing curve (defaults to `ease-in-out`).

---

## 3. Why is it useful?

Playful details and responsive micro-interactions are key requirements for dashboard portals, gamified apps, and modern educational platforms. By utilizing CSS hover and `:focus-within` selectors alongside standard discrete transitions (`transition-behavior: allow-discrete` and `@starting-style`), this popover operates completely in pure CSS with zero JavaScript overhead, aligning with EaseMotion's lightweight rendering performance goals.
