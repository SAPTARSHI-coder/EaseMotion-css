## Contain-Intrinsic Utility

**What does this do?**  
Provides utility classes for the `contain-intrinsic-size` CSS property, which sets the default intrinsic size of elements using `content-visibility: auto` or `contain: size`. This prevents layout shifts and keeps scrollbars accurate when off-screen content hasn't rendered yet.

**How is it used?**  
Add `contain-intrinsic-size-{value}` to any element:

```html
<div class="content-visibility-auto contain-intrinsic-size-500">
  <!-- off-screen content retains a 500px block size -->
</div>
```

**Why is it useful?**  
When using `content-visibility: auto` to skip rendering of off-screen content, the browser needs a placeholder size. Without `contain-intrinsic-size`, elements collapse to zero height, causing scroll jank and layout shift. These utilities provide a simple, declarative way to set that intrinsic size.
