# Elastic-Slide Toast (`ease-elastic-slide-toast-ksk`)

1. What does this do?  
An animated Toast notification component. The toast alert is fixed to the bottom-right corner of the screen and enters with an elastic sliding motion, overshooting its endpoint slightly and snapping back into position using an elastic transition curve (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`).

2. How is it used?  
Define a checkbox input `#toast-trigger` preceding `.toast-container`. Use `<label>` targets pointing to the checkbox ID to toggle show/hide states:

```html
<input type="checkbox" id="toast-trigger" class="toast-checkbox">

<div class="toast-container" role="alert">
  <div class="ease-toast">
    <div class="toast-body">
      <span>Toast text...</span>
      <label for="toast-trigger" class="toast-close">&times;</label>
    </div>
  </div>
</div>
```

Customize timing and layout parameters via CSS variables:
```css
.toast-container {
  --ease-toast-elastic:    cubic-bezier(0.68, -0.6, 0.32, 1.6);
  --ease-toast-duration:   0.55s;
  --ease-toast-bg:         #0f111a;
  --ease-toast-accent:     #f43f5e;
}
```

3. Why is it useful?  
Adds premium visual motion feedback for creative interfaces. Includes standard HTML/CSS architecture, a11y keyboard compatibility, prefers-reduced-motion safety overrides, and built-in Light/Dark theme overrides.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54607.*
