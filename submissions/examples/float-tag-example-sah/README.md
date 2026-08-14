# Float Tag Interaction Example (`#54685`)

## What does this do?
Provides an appealing modular tag component that levitates upwards while damping a reactive beneath-ground shadow when hovered by users.

## How is it used?
Configure tag text and shadow indicators inside an `ease-tag-float` interactive block:
```html
<div class="ease-tag-float">
  <span class="tag-body blue">Floating Tag</span>
  <div class="tag-shadow"></div>
</div>
```

## Why is it useful?
Solves issue #54685 by bringing physical gravitational realism to article taxonomy chips and user skill tags.