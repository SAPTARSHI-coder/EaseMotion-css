# Retro Grid Floor

## What does this do?
This component renders an 80s-inspired, animated perspective grid floor with a CRT scanline overlay effect using pure CSS.

## How is it used?
Include the structural HTML elements with the provided classes. The outer container manages the background and perspective context.

```html
<div class="ease-retro-container" role="presentation">
  <div class="ease-retro-grid-floor" aria-hidden="true"></div>
  <div class="ease-retro-scanlines" aria-hidden="true"></div>
  <div class="ease-retro-content">
    <h1>RETRO WAVE</h1>
    <p>80s perspective grid floor with scanlines</p>
  </div>
</div>
```

## Why is it useful?
It provides a visually striking, nostalgia-inducing atmospheric background without relying on WebGL or JavaScript canvas rendering, keeping performance high and implementation simple.
