# Canvas Particle Wave

A pure CSS particle wave animation that simulates a flowing wave across a grid of dots, inspired by canvas-based particle systems — no JavaScript required.

## HTML Structure

```html
<div class="ease-canvas-particle-wave">
  <div class="wave-container">
    <div class="wave-grid" id="waveGrid">
      <div style="--i:0"></div>
      <div style="--i:1"></div>
      ...
    </div>
  </div>
</div>
```

Each grid cell should have a `--i` custom property for staggered delay. Toggle `.paused` on `.wave-grid` to pause the wave.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--particle-color` | `#64ffda` | Color of each particle dot |
| `--particle-size` | `6px` | Diameter of each particle dot |
| `--wave-speed` | `3s` | Duration of one full wave cycle |
| `--wave-height` | `40px` | Vertical displacement of the wave |
