# Pure CSS Animated Toggle Switch (ease-toggle-akhil)

### What does this do?
This is a fully accessible, pure CSS animated toggle switch that replaces standard browser checkboxes.

### How is it used?
Wrap an `<input type="checkbox">` and a `span` inside an element, using the adjacent sibling selector for state changes.

```html
<label class="ease-toggle-container">
  <div class="ease-toggle-switch">
    <input type="checkbox" aria-label="Enable notifications">
    <span class="ease-toggle-slider"></span>
  </div>
  <span>Enable Notifications</span>
</label>
```

### Why is it useful?
It fulfills the `v1.1` roadmap goal of adding form components. It is built entirely without JavaScript, supports `prefers-reduced-motion` natively, and provides clear `:focus-visible` styling for keyboard accessibility.
