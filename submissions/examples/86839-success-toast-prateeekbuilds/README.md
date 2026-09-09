# Success Toast Component

A green confirmation toast component for web applications featuring an emerald color palette and a physics-based spring-bounce check icon entry animation for the **EaseMotion CSS** gallery.

---

## 🌟 What It Does

The **Success Toast** provides non-disruptive feedback when an asynchronous or transactional action succeeds (e.g. settings saved, payment confirmed, deployment completed).

### ✨ Key Features

- **Spring-Bounce Icon Entrance**: Leverages `@keyframes spring-bounce` with damped oscillation (`scale(0)` $\rightarrow$ `scale(1.38)` $\rightarrow$ `scale(0.86)` $\rightarrow$ `scale(1.08)` $\rightarrow$ `scale(1)`) to create a lifelike physical bounce.
- **SVG Stroke Reveal**: Synchronized `@keyframes checkmark-draw` animation that draws the checkmark stroke right as the scale bounce hits peak velocity.
- **Auto-Dismiss Progress Bar**: 4-second linear progress countdown that automatically pauses on `:hover` or `:focus-within`.
- **Keyboard & Screen Reader Accessible**: Supports <kbd>Escape</kbd> key dismissal, visible focus indicators, and `role="status"` with `aria-live="polite"`.
- **Reduced Motion Fallback**: Full `@media (prefers-reduced-motion: reduce)` support with clean opacity transitions.
- **Zero Dependencies**: Pure HTML5, CSS3, and minimal vanilla JavaScript.

---

## 🚀 How to Run / View

1. Open `demo.html` directly in any modern web browser — no build steps, CDNs, or local servers needed.
2. Select any preset (**Profile Saved**, **Payment Success**, or **Deployment Live**) to test different payload lengths.
3. Click **Trigger Success Toast** or **Replay Animation** to preview the entrance and spring physics.
4. Press <kbd>Escape</kbd>, click the close button (`×`), or click **Dismiss** to dismiss early.

---

## 🎨 How to Use in Your Application

```html
<div class="toast-viewport">
  <aside
    class="success-toast is-visible"
    role="status"
    aria-live="polite"
    aria-atomic="true"
  >
    <div class="toast-icon-wrapper" aria-hidden="true">
      <svg class="toast-icon" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </div>

    <div class="toast-content">
      <h2 class="toast-title">Profile Saved</h2>
      <p class="toast-message">
        Your profile changes and security preferences have synced.
      </p>
    </div>

    <button
      type="button"
      class="toast-close-btn"
      aria-label="Close notification"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div class="toast-progress" aria-hidden="true"></div>
  </aside>
</div>
```

---

## 📐 Animation Mechanics

### 1. Spring-Bounce Keyframes

```css
@keyframes spring-bounce {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-40deg);
  }
  50% {
    transform: scale(1.38) rotate(8deg);
  }
  70% {
    transform: scale(0.86) rotate(-4deg);
  }
  85% {
    transform: scale(1.08) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
```

### 2. Checkmark Stroke Draw

```css
@keyframes checkmark-draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

### 3. Auto-Dismiss Progress Bar

```css
@keyframes progress-countdown {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

.success-toast:hover .toast-progress,
.success-toast:focus-within .toast-progress {
  animation-play-state: paused;
}
```

---

## ♿ Accessibility

- **Polite Live Region**: Uses `role="status"` and `aria-live="polite"` so screen readers announce completion without interrupting active reading.
- **Dismissibility**: Accessible close button with clear `aria-label="Close notification"` and global <kbd>Escape</kbd> listener.
- **Prefers Reduced Motion**: Disables keyframe spring transforms and stroke animations when `prefers-reduced-motion: reduce` is enabled.
