# Ease Throttle Control Lever

A draggable vertical throttle lever with a color-coded fill and live percentage readout.

## What does this do?
A vertical slider styled like a physical throttle lever. Dragging the handle (or clicking anywhere on the track) sets a value from 0–100%, with the fill color changing from green (low) to amber (mid) to red (high). Also supports keyboard control via arrow keys when focused.

## How is it used?
Open `demo.html` and drag the white handle up and down, or click anywhere on the track to jump to that position. The percentage readout updates live below the lever.

```html
<div class="ease-throttle-track">
  <div class="ease-throttle-fill ease-throttle-mid"></div>
  <div class="ease-throttle-handle" tabindex="0"></div>
</div>
```

## Why is it useful?
A reusable, dependency-free control pattern for dashboards, audio mixers, or settings panels needing a vertical range input with clear visual feedback — fits EaseMotion's animation-first, accessible-by-default philosophy.
