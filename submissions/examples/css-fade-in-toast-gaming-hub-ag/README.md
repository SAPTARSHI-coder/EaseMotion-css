# CSS Fade-In Toast for Gaming Hub Layouts

> Resolves issue **#59101** — Enhancement: Add CSS Fade-In Toast for Gaming Hub Layouts

A pure CSS, zero-dependency toast notification system themed for gaming hub UIs. Features smooth fade-in entrance, icon pop animation, a timed progress bar, and auto-dismiss — all driven entirely by CSS keyframes and EaseMotion design tokens.

---

## ✨ Features

| Feature              | Detail                                                         |
| -------------------- | -------------------------------------------------------------- |
| **Fade-In Entrance** | `ease-toast-fade-in` — opacity + translateY + scale            |
| **Icon Pop**         | `ease-toast-icon-pop` — scale + rotate entrance                |
| **Auto-Dismiss**     | CSS `animation-delay` fades out after 4.5 s                    |
| **Progress Bar**     | `ease-toast-progress` — `scaleX` countdown strip               |
| **4 Variants**       | Achievement 🏆 · Success ✅ · Danger 💀 · Warning ⚠️           |
| **Glassmorphism**    | `backdrop-filter: blur(18px)` with dark glass BG               |
| **Responsive**       | Full-width on ≤ 480 px, fixed bottom-right on desktop          |
| **Accessible**       | `aria-live`, `role="alert"/"status"`, `prefers-reduced-motion` |

---

## 🚀 Usage

### 1. Link EaseMotion CSS

```html
<link rel="stylesheet" href="path/to/easemotion.min.css" />
<link rel="stylesheet" href="style.css" />
```

### 2. Add the toast container

```html
<div
  class="ease-toast-container"
  aria-live="polite"
  aria-label="Notifications"
></div>
```

### 3. Drop in a toast (static)

```html
<div class="ease-toast ease-toast--achievement" role="status">
  <div class="ease-toast__icon">🏆</div>
  <div class="ease-toast__body">
    <p class="ease-toast__title">Achievement Unlocked!</p>
    <p class="ease-toast__message">First Blood — you got the first kill.</p>
  </div>
  <div class="ease-toast__progress"></div>
</div>
```

### 4. Available modifier classes

| Class                      | Variant                                |
| -------------------------- | -------------------------------------- |
| `.ease-toast--achievement` | Purple glow — achievements & level-ups |
| `.ease-toast--success`     | Green glow — victories & rewards       |
| `.ease-toast--danger`      | Red glow — defeat, errors              |
| `.ease-toast--warning`     | Amber glow — low resources, alerts     |

Add `.ease-toast--autodismiss` to trigger the CSS fade-out at 4.5 s.

---

## 🎨 EaseMotion CSS tokens used

| Token                    | Usage                            |
| ------------------------ | -------------------------------- |
| `--ease-speed-medium`    | Button hover transition speed    |
| `--ease-ease`            | Smooth easing for button hover   |
| `--ease-ease-bounce`     | Entrance animation bounce easing |
| `--ease-color-neutral-*` | Background & text colours        |
| `--ease-font-sans`       | Font stack                       |

---

## ♿ Accessibility

- `aria-live="polite"` on the container announces toasts to screen readers.
- Danger toasts use `role="alert"` for immediate announcements.
- All animations are disabled when `prefers-reduced-motion: reduce` is set.

---

## 📁 Files

| File        | Description                                       |
| ----------- | ------------------------------------------------- |
| `style.css` | All keyframes, base styles, and 4 variant classes |
| `demo.html` | Static preview + interactive trigger buttons      |
