# Ease Toast Notification

> Issue: [#66728](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66728)

A pure CSS toast notification system featuring spring entrance slide keyframes (`@keyframes toastSlideIn`), auto-dismiss countdown progress bars, and status variant cards.

---

## ✨ Features & Architectural Highlights

- **Spring Slide Entrance:** `@keyframes toastSlideIn` translates toast notifications smoothly into view with overshoot spring timing curves.
- **Auto-Dismiss Progress Bar:** `@keyframes toastProgress` animates bottom border timers to visually indicate remaining display duration.
- **4 Status Presets:** `.toast-success`, `.toast-warning`, `.toast-error`, and `.toast-info`.
- **Zero External JS:** Powered 100% by pure HTML5 markup and GPU-accelerated CSS keyframe transitions.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing cyan/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Accessible alert roles (`role="alert"`), focus management, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.88);
    --color-success-glow: #34d399;
    --color-warning-glow: #fbbf24;
    --color-error-glow: #fb7185;
    --color-info-glow: #22d3ee;
    --toast-duration: 5s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66728-ease-toast-notification/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Add any `.ease-toast-card` status variant markup from `demo.html`:
   ```html
   <article class="ease-toast-card toast-success" role="alert">
       <div class="toast-icon">✅</div>
       <div class="toast-content">
           <span class="toast-title">Success Title</span>
           <p class="toast-message">Operation completed successfully.</p>
       </div>
       <div class="toast-progress"></div>
   </article>
   ```

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 4 toast notification variants and technical spec cards.
- `style.css` — Complete CSS stylesheet with entrance keyframes, status tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
