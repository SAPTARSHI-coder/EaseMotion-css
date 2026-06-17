# [BUG FIX] .ease-loader spinner inherits transparent color in primary button

## What does this do?
Fixes spinner invisible state inside primary buttons by setting default border colors to inherit button text color values.

## How is it used?
```html
<button class="btn btn-primary"><span class="loader"></span></button>
```

## Why is it useful?
Prevents loading spinner symbols from going invisible inside primary styling options.

## Fixes
Fixes #9855
