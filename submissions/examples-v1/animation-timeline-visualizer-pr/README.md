# Animation Timeline Visualizer

## What does this do?

An interactive timeline visualizer that displays animation progress on a
timeline, shows animation duration visually, allows comparing multiple
animations side-by-side, and supports play/restart/speed controls. Each
card also shows the generated CSS keyframe code snippet.

## How is it used?

```html
<div class="ease-timeline-card" data-anim="slide">
  <div class="ease-timeline-stage">
    <div class="ease-timeline-box"></div>
  </div>
  <div class="ease-timeline-track">
    <div class="ease-timeline-progress"></div>
  </div>
  <div class="ease-timeline-controls">
    <button data-action="play">▶ Play</button>
    <button data-action="restart">↺ Restart</button>
    <select data-action="speed">
      <option value="0.5">0.5x</option>
      <option value="1" selected>1x</option>
      <option value="2">2x</option>
    </select>
  </div>
</div>
```

A small JS controller (included in `demo.html`) attaches play/restart/speed
behavior to each `.ease-timeline-card`.

## Why is it useful?

Helps users understand animation timing instantly, reduces trial-and-error
when choosing animations, and enhances learning for beginners — similar to
timeline tools in Animate.css documentation. CSS keyframes drive the visuals;
minimal JS handles play/pause/speed controls as proposed in the issue.
Includes prefers-reduced-motion support.
