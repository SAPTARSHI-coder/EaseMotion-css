# Animated Dismissible Alert Banner

### What does this do?

It shows inline alert banners with an icon and a message that collapse away smoothly when their close button is clicked, in info, success, and warning variants.

### How is it used?

```html
<input type="checkbox" id="alert-1" class="alert-dismiss" />
<div class="alert-wrap">
  <div class="alert is-info">
    <span class="alert-icon" aria-hidden="true"></span>
    <p class="alert-body"><strong>Heads up.</strong> Your trial ends in 3 days.</p>
    <label for="alert-1" class="alert-close" aria-label="Dismiss alert">&times;</label>
  </div>
</div>
```

Each alert pairs a hidden checkbox with an `.alert-wrap`. Clicking the close label checks the box, and the wrapper collapses its row height and fades out. Use `is-info`, `is-success`, or `is-warning` to set the color and icon.

### Why is it useful?

Alerts communicate status inline. This collapses and fades the banner on dismiss with only a `grid-template-rows` and opacity transition driven by `:checked`, so it needs no JavaScript. The close control is keyboard operable and the collapse is softened under `prefers-reduced-motion: reduce`.
