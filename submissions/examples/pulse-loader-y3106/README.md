# Pulse Loader for Dark Mode

## 1. What does this do?

A concentric pulse ripple loader component designed for dark mode, featuring a glowing core and expanding radar waves that indicate loading, active status, or alert states.

## 2. How is it used?

Place the HTML element structure inside your layout. Apply state classes like `pulse-success`, `pulse-danger`, or `pulse-warning` to customize the glow:

```html
<div class="pulse-loader-container">
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="pulse-core"></div>
</div>
```

## 3. Why is it useful?

It fits seamlessly into EaseMotion CSS's core philosophy:

- **Human-readable**: Naming conventions like `pulse-loader-container` and `pulse-ring` clearly define element roles.
- **Animation-first**: Uses smooth radial expansion transitions with staggered keyframe delays to simulate realistic ripple physics.
- **Composable**: Highly versatile; it can be scaled and styled to serve as a status dot, alert badge, or loading overlay.
