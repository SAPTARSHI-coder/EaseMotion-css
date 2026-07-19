# Magnetic Draggable Lift Cards

A tactile pair of 3D tilt-on-hover profile/content cards.

## What does this do?
It builds cards that track pointer movements in 3D coordinate space, transforming the elements along their tilt axes (`rotateX`, `rotateY`) while reflecting radial highlight glows in real-time.

## How is it used?
Apply the structural card wrapper classes and set up the active coordinate tracker scripts:

```html
<div class="magnetic-card" tabindex="0">
  <div class="card-inner">
    <div class="card-glow"></div>
    <div class="card-content">
      <!-- Item Details -->
    </div>
  </div>
</div>
```

## Why is it useful?
It provides visual feedback components, rendering dynamic tactile changes using lightweight native elements.
