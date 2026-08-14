# Toast Animations Documentation

Welcome to the EaseMotion CSS documentation for **Toast Animations**. Toasts (or snackbars) are lightweight notifications that provide brief, non-blocking feedback to users. EaseMotion provides a variety of smooth, GPU-accelerated animations to make your toasts appear and disappear elegantly.

---

## 📖 Overview

EaseMotion includes three primary animation variants for Toasts:
1. **Slide Up (`ease-toast-slide-up`)**: A traditional slide-in from the bottom of the screen.
2. **Fade In (`ease-toast-fade`)**: A subtle fade-in transition.
3. **Pop (`ease-toast-pop`)**: A playful scaling effect that draws immediate attention.

These animations are designed to be fluid and maintain performance by utilizing hardware-accelerated CSS properties like `transform` and `opacity`.

---

## 🚀 Installation

To use these animations, ensure you have included the EaseMotion core CSS in your project.

```html
<!-- Include EaseMotion CSS -->
<link rel="stylesheet" href="path/to/easemotion.css">
```

---

## 🎨 Available Animation Variants

### 1. Slide Up (`ease-toast-slide-up`)
**Best for:** Standard notifications appearing at the bottom of the screen.

**HTML Usage:**
```html
<div class="ease-toast ease-toast-slide-up" role="alert" aria-live="assertive">
  Your changes have been saved successfully!
</div>
```

**CSS Implementation Details:**
```css
.ease-toast-slide-up {
  animation: easeToastSlideUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  will-change: transform, opacity;
}

@keyframes easeToastSlideUp {
  from {
    opacity: 0;
    transform: translateY(100%) translateZ(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}
```

### 2. Fade In (`ease-toast-fade`)
**Best for:** Subtle, non-intrusive alerts (e.g., auto-saving indicators).

**HTML Usage:**
```html
<div class="ease-toast ease-toast-fade" role="alert" aria-live="polite">
  Draft saved automatically.
</div>
```

**CSS Implementation Details:**
```css
.ease-toast-fade {
  animation: easeToastFade 0.4s ease-in forwards;
}

@keyframes easeToastFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 3. Pop (`ease-toast-pop`)
**Best for:** Error messages, warnings, or urgent notifications that require immediate user attention.

**HTML Usage:**
```html
<div class="ease-toast ease-toast-pop ease-toast-error" role="alert" aria-live="assertive">
  Error: Connection lost. Please try again.
</div>
```

**CSS Implementation Details:**
```css
.ease-toast-pop {
  animation: easeToastPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  will-change: transform;
}

@keyframes easeToastPop {
  0% {
    opacity: 0;
    transform: scale(0.8) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}
```

---

## 🛠️ Customization Options

You can easily override animation durations or delays by targeting the elements in your custom stylesheet.

```css
/* Slow down the slide up animation */
.my-custom-toast.ease-toast-slide-up {
  animation-duration: 0.6s;
}

/* Add a delay before the toast appears */
.my-delayed-toast.ease-toast-pop {
  animation-delay: 0.2s;
}
```

---

## ♿ Accessibility Considerations

When implementing Toasts, accessibility is crucial. Follow these best practices:

1. **ARIA Roles:** Always use `role="alert"` or `role="status"` on your toast containers so screen readers announce them.
2. **Aria-Live Regions:** Use `aria-live="assertive"` for critical errors and `aria-live="polite"` for background notifications.
3. **Reduced Motion (`prefers-reduced-motion`)**: EaseMotion automatically respects user accessibility settings. If a user has requested reduced motion at the OS level, all toast animations will be stripped in favor of instant visibility.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-toast-slide-up,
  .ease-toast-fade,
  .ease-toast-pop {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```
