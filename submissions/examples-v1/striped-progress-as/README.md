# Striped Progress Bar

### What does this do?

It shows a determinate progress bar with animated diagonal stripes. The fill width comes from a custom property and the stripes drift to signal ongoing work. A tone class switches the fill color.

### How is it used?

```html
<div class="progress is-good" style="--val: 90%"
     role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
  <span class="progress-fill"></span>
</div>
```

Set the fill amount with the `--val` custom property. Add `is-warn` or `is-good` to change the color, or leave the default accent. The `role` and `aria-value` attributes expose the progress to assistive tech.

### Why is it useful?

Upload and task progress often use a striped bar to signal that work is moving. This builds a determinate striped bar with a moving pattern from a repeating gradient, driven by a custom property, using only CSS. The stripe animation is removed under reduced motion.
