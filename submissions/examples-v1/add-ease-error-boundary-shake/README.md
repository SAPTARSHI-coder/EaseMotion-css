# Error Boundary Shake (add-ease-error-boundary-shake)

A premium, wide-amplitude error boundary shake combined with a red border glow flash. Designed for section-level validation failures to instantly draw user attention to an entire form or layout block that requires correction.

## What does this do?

This animation coordinates two sensory cues:

1. **Damped Physical Shake**: Shakes the target element horizontally. Bypasses standard uniform shakes in favor of a physics-based damped harmonic oscillation (starts with high velocity/displacement and decays smoothly to rest), which feels heavy, premium, and organic.
2. **Red Border Glow Flash**: Temporarily pulses the border color and box-shadow to a bright warning red (`var(--ease-color-danger, #ef4444)`) before settling on a persistent soft red border state to highlight that errors remain.

## How is it used?

Attach the stylesheet, then structure your container markup (e.g. form, card, modal pane) as follows:

```html
<!-- Default Container -->
<form class="form-container" id="registrationForm">
  <!-- Inputs, labels, error fields inside -->
</form>
```

When validation fails, append the `.ease-form-error` class to the container:

```html
<!-- Triggered Container -->
<form class="form-container ease-form-error" id="registrationForm">
  <!-- Invalid inputs get highlighted -->
  <input class="form-input invalid-field" type="email" />
  <span class="error-msg">Please enter a valid email.</span>
</form>
```

To re-trigger the shake on subsequent validation failures, remove the class, trigger a layout reflow, and add it back:

```javascript
const form = document.getElementById("registrationForm");
form.classList.remove("ease-form-error");
void form.offsetWidth; // Force Reflow
form.classList.add("ease-form-error");
```

## Customizability

You can override standard values via custom CSS properties:

- **Shake Amplitude**: Adjust keyframe displacement values (e.g. from `16px` to larger/smaller offsets) depending on section size.
- **Damping Duration**: Defaults to `0.65s` for a snappy response. Increase or decrease in class definition.
- **Border Flash intensity**: Adjust the box-shadow alpha layer values inside keyframes (e.g. `rgba(239, 68, 68, 0.4)`).

## Design Tokens Used

This example integrates directly with the EaseMotion CSS core variables:

- `--ease-color-danger` & `--ease-color-danger-light`: Warning red hues.
- `--ease-color-surface` & `--ease-color-bg`: Light/dark adaptive background boundaries.
- `--ease-ease`: Smooth transition curve.
- `--ease-speed-medium`: Transition timing basis.

## Accessibility (a11y)

- Fully complies with WCAG guidelines for motion sensitivity.
- Supports the `prefers-reduced-motion: reduce` media query. Under reduced motion:
  - The physical shake displacement is completely disabled to avoid triggering motion sickness or vertigo.
  - The border instantly transitions to red (`0.4s` linear transition) to indicate the error state visually and safely.

## Performance

- The horizontal shake displacement utilizes 3D transforms (`translate3d`), running directly on the GPU to bypass CPU rendering cycles.
- Border and shadow changes are optimized using `will-change: transform, border-color, box-shadow` to ensure the layout remains responsive during execution.
