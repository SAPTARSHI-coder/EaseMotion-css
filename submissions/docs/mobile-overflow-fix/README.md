# Mobile Overflow Fix

## What does this do?
This adds `.ease-overflow-x-hidden` and `.ease-overflow-y-hidden` utility classes to prevent horizontal scrolling on mobile devices when using slide-in animations.

## How is it used?
```html
<div class="ease-overflow-x-hidden">
  <div class="ease-slide-in-right">
    Content animating from the right
  </div>
</div>
```

## Why is it useful?
When elements translate off-screen before animating in, they can expand the browser's viewport width on mobile, causing an unwanted horizontal scrollbar. Having native utility classes to hide overflow solves this problem effortlessly, fitting perfectly with EaseMotion's utility-first approach.
