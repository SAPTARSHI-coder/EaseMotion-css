## What does this do?

Provides `ease-pointer-events` and `ease-touch-action` utility classes for controlling how elements respond to pointer input and touch gestures.

## How is it used?

```html
<div class="ease-pointer-events-none-za">Not clickable</div>
<div class="ease-pointer-events-auto-za">Clickable again</div>
<div class="ease-touch-action-none-za">No touch gestures</div>
```

## Why is it useful?

EaseMotion core only uses `pointer-events: none` internally in animations. There are no standalone utility classes for pointer-events or touch-action. These are essential for overlay layers, disabled states, and controlling touch behavior on custom interactive elements.
