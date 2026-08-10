# Skew-Active Toast for Gaming Hub Layouts

Toast notifications that enter with a skew transform, designed for gaming dashboards.

## What does this do?

Displays toast messages that slide in with a `skewY` skew effect and snap straight, giving a quick, punchy entrance that fits gaming UIs.

## How is it used?

```html
<div class="toast-container" aria-live="polite">
  <div class="toast toast--win toast--active" role="alert">
    <div class="toast__inner">
      <div class="toast__head">
        <span class="toast__title">Victory!</span>
        <button class="toast__x" aria-label="Close">&times;</button>
      </div>
      <p class="toast__body">Your team won the ranked match.</p>
    </div>
  </div>
</div>
```

## Why is it useful?

Quick, lightweight toast with a skewed entrance that feels snappy and game-like. No JS animation library needed — pure CSS transform and transition.

## CSS Custom Properties

| Property       | Description     | Default   |
| -------------- | --------------- | --------- |
| `--st-win`     | Win accent      | `#22c55e` |
| `--st-warn`    | Warning accent  | `#f59e0b` |
| `--st-info`    | Info accent     | `#6366f1` |
| `--st-surface` | Card background | `#1c1f26` |
| `--st-radius`  | Border radius   | `10px`    |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
