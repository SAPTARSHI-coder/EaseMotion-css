# Responsive Toggle

**What does this do?**
It provides a responsive, accessible toggle switch component for turning settings on and off.

**How is it used?**
Use a `<label>` wrapping an `<input type="checkbox">` and a `<span>` for the slider. For example:
```html
<label class="toggle">
    <input type="checkbox" class="toggle-input">
    <span class="toggle-slider"></span>
</label>
```

**Why is it useful?**
It fits EaseMotion's philosophy by providing smooth, performant transitions (using transform and opacity) and a clean UI, without relying on JavaScript for the interaction state.
