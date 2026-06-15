# CSS Anchor Positioning + Popover

## What does this do?

Positions popovers, tooltips, and info cards relative to their trigger elements using CSS Anchor Positioning (`anchor-name`, `position-anchor`, and the `anchor()` function) combined with the native Popover API — no JavaScript required for positioning.

## How is it used?

Give a trigger element an `anchor-name`, then bind a popover to it with `position-anchor`:

```css
.trigger {
  anchor-name: --my-anchor;
}

.popover {
  position-anchor: --my-anchor;
  top: anchor(bottom);
  left: anchor(center);
  translate: -50% 0;
}
```

```html
<button class="trigger" popovertarget="pop">Open</button>
<div class="popover" id="pop" popover>Positioned content</div>
```

## Why is it useful?

Traditionally, positioning tooltips, dropdowns, and popovers required JavaScript to measure positions, handle scroll/resize events, and manage edge cases. CSS Anchor Positioning makes this declarative — the positioned element automatically follows its anchor through scroll, resize, and layout changes. Combined with EaseMotion CSS's animation utilities, you get fully reactive, animated overlays with zero runtime dependencies.
