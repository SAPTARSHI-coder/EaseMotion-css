## Overflow-Clip-Margin Utility

**What does this do?**  
Provides utility classes for the `overflow-clip-margin` CSS property, which controls how far an element's content can extend beyond its bounds when `overflow: clip` is active before being clipped.

**How is it used?**  
Combine with the `overflow-clip` class (or any `overflow: clip` container):

```html
<div class="overflow-clip overflow-clip-margin-10">
  <!-- content can overflow 10px before being clipped -->
</div>
```

**Why is it useful?**  
When using `overflow: clip` to create a clipping container, decorative elements like shadows, glow effects, or absolutely-positioned children often need a small overflow allowance. `overflow-clip-margin` provides exactly that — a controlled overflow budget — without switching to `overflow: hidden` (which also clips shadows and transforms).
