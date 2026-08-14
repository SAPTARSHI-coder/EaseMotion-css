# Ease Notification Slide

## What does this do?
Slides notification/toast components into view with **staggered stacking**
— each notification in a stack animates in slightly after the previous one,
simulating a "push down" queue effect — instead of a single isolated slide.
Includes swipe-to-dismiss cursor affordances and top or bottom stack
positioning.

## How is it different from a typical notification-slide utility?
- Provides a `.ease-notification-slide-stack` wrapper with staggered
  `nth-child` animation delays, so multiple notifications feel queued
  rather than appearing all at once.
- Includes semantic variants (`--success`, `--error`, `--info`) with
  colored left borders.
- Direction adapts automatically based on stack position (top slides down,
  bottom slides up) via `--top-right` / `--bottom` stack modifiers.
- Adds `cursor: grab` / `touch-action: pan-y` styling as a swipe-to-dismiss
  visual affordance.

## How is it used?
\`\`\`html
<div class="ease-notification-slide-stack ease-notification-slide-stack--top-right">
  <div class="ease-notification-slide ease-notification-slide--success">
    <strong>Success</strong>
    <p>Profile updated successfully.</p>
  </div>
</div>
\`\`\`

## Why is this useful?
Real apps rarely show one toast at a time — this utility handles the
common multi-notification case with a natural staggered entrance, while
staying pure CSS and fitting EaseMotion CSS's animation-first philosophy.