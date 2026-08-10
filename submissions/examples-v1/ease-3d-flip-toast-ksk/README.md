# 3D-Flip Toast Notification (`ease-3d-flip-toast-ksk`)

1. What does this do?  
An animated 3D-Flip Toast notification component. The toast alert is fixed to the bottom-right corner of the viewport and transitions into sight by rotating forwards along the 3D X-axis from a collapsed angle (`rotateX(-90deg) scale(0.85)`) using a spring bounce curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Define a checkbox input `#toast-trigger` preceding `.toast-container`. Use `<label>` targets pointing to the checkbox ID to toggle show and hide states:

```html
<input type="checkbox" id="toast-trigger" class="toast-checkbox">

<div class="toast-container" role="alert">
  <div class="ease-3d-toast">
    <div class="toast-body">
      <h4>Success</h4>
      <p>Action completed.</p>
    </div>
  </div>
</div>
```

Customize 3D parameters and color themes using CSS variables:
```css
.toast-container {
  --ease-toast-perspective: 1000px;        /* 3D camera depth */
  --ease-toast-duration:    0.45s;         /* transition speed */
  --ease-toast-easing:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-toast-accent:      #10b981;       /* theme active color */
}
```

3. Why is it useful?  
Flat, linear animations are standard; 3D perspective rotations add depth and premium polish to notification panels. Features a draining progress bar, keyboard-accessible closing triggers, `prefers-reduced-motion` safety overrides, and Dark/Light theme styles.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54603.*
