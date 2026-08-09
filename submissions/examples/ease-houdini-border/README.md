# Ease Houdini Border

## 1. What does this do?

The **Ease Houdini Border** component creates a smooth, continuously spinning gradient border around a element card by natively animating a custom CSS angle property using the CSS Houdini `@property` API.

## 2. How is it used?

Register the custom CSS property with an `<angle>` syntax, define keyframes to transition the angle, apply a `conic-gradient` to a pseudo-element, and mask the inner area:

```css
/* 1. Register custom property */
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* 2. Define keyframes to rotate angle */
@keyframes ease-spin-gradient {
  to {
    --gradient-angle: 360deg;
  }
}

/* 3. Apply background gradient using custom property */
.ease-houdini-card::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: conic-gradient(from var(--gradient-angle), transparent 70%, #3b82f6, #ec4899, transparent 100%);
  animation: ease-spin-gradient 3s linear infinite;
  z-index: 0;
}
```

## 3. Why is it useful?

Using CSS Houdini `@property` completely eliminates the need for JavaScript math, `requestAnimationFrame` loops, SVG manipulations, or heavy DOM hacks. By teaching the browser how to type check and interpolate custom CSS properties like angles natively, the animation benefits from hardware GPU acceleration for super smooth, high-performance gradient rotation directly off the main thread.
