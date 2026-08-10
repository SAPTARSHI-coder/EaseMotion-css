# animation-fill-mode Visual Guide

## What does this do?

A visual guide to the CSS `animation-fill-mode` property — showing how `none`, `forwards`, `backwards`, and `both` control an element's style before and after an animation runs.

## How is it used?

```css
.element {
  animation: slide 2s ease 1s 1;
  animation-fill-mode: forwards; /* keeps end state */
}
```

| Value | Behavior |
|-------|----------|
| `none` | Snaps back to original styles |
| `forwards` | Keeps the last keyframe after animation ends |
| `backwards` | Applies first keyframe during the delay |
| `both` | Combines forwards + backwards |

## Why is it useful?

Understanding `animation-fill-mode` is essential for creating polished animations that don't "jump" at the start or end. Without it, elements snap back to their original state when an animation completes — which breaks effects like entrance animations (should stay visible) and transitions (should maintain end state). This guide helps developers visualize the difference, fitting EaseMotion CSS's educational and human-readable approach.
