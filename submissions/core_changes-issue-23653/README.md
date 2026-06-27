# SCSS Modular Animation Partials

1. **What does this do?**
   Adds per-category SCSS partials (`_fade.scss`, `_slide.scss`, `_bounce.scss`, `_zoom.scss`, `_rotate.scss`, `_hover.scss`) that mirror the modular CSS architecture. Each partial contains only the mixins relevant to its animation category, allowing SCSS users to import selectively instead of importing the entire mixin set.

2. **How is it used?**

   ```scss
   // Selective import — only what you need
   @use "easemotion-css/scss/fade";
   @use "easemotion-css/scss/zoom";

   .my-element {
     @include fade.fade-in();
     @include zoom.zoom-out();
   }

   // Or import everything via the index
   @use "easemotion-css/scss" as ease;

   .hero {
     @include ease.fade-in();
   }
   ```

3. **Files added/updated:**

   | File | Description |
   |---|---|
   | `scss/_fade.scss` (new) | `fade-in`, `fade-out`, `fade-in-up`, `fade-in-down` |
   | `scss/_slide.scss` (new) | `slide-up`, `slide-down`, `slide-left`, `slide-right` |
   | `scss/_bounce.scss` (new) | `bounce-in`, `bounce-out`, `bounce-up` |
   | `scss/_zoom.scss` (new) | `zoom-in`, `zoom-out`, `zoom-in-up`, `zoom-out-down` |
   | `scss/_rotate.scss` (new) | `rotate-in`, `rotate-out`, `rotate-in-down-left`, `rotate-in-up-left`, `rotate-out-down-right` |
   | `scss/_hover.scss` (new) | `hover-lift`, `hover-glow`, `hover-scale` |
   | `scss/_index.scss` (updated) | Now forwards all 6 new partials |

4. **Why is it useful?**
   Previously, SCSS users who only needed fade animations had to import the entire mixin set. These modular partials match the CSS-side `easemotion/fade.css` architecture, reduce import overhead, and make the SCSS layer as composable as the CSS layer.
