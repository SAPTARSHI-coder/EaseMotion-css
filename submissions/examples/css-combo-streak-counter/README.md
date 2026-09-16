# CSS Combo Streak Counter (#70955)

Pure CSS combo counter component that scales in size and triggers screen-shake animation feedback on successive hits or streak milestones.

## Features
- **Multi-Level Shake Physics:** Tiered `@keyframes` shake intensity (small, medium, large, ultra) corresponding to combo count milestones.
- **Dynamic Scale Growth:** Badge scale increases progressively (`scale(1)` up to `scale(1.7)`) with neon drop-shadow glow transitions.
- **Pure CSS Execution:** Driven via radio `:checked` state selectors with zero JavaScript dependencies.
- **Accessible & Motion Friendly:** Includes `aria-live="polite"` live region support and full `@media (prefers-reduced-motion: reduce)` compliance.

## Structure
- `style.css` - Keyframe shake animations, scale dynamics, theme variables, and accessibility overrides.
- `demo.html` - Interactive demo displaying the combo badge and streak milestone triggers.
