# CSS Lightbox Gallery Component

## What does this do?
A pure CSS image gallery lightbox using the :target pseudo-selector to show full-size images in an overlay.

## How is it used?
```html
<a href="#img1" class="lgb-thumb">Thumbnail</a>
<div id="img1" class="lgb-overlay">
  <a href="#" class="lgb-close">&times;</a>
  <div class="lgb-content">Image content</div>
</div>
```

## Why is it useful?
Provides a lightweight gallery lightbox experience without JavaScript. Accessible, keyboard-navigable, and responsive. Smooth CSS transitions for open/close. Easily customizable.
