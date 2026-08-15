# Column-Gap Utilities

1. What does this do?
Provides utility classes to set horizontal gaps (gutters) between elements in row flexbox or grid layout containers.

2. How is it used?
Apply classes like `.column-gap-4`, `.column-gap-8`, or `.column-gap-12` to a flex row or grid container element:
```html
<div class="flex-row column-gap-4">
  <div>Card A</div>
  <div>Card B</div>
  <div>Card C</div>
</div>
```

3. Why is it useful?
It provides a simple, modern standard for spacing flex and grid children horizontally, removing the need for hacky, negative margins or manual side offsets on individual sibling nodes.
