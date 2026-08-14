# Reduced Motion Accessibility (`ease-prefers-reduced-motion-demo`)

A foundational architecture proposal and utility for respecting the user's OS-level accessibility setting: `prefers-reduced-motion`.

## 🚀 Features & EaseMotion Showcase

- **WCAG Compliance**: Ensures that EaseMotion CSS doesn't trigger vestibular disorders by disabling heavy translational and rotational animations when the user has requested reduced motion.
- **Graceful Degradation**: Instead of just breaking animations, this approach swaps aggressive animations (like infinitely spinning loaders) for gentle opacity pulses (`ease-fade-in`), ensuring the UI still indicates state without causing discomfort.
- **Universal Catch-all**: A standard global reset for `animation-duration: 0.01ms !important` is provided as a reference for users who want to globally strip all EaseMotion effects safely.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

### How it works in CSS:

```css
/* Standard Animation */
.ease-bounce {
  animation: bounce 1s infinite;
}

/* Accessibility Override */
@media (prefers-reduced-motion: reduce) {
  .ease-bounce {
    /* Completely disable movement */
    animation: none !important;
    transform: none !important;
  }
  
  .ease-spinner {
    /* Swap aggressive spinning for a gentle fade */
    animation: fade 1.5s ease-in-out infinite alternate !important;
  }
}
