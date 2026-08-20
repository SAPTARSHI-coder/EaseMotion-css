# 3D Flip Horizontal SCSS Mixin

**What does this do?**
Provides a hardware-accelerated 3D horizontal flip entrance animation using SCSS mixins and a utility class.

**How is it used?**
Include the mixin in your SCSS files or use the utility class directly in HTML:
```html
<!-- Using the utility class -->
<div class="ease-anim-3d-flip-horizontal">
  Flipping Content
</div>
SCSS
// Using the SCSS mixin
.my-custom-card {
  @include ease-3d-flip-horizontal(0.8s, ease-out);
}
Why is it useful?
It provides a high-performance (60 FPS) 3D interaction while strictly respecting accessibility standards via the prefers-reduced-motion media query, aligning with EaseMotion's accessible-first philosophy.
