# CSS-Only Animated Progress Stepper

Multi-step progress indicator with animated step transitions and multiple layout variants.

## What does this do?

Provides a step-by-step progress indicator showing completed, active, and pending steps. Includes horizontal and vertical layouts, compact variant, and animated transitions between steps.

## How is it used?

```html
<div class="stepper">
  <div class="stepper__step stepper__step--completed">
    <div class="stepper__circle"></div>
    <div class="stepper__label">Step 1</div>
    <div class="stepper__description">Description</div>
  </div>
  <div class="stepper__step stepper__step--active">
    <div class="stepper__circle">2</div>
    <div class="stepper__label">Step 2</div>
    <div class="stepper__description">Description</div>
  </div>
  <div class="stepper__step">
    <div class="stepper__circle">3</div>
    <div class="stepper__label">Step 3</div>
    <div class="stepper__description">Description</div>
  </div>
</div>
```

### Variants

```html
<!-- Vertical layout -->
<div class="stepper stepper--vertical">...</div>

<!-- Compact size -->
<div class="stepper stepper--compact">...</div>
```

## Why is it useful?

- **Clear progress** — visual indication of completed, active, and pending steps
- **Animated** — active step pulses, completed steps fill with checkmark
- **Multiple layouts** — horizontal and vertical variants
- **Accessible** — semantic structure, reduced motion support
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Production-ready** — suitable for checkout flows, onboarding, and multi-step forms
