# Skeleton Shimmer Animation — Issue #14163

## What does this do?

Adds a skeleton loading shimmer — a moving gradient highlight that indicates content is loading. Drop `.ease-shimmer` on any block element to turn it into a shimmer placeholder.

## How is it used?

```html
<div class="ease-shimmer" style="width:100%;height:12px"></div>
<div
  class="ease-shimmer ease-shimmer-circle"
  style="width:48px;height:48px"
></div>
```

## Classes

| Class                  | Description                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `.ease-shimmer`        | Base shimmer — gradient background, `background-size: 200% 100%`, `easeShimmer` animation |
| `.ease-shimmer-sm`     | 4px border-radius                                                                         |
| `.ease-shimmer-md`     | 6px border-radius (default)                                                               |
| `.ease-shimmer-lg`     | 10px border-radius                                                                        |
| `.ease-shimmer-xl`     | 14px border-radius                                                                        |
| `.ease-shimmer-circle` | 50% border-radius for avatars/icons                                                       |

## Keyframes

```css
@keyframes easeShimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

## CSS Custom Properties

| Property                   | Default (dark)           | Default (light) |
| -------------------------- | ------------------------ | --------------- |
| `--ease-shimmer-base`      | `rgba(255,255,255,0.04)` | `#e5e7eb`       |
| `--ease-shimmer-highlight` | `rgba(255,255,255,0.08)` | `#f3f4f6`       |

Override per element: `style="--ease-shimmer-base:#1e3a5f;--ease-shimmer-highlight:#2d5a8e"`

## Why is it useful for EaseMotion CSS?

Skeleton loaders are one of the most common UI patterns — used in every app with async data. This provides a consistent, theme-aware shimmer that works on any element shape.
