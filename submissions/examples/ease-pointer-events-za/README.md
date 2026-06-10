## What does this do?

Provides `ease-pointer-events-none` and `ease-pointer-events-auto` utility classes for the CSS `pointer-events` property. Controls whether an element responds to pointer interactions (click, hover, touch).

## How is it used?

```html
<div class="ease-pointer-events-none-za">Ignores clicks</div>
<div class="ease-pointer-events-auto-za">Responds to clicks</div>
```

## Why is it useful?

`pointer-events: none` is commonly needed for overlay layers, decorative pseudo-elements, disabled UI states, and pass-through click targets. EaseMotion currently has no reusable utility for this despite being used across many components.
