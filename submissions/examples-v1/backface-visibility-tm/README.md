# backface-visibility-tm

## What does this do?

Adds utility classes to control the `backface-visibility` CSS property for 3D transformed elements.

## How is it used?

```html
<div class="backface-hidden">Hidden back face</div>
<div class="backface-visible">Visible back face</div>
```

## Why is it useful?

Essential for smooth 3D card-flip and rotate animations — prevents the mirrored back face from showing through during transitions, filling a gap in EaseMotion's 3D transform utilities.
