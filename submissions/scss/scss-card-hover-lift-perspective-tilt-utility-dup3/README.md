# SCSS Utility: Card Hover Lift & Perspective Tilt Utility (#28405)

A reusable SCSS mixin designed for the EaseMotion CSS framework that applies an interactive 3D perspective tilt and lifting drop-shadow when a user hovers over an element. Ideal for interactive cards, feature blocks, and large CTA buttons.

## 📦 What's included?

- `_card-hover-lift-perspective-tilt-utility.scss`: The clean, well-commented SCSS partial.
- `style.css`: The raw compiled CSS representing the output of the utility classes.
- `demo.html`: A self-contained demo page demonstrating the effects.

## 🛠 Usage via SCSS

Import the partial into your project and use the mixin on any class. You can customize the lift amount, X/Y tilt degrees, shadow spread, animation duration, and easing function.

```scss
@import 'card-hover-lift-perspective-tilt-utility';

.my-custom-card {
  // Uses default values (-10px lift, 5deg tilt, 0.4s)
  @include ease-hover-lift-tilt();
}

.my-dramatic-card {
  // Overriding specific parameters
  @include ease-hover-lift-tilt(
    $lift-amount: -20px,
    $tilt-x: 15deg,
    $tilt-y: 15deg,
    $shadow: 0 40px 50px rgba(0, 0, 0, 0.3)
  );
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can immediately apply these utility classes directly to your HTML markup.

```html
<!-- Standard lift and tilt -->
<div class="card ease-hover-lift-tilt">...</div>

<!-- Reverse tilt direction -->
<div class="card ease-hover-lift-tilt-reverse">...</div>

<!-- Dramatic tilt and heavy shadow -->
<div class="card ease-hover-lift-tilt-strong">...</div>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** design system is built around human-readable, animation-first philosophies. This utility abstracts complex `transform: perspective() rotateX() rotateY()` mathematics into a single, intuitive `@include` statement, preventing developers from manually calculating cubic-beziers and 3D transforms for basic interactive components.
