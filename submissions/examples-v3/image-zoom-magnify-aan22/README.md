# Image Zoom Magnify

## What does this do?
A hover-activated magnifying lens that follows the cursor over an image, showing a zoomed-in view of the area beneath it — useful for product photos, galleries, and detail previews.

## How is it used?
```html
<div class="zoom-magnify-container">
  <img class="zoom-magnify-img" src="your-image.jpg" alt="Description">
  <div class="zoom-magnify-lens"></div>
</div>
```
Hovering over `.zoom-magnify-container` reveals `.zoom-magnify-lens`, a circular lens that tracks the mouse and renders a magnified (2.5x) view of the image at that point using a small amount of vanilla JS to position the lens and background.

## Why is it useful?
EaseMotion CSS focuses on smooth, purposeful motion and interaction feedback. This component gives users an intuitive way to inspect image detail without leaving the page or opening a modal, fitting the framework's philosophy of lightweight, delightful micro-interactions.
