# EaseMotion CSS — Interactive Toast Notifications (`ease-toast-notifications-ik`)

Animated UI toast notification cards (`ease-toast-slide`) featuring entrance slide-in transitions, status indicator accents, and automatic reduced-motion support.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a clean toast alert notification component (`ease-toast`) with status variants (`toast-success`, `toast-info`, `toast-warning`) and smooth entrance slide-in animation transitions (`ease-toast-slide`).

---

## 2. How is it used?

Apply toast classes directly to notification element wrappers:

```html
<div class="ease-toast toast-success ease-toast-slide">
  <span class="toast-icon">✓</span>
  <div class="toast-body">
    <h4 class="toast-title">Success Notification</h4>
    <p class="toast-message">Your changes were saved successfully.</p>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on lightweight, high-performance UI feedback. Toast notifications communicate real-time system state changes using smooth spring entrance dynamics while honoring `prefers-reduced-motion` accessibility standards.
