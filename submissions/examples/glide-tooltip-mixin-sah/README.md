# Glide Tooltip Hover Animation Mixin (`#54701`)

## What does this do?
Provides a super smooth directional gliding tooltip reveal that prevents jittery flickering when hovering over informational badges.

## How is it used?
Wrap your target tag and tooltip message inside an `ease-tooltip-holder` container:
```html
<div class="ease-tooltip-holder">
  <span>Hover Me</span>
  <div class="ease-tooltip glide-top">Tooltip details</div>
</div>
```

## Why is it useful?
Solves issue #54701 by replacing abrasive instant tooltips with fluid hardware-accelerated transitions.