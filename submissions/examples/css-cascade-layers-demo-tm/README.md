# CSS Cascade Layers Demo

### What does this do?
This demo provides a working example of modern CSS `@layer` functionality to organize styles into clear specificity cascades, preventing style conflicts without relying on excessive class chaining or `!important` tags.

### How is it used?
You can use the native CSS cascade layers in your stylesheet to establish a strict style hierarchy.

```css
@layer reset, base, typography, components, utilities;

@layer base {
  .layer-demo-container { max-width: 800px; margin: 0 auto; }
}

@layer utilities {
  /* This will override anything in layers defined earlier (reset, base, typography, components) */
  .override-demo .card-text { color: #8e44ad; }
}
```

```html
<div class="layer-demo-container">
  <section class="card override-demo">
    <h2 class="card-title">Override Styling</h2>
    <p class="card-text">This text is modified by the utilities layer.</p>
  </section>
</div>
```

### Why is it useful?
It fits seamlessly into EaseMotion CSS by giving developers a native CSS approach to control specificity. This avoids overly complex selectors and minimizes the need for `!important` rules, leading to cleaner, more maintainable stylesheets that integrate well with dynamic utility classes.
