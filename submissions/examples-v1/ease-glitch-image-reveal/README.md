# CSS-Only Glitch Image Reveal (`ease-glitch-image-reveal`)

A hyper-stylized, cyberpunk glitch hover effect built entirely with CSS `clip-path` animations.

## 🚀 Features

- **Zero-JS Glitch**: Uses duplicate image layers and rapid CSS `clip-path: inset()` keyframes to horizontally slice and offset the image in real-time.
- **RGB Splitting**: Utilizes `background-blend-mode: multiply` and `mix-blend-mode: screen` to isolate and offset red and cyan color channels, creating a chromatic aberration effect.
- **Reveal Mechanic**: The image rests in a dark, desaturated state and explodes into full color and glitching noise instantly on hover.
- **Accessible**: Features strict `prefers-reduced-motion` fallbacks to kill the rapid glitch keyframes for users with motion sensitivity.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`.

Simply apply the inline custom property `--img-url` to the container to pass the image into the layers!

```html
<div
  class="ease-glitch-image-reveal"
  style="--img-url: url('path-to-image.jpg');"
>
  <div class="glitch-layer base-layer"></div>
  <div class="glitch-layer glitch-layer-1"></div>
  <div class="glitch-layer glitch-layer-2"></div>
</div>
```
