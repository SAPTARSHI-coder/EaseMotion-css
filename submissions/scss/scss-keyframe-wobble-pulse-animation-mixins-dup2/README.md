# SCSS Utility: Keyframe Wobble & Pulse Animation Mixins (#28406)

A set of highly customizable SCSS mixins for the EaseMotion CSS framework that dynamically generate `@keyframes` for Wobble and Pulse animations. This allows developers to easily create variations of these animations without manually writing complex percentage-based keyframe math.

## 📦 What's included?

- `_keyframe-wobble-pulse-animation-mixins.scss`: The well-commented SCSS partial containing the generator mixins.
- `style.css`: The raw compiled CSS representing the output of the utility classes.
- `demo.html`: A self-contained demo page demonstrating the effects.

## 🛠 Usage via SCSS

Import the partial into your project. Use the `generate-*` mixins to build your `@keyframes`, and the `apply-*` mixins to attach them to your classes.

```scss
@import 'keyframe-wobble-pulse-animation-mixins';

// 1. Generate Custom Keyframes
// generate-wobble-keyframes($name, $rotation, $translation)
@include generate-wobble-keyframes('my-crazy-wobble', 20deg, 40%);

// generate-pulse-keyframes($name, $scale-max, $shadow-color)
@include generate-pulse-keyframes('my-alert-pulse', 1.2, rgba(255, 0, 0, 0.8));

// 2. Apply to Elements
.error-icon {
  &:hover {
    @include apply-wobble('my-crazy-wobble', 0.5s);
  }
}

.live-indicator {
  @include apply-pulse('my-alert-pulse', 1s);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default generated utility classes directly in your HTML markup.

```html
<!-- Wobbles on hover -->
<div class="ease-wobble">Hover me</div>
<div class="ease-wobble-strong">Hover me harder</div>

<!-- Pulses infinitely -->
<div class="ease-pulse">Live</div>
<div class="ease-pulse-strong">Attention</div>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** design system abstracts away complex animation math. Writing a 6-step wobble animation (`15%`, `30%`, `45%`, etc.) with cascading rotation decay is extremely tedious to do manually in standard CSS. These SCSS mixins mathematically generate the decay steps for you based on a single rotation input, fitting perfectly with the EaseMotion philosophy of developer-friendly, human-readable animation.
