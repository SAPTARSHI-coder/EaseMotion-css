# Animated Notification Toast Stack

1. **What does this do?**
   A fully animated toast notification system with slide-in-right entrance, slide-out-right exit, auto-dismiss timer bar, 5 semantic types (success, error, warning, info, loading), stacked layout, and keyboard-accessible close buttons.

2. **How is it used?**

   ```html
   <!-- Toast container (fixed to corner) -->
   <div class="toast-container" aria-live="polite" role="region">
     <!-- Injected by JS -->
     <div class="toast toast-success toast-enter" role="alert">
       <div class="toast-icon">✅</div>
       <div class="toast-body">
         <div class="toast-title">Changes saved!</div>
         <div class="toast-message">Your changes have been saved.</div>
       </div>
       <button class="toast-close" aria-label="Dismiss">✕</button>
       <div class="toast-timer-bar" style="animation-duration: 4000ms;"></div>
     </div>
   </div>
   ```

   Type variants: `toast-success`, `toast-error`, `toast-warning`, `toast-info`, `toast-loading`

3. **Why is it useful?**
   Toast notifications are a universal UI pattern for non-blocking feedback. This submission showcases production-grade animation patterns: spring-physics entrance, smooth stacked exit with height collapse, a shrinking timer bar that communicates auto-dismiss timing, and a loading shimmer bar for async operations. All transitions respect `prefers-reduced-motion` and use semantic ARIA attributes (`aria-live="polite"`, `role="alert"`). Maps directly to planned EaseMotion CSS utilities `ease-slide-in-right`, `ease-fade-out`, and `ease-toast`.
