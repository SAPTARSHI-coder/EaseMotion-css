# RTL Support for Directional Animations

This submission fixes Issue #42627 by adding RTL overrides for directional animations.  
Classes like `ease-slide-left` and `ease-slide-right` now flip automatically when the page uses `dir="rtl"`.

## Usage

```html
<html lang="ar" dir="rtl">
  <div class="ease-slide-left">...</div>
</html>
