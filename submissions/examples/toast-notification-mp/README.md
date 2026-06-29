# Toast Notification Component — `toast-notification-mp`

**EaseMotion CSS Submission** | Issue [#27987](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27987)  
**Track:** Standard (HTML/CSS) → `submissions/examples/toast-notification-mp/`

---

## What does this do?

A fully self-contained animated toast notification system with four variants (Success, Error, Warning, Info), smooth slide-and-fade entrance/exit animations, auto-dismiss with a progress bar, manual close, simultaneous stacking, and full light/dark theme support — no external dependencies required.

---

## How is it used?

### 1. Link the stylesheet
```html
<link rel="stylesheet" href="style.css" />
```

### 2. Add the toast container
Place this once in your page (ideally just before `</body>`). The `aria-live` attribute ensures screen readers announce new toasts automatically.

```html
<div
  class="toast-container-mp"
  id="toastContainer"
  aria-live="polite"
  aria-label="Notifications"
  role="region"
></div>
```

### 3. Toast HTML structure
Each toast follows this structure:

```html
<div class="toast-mp toast-success-mp" role="alert" aria-live="assertive" aria-atomic="true">
  <!-- Icon (SVG) -->
  <svg class="toast-icon-mp" ...></svg>

  <!-- Body -->
  <div class="toast-body-mp">
    <p class="toast-title-mp">Changes saved</p>
    <p class="toast-message-mp">Your profile has been updated successfully.</p>
  </div>

  <!-- Close button -->
  <button class="toast-close-mp" aria-label="Dismiss notification">✕</button>

  <!-- Auto-dismiss progress bar -->
  <div class="toast-progress-mp" aria-hidden="true">
    <div class="toast-progress-bar-mp" style="animation: toast-progress-mp 4000ms linear forwards;"></div>
  </div>
</div>
```

### 4. Available variant classes

| Variant   | Class to add            |
|-----------|-------------------------|
| Success   | `toast-success-mp`      |
| Error     | `toast-error-mp`        |
| Warning   | `toast-warning-mp`      |
| Info      | `toast-info-mp`         |

### 5. Dismiss with exit animation
Add the `toast-exit-mp` class to trigger the exit animation, then remove the element after the animation ends:

```js
function dismissToast(id) {
  const el = document.getElementById(id);
  if (!el || el.classList.contains('toast-exit-mp')) return;
  el.classList.add('toast-exit-mp');
  el.addEventListener('animationend', () => el.remove(), { once: true });
}
```

### 6. Dark theme
Toggle `.dark-theme` on any ancestor element (or `<body>`) to switch to dark mode. All CSS variables update automatically.

```js
document.body.classList.toggle('dark-theme');
```

---

## Why is it useful?

Toast notifications are one of the most common feedback patterns in modern web UI, yet EaseMotion CSS had no reusable reference for them. This submission fills that gap with a component that aligns with EaseMotion's animation-first philosophy:

- **Entrance animation** — spring-eased slide-in from the right (bottom on mobile) with a subtle scale bounce, making appearances feel natural rather than abrupt.
- **Exit animation** — smooth slide-out that collapses height and margin so the remaining toasts reflow gracefully without a jump.
- **Icon micro-animation** — each icon pops in with a slight overshoot, giving the variant personality without being distracting.
- **Progress bar** — a thin animated bar communicates exactly how much auto-dismiss time remains, reducing anxiety about losing content.
- **Accessibility** — `role="alert"`, `aria-live="assertive"`, `aria-atomic="true"` on each toast; `aria-live="polite"` on the container; fully keyboard-navigable close buttons with visible `:focus-visible` rings.
- **Reduced motion** — all animations are disabled via `@media (prefers-reduced-motion: reduce)`, defaulting to an instant opacity-only fade.
- **Responsive** — on viewports ≤ 480 px the container moves to the bottom of the screen and animations switch to a vertical slide-up, which feels more native on touch devices.
- **Zero dependencies** — plain HTML, CSS, and vanilla JS. Works by opening `demo.html` directly in any browser.

---

## File list

| File        | Purpose                                     |
|-------------|---------------------------------------------|
| `style.css` | All animations, layout, variants, theming   |
| `demo.html` | Interactive demo with controls & theme toggle |
| `README.md` | This documentation                          |

---

## CSS classes reference

| Class                     | Description                                      |
|---------------------------|--------------------------------------------------|
| `.toast-container-mp`     | Fixed-position wrapper; stacks toasts vertically |
| `.toast-mp`               | Base toast element                               |
| `.toast-success-mp`       | Green success variant                            |
| `.toast-error-mp`         | Red error variant                                |
| `.toast-warning-mp`       | Amber warning variant                            |
| `.toast-info-mp`          | Blue info variant                                |
| `.toast-exit-mp`          | Triggers exit animation (add via JS)             |
| `.toast-icon-mp`          | Icon element (SVG)                               |
| `.toast-body-mp`          | Wraps title + message                            |
| `.toast-title-mp`         | Bold notification title                          |
| `.toast-message-mp`       | Supporting description text                      |
| `.toast-close-mp`         | Dismiss button                                   |
| `.toast-progress-mp`      | Progress bar track                               |
| `.toast-progress-bar-mp`  | Animated fill bar                                |
| `.dark-theme`             | Applied to ancestor to enable dark mode          |
