# SCSS Utility: Multi-Layer Box Shadow Elevation Scale (#28479)

A powerful SCSS mixin and utility class system designed for EaseMotion CSS that generates highly realistic, volumetric box shadows. It avoids the "flat" look of single-layer CSS shadows by stacking multiple layers of low-opacity drop shadows with varying blur radii and offsets.

## 📦 What's included?

- `_multi-layer-box-shadow-elevation-scale.scss`: The raw SCSS partial containing the `@mixin ease-elevation` and a loop that generates `.ease-elevation-0` through `.ease-elevation-5` utility classes.
- `style.css`: The compiled CSS output for demonstration purposes.
- `demo.html`: A self-contained browser demo showcasing the 5 elevation levels and a physical hover transition effect.

## 🛠 Features

- **Multi-Layer Depth**: Each elevation level uses 2 to 3 distinct `box-shadow` layers (an ambient shadow, a direct light shadow, and a crisp contact shadow on higher levels) to accurately mimic physical light.
- **Parametric Mixin**: The `@mixin ease-elevation($level, $color, $opacity)` allows you to customize the color and intensity of the shadow based on your theme (e.g., using a darker shadow on dark mode, or a tinted shadow for colorful cards).
- **Zero Dependencies**: Pure SCSS using standard CSS colors. No external pre-processors or JS needed.

## 🚀 How to use

**As a utility class (HTML):**

Include the compiled CSS in your project and apply the classes directly to elements.

```html
<div class="ease-elevation-3">
  I float above the background!
</div>
```

**As an SCSS Mixin (in your stylesheets):**

Import the partial into your main SCSS file and `@include` it for powerful hover effects.

```scss
@import 'multi-layer-box-shadow-elevation-scale';

.my-card {
  background: white;
  border-radius: 12px;
  /* Start flat */
  @include ease-elevation(1);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: translateY(-8px);
    /* Elevate smoothly on hover, with a custom brand color tint */
    @include ease-elevation(4, rgba(59, 130, 246, 1));
  }
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is all about fluid, physical interfaces. Single-layer box shadows look cheap and digital. Multi-layer box shadows look like real objects sitting on a physical desk. By combining these highly tuned, physically-based shadows with CSS transitions, elements on the screen feel like they have genuine weight and depth.
