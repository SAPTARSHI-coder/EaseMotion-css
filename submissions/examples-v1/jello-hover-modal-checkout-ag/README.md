# Jello-Hover E-Commerce Checkout Modal

A premium, keyboard-accessible, and fully responsive pure CSS modal component featuring a smooth, wobbly Jello-Hover interaction transition tailored for e-commerce checkout aesthetics.

## Answers to Key Questions

### 1. What does this do?

This component displays an interactive secure payment confirmation modal styled like high-end checkout summaries that triggers a playful, elastic "jello" wobble animation on hover.

### 2. How is it used?

Apply the class `.ease-jello-hover` to any modal card or element to immediately enable the jello hover effect, and customize the timing or stretch factors using standard CSS custom properties.

```html
<!-- Modal Card -->
<div class="ease-modal-card ease-jello-hover">
  <!-- Interactive Credit Card Mockup -->
  <div class="credit-card-mockup ease-jello-hover">
    <!-- Card content here -->
  </div>
</div>
```

### 3. Why is it useful?

It provides e-commerce builders with a micro-interactive, responsive feedback element that captures user attention during checkout using zero-overhead CSS keyframe adjustments rather than expensive JS animation libraries, matching EaseMotion's focus on lightweight performance.

---

## Customizable CSS Custom Properties

Expose the following variables in the `:root` pseudo-class to fine-tune the jello physics and layout themes:

| CSS Custom Property              | Default Value                      | Description                                                      |
| -------------------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| `--ease-jello-duration`          | `0.8s`                             | The total animation duration of the jello wobble.                |
| `--ease-jello-easing`            | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Easing function applied to the keyframe progression.             |
| `--ease-jello-s1-x` / `s1-y`     | `1.15` / `0.85`                    | Scaling stretch coefficients along X/Y axes at the first bounce. |
| `--ease-jello-sk1`               | `-5deg`                            | Skew angle coefficient at the first bounce.                      |
| `--ease-modal-entrance-duration` | `0.45s`                            | Timing for the spring-pop entrance of the modal.                 |
| `--checkout-primary`             | `#6366f1` (indigo)                 | Accent brand color for active checkouts.                         |
