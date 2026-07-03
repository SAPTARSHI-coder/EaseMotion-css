# SCSS Utility: Gradient Text Flow & Animation Utility Classes (#28417)

A stunning typography module for the EaseMotion CSS framework. This utility replaces boring solid text with dynamic, continuously flowing multi-color gradients using `background-clip: text` and animated `background-position`.

## 📦 What's included?

- `_gradient-text-flow-animation-utility-classes.scss`: The SCSS partial containing the flow keyframes, the customizable mixin, and the preset classes.
- `style.css`: The compiled CSS proving the animation math and vendor prefixes.
- `demo.html`: A beautiful, self-contained showcase of the text animations.

## 🛠 Usage via SCSS Mixins

Import the partial into your stylesheet. You can apply the mixin to any typography element, defining 3 gradient stops and an animation duration.

```scss
@import 'gradient-text-flow-animation-utility-classes';

// @include ease-text-gradient-flow($color1, $color2, $color3, $duration);

.hero-title {
  font-size: 5rem;
  font-weight: 900;
  
  // Custom neon purple/blue flow lasting 10 seconds
  @include ease-text-gradient-flow(#c084fc, #3b82f6, #818cf8, 10s);
}
```

## 🛠 Usage via HTML Utility Classes

If your project relies on pre-compiled CSS, just apply one of the preset flow classes directly to your heading tags.

```html
<!-- Sunset (Pink to Orange to Yellow) -->
<h1 class="ease-text-flow-sunset">Hello World</h1>

<!-- Ocean (Cyan to Blue to Purple) -->
<h1 class="ease-text-flow-ocean">Hello World</h1>

<!-- Aurora (Green to Cyan to Indigo) -->
<h1 class="ease-text-flow-aurora">Hello World</h1>
```

## 🚀 Why this fits EaseMotion

The core philosophy of **EaseMotion** is bringing interfaces to life through fluid, engaging animations. Large hero typography is often the first thing a user sees on a landing page. By converting static text into a subtle, slowly breathing gradient loop, it immediately creates a sense of premium polish and motion without requiring heavy JavaScript libraries or SVGs. The SCSS mixin automatically handles the complex `-webkit-background-clip` vendor prefixes and `300%` background sizing math, saving developers significant boilerplate.
