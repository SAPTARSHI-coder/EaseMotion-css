# Mouse Parallax Background (ease-mouse-parallax-bg)

### 1. What does this do?

This component shifts a background layer slightly in the opposite direction to the movement of the mouse cursor, creating a subtle feeling of 3D depth and parallax.

### 2. How is it used?

Wrap an oversized background layer inside a parallax viewport container:

```html
<div class="ease-parallax-bg-container" id="parallax-viewport">
  <div
    class="ease-parallax-bg-layer"
    id="parallax-layer"
    style="background-image: url('your-pattern.svg');"
  ></div>
</div>
```

Bind a lightweight mousemove listener to compute normalized coordinates relative to the screen center (`[-1, 1]` range) and set custom CSS variables on your background layer:

```javascript
const layer = document.getElementById("parallax-layer");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

  layer.style.setProperty("--ease-mouse-x", x);
  layer.style.setProperty("--ease-mouse-y", y);
});
```

Configure your shifting strength (radius in pixels) using the custom CSS variable `--ease-parallax-strength` on your layer class:

```css
#parallax-layer {
  --ease-parallax-strength: 30px;
}
```

### 3. Why is it useful?

It introduces subtle depth and spatial feedback to landing page backgrounds and dashboard heroes without adding heavy 3D engine libraries (WebGL/Three.js). By leveraging CSS variables inside `translate3d` transforms, animations are compositor-thread friendly and run smoothly at up to 120fps. It also includes native media query fallbacks (`prefers-reduced-motion: reduce`) to disable translations entirely, ensuring full accessibility.
