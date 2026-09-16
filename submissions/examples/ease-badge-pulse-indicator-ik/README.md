# EaseMotion CSS — Notification Badge Pulse Indicator (`ease-badge-pulse-indicator-ik`)

Notification status badge indicators (`ease-badge`) featuring continuous expanding ripple pulse animations (`pulse-ring`), status color variants, and reduced-motion compliance.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a notification status badge component (`ease-badge`) that renders an expanding ripple ring animation (`pulse-ring`) around indicator dots to signal live system activity, alerts, or pending updates.

---

## 2. How is it used?

Apply the `ease-badge` class to status indicators:

```html
<span class="ease-badge badge-live">
  <span class="pulse-ring"></span>
  <span class="badge-dot"></span>
  <span>Live System</span>
</span>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on effective visual status communication. The Badge Pulse Indicator delivers 60fps GPU compositor scale interpolation while honoring `prefers-reduced-motion` settings.
