# SCSS Utility: Card Hover Lift & Perspective Tilt (#28425)

A premium interaction SCSS module for the EaseMotion CSS framework that provides ultra-smooth 2D elevation lifts and 3D perspective tilts for card components.

## 📦 What's included?

- `_card-hover-lift-perspective-tilt-utility.scss`: The SCSS partial containing the `transform` mathematics and tuned bezier curves.
- `style.css`: The compiled utility classes.
- `demo.html`: An interactive gallery proving the smoothness of the cubic-bezier physics.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixins on your card elements.

```scss
@import 'card-hover-lift-perspective-tilt-utility';

.my-pricing-card {
  background: white;
  padding: 2rem;
  
  // @include ease-card-lift($lift-amount, $shadow-color, $duration);
  @include ease-card-lift(-12px, rgba(0,0,0,0.2), 0.4s);
}

.my-feature-card {
  // Configurable 3D rotation
  // @include ease-card-tilt($perspective, $rotate-x, $rotate-y, $duration);
  @include ease-card-tilt(1000px, 8deg, -8deg);
}

.my-premium-card {
  // Combines Y-axis lift with 3D rotation
  @include ease-card-lift-tilt();
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your card wrappers.

```html
<!-- Bounces up smoothly on hover -->
<div class="card ease-hover-lift">
  Content
</div>

<!-- Tilts backward in 3D space -->
<div class="card ease-hover-tilt">
  Content
</div>

<!-- Premium combined effect -->
<div class="card ease-hover-lift-tilt">
  Content
</div>
```

## 🚀 Why this fits EaseMotion

**EaseMotion** stands out by avoiding generic, linear animations. A standard `transition: transform 0.3s ease` feels robotic. 

This utility module utilizes heavily tuned `cubic-bezier` curves (specifically a "spring" curve `cubic-bezier(0.34, 1.56, 0.64, 1)` for the lift) that mimic physical mass and momentum. Furthermore, by utilizing `transform: perspective(1000px)`, it unlocks true 3D GPU-accelerated rotations that make interfaces feel deep, interactive, and incredibly polished without needing WebGL or JavaScript libraries.
