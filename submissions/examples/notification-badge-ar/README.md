# Animated Notification Badge

## What does this do?
This adds a notification badge component with three variants: a plain static badge, a pop-in entrance badge that scales in with a bouncy animation, and a pulsing sonar-ring badge that emits a repeating outward ring to attract attention.

## How is it used?
Wrap any icon or avatar in a `.badge-wrapper`. Place a `.badge` span inside it as a sibling. Add `.pop` for the entrance animation or `.pulse` for the sonar ring effect.

Example:
```html
<!-- Static badge -->
<div class="badge-wrapper">
  <button class="icon-btn">🔔</button>
  <span class="badge">9</span>
</div>

<!-- Pop-in badge -->
<div class="badge-wrapper">
  <button class="icon-btn">🔔</button>
  <span class="badge pop">9</span>
</div>

<!-- Pulsing ring badge -->
<div class="badge-wrapper">
  <button class="icon-btn">⚠️</button>
  <span class="badge pulse">!</span>
</div>
```

## Why is it useful?
- The `.pop` variant uses `@keyframes badge-pop` with a bouncy cubic-bezier scale (0 → 1.25 → 1) to draw immediate attention when the badge first appears.
- The `.pulse` variant layers a `::before` pseudo-element that repeatedly scales outward and fades using `@keyframes sonar-ring`, creating a high-urgency visual signal without blinking or flashing.
- Includes `aria-label` patterns and a `prefers-reduced-motion` override to ensure full accessibility compliance.
