# Mobile Overflow Fix for Slide Animations (`#56086`)

## What does this do?
Prevents unwanted horizontal scrollbars on narrow mobile screens during `ease-slide-up` and `ease-slide-down` entrance animations.

## How is it used?
Wrap slide-animated components in an element using the `ease-slide-wrapper` protection utility:
```html
<div class="ease-slide-wrapper">
  <div class="ease-slide-down">Header</div>
  <div class="ease-slide-up">Content</div>
</div>
```

## Why is it useful?
Resolves issue #56086 by ensuring strict vertical-only 3D transform vectors and viewport clipping, preserving mobile layout stability.