## What does this do?

Provides `ease-resize` utility classes to control whether an element is user-resizable. Supports all four `resize` values: `none`, `both`, `vertical`, `horizontal`.

## How is it used?

```html
<textarea class="ease-resize-none-za">Cannot resize</textarea>
<div class="ease-resize-both-za" style="overflow:auto">Resizable container</div>
```

## Why is it useful?

EaseMotion has no resize utilities. The `resize` CSS property is commonly needed for textareas, code blocks, and draggable panels. Having dedicated classes makes it easy to standardize resize behavior across the framework.
