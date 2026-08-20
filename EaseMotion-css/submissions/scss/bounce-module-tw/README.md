# _bounce-module.scss

A reusable bounce-entrance mixin for EaseMotion CSS.

## What it does

Provides a `ease-bounce-module-in` keyframe plus two mixins:

- `ease-bounce-in` — a one-shot bounce entrance animation, ideal for cards, modals, and toasts appearing on screen.
- `ease-bounce-pulse` — a repeating bounce, useful for drawing attention to badges or notification icons.

Both mixins respect `prefers-reduced-motion` and fall back to a static, fully-visible state when the user has motion reduction enabled.

## Parameters

### `ease-bounce-in($duration, $timing, $delay)`

| Parameter   | Type     | Default                        | Description                        |
| ----------- | -------- | ------------------------------- | ----------------------------------- |
| `$duration` | Number   | `$ease-bounce-duration` (600ms) | Total animation length.             |
| `$timing`   | String   | `$ease-bounce-timing`           | Easing curve (back-out bounce).     |
| `$delay`    | Number   | `0ms`                           | Delay before the animation starts.  |

### `ease-bounce-pulse($duration, $iterations)`

| Parameter     | Type   | Default      | Description                          |
| ------------- | ------ | ------------ | ------------------------------------- |
| `$duration`   | Number | `900ms`      | Length of a single pulse cycle.       |
| `$iterations` | Number/Keyword | `infinite` | How many times the pulse repeats.  |

## Usage

```scss
@use "bounce-module" as *;

.notification-card {
  @include ease-bounce-in;
}

.notification-card--delayed {
  @include ease-bounce-in($duration: 450ms, $delay: 150ms);
}

.badge--unread {
  @include ease-bounce-pulse($duration: 700ms);
}
```

## Notes for maintainer

The module defines its own `!default` fallback variables (`$ease-bounce-duration`, `$ease-bounce-timing`, `$ease-bounce-distance`) so it can compile standalone. If EaseMotion's core token file already defines equivalent duration/easing tokens, these can be aliased to those instead during integration.
