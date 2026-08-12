# Toast Notifications (Slide & Fade Entrance)

A pure CSS, customizable toast notification component using EaseMotion's slide-and-fade physics entrance curves. Includes visual variants for `success`, `error`, and `info` messages.

## 🌟 Key Features

- **EaseMotion Entrance**: Uses smooth `translateX` combined with opacity scaling (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Multiple Variants**: Pre-styled success, error, and info notification types.
- **Pure CSS Auto Progress**: Built-in visual timer bar showing remaining notification duration.
- **Accessible**: Includes `aria-live="polite"` support and respects `prefers-reduced-motion`.

---

## 🚀 Quick Usage

Apply the standard EaseMotion class `.easemotion-slide-fade-in` along with the desired variant class (`toast-success`, `toast-error`, or `toast-info`):

```html
<div class="toast-container" aria-live="polite">
  <div class="toast toast-success easemotion-slide-fade-in">
    <div class="toast-icon"><!-- Icon SVG --></div>
    <div class="toast-content">
      <h4 class="toast-title">Success</h4>
      <p class="toast-message">Action completed successfully.</p>
    </div>
    <button class="toast-close">&times;</button>
    <div class="toast-progress"></div>
  </div>
</div>