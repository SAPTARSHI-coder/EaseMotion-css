# CSS-only 3D Interactive Hourglass / Sand Glass Timer

This submission implements a pure CSS, zero-JS interactive 3D hourglass and sand physics simulation for GSSOC issue **#13606** (or general animation-first submissions).

## Description

An animation-first, zero-dependency interactive 3D hourglass timer simulation. It models gravity sand draining, stream trickles, and accumulation piles using perfectly synchronized keyframe animations. Users can flip the glass 180 degrees by clicking it (checkbox hack) which swaps the local coordinates and restarts the sand flow.

## How it works

The component is implemented using HTML and Vanilla CSS:
1. **Glass Bulbs & Neck**: Built using rounded borders and transparency profiles. The neck is a narrow junction between the two bulbs.
2. **Double Animation Timelines**:
   - Draining sand (`ease-kf-sand-drain`) in the top bulb shrinks towards the neck.
   - Accumulating sand (`ease-kf-sand-fill`) in the bottom bulb grows from the base.
   - A repeating dashed gradient in the neck simulates a trickling stream (`ease-kf-stream-flow`).
3. **3D Rotation (The Flip)**: Clicking the glass toggles the checkbox trigger, which applies `transform: rotateX(180deg)` to the glass container. Because the local coordinate space is rotated, the top and bottom bulbs physically swap places. Sibling selectors swap the animation origins to start the flow again.
4. **Alarm Syncing**: An overlay bar and warning dot pulse red when the timer completes (`ease-kf-alarm-pulse`). This delay is tied to the selected timer duration (`--sand-duration`) and resets whenever the glass is flipped.
5. **Accessibility**: Full fallback is provided under `@media (prefers-reduced-motion: reduce)` to display a static, safe sand configuration.

## Usage

Include the sandbox container and triggers in your markup:

```html
<!-- Triggers (placed outside viewport to enable sibling styling) -->
<input type="checkbox" id="ease-hg-flip-trigger" style="display: none;">
<input type="radio" name="hg-time" id="ease-time-5s" style="display: none;">
<input type="radio" name="hg-time" id="ease-time-10s" checked style="display: none;">
<input type="radio" name="hg-time" id="ease-time-20s" style="display: none;">

<div class="ease-hourglass-viewport">
  <div class="ease-ambient-flash ease-ambient-active"></div>
  <label for="ease-hg-flip-trigger" class="ease-hourglass-click-area"></label>

  <div class="ease-hourglass-stand">
    <div class="ease-hourglass-plate"></div>
    <div class="ease-hourglass-body">
      <div class="ease-bulb ease-bulb-top">
        <div class="ease-sand-top"></div>
      </div>
      <div class="ease-neck">
        <div class="ease-sand-stream"></div>
      </div>
      <div class="ease-bulb ease-bulb-bottom">
        <div class="ease-sand-bottom"></div>
      </div>
    </div>
    <div class="ease-hourglass-plate"></div>
  </div>
</div>
```

## Features

- **Pure CSS/Zero JS**: High-fidelity sand trickle and accumulation simulation without any Javascript.
- **Physical Flip Reset**: Flips 180 degrees dynamically on user clicks to restart the cycle.
- **Synchronized Alarm System**: Status indicators automatically flash red upon timer completion.
- **A11y Compliant**: Designed with a safe static fallback for reduced-motion profiles.
