# CSS Hot Air Balloon

A pure-CSS scenic illustration featuring a hot air balloon that drifts across the screen while gently bobbing up and down. This component showcases how to combine multiple CSS `@keyframes` on nested elements to create complex, multi-directional physics.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a beautiful sky scene complete with parallax mountains, drifting clouds, and a striped hot air balloon. The balloon slowly drifts from the left side of the screen to the right, growing slightly larger in the middle to simulate Z-axis depth. Simultaneously, the balloon gently bounces up and down to simulate thermal wind physics. 

### 2. How is it used?

The implementation relies heavily on nested HTML wrappers and CSS shape manipulation. 

**The Animation Physics:**
If you try to apply two different `transform` animations to the same element, they will override each other. The trick is to separate the X and Y movement axes by nesting two `div` elements.

```html
<!-- Wrapper handles the X-axis translation -->
<div class="balloon-drifter">
  <!-- Inner element handles the Y-axis bounce -->
  <div class="balloon-bobber">
    <div class="balloon-envelope"></div>
  </div>
</div>
```

**The Balloon Shape:**
The iconic teardrop shape of the balloon is achieved using a complex `border-radius` declaration, while the red and white stripes are generated using a native CSS `repeating-linear-gradient`.

```css
.balloon-envelope {
  /* Creates vertical red and white stripes */
  background: repeating-linear-gradient(90deg, red 0, red 16px, white 16px, white 32px);
  
  /* Creates the teardrop shape (wider at the top, narrower at the bottom) */
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

### 3. Why is it useful?

Creating complex scene illustrations usually involves importing heavy SVGs and animating them with JavaScript libraries like GSAP or Lottie. By constructing the shapes natively with CSS `clip-path` and `border-radius`, and animating them via `@keyframes`, we drastically reduce the network payload and ensure the animation runs flawlessly on the browser's GPU compositor thread. Additionally, the component utilizes `@media (prefers-reduced-motion: reduce)` to park the balloon in the center of the screen for users sensitive to continuous horizontal motion.
