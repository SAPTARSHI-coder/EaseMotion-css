# CSS linear() Easing Physics Showcase

## What does this do?

A visual, side-by-side comparison of four different CSS easing functions (`linear()` spring, `cubic-bezier()` bounce, `ease-out`, and `steps()`), triggered simultaneously via a zero-JavaScript CSS checkbox hack.

## How is it used?

```html
<!-- Trigger checkbox -->
<input type="checkbox" id="launch" class="launch-trigger" />
<label for="launch" class="launch-btn">Launch All &rarr;</label>

<div class="comparison-grid">
  <!-- Spring card -->
  <div class="col">
    <div class="demo-card spring-card">Spring</div>
  </div>
  <!-- Bounce card -->
  <div class="col">
    <div class="demo-card cubic-card">Bounce</div>
  </div>
</div>
```

```css
/* Apply the specific easing functions */
.spring-card {
  transition-timing-function: linear(
    0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%, 0.938 16.7%,
    1.022, 1.064, 1.077 21.2%, 1.067, 1.012 24.6%, 0.99, 0.997 27.3%,
    1.001 29.3%, 1 35%, 1
  );
}
.cubic-card {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Why is it useful?

CSS `linear()` (introduced in Chrome 113+, Firefox 112+) allows developers to define complex piecewise easing curves, bringing physically accurate spring physics to native CSS for the first time. Before this, real springs required JavaScript libraries like Framer Motion or React Spring. This demo provides a visual proof of how a `linear()` spring curve behaves fundamentally differently (realistic overshoot and damping) than a traditional `cubic-bezier()` approximation. It's a highly educational reference for modern CSS animation capabilities.
