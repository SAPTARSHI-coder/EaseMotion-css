# Resize Utilities

## 1. What does this do?

Provides utility classes to control whether and how an element is resizable by the user (`none`, `horizontal`, `vertical`, or `both`), managing the necessary `overflow` property automatically.

## 2. How is it used?

Apply one of the resize classes to a block-level element:

```html
<!-- Prevent resizing (default) -->
<textarea class="resize-none"></textarea>

<!-- Allow resizing horizontally -->
<div class="resize-x">Horizontal resize content</div>

<!-- Allow resizing vertically -->
<div class="resize-y">Vertical resize content</div>

<!-- Allow resizing both horizontally and vertically -->
<div class="resize">Resizable content area</div>
```

## 3. Why is it useful?

It aligns with EaseMotion CSS's philosophy of providing utility classes to eliminate boilerplate styling. Standard CSS requires setting `overflow` to something other than `visible` for `resize` to work, which is a common source of confusion; these utility classes handle that requirement transparently, giving developers instant resizable containers with zero hassle.
