# Wobble-Focus Popover

An interactive pure CSS popover featuring a glassmorphic layout and elastic wobble entrance states.

## 1. What does this do?

This component provides a frosted-glass popover that opens with a physical squash-and-stretch wobble animation when triggered, dismissible on clicking outside, built entirely in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS state resets:

```html
<form action="javascript:void(0);">
  <div
    class="popover-wrapper-ag"
    style="--wobble-scale-x: 1.15; --wobble-scale-y: 0.85;"
  >
    <!-- Checkbox Toggle -->
    <input type="checkbox" id="pop-1" class="popover-toggle-ag" />

    <!-- Click-Outside Overlay -->
    <label for="pop-1" class="popover-overlay-ag"></label>

    <!-- Button Trigger -->
    <label for="pop-1" class="btn-trigger-ag" tabindex="0" role="button"
      >?</label
    >

    <!-- Popover Card -->
    <div class="popover-content-ag">
      <div class="popover-header-ag">Header Info</div>
      <h3 class="popover-title-ag">Card Title</h3>
      <p class="popover-desc-ag">Content description goes here...</p>
    </div>
  </div>
</form>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

- `--wobble-duration`: Wobble animation duration (defaults to `0.62s`).
- `--wobble-scale-x`: Squash horizontal scale factor (defaults to `1.14`).
- `--wobble-scale-y`: Stretch vertical scale factor (defaults to `0.86`).
- `--wobble-ease`: Squash spring easing curve (defaults to `cubic-bezier(0.34, 1.56, 0.64, 1)` / `--ease-ease-bounce`).

---

## 3. Why is it useful?

Contextual help alerts and settings cards are key requirements for complex dashboards and portal layouts. By styling them in premium Glassmorphism and leveraging HTML5 checkbox click-outside triggers, this popover performs smooth layout toggles and wobble squash animations entirely in pure CSS, aligning with EaseMotion's lightweight rendering performance and zero-dependency architecture.
