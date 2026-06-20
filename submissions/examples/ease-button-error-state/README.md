# Animation: ease-button-error-state

A small, accessible button error state that **shakes** and shows clear visual feedback.

## Description

This example demonstrates a reusable CSS pattern:
- Add `.is-error` to a button to activate the error styling.
- The button shakes via the `@keyframes easeButtonShake` keyframes.
- `aria-invalid="true"` is applied while the error state is active.
- Shake is disabled for users who prefer reduced motion.

## Usage

### HTML
- Apply the `.ease-btn` class to your button.
- Toggle `.is-error` when you want the error state.

### JavaScript
- In the demo, clicking **Trigger error state** sets `aria-invalid="true"`, adds `.is-error`, and removes both after ~1 second.

## Acceptance Criteria

- Button shakes during error state
  - Uses a dedicated `@keyframes` (`easeButtonShake`)
  - Error state applies the shake animation and red visual styling
- Button shows error styling
  - Red border/glow and subtle background/text changes
- Accessibility
  - `aria-invalid="true"` while in error state
  - Includes an `aria-live="polite"` message
- Reduced motion
  - `prefers-reduced-motion: reduce` disables the shake animation

