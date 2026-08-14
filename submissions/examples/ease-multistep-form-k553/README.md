# Ease Multi-Step Form

## What does this do?
A multi-step registration form with **direction-aware** slide transitions —
moving forward slides the new step in from the right, moving back slides it
in from the left — plus a step indicator that fills progressively and shakes
on validation failure.

## How is it different from a typical multi-step form utility?
- Transitions are direction-aware (forward vs. back navigate visually
  differently), not a single fixed slide direction.
- The step indicator's connecting line animates its fill as you progress,
  rather than just toggling active/inactive dot colors.
- Failed validation triggers a shake animation on both the invalid input(s)
  and the current step dot, giving clear visual feedback without blocking
  navigation silently.
- Respects `prefers-reduced-motion`.

## How is it used?
\`\`\`html
<div class="ease-multistep-form">
  <div class="ease-multistep-form__indicator">
    <div class="step-dot active" data-step="1">1</div>
    <div class="step-line"></div>
    <div class="step-dot" data-step="2">2</div>
  </div>
  <div class="ease-multistep-form__viewport">
    <div class="ease-multistep-form__step is-active" data-step="1">...</div>
    <div class="ease-multistep-form__step" data-step="2">...</div>
  </div>
</div>
\`\`\`

See `demo.html` for the JS driving step navigation and validation (kept
minimal — all animation logic lives in CSS classes toggled by JS).

## Why is this useful?
Registration and onboarding flows are extremely common, and giving users a
directional sense of progress (forward/back) plus clear validation feedback
makes multi-step forms feel more polished and less disorienting — a good
real-world showcase for EaseMotion CSS's animation-first approach.