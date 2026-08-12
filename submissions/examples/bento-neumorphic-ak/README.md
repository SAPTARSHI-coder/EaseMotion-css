# Cyberpunk Bento Grid: Neumorphic Soft Shadow

1. What does this do?
Provides a pure CSS Bento Grid layout featuring deep "Neumorphic" soft shadows that create a physical, extruded 3D aesthetic tailored for dark mode, complete with tactile press interactions.

2. How is it used?
```html
<div class="cyberpunk-bento-grid-ak">
  <div class="bento-neumorphic-card-ak" tabindex="0">
    <h3>Title</h3>
    <p>Content goes here.</p>
  </div>
  <!-- Add more bento items -->
</div>
```

3. Why is it useful?
It offers a highly tactile and elegant "soft UI" approach to bento grids. By meticulously animating `box-shadow` distances rather than switching to `inset` shadows, the interaction is completely smooth and hardware-accelerated. The cyberpunk aesthetic is reinforced by a glowing cyan edge accent that activates upon hover or focus, fully respecting `prefers-reduced-motion`.
