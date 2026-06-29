# Long-Press Circular Progress Ring (add-ease-long-press-progress)

A premium interactive button that fills a circular progress ring during an active hold (long-press) action. Once held for the full duration, it triggers a splashy success pop and checkmark transition. Ideal for high-stakes confirmation flows (e.g. "Hold to Purge Cache", "Hold to Publish", or "Hold to Confirm Payment").

## What does this do?

Coordinates three primary interactive states:
1. **Holding State (`.is-pressing`)**: Fills the circular progress SVG outline using a smooth linear transition, while scaling the button down slightly (`scale(0.94)`) to simulate physical pressure.
2. **Interrupt / Reset State**: If the hold is released early, the progress indicator instantly collapses back to `0%` (`stroke-dashoffset: 100%`) with a fast, responsive transition (`0.25s` ease-out), and the scale snaps back to `1.0`.
3. **Completion State (`.is-complete`)**: Triggers an active scale-up pop, shifts the background to success green, fires an expanding radial ripple ring, and swaps the icon to a success indicator.

## How is it used?

### HTML Markup Structure
Structure your long-press element using an SVG overlay ring and inner icons:
```html
<button class="ease-long-press-btn" id="longPressBtn">
  <!-- Progress Ring Overlay -->
  <svg class="ease-long-press-ring-svg" viewBox="0 0 80 80">
    <circle class="ease-long-press-circle-bg" cx="40" cy="40" r="38"></circle>
    <circle class="ease-long-press-circle-progress" cx="40" cy="40" r="38"></circle>
  </svg>
  
  <!-- Interactive Icons -->
  <div class="ease-long-press-content">
    <!-- Default Icon -->
    <svg class="ease-long-press-icon icon-default" ...></svg>
    <!-- Success Icon -->
    <svg class="ease-long-press-icon icon-success" style="display: none;" ...></svg>
  </div>

  <!-- Expanding Ripple Ring -->
  <div class="ease-long-press-success-ripple"></div>
</button>
```

### State-Trigger Classes
You can trigger states via CSS `:active` or manage them dynamically via JavaScript pointer events:
- **`is-pressing`**: Add during `mousedown` or `touchstart` events to begin the progress fill. Remove on `mouseup`/`touchend` to reset.
- **`is-complete`**: Add once the press timer completes to freeze progress and trigger success visual overlays.

## Customizability

Adjust settings via custom CSS properties:
- `--long-press-duration`: Speed of the circular fill (e.g. `1s`, `2.5s`).
- `--ring-size`: Absolute diameter of the circular button (e.g. `88px`).
- `--ring-stroke-width`: Thickness of the progress stroke (e.g. `4px`).
- `--ring-color`: Stroke color of the progress bar (e.g. Hex, HSL, RGB).
- `--ring-bg-color`: Track color of the background ring.
- `--btn-bg`: Base surface color of the button.
- `--btn-active-scale`: Pressed scale down size (e.g. `0.94` represents `-6%`).
- `--btn-success-color`: Color theme applied on success.

## Design Tokens Used
This example links directly to the EaseMotion CSS core design tokens:
- `--ease-color-primary`: Theme action indicator.
- `--ease-color-success`: Success confirmation color.
- `--ease-glass-border` & `--ease-glass-bg`: Context variables.
- `--ease-ease-bounce`: Custom spring curves.
- `--ease-speed-medium` & `--ease-speed-fast`: Transition timing basis.

## Accessibility (a11y)
- Supports keyboard interactions. Focus outline styles are preserved, and holding down `Spacebar` or `Enter` triggers the holding transition.
- Respects system preferences for reduced motion (`prefers-reduced-motion: reduce`). When enabled, the button bypasses active scale adjustments, success pops, and expands the ripple ring immediately without transition effects.

## Performance
- Optimizes SVG path transitions by only modifying `stroke-dashoffset` variables.
- Accelerates button scaling and success wave animations using GPU-supported `transform` properties, preventing heavy repaints.
