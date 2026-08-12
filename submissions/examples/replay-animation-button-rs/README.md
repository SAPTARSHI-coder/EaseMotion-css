# Replayable Animation Button

## What does this do?
This submission provides an accessible replayable animation pattern that allows CSS animations to be restarted on demand while respecting user motion preferences and preventing overlapping replays.

## How is it used?

The demo includes an animated element and a replay button. Clicking the button removes and reapplies the animation class using a forced reflow to restart the animation safely.

The implementation includes:

a disabled button state while the animation is running,
a visible keyboard focus indicator,
an aria-live status region for screen reader announcements,
and a prefers-reduced-motion fallback that disables the animation when the user has requested reduced motion.

## Why is it useful?

EaseMotion CSS is animation-first and composable, but replay-on-click examples often omit accessibility considerations such as reduced-motion support, keyboard accessibility, and protection against repeated triggers. This submission demonstrates an accessible default implementation that users can adopt alongside future .ease-* replay utilities without additional complexity.