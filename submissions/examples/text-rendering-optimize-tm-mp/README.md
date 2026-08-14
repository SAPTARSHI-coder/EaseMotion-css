## text-rendering-optimize-tm-mp

**What does this do?**
Provides four utility classes that control the browser's `text-rendering` hint, letting developers trade off between legibility, speed, and geometric precision.

**How is it used?**
```html
<p class="text-render-auto">...</p>         <!-- browser default -->
<p class="text-render-legibility">...</p>   <!-- enables kerning & ligatures -->
<p class="text-render-speed">...</p>        <!-- fastest rendering -->
<p class="text-render-geometric">...</p>    <!-- precise geometry for scaled text -->
```

**Why is it useful?**
Typography quality varies greatly depending on rendering hint — body copy benefits from `optimizeLegibility`, large display headings from `geometricPrecision`, and performance-critical UI from `optimizeSpeed`. These single-class utilities make it trivial to apply the right hint without repeating the `text-rendering` property everywhere.
