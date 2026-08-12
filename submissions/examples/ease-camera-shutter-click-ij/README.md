# Camera Shutter Click

A CSS-only camera shutter click animation that simulates closing aperture blades, mimicking a real camera shutter mechanism.

## HTML Structure

```html
<div class="ease-camera-shutter-click">
  <div class="shutter-viewfinder">
    <div class="shutter-aperture" id="aperture">
      <div class="blade" style="--i:0"></div>
      <div class="blade" style="--i:1"></div>
      ...
    </div>
  </div>
  <button class="shutter-btn">Click!</button>
</div>
```

Toggle the `.click` class on `.shutter-aperture` to trigger the animation.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--shutter-color` | `#2a2a2a` | Color of the aperture blades |
| `--blade-count` | `6` | Number of blades forming the aperture |
| `--click-duration` | `0.4s` | Duration of the shutter click animation |
| `--aperture-size` | `120px` | Diameter of the aperture opening |
