# Image Rendering Demo

## 1. What does this do?

This showcase page demonstrates how the CSS `image-rendering` property controls browser scaling interpolation to keep retro pixel art sprites razor-sharp and prevent them from becoming blurry when scaled, while ensuring standard photography remains smooth.

## 2. How is it used?

You can control the image rendering behavior by applying the following classes to your image elements:

### For Pixel Art & Sprites:

```html
<img
  class="render-pixelated"
  src="assets/retro-character.png"
  alt="Retro Sprite"
/>
```

### For Regular Photos & Gradients:

```html
<img class="render-auto" src="assets/nature-view.jpg" alt="Nature View" />
```

## 3. Why is it useful?

It fits directly into EaseMotion's philosophy of providing simple, motion-first, and pixel-perfect design utilities with zero configuration. Managing scaling quality across different screen resolutions and high-DPI (Retina) displays ensures retro gaming sprites, blocky avatars, and modern UI icons stay visually crisp and premium without complex build configurations.
