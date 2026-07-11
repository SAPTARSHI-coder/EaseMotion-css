# Ease Progress Stepper

## What does this do?
A reusable multi-step progress indicator with a **connecting-line fill that
animates proportionally to overall progress** (rather than toggling each
segment independently), and a **vertical variant that supports skipped or
optional steps** — not just active/complete states.

## How is it different from a typical stepper utility?
- The track fill width/height is driven by a single `--fill` CSS custom
  property tied to overall progress percentage, animating smoothly as
  steps change, rather than each segment snapping between two colors.
- Includes both horizontal and vertical layout variants, sharing the same
  dot/label styling.
- Supports a distinct "skipped" state (dashed outline) for optional steps
  that were bypassed, in addition to active/complete.
- Completed steps show a checkmark via CSS content, no icon dependency.

## How is it used?
\`\`\`html
<div class="ease-stepper ease-stepper--horizontal">
  <div class="ease-stepper__track">
    <div class="ease-stepper__fill" style="--fill: 40%"></div>
  </div>
  <div class="ease-stepper__steps">
    <div class="ease-stepper__step is-complete">
      <span class="ease-stepper__dot">1</span>
      <span class="ease-stepper__label">Cart</span>
    </div>
    <div class="ease-stepper__step is-active">
      <span class="ease-stepper__dot">2</span>
      <span class="ease-stepper__label">Shipping</span>
    </div>
    <!-- ... -->
  </div>
</div>
\`\`\`

See `demo.html` for the small JS driving step state and updating `--fill`
(all animation/visual logic itself is CSS).

## Why is this useful?
Multi-step flows (checkout, onboarding, forms) are extremely common, and a
proportional progress fill plus support for optional/skipped steps makes
the indicator usable well beyond a simple linear form wizard.