# animation-direction Visual Guide

## What does this do?

A visual guide to the CSS `animation-direction` property — showing how `normal`, `reverse`, `alternate`, and `alternate-reverse` control playback direction.

## How is it used?

```css
.element {
  animation: slide 2s ease-in-out 2;
  animation-direction: alternate; /* back and forth */
}
```

| Value               | Behavior                                   |
| ------------------- | ------------------------------------------ |
| `normal`            | 0% → 100% every cycle                      |
| `reverse`           | 100% → 0% every cycle                      |
| `alternate`         | 0% → 100%, then 100% → 0% (back and forth) |
| `alternate-reverse` | 100% → 0%, then 0% → 100%                  |

## Why is it useful?

`animation-direction` is essential for creating natural back-and-forth motion (like pendulums, breathing, or loading indicators) without duplicating keyframes. Understanding the four modes prevents confusing animation behavior and enables complex looping patterns with minimal code — fitting EaseMotion CSS's philosophy of readable, composable animation utilities.
