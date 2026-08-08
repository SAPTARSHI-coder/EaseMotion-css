# Swing-Hover Popover

An interactive pure CSS popover featuring a premium layout and elastic pendulum swing hover states.

## 1. What does this do?

This component provides a clean popover card that reveals itself and plays an elastic, damped pendulum swing animation when its trigger badge is hovered or focused, built entirely in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern:

```html
<div
  class="popover-wrapper-ag"
  style="--swing-angle: 15deg; --swing-angle-inv: -10deg;"
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

- `--swing-duration`: Animation duration (defaults to `0.78s`).
- `--swing-angle`: Positive swing angle (defaults to `15deg`).
- `--swing-angle-inv`: Negative swing angle (defaults to `-10deg`).
- `--swing-ease`: Wobble timing curve (defaults to `ease-in-out`).

---

## 3. Why is it useful?

Interactive details and responsive micro-interactions are key requirements for dashboard portals, landing pages, and pricing cards. By utilizing CSS hover and `:focus-within` selectors alongside standard discrete transitions (`transition-behavior: allow-discrete` and `@starting-style`), this popover operates completely in pure CSS with zero JavaScript overhead, aligning with EaseMotion's lightweight rendering performance goals.
