# Clip Reveal mixin

> Issue: [#63807](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63807)

Directional wipe entrances that reveal content without moving it.

## Setup

Call the keyframes mixin **once**, at top level:

```scss
@include clip-reveal-keyframes;
```

## Mixins

### `clip-reveal($direction, $duration, $delay, $easing, $prefix)`

```scss
.hero { @include clip-reveal("up"); }
```

Directions: `up` · `down` · `left` · `right` · `center-x` · `center-y`

### `clip-reveal-stagger($count, $step, $direction, $duration)`

Per-child wipe cascade.

### `clip-reveal-hover($direction, $duration, $easing)`

Wipe on hover/focus rather than on load — for image overlays and caption bars.

## Why it fits EaseMotion

**A translate entrance moves the element, which means it overlaps its neighbours mid-animation.** In a dense grid or a tight list that overlap reads as a glitch, and the usual fix — adding margin so there is room to move through — changes the resting layout permanently. A `clip-path` wipe animates only the visible region: the element never leaves its box, so nothing can overlap and the layout is untouched.

**The fill mode is `backwards`, deliberately not `both`** — and this is the detail that makes the mixin safe to use. `clip-path` clips descendants absolutely, including anything intentionally overflowing. With `both` fill, the final `inset(0 0 0 0)` frame stays applied forever, so a tooltip or dropdown opened *inside* a revealed card would be cut off at the card's edge long after the animation finished. `backwards` holds the opening frame through any delay but does not retain the ending frame, so `clip-path` reverts to its unclipped default once the animation completes.

That also makes the `@supports not (clip-path: inset(0))` fallback correct: where the property is unsupported the animation never runs, and because nothing is retained, the element is simply visible — which is the right degradation.

`clip-reveal-hover` uses a transition rather than an animation so it reverses cleanly on hover-out, and carries a `@media (hover: none)` guard — on touch there is no hover-out, so an overlay would latch open with no way to dismiss it. There it is shown unconditionally instead.

Reduced motion shortens rather than removes, since removal plus `backwards` fill would strand the element at its opening frame.
