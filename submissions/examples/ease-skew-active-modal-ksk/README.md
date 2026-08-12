# Skew-Active Modal (`ease-skew-active-modal-ksk`)

1. What does this do?  
An animated Modal dialog component designed for SaaS Showcase layouts. The dialog enters with a composite translation, scale-up zoom, and 3D Y-skew rotation (`transform: translateY(24px) skewY(-8deg) scale(0.94)`) and straightens elastically into standard alignment (`skewY(0deg)`) using a spring bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Define a checkbox input `#modal-trigger` preceding the backdrop overlay. Use `<label>` targets pointing to the checkbox ID to toggle active show/hide states:

```html
<input type="checkbox" id="modal-trigger" class="modal-checkbox">
<label for="modal-trigger" class="modal-backdrop" aria-hidden="true"></label>

<div class="modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="title-id">
  <div class="ease-modal-card">
    <h3 id="title-id">SaaS Spec</h3>
    <label for="modal-trigger" class="modal-close">&times;</label>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.modal-wrapper {
  --ease-modal-duration:  0.42s;
  --ease-modal-easing:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-modal-skew:      -8deg;           /* initial Y-skew tilt angle */
  --ease-modal-scale:     0.94;            /* initial scale pop ratio */
}
```

3. Why is it useful?  
Provides visual spatial interest over traditional static modals. Features a blurred backdrop dismiss click target, Escape key listener accessibility, full responsive viewports scaling, prefers-reduced-motion safety overrides, and Dark/Light theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #59505.*
