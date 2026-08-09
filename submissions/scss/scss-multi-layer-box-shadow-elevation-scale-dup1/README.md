# SCSS Utility: Multi-Layer Box Shadow Elevation Scale (#28419)

A powerful SCSS module for the EaseMotion CSS framework that replaces harsh, single-layer CSS box shadows with ultra-smooth, hyper-realistic diffused shadows using 6 perfectly calculated layers.

## 📦 What's included?

- `_multi-layer-box-shadow-elevation-scale.scss`: The SCSS partial containing the multi-layer mathematical mixin and the generator loop.
- `style.css`: The compiled CSS proving the beautiful 6-layer shadow output.
- `demo.html`: A clean, interactive demo showcasing 5 static elevation levels and 1 animated hover state.

## 🛠 Usage via SCSS Mixins

Import the partial into your stylesheet. You can apply the mixin to any component, providing a base shadow color and a mathematical scale factor.

```scss
@import 'multi-layer-box-shadow-elevation-scale';

// @include ease-multi-shadow($color, $scale);

.custom-card {
  // A dark, high-elevation shadow
  @include ease-multi-shadow(rgba(0, 0, 0, 0.1), 2.5);
}

.custom-button {
  // A colored, glowing shadow effect
  @include ease-multi-shadow(rgba(59, 130, 246, 0.2), 1);
}
```

## 🛠 Usage via HTML Utility Classes

If your project uses pre-compiled CSS, apply the preset elevation classes to your markup to instantly achieve realistic depth.

```html
<!-- Lowest elevation, tight shadow -->
<div class="ease-elevate-1">Card</div>

<!-- Highest elevation, wide dispersed shadow -->
<div class="ease-elevate-5">Modal</div>

<!-- Interactive element that "lifts" smoothly off the page on hover -->
<button class="ease-elevate-hover">Hover Me</button>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about premium polish. A standard CSS `box-shadow: 0 4px 10px rgba(0,0,0,0.1);` looks cheap, harsh, and computer-generated. In the real world, light diffuses softly across surfaces, creating multiple layers of umbra and penumbra. This SCSS utility calculates 6 separate shadows—ranging from sharp and close to wide and soft—to simulate true ambient lighting. When transitioning between these states (e.g., in `.ease-elevate-hover`), the result is a buttery smooth, incredibly satisfying animation that single-layer shadows simply cannot replicate.
