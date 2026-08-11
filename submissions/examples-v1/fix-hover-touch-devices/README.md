# Touch-Safe Hover Animation

## What does this do?

This example demonstrates a touch-safe hover animation pattern that prevents hover animations from remaining active after a tap on touch devices.

The hover animation is only applied when the device supports hover interaction.

## How is it used?

Add the `em-hover-scale-safe` class to an element that should scale when hovered:

```html
<button class="em-hover-scale-safe">
    Hover or Tap Me
</button>