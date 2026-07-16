# Multiple Layers at Different Parallax Speeds (ease-mouse-parallax-layers)

### 1. What does this do?
This is an interactive 3D depth animation effect where multiple stacked layers shift at different speeds (0.5x, 1x, 1.5x) in response to mouse movements, creating a premium depth perspective.

### 2. How is it used?
Set up layers inside a `.parallax-container` using the `.parallax-layer` class, defining their speed factors using the `--parallax-speed` CSS variable:
```html
<div class="parallax-container">
  <div class="parallax-layer layer-back" style="--parallax-speed: 0.5;"></div>
  <div class="parallax-layer layer-mid" style="--parallax-speed: 1.0;"></div>
  <div class="parallax-layer layer-fore" style="--parallax-speed: 1.5;"></div>
</div>
```
Update the `--parallax-x` and `--parallax-y` custom properties on the parent container via JavaScript on mousemove.

### 3. Why is it useful?
It fits the animation-first and composable design philosophy by demonstrating how a single set of mouse tracking coordinates can drive complex multi-layered 3D transformations via native CSS variables and calculations, maximizing performance and keeping code clean.
