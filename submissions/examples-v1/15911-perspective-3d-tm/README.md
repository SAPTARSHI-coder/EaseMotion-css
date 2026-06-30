# 3D Perspective Utilities & Interactive Showcases

Issue: [#15911](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/15911)

## What does this do?

Provides a modular suite of CSS `.ease-perspective-*` and `.ease-preserve-3d` / `.ease-flat` utility classes. These classes control the focal length (viewer distance) of the 3D projection viewport, enabling immersive, realistic, and highly configurable spatial depth for nested 3D transformations.

## How is it used?

Apply the `.ease-perspective-[val]` class to a parent element to define its 3D depth field, and apply `.ease-preserve-3d` to maintain the 3D context for nested children:

```html
<!-- Exaggerated 3D depth perspective container -->
<div class="perspective-viewport ease-perspective-250 ease-preserve-3d">
  <!-- Child card that undergoes 3D transforms -->
  <div
    class="card ease-3d-card"
    style="transform: rotateY(45deg) translateZ(50px);"
  >
    <h3>Exaggerated 3D Depth</h3>
  </div>
</div>

<!-- Deep, subtle 3D depth perspective container -->
<div class="perspective-viewport ease-perspective-1500 ease-preserve-3d">
  <div
    class="card ease-3d-card"
    style="transform: rotateY(45deg) translateZ(50px);"
  >
    <h3>Subtle 3D Depth</h3>
  </div>
</div>
```

## Why is it useful?

1. **Realistic Physical Simulation**: Adjusting the perspective distance acts like changing the lens on a camera. Lower values (like `250px`) behave like a wide-angle lens with dramatic foreshortening (huge size differences between front and back), while higher values (like `1500px` or `2000px`) act like a telephoto lens with subtle, orthographic-like projection.
2. **Kinematic Control**: Crucial for building complex 3D components such as rotating cubes, folding menus, book-page flips, and interactive bento parallax cards.
3. **Composability**: Combining perspective distance and `transform-style` controls directly in HTML saves developers from writing custom boilerplate CSS and allows building fluid, interactive experiences without JavaScript-based rendering engines.
