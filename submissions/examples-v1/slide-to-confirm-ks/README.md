# Slide to Confirm

A pure CSS slide-to-confirm interaction component for irreversible actions like deletions, payments, and order placements.

## What does this do?

A visual slider that requires users to explicitly toggle a thumb to confirm critical, irreversible actions — preventing accidental clicks.

## How is it used?

```html
<div class="slide-to-confirm" role="group" aria-label="Slide to confirm">
  <input type="checkbox" id="confirm-action" class="slide-to-confirm__checkbox">
  <label for="confirm-action" class="slide-to-confirm__track" tabindex="0">
    <span class="slide-to-confirm__label">Slide to confirm</span>
    <span class="slide-to-confirm__thumb" aria-hidden="true">
      <!-- Arrow SVG -->
    </span>
    <span class="slide-to-confirm__confirm" aria-hidden="true">
      <!-- Checkmark SVG -->
    </span>
  </label>
</div>
```

**Variants:**
- `.slide-to-confirm--delete` — Red theme for destructive actions
- `.slide-to-confirm--payment` — Amber theme for monetary transactions
- `.slide-to-confirm--compact` — Smaller footprint for inline use
- `.slide-to-confirm--outline` — Transparent track for light-weight UIs
- `.slide-to-confirm--resettable` — Allows unchecking to undo confirmation

## Why is it useful?

Slide-to-confirm is a well-established mobile and touch UI pattern that adds intentional friction to irreversible actions — reducing accidental taps, improving decision clarity, and providing satisfying haptic-like visual feedback. This pure CSS implementation delivers the pattern without JavaScript, fits EaseMotion's philosophy of accessible, performant, framework-agnostic motion components, and is production-ready with dark mode, high contrast, forced-colors, reduced motion, keyboard accessibility, and ARIA support.
