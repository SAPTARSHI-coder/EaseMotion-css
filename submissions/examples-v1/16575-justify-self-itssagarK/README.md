# Justify-Self Utilities

1. What does this do?
   Provides utility classes to control the individual inline-axis alignment of items inside grid cells.

2. How is it used?
   Apply classes like `.justify-self-start`, `.justify-self-center`, `.justify-self-end`, or `.justify-self-stretch` to any grid item:

```html
<div class="grid-container">
  <div class="justify-self-start">Aligned to Left</div>
  <div class="justify-self-center">Aligned to Center</div>
  <div class="justify-self-end">Aligned to Right</div>
  <div class="justify-self-stretch">Stretched Across Cell</div>
</div>
```

3. Why is it useful?
   It allows developers to selectively align individual elements in a grid layout along the horizontal inline axis without affecting neighboring cells, enabling highly customizable and responsive designs.
