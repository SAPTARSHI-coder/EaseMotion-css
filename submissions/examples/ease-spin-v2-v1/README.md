# Ease Spin — Looping Rotation Animation

**What does this do?**
Applies a continuous 360° rotation loop to any element. Ideal for loading
spinners and decorative rotating icons.

**How is it used?**
```html
<!-- Basic usage -->
<div class="ease-spin"></div>

<!-- Custom speed -->
<div class="ease-spin" style="--ease-spin-speed: 0.4s;"></div>

<!-- Reverse direction -->
<div class="ease-spin" style="--ease-spin-direction: reverse;"></div>
```

**CSS Custom Properties:**

| Property | Default | Description |
|---|---|---|
| `--ease-spin-speed` | `1s` | Duration of one full rotation |
| `--ease-spin-direction` | `normal` | `normal` or `reverse` |

**Why is it useful?**
Loading spinners and rotating decorative elements are among the most
common UI patterns. `ease-spin` provides a simple, composable utility
that works on any element with zero JavaScript, consistent with existing
EaseMotion looping utilities like `ease-bounce` and `ease-pulse`.

---

Submitted by: @bh462007
Date: 2026-06-02