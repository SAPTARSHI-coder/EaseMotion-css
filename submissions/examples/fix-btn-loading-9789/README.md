# Button Loading Spinner Fix

**Fixes Issue:** #9789

### What does this do?
This fixes an issue where the `.ease-btn-loading` spinner was off-center due to a CSS conflict between `translate: -50% -50%` and `transform: translate(-50%, -50%) rotate(...)`.

### How is it used?
```html
<button class="ease-btn ease-btn-primary ease-btn-loading">
  Loading
</button>
```

### Why is it useful?
It ensures that the loading spinner inside `ease-btn-loading` elements is perfectly centered, removing the visual glitch and making the UI look polished as intended by EaseMotion CSS.
