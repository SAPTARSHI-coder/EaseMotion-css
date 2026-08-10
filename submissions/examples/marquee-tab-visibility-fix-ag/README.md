# Marquee Tab Visibility Fix

## What does this do?
Fixes the `.ease-marquee` animation permanently freezing after a browser tab loses focus and regains it. The fix uses `animation-fill-mode: none` (preventing stuck `forwards` state) and a `visibilitychange` event handler to reset `animation-play-state`.

## How is it used?
```html
<div class="ease-marquee-track">
  <div class="ease-marquee-content">
    <span>Item 1</span><span>Item 2</span>
  </div>
</div>
```

## Why is it useful?
Browsers throttle CSS animations in background tabs. When the animation uses `animation-fill-mode: forwards`, it can get stuck at its final frame. This submission demonstrates the correct CSS-only fix plus a tiny optional JS snippet for robust resumption.

## Fixes
Fixes #9845
