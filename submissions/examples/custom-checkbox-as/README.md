# Animated Custom Checkbox

### What does this do?

It shows custom styled checkboxes where the box fills with the accent color and a checkmark pops in when checked.

### How is it used?

```html
<label class="check">
  <input type="checkbox" class="check-input" checked />
  <span class="check-box" aria-hidden="true"></span>
  <span class="check-text">Subscribe to updates</span>
</label>
```

Each checkbox is a real `input` visually hidden next to a styled `.check-box`. The checkmark is drawn with a rotated border and scales in on the checked state.

### Why is it useful?

Custom checkboxes match a brand while staying accessible because they are built on a real checkbox input. This animates the check with a transform on the checked state, so it needs no JavaScript. The input keeps keyboard support with a focus ring, and the tick animation is disabled under `prefers-reduced-motion: reduce`.
