# Fade-In Progress Bar for Gaming Hub Layouts

Progress bars that fade in with opacity and scale on page load, designed for gaming stat dashboards.

## What does this do?

Displays multiple stat progress bars that fade in from `opacity: 0; scaleX(0)` with staggered delays, creating a smooth cascading reveal of player stats.

## How is it used?

```html
<div class="fi-track">
  <div class="fi-fill fi-fill--purple" style="--fi-pct: 78%"></div>
</div>
```

Add `.is-visible` class to trigger animation (handled by JS observer in the demo).

## Why is it useful?

Gaming dashboards display lots of stats at once. The fade-in cascade gives a clean, polished entrance that draws the eye without being overwhelming. Pure CSS with GPU-composited transforms.

## CSS Custom Properties

| Property        | Description      | Default   |
| --------------- | ---------------- | --------- |
| `--fi-purple`   | Purple variant   | `#a78bfa` |
| `--fi-green`    | Green variant    | `#34d399` |
| `--fi-amber`    | Amber variant    | `#fbbf24` |
| `--fi-red`      | Red variant      | `#f87171` |
| `--fi-track-bg` | Track background | `#1f2433` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
