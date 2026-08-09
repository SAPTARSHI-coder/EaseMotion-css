# Ease 3D Viewer

A draggable, pure-CSS 3D cube viewer.

## What does this do?
Renders a 3D cube using CSS `transform-style: preserve-3d`, which the user can freely rotate by clicking and dragging with the mouse.

## How is it used?
Open `demo.html` and click-and-drag anywhere on the cube stage to rotate the cube in 3D space.

```html
<div class="ease-3d-stage">
  <div class="ease-3d-cube">
    <div class="ease-3d-face ease-3d-front">Front</div>
    <div class="ease-3d-face ease-3d-back">Back</div>
    <div class="ease-3d-face ease-3d-right">Right</div>
    <div class="ease-3d-face ease-3d-left">Left</div>
    <div class="ease-3d-face ease-3d-top">Top</div>
    <div class="ease-3d-face ease-3d-bottom">Bottom</div>
  </div>
</div>
```

## Why is it useful?
A lightweight, dependency-free way to showcase 3D-style content (product previews, icons, badges) without a heavy 3D library — fits EaseMotion's animation-first, no-dependency philosophy.
