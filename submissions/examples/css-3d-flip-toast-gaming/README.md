# 3D-Flip Toast for Gaming Hub Layouts

Toast notifications that flip in using CSS 3D perspective transforms, designed for gaming dashboards.

## What does this do?

Displays animated toast notifications that flip into view using `rotateX` perspective transforms, with a countdown progress bar and type-specific accent colors for achievements, XP gains, loot drops, and streaks.

## How is it used?

```html
<div class="toast-stack" aria-live="polite">
  <div class="toast toast--achievement" role="alert">
    <span class="toast__icon">🏆</span>
    <div class="toast__body">
      <strong class="toast__title">Achievement Unlocked!</strong>
      <p class="toast__msg">First Blood — Eliminated 1 enemy</p>
    </div>
    <button class="toast__close" aria-label="Dismiss">&times;</button>
  </div>
</div>
```

## Why is it useful?

Gaming UIs need flashy, snappy feedback that matches the energy of gameplay. These toasts use pure CSS 3D transforms (`perspective` + `rotateX`) for a card-flip entrance that feels tactile and game-like, without any JS animation library.

## CSS Custom Properties

| Property            | Description        | Default   |
| ------------------- | ------------------ | --------- |
| `--toast-width`     | Toast card width   | `340px`   |
| `--clr-achievement` | Achievement accent | `#f0b429` |
| `--clr-xp`          | XP accent          | `#58a6ff` |
| `--clr-loot`        | Loot accent        | `#bc8cff` |
| `--clr-streak`      | Streak accent      | `#f97583` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
