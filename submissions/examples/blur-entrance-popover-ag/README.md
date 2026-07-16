# Blur-Entrance Popover

An interactive pure CSS popover featuring a cyberpunk layout and smooth blur-to-focus entrance states.

## 1. What does this do?

This component provides a monospaced terminal popover card that reveals itself by focusing smoothly from a highly blurred state (`filter: blur(14px)`) when triggered, dismissible on clicking outside, built entirely in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS state resets:

```html
<form action="javascript:void(0);">
  <div
    class="popover-wrapper-ag"
    style="--blur-amount: 14px; --blur-scale: 0.88;"
  >
    <!-- Checkbox Toggle -->
    <input type="checkbox" id="pop-1" class="popover-toggle-ag" />

    <!-- Click-Outside Overlay -->
    <label for="pop-1" class="popover-overlay-ag"></label>

    <!-- Warning Trigger -->
    <label for="pop-1" class="cyber-trigger-ag" tabindex="0" role="button"
      >!</label
    >

    <!-- Popover Card -->
    <div class="popover-content-ag">
      <div class="popover-header-ag">Diagnostics Info</div>
      <h3 class="popover-title-ag">Card Title</h3>
      <p class="popover-desc-ag">Content description goes here...</p>
    </div>
  </div>
</form>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

- `--blur-duration`: Blur animation duration (defaults to `0.42s`).
- `--blur-amount`: Blur radius filter size (defaults to `14px`).
- `--blur-scale`: Scale factor during entrance (defaults to `0.88`).

---

## 3. Why is it useful?

Diagnostic warning details and HUD stats overlays are key requirements for system consoles, telemetry portals, and gaming applications. By styling them in premium Cyberpunk Neon glows and leveraging HTML5 checkbox click-outside triggers, this popover performs smooth layout toggles and blur-to-focus transitions entirely in pure CSS, aligning with EaseMotion's lightweight rendering performance and zero-dependency architecture.
