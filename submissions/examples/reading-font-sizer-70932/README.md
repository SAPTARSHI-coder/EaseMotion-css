# CSS Reading Font Sizer

Accessible article reader toolbar with smooth pure CSS font resizing, line-height scaling, and zero JavaScript.

## 1. What does this do?
Provides a reader toolbar with `A-`, `A`, `A+`, `A++` controls that smoothly transition body text sizes (14px, 16px, 19px, 22px) and line height using native CSS custom properties.

## 2. How is it used?
Link toolbar `<label for="size-N">` buttons to hidden `<input type="radio" name="font-size" id="size-N">` triggers:

```html
<input type="radio" name="font-size" id="size-sm" class="size-radio">
<input type="radio" name="font-size" id="size-md" class="size-radio" checked>
<input type="radio" name="font-size" id="size-lg" class="size-radio">

<div class="reader-toolbar">
  <label for="size-sm" class="size-btn">A-</label>
  <label for="size-md" class="size-btn">A</label>
  <label for="size-lg" class="size-btn">A+</label>
</div>

<div class="reader-body">
  <p class="article-paragraph">Article content...</p>
</div>
```

## 3. Why is it useful?
Long-form article reading platforms (blogs, news sites, docs) need accessible text sizing controls. This pure CSS implementation eliminates JavaScript DOM manipulation, maintains high performance, and ensures smooth visual transitions.
