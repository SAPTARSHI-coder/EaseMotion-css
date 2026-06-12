# Skeleton Loading

## What does this do?

Displays animated placeholder blocks while content is loading — two variants: a moving shimmer highlight (`skeleton-shimmer`) and a gentle opacity pulse (`skeleton-pulse`).

---

## How is it used?

Add `.skeleton` to any block element to give it the base placeholder style, then add a variant class:

```html
<!-- Shimmer variant -->
<div class="skeleton skeleton-image skeleton-shimmer"></div>
<div class="skeleton skeleton-line skeleton-line--wide skeleton-shimmer"></div>

<!-- Pulse variant -->
<div class="skeleton skeleton-avatar skeleton-pulse"></div>
<div class="skeleton skeleton-line skeleton-line--medium skeleton-pulse"></div>
```

Available shape helpers:

| Class                   | Description                 |
| ----------------------- | --------------------------- |
| `skeleton-image`        | Full-width 160px image band |
| `skeleton-avatar`       | 40px circular avatar        |
| `skeleton-line`         | Short text-line bar         |
| `skeleton-line--full`   | 100% width                  |
| `skeleton-line--wide`   | 75% width                   |
| `skeleton-line--medium` | 55% width                   |
| `skeleton-line--narrow` | 35% width                   |

---

## Why is it useful?

Skeleton screens reduce perceived load time by showing the shape of content before data arrives. This implementation is pure CSS — no JavaScript, no dependencies. It fits EaseMotion CSS's animation-first philosophy: a keyframe animation (`skeleton-shimmer` or `skeleton-pulse`) does all the work, and the effect is composable on any element.
