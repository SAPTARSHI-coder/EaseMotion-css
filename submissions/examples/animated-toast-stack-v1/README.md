# Animated Toast Notification Stack

An animation-first, pure CSS toast notification system showcasing stacked alert banners with mechanical overshoot entry spring profiles and hover-pause progress bar dismissals.

---

## 📷 Screenshots

> [!NOTE]
> _Screenshots Placeholder: Insert demo preview screenshots showing Success, Error, Warning, and Info toasts stacked at the bottom-right._

---

## ❓ Questions & Answers

### 1. What does this do?

Provides a premium, theme-customizable, and responsive toast alert notification system that stacks notifications at the bottom-right of the viewport and automatically dismisses them with slide-in and progress-bar animations.

### 2. How is it used?

Place alert banners inside a fixed container on your page, applying the `.toast-banner` class and a variant class like `.toast-success`:

```html
<div class="toast-stack-container" id="toastStack">
  <div class="toast-banner toast-success" role="alert">
    <div class="toast-icon-wrapper">✓</div>
    <div class="toast-body">
      <h3 class="toast-title">Success Title</h3>
      <p class="toast-desc">Your changes have been saved successfully.</p>
    </div>
    <button class="toast-close-btn">&times;</button>
    <div class="toast-progress-bar"></div>
  </div>
</div>
```

### 3. Why is it useful?

Toast stacks provide immediate visual feedback for application updates (success, failures, system alerts) without interrupting the user's workflow. This implementation provides an integrated hover-pause timer state and a linear progress bar indicating the exact remaining visibility duration.

---

## 🏆 Why It Fits EaseMotion CSS Philosophy

1. **Animation-First Design**: Uses custom spring dynamics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to animate entrance paths, giving the toasts a premium "overshoot" bounce as they enter the layout.
2. **Accessible by Design**: Incorporates WCAG-compliant color contrast borders, implements `role="alert"` semantic markup for screen readers, and fully disables animations/triggers when `prefers-reduced-motion` is enabled.
3. **No External Dependencies**: Pure HTML/CSS layout configuration that uses CSS custom variables to handle themes dynamically.
