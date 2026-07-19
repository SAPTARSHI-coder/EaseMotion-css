# Offcanvas Component

### What does this do?
Adds `ease-offcanvas-az` — a slide-in panel component that opens from any side (left, right, top, bottom) with a backdrop overlay. Uses CSS transforms and a cubic-bezier easing for smooth open/close animation.

### How is it used?
The maintainer should copy `style.css` into `components/offcanvas.css` and import it.

```html
<div class="ease-offcanvas-az from-right open">
  <div class="ease-offcanvas-header-az">
    <div class="ease-offcanvas-title-az">Title</div>
    <button class="ease-offcanvas-close-az">&times;</button>
  </div>
  <div class="ease-offcanvas-body-az">
    Content here
  </div>
</div>
<div class="ease-offcanvas-backdrop-az open"></div>
```

Directions: `.from-left`, `.from-right`, `.from-top`, `.from-bottom`. Sizes: `.sm`, `.lg`. Toggle visibility by adding/removing `.open`.

### Why is it useful?
1. **Four directions** — slide in from left, right, top, or bottom using a single class switch
2. **Smooth easing** — uses `cubic-bezier(0.16, 1, 0.3, 1)` for a natural slide that decelerates gently
3. **Backdrop** — semi-transparent overlay dismisses the panel on click; fades in/out alongside the slide
