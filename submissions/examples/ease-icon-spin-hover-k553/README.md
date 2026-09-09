# Ease Icon Spin Hover

## What does this do?
Triggers a **wobble-spin** on hover/focus — the icon rotates past 360°,
overshoots slightly, then settles back into place — instead of a flat,
single-speed rotation.

## How is it different from a typical spin-hover utility?
- Uses a multi-step `@keyframes` animation with an overshoot-and-settle curve,
  not a simple `transform: rotate(360deg)` transition.
- Triggers on both `:hover` and `:focus-visible` for keyboard accessibility.
- Includes a `prefers-reduced-motion` fallback that disables the animation.
- Ships a button variant (`.ease-icon-spin-hover--btn`) where the icon spins
  independently of the button's own hover state.

## How is it used?
\`\`\`html
<i class="ease-icon-spin-hover">⚙️</i>

<button class="ease-icon-spin-hover ease-icon-spin-hover--btn">
  <i class="ease-icon-spin-hover__icon">🔄</i>
  Refresh
</button>
\`\`\`

## Why is this useful?
Gives contributors a more expressive, "alive" feeling spin interaction for
icons, nav links, and buttons, while staying accessible and respecting motion
preferences — fitting EaseMotion CSS's animation-first, human-readable
philosophy.