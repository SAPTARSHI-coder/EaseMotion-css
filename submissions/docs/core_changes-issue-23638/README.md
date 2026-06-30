# Toast Auto-Dismiss Timer and Progress Bar

## 1. What does this do?

Adds auto-dismiss behavior and exit animation to the EaseMotion toast component (`components/toast.css`).

**New CSS:**

- `.ease-toast-dismiss` — Exit animation class using existing `ease-kf-slide-out-right` keyframe
- `.ease-toast-progress` — Shrinking progress bar sub-element indicating time remaining
- `--ease-toast-duration` — CSS custom property defaulting to 4s, controls both dismiss timer and progress bar speed
- Per-type progress bar colors (success, danger, warning, info)
- Pause on hover via `animation-play-state: paused`
- `prefers-reduced-motion` gracefully hides animation

**Recommended markup:**

```html
<div
  class="ease-toast ease-toast-success"
  role="alert"
  aria-live="polite"
  style="--ease-toast-duration: 5s;"
>
  <div class="ease-toast-body">
    <strong>Saved</strong>
    <p>Your changes have been saved.</p>
  </div>
  <div class="ease-toast-progress"></div>
</div>
```

## 2. How is it used?

```javascript
function showToast(type, title, message, duration) {
  var toast = document.createElement("div");
  toast.className = "ease-toast ease-toast-enter ease-toast-" + type;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");
  toast.style.setProperty("--ease-toast-duration", (duration || 4) + "s");
  toast.innerHTML =
    '<div class="ease-toast-body"><strong>' +
    title +
    "</strong><p>" +
    message +
    "</p></div>" +
    '<div class="ease-toast-progress"></div>';

  document.body.appendChild(toast);

  setTimeout(
    function () {
      toast.classList.remove("ease-toast-enter");
      toast.classList.add("ease-toast-dismiss");
      setTimeout(function () {
        toast.remove();
      }, 350);
    },
    (duration || 4) * 1000
  );
}
```

## 3. Why is this useful?

- **Auto-dismiss** — Toasts disappear automatically without manual removal
- **Visual feedback** — Progress bar shows remaining time at a glance
- **Pause on hover** — Users can read long messages without losing them
- **Per-type colors** — Progress bar matches toast type (success/danger/etc.)
- **Configurable** — Adjust `--ease-toast-duration` per toast or globally
- **Accessible** — Add `role="alert"` and `aria-live="polite"` for screen readers
- **Smooth exit** — Slide-out animation matches the entrance style
