# Accessible Fade-In Modal (`ease-fade-in-modal-ksk`)

1. What does this do?  
An animated, accessible dialog Modal component. The dialog floats over a dim backdrop overlay and enters with a smooth slide-fade translation and spring scale zoom (`transform: translateY(20px) scale(0.95)` → `translateY(0) scale(1)`) using a spring bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Define a checkbox input `#modal-trigger` preceding the backdrop overlay. Use `<label>` targets pointing to the checkbox ID to toggle show and hide states:

```html
<input type="checkbox" id="modal-trigger" class="modal-checkbox">
<label for="modal-trigger" class="modal-backdrop" aria-hidden="true"></label>

<div class="modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="title-id">
  <div class="ease-modal-card">
    <h3 id="title-id">Title</h3>
    <label for="modal-trigger" class="modal-close-label">&times;</label>
  </div>
</div>
```

Customize modal dimensions, durations, and colors using CSS variables:
```css
.modal-wrapper {
  --ease-modal-duration:  0.4s;
  --ease-modal-easing:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-modal-bg:        #0f111a;
  --ease-modal-accent:    #6366f1;
}
```

3. Why is it useful?  
Standard CSS modals lack smooth movement and screen reader integration. This component combines pure CSS animations with comprehensive ARIA annotations (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), escape key listener, click-backdrop-to-dismiss behavior, `prefers-reduced-motion` layout overrides, and Dark/Light themes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54239.*
