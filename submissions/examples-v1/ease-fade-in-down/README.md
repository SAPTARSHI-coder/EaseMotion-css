# ease-fade-in-down — Fade In While Moving Down

Enter animation that fades in from opacity 0 while descending from above. The enter counterpart to `ease-fade-out-up`.

## Classes

| Class                     | Distance | Description    |
| ------------------------- | -------- | -------------- |
| `.ease-fade-in-down`      | 24px     | Default entry  |
| `+ .ease-fade-in-down-sm` | 12px     | Subtle entry   |
| `+ .ease-fade-in-down-lg` | 48px     | Dramatic entry |

## CSS Custom Properties

| Token                          | Default               | Description                       |
| ------------------------------ | --------------------- | --------------------------------- |
| `--ease-fade-in-down-distance` | `24px`                | Start offset above final position |
| `--ease-fade-in-down-duration` | `--ease-speed-medium` | Animation duration                |
| `--ease-fade-in-down-easing`   | `--ease-ease`         | Timing function                   |

## Direction family

| Direction | Enter                       | Exit                  |
| --------- | --------------------------- | --------------------- |
| Up        | `.ease-slide-up`            | `.ease-fade-out-up`   |
| Down      | `.ease-fade-in-down` ← this | `.ease-fade-out-down` |

## Usage

```html
<!-- Dropdown menu -->
<div class="dropdown ease-fade-in-down">...</div>

<!-- Staggered list -->
<div class="ease-fade-in-down" style="animation-delay: 0s">Item 1</div>
<div class="ease-fade-in-down" style="animation-delay: 0.1s">Item 2</div>
<div class="ease-fade-in-down" style="animation-delay: 0.2s">Item 3</div>

<!-- Custom distance -->
<div class="ease-fade-in-down" style="--ease-fade-in-down-distance: 60px;">
  Drops from further above
</div>
```

## Use cases

- Dropdown menus opening
- Notification banners entering from top
- Modal headers animating in
- Staggered list item entry
- Tooltip appearing below trigger

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set. Element rendered at full opacity immediately.

Closes #11827
