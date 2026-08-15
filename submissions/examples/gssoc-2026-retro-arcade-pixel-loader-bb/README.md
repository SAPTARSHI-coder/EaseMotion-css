# Retro 8-Bit Arcade Pixel Loading Indicator

A nostalgic retro 8-bit arcade loading indicator component built with pixelated CSS step keyframes, sprite chaser animations, and chunky pixel borders.

## 1. What does this do?
This component renders an authentic 8-bit arcade loading screen featuring flashing `INSERT COIN` text, pixel sprites chasing across a dashed track, and a stepped progress bar fill animation (`steps(10)` timing function).

## 2. How is it used?
Link `style.css` in your HTML document and include the `.pixel-arcade-card` container:

```html
<div class="pixel-arcade-card">
  <div class="pixel-sprite-wrapper">
    <div class="pixel-pacman"></div>
    <div class="pixel-ghost"></div>
  </div>
  <div class="pixel-progress-outer">
    <div class="pixel-progress-fill"></div>
  </div>
</div>
```

## 3. Why is it useful?
- **Nostalgic Retro Gaming UI**: Perfect for retro gaming portals, arcade websites, pixel art portfolios, and gamified web apps.
- **Pure CSS Step-Function Animations**: Demonstrates the power of `steps()` keyframe interpolation without canvas or JavaScript overhead.
- **Chunky 8-Bit Pixel Styling**: Utilizes `image-rendering: pixelated` and solid box-shadow offsets to mimic authentic CRT arcade displays.
