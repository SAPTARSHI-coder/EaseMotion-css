# Success Toast Component

An interactive, accessible, dependency-free confirmation toast component for web applications featuring an emerald green design system and an energetic spring-bounce check icon entry animation.

## What It Does

Displays a prominent, non-disruptive success notification when user actions (such as saving settings, completing payments, or updating data) succeed. It includes a check icon that enters with a scale-bounce keyframe physics effect, an auto-dismiss progress countdown, and explicit dismiss controls.

## How to Run / View

1. Open `demo.html` directly in any standard web browser (no build tools, CDNs, or local servers required).
2. Click **Trigger Success Toast** or **Replay Animation** to pop up the notification.
3. Click **Dismiss** or the close button (`×`) to hide the toast immediately.

## Main Animation Behavior

- **Toast Slide Entrance**: Smoothly slides up (`translateY(1.5rem)`) while scaling from `0.95` to `1` with cubic-bezier acceleration (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Icon Spring Bounce**: The check icon wrapper utilizes `@keyframes spring-bounce` to pop in from `scale(0)` up to `scale(1.35)`, settling dynamically to `scale(1)` through realistic spring physics.
- **Checkmark Stroke Reveal**: SVG path uses `@keyframes checkmark-draw` with `stroke-dasharray` and `stroke-dashoffset` to trace out the check stroke right as the icon finishes bouncing.
- **Timer Progress Bar**: A linear bottom progress indicator depletes over 4 seconds, automatically pausing when hovered or focused.

## Accessibility & Reduced Motion Support

- **Screen Readers**: Employs `role="status"`, `aria-live="polite"`, and `aria-atomic="true"` on the notification container to announce updates without stealing focus.
- **Keyboard Navigation**: Fully accessible close and control buttons with custom `:focus-visible` focus rings and <kbd>Escape</kbd> key dismiss handling.
- **Reduced Motion**: Respects user preferences via `@media (prefers-reduced-motion: reduce)` by disabling spring transforms and stroke animations in favor of smooth opacity fades.
