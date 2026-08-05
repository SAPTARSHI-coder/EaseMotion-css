# Ease Mask Wipe (`ease-mask-wipe`)

A pure CSS transition utility that creates a shutter reveal or venetian blind mask wipe effect using CSS `mask-image` animations.

## 1. What does this do?
`ease-mask-wipe` applies a repeating linear gradient mask to a container or element. By animating `-webkit-mask-size` and `mask-size` via `@keyframes` or CSS transitions on hover/state change, it creates a stylized shutter blind opening transition without requiring canvas rendering or SVG clipping paths.

## 2. How is it used?

Include `style.css` in your project and wrap your base and reveal layers in a container:

```html
<div class="ease-mask-wipe-wrapper">
  <!-- Base Background Content -->
  <div class="card-base">
    <h3>Card Title</h3>
    <p>Hover to trigger shutter reveal.</p>
  </div>

  <!-- Revealed Overlay Layer -->
  <div class="card-reveal-layer ease-mask-wipe">
    <h3>Revealed Content</h3>
    <p>This content is revealed with a shutter wipe effect.</p>
  </div>
</div>
```

To trigger the wipe animation directly on an element:

```html
<div class="ease-mask-wipe">
  <!-- Content revealed with shutter wipe -->
</div>
```

## 3. Why is it useful?
- **Massive Performance Benefits**: Leverages browser-native CSS masking and GPU acceleration rather than JavaScript-based canvas rendering or DOM frame loops, ensuring locked 60fps transitions.
- **Zero JavaScript Dependencies**: Achieves sophisticated cyberpunk shutter and venetian blind reveal animations purely with CSS `@keyframes` and mask properties.
- **Flexible & Lightweight**: Easily customized by altering gradient stripe width, direction, transition duration, or timing curves.
