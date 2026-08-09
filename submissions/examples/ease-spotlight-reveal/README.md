# CSS Hover Spotlight Reveal (#68416)

## 1. What does this do?
The CSS Hover Spotlight Reveal component creates an interactive flashlight/spotlight reveal effect. As the user moves their cursor over the container, a radial mask uncovers hidden, vibrant text and background styling beneath an otherwise dark interface.

## 2. How is it used?
The component utilizes CSS mask properties coupled with dynamic CSS custom variables:
- A lightweight JavaScript `mousemove` event listener updates custom CSS properties `--x` and `--y` with viewport coordinates (`clientX` and `clientY`).
- The CSS rule `-webkit-mask-image` / `mask-image` uses `radial-gradient(circle 200px at var(--x, 50%) var(--y, 50%), black 40%, transparent 100%)` to render a spotlight mask at the cursor's exact coordinates.

```html
<div class="ease-reveal-wrapper" id="spotlight-area">
  <div class="ease-reveal-content">
    <h1 class="ease-reveal-text">EaseMotion<br>Revealed</h1>
  </div>
</div>
```

```javascript
const area = document.getElementById('spotlight-area');
area.addEventListener('mousemove', e => {
  area.style.setProperty('--x', e.clientX + 'px');
  area.style.setProperty('--y', e.clientY + 'px');
});
```

## 3. Why is it useful?
This architecture prevents main-thread layout thrashing and DOM mutation overhead. Instead of recalculating layout trees or moving DOM elements via JavaScript, JS acts purely as a minimal coordinate sensor. The actual graphical masking and compositor operations are offloaded entirely to CSS mask rendering on the GPU, yielding silky smooth 60fps interaction.
