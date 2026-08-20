# CSS linear() Easing Physics Catalog

1. **What does this do?**
   Provides four physics-based easing curves (spring, bounce, elastic, wobbly) as CSS custom properties built entirely with the `linear()` timing function — no JavaScript, no animation library.

2. **How is it used?**
   Apply any of the four custom properties to a `transition-timing-function` or `animation-timing-function`:

   ```html
   <div class="demo-card demo-card--spring">
     <div class="demo-box"></div>
   </div>
   ```

   ```css
   .demo-box {
     transition: transform 0.65s var(--ease-spring);
   }
   ```

3. **Why is it useful?**
   The `linear()` function (Chrome 113+, Firefox 112+, Safari 17.2+) accepts arbitrarily many control points, letting you encode spring physics, bounce impacts, and elastic snaps directly in CSS. This eliminates the need for JS motion libraries for most interactive feedback animations and fits directly into EaseMotion CSS as a set of composable easing tokens.
