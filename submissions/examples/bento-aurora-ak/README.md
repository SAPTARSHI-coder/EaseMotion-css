# Cyberpunk Bento Grid: Aurora Glow

1. What does this do?
Provides a purely CSS-based Bento Grid layout where each card features a stunning "Aurora Glow" aesthetic — an animated, blurred, multi-color radial gradient trapped beneath a frosted glassmorphic surface.

2. How is it used?
```html
<div class="cyberpunk-bento-grid-ak">
  <div class="bento-aurora-card-ak">
    <div class="bento-aurora-inner-ak">
      <h3>Title</h3>
      <p>Content goes here.</p>
    </div>
  </div>
  <!-- Additional grid items -->
</div>
```

3. Why is it useful?
The Aurora UI pattern is incredibly popular in modern high-end web design. This implementation avoids heavy canvas or WebGL effects, relying entirely on CSS `radial-gradient`, `filter: blur()`, and `backdrop-filter` to achieve a performant, fluid, hardware-accelerated sci-fi aesthetic. Hovering the cards increases the opacity of the aurora while making the glass more transparent, creating a mesmerizing "reveal" effect. Fully respects `prefers-reduced-motion`.
