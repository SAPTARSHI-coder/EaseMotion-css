## What does this do?

Provides overflow direction variants missing from EaseMotion core: x-hidden, y-hidden, x-scroll, y-scroll.

## How is it used?

```html
<div class="overflow-x-scroll">Horizontal scroll</div>
<div class="overflow-y-hidden">Clip vertical overflow</div>
```

## Why is it useful?

Core only has overflow-x-auto and overflow-y-auto. Direction-specific overflow control is needed for precise layout clipping and scroll handling.
