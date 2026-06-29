## What does this do?

Provides clearfix and float utility classes for traditional CSS float-based layouts.

## How is it used?

```html
<div class="clearfix">
  <div class="float-left">Left content</div>
  <div class="float-right">Right content</div>
</div>
```

## Why is it useful?

Float layouts are still used for wrapping text around images, inline form layouts, and legacy support. The clearfix pattern prevents container collapse when all children are floated — a common gotcha that these utilities solve without extra markup.
