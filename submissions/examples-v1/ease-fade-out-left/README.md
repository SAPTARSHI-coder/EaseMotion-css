# ease-fade-out-left — Fade Out While Moving Left

Exit animation that fades an element to opacity 0 while translating it left. The directional counterpart to the existing `.ease-slide-in-left`.

## Classes

| Class                                            | Distance | Description                   |
| ------------------------------------------------ | -------- | ----------------------------- |
| `.ease-fade-out-left`                            | 32px     | Default exit animation        |
| `.ease-fade-out-left` + `.ease-fade-out-left-sm` | 16px     | Subtle exit                   |
| `.ease-fade-out-left` + `.ease-fade-out-left-lg` | 64px     | Dramatic exit                 |
| `.ease-fade-in-right`                            | 32px     | Complementary enter animation |

## CSS Custom Properties

| Token                           | Default               | Description          |
| ------------------------------- | --------------------- | -------------------- |
| `--ease-fade-out-left-distance` | `32px`                | Translation distance |
| `--ease-fade-out-left-duration` | `--ease-speed-medium` | Animation duration   |
| `--ease-fade-out-left-easing`   | `--ease-ease`         | Timing function      |

## Usage

```html
<!-- Add class to trigger exit -->
<div class="ease-fade-out-left">Exits left</div>

<!-- Remove item after animation -->
<div id="item" class="list-item">
  <button
    onclick="
    const el = document.getElementById('item');
    el.classList.add('ease-fade-out-left');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  "
  >
    Dismiss
  </button>
</div>

<!-- Custom distance -->
<div class="ease-fade-out-left" style="--ease-fade-out-left-distance: 80px;">
  Far exit
</div>

<!-- Page transition pair -->
<!-- Outgoing page -->
<div class="ease-fade-out-left">Old content</div>
<!-- Incoming page -->
<div class="ease-fade-in-right">New content</div>
```

## Direction family

EaseMotion CSS follows a consistent naming pattern:

- `ease-slide-in-left` → enter from left
- `ease-fade-out-left` → exit to left ← this submission
- `ease-slide-in-right` → enter from right
- `ease-fade-in-right` → enter from right (fade variant) ← included

## Accessibility

`animation-duration` is reduced to `1ms` when `prefers-reduced-motion: reduce` is set, effectively disabling the animation while preserving the final state.

Closes #11832
