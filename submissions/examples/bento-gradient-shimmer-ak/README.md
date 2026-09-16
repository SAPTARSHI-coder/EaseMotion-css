# Cyberpunk Bento Grid: Gradient Shimmer

1. What does this do?
Provides a hardware-accelerated, pure CSS Bento Grid layout where cards feature a rotating neon border shimmer and a smooth inner glass sweep effect upon hover.

2. How is it used?
```html
<div class="cyberpunk-bento-grid-ak">
  <div class="bento-shimmer-card-ak">
    <div class="bento-shimmer-inner-ak">
      <h3>Title</h3>
      <p>Content goes here.</p>
    </div>
  </div>
  <!-- Add more items for bento layout -->
</div>
```

3. Why is it useful?
It offers a highly engaging, interactive sci-fi design pattern using pure CSS `conic-gradient` and `linear-gradient` translations. All animations use composite properties (`transform`, `opacity`) ensuring completely smooth, hardware-accelerated 60fps performance without JavaScript overhead, while gracefully handling reduced-motion preferences.
