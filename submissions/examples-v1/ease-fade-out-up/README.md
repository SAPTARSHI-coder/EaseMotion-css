# ease-fade-out-up — Fade Out While Rising (Exit Animation)

Exit animation that fades an element to opacity 0 while translating it upward. The exit counterpart to `.ease-slide-up` (enter from below).

## Classes

| Class                                        | Distance | Description                      |
| -------------------------------------------- | -------- | -------------------------------- |
| `.ease-fade-out-up`                          | 24px     | Default exit animation           |
| `.ease-fade-out-up` + `.ease-fade-out-up-sm` | 12px     | Subtle exit                      |
| `.ease-fade-out-up` + `.ease-fade-out-up-lg` | 48px     | Dramatic exit                    |
| `.ease-fade-in-down`                         | 24px     | Complementary enter (from above) |

## CSS Custom Properties

| Token                         | Default               | Description          |
| ----------------------------- | --------------------- | -------------------- |
| `--ease-fade-out-up-distance` | `24px`                | Translation distance |
| `--ease-fade-out-up-duration` | `--ease-speed-medium` | Animation duration   |
| `--ease-fade-out-up-easing`   | `--ease-ease`         | Timing function      |

## Direction family

| Direction | Enter                           | Exit                       |
| --------- | ------------------------------- | -------------------------- |
| Up        | `.ease-slide-up`                | `.ease-fade-out-up` ← this |
| Down      | `.ease-fade-in-down` ← included | `.ease-fade-out-down`      |

## Usage

```html
<!-- Toast dismissal -->
<div id="toast" class="my-toast">Saved!</div>
<script>
  const el = document.getElementById("toast");
  el.classList.add("ease-fade-out-up");
  el.addEventListener("animationend", () => el.remove(), { once: true });
</script>

<!-- Custom distance -->
<div class="ease-fade-out-up" style="--ease-fade-out-up-distance: 60px;">
  Floats away
</div>
```

## Accessibility

`animation-duration` reduced to `1ms` when `prefers-reduced-motion: reduce` is set.

Closes #11830
