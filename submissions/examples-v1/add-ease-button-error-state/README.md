# Button Error State (add-ease-button-error-state)

An animated button state transition that shakes the button container to indicate validation or action failure, shifts the background to error red, and draws + scales in an X icon in a bouncy motion.

## What does this do?

This state transition coordinates three visual effects:

1. **Background Transition**: The button background switches smoothly to danger red (`var(--ease-color-danger, #b91c1c)`) to signal failure immediately.
2. **Container Shake**: Triggers the standard `ease-kf-shake` animation to vibrate the button container horizontally (amplitude of `6px`) to attract user focus.
3. **X Icon Draw & Pop**: The default button content slides out, and a warning X icon scales up with a spring-bounce curve (`var(--ease-ease-bounce)`) while drawing its line strokes dynamically.

## How is it used?

Structure your button container to hold the default, loading, and error states:

```html
<button class="ease-btn-action" id="submitButton">
  <!-- Default Content -->
  <span class="btn-state state-default">
    <span>Submit</span>
  </span>

  <!-- Loading Content (Spinner) -->
  <span class="btn-state state-loading">
    <span class="spinner-icon"></span>
    <span>Processing...</span>
  </span>

  <!-- Error State Content -->
  <span class="btn-state state-error">
    <svg class="btn-icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
    <span>Failed</span>
  </span&gt;
</button>
```

Toggle the classes `.is-loading` and `.ease-btn-error` via JavaScript based on the operation status:

```javascript
const btn = document.getElementById("submitButton");

// To trigger loading:
btn.classList.add("is-loading");

// To trigger error:
btn.classList.remove("is-loading");
btn.classList.add("ease-btn-error");

// To reset back to default:
btn.classList.remove("ease-btn-error");
```

_Note: If the button is clicked while in an error state, it is recommended to reset the error class before re-trying the operation._

## Timings & Specifications

- **Shake Duration**: `0.4s` using standard EaseMotion cubic-bezier curve.
- **X Icon Scale Entrance**: `0.3s` with spring bounce (`cubic-bezier(0.34, 1.56, 0.64, 1)`) triggered at a `0.15s` delay.
- **X Icon Stroke Draw**: `0.35s` triggered at a `0.15s` delay.

## Design Tokens Used

- `--ease-color-danger`: Red danger color token.
- `--ease-glow-danger`: Red warning box shadow glow.
- `--ease-ease-bounce`: Spring bounce easing curve.
- `--ease-speed-medium` & `--ease-speed-fast`: Reference timing speeds.

## Accessibility (a11y)

- Fully respects system preferences for reduced motion (`prefers-reduced-motion: reduce`).
- Under reduced motion:
  - Container shaking is bypassed.
  - The background turns red instantly.
  - The X icon stroke drawing is bypassed, rendering the X icon immediately at `scale(1)` without scaling springs.

## Performance

- The shake displacement coordinates with GPU-optimized `transform: translate3d(...)` values, ensuring a smooth 60fps refresh rate.
- Text fades and icon transitions use properties like `opacity` and `transform`, avoiding heavy browser repaints.
