# Pointer Events Utilities

## 1. What does this do?

This module provides utilities to control how elements respond to pointer events (such as clicks, taps, hovers, and touches), allowing you to make overlays click-through or force elements to capture clicks.

## 2. How is it used?

Use `.ease-pointer-events-none` to make an element click-through, and `.ease-pointer-events-auto` to restore normal pointer event behavior.

```html
<!-- Click-through overlay over interactive content -->
<div class="hud-overlay ease-pointer-events-none">
  <!-- Clicks pass through this container to elements below -->
  <button class="action-btn ease-pointer-events-auto">Click Me (Active)</button>
</div>
```

## 3. Why is it useful?

In interactive user interfaces, it is common to have floating overlays, tooltips, decorative backgrounds, visual scanlines, or haptic effects that visually sit above user controls. Using `.ease-pointer-events-none` prevents these decorations from blocking user interaction with the elements underneath. Additionally, combining it with `.ease-pointer-events-auto` on child elements allows developers to create floating widgets that are only interactive on their buttons, keeping the empty space click-through.
