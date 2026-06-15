## What does this do?

Provides `resize` utility classes for controlling how textareas (and other elements) can be resized by the user.

## How is it used?

```html
<textarea class="resize-none">Cannot resize</textarea>
<textarea class="resize-both">Resize both directions</textarea>
<textarea class="resize-vertical">Resize vertically only</textarea>
<textarea class="resize-horizontal">Resize horizontally only</textarea>
```

## Why is it useful?

Textareas resize differently across browsers by default. These utilities give consistent, predictable control over resizing behavior — essential for form design and UI consistency. Missing from EaseMotion core.
