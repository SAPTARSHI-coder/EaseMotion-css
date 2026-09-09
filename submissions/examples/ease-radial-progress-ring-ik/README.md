# EaseMotion CSS — Radial Progress Ring Component (`ease-radial-progress-ring-ik`)

Animated SVG circular progress indicators (`ease-radial-fill`) featuring smooth `stroke-dasharray` fill transitions and status percentage badges.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a circular radial progress ring component (`ease-radial-fill`) that animates SVG stroke fill offsets (`stroke-dashoffset`) for displaying system metrics, disk usage, and task completion percentages.

---

## 2. How is it used?

Apply the `ease-radial-fill` class to SVG circle elements:

```html
<div class="radial-ring-container">
  <svg viewBox="0 0 120 120">
    <circle class="ring-bg" cx="60" cy="60" r="50" />
    <circle class="ring-fill ease-radial-fill fill-75" cx="60" cy="60" r="50" />
  </svg>
  <div class="ring-label">75%</div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on lightweight visual data representations. SVG radial progress rings deliver hardware-accelerated 60fps stroke transitions with zero JavaScript overhead while supporting `prefers-reduced-motion` settings.
