# Zoom-Out Tooltip

An interactive pure CSS tooltip featuring a minimalist tech layout and snappy zoom-out entrance states.

## 1. What does this do?

This component provides a clean monospaced tooltip card that reveals itself by scaling down slightly (zooming out) from a larger scale factor (`transform: scale(1.14)`) when hovered or focused, built entirely in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern:

```html
<div
  class="tooltip-wrapper-ag"
  style="--zoom-scale: 1.14; --zoom-duration: 0.24s;"
>
  <!-- Trigger Button -->
  <button type="button" class="tooltip-trigger-ag">?</button>

  <!-- Tooltip Card -->
  <div class="tooltip-content-ag">
    <div class="tooltip-header-ag">Diagnostics Info</div>
    <p class="tooltip-desc-ag">Content description goes here...</p>
  </div>
</div>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

- `--zoom-duration`: Transition duration (defaults to `0.24s`).
- `--zoom-scale`: Initial zoomed scale factor during hover reveal (defaults to `1.14`).
- `--zoom-ease`: SNappy tech cubic-bezier transition ease curve (defaults to `cubic-bezier(0.16, 1, 0.3, 1)` / out-expo).

---

## 3. Why is it useful?

System metric diagnostics and HUD log details are standard visual patterns for tech consoles, cloud portals, and developer panels. By using CSS hover and `:focus-within` selectors alongside standard discrete transitions (`transition-behavior: allow-discrete` and `@starting-style`), this tooltip operates completely in pure CSS with zero JavaScript overhead, aligning with EaseMotion's lightweight rendering performance goals.
