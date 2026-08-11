# CSS Peel Transition Effect

What does this do?  
This provides a pure CSS page transition where the top layer gracefully peels away from the bottom corner to reveal the content underneath, like a sticker or book page.

How is it used?  
Include the `peel-container` wrapper with nested `peel-layer-back`, `peel-layer-front`, and `peel-fold` elements.

```html
<div class="peel-container" tabindex="0">
  <div class="peel-layer-back">...</div>
  <div class="peel-layer-front">...</div>
  <div class="peel-fold"></div>
</div>
```

Why is it useful?  
It expands EaseMotion CSS's collection of ready-to-use animations, allowing developers to create highly interactive, premium feel UI patterns without relying on JavaScript libraries. It leverages modern CSS like `clip-path` and `drop-shadow` for an elegant fold effect.
