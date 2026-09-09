# CSS Trigonometric Functions Orbital Animation

## 1. What does this do?
This example animates elements in perfect circular orbits around a central core node while maintaining their upright orientation throughout the entire orbit, completely using CSS without JavaScript.

## 2. How is it used?
It leverages the modern CSS `@property` API to define a custom animatable angle property `--ease-angle`:

```css
@property --ease-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
```

Inside `calc()`, the native CSS mathematical functions `cos(var(--ease-angle))` and `sin(var(--ease-angle))` calculate the exact X and Y horizontal/vertical offset vectors in real-time based on the defined radius and starting phase offset:

```css
transform: translate(
  calc(cos(var(--ease-angle) + var(--offset)) * var(--radius)),
  calc(sin(var(--ease-angle) + var(--offset)) * var(--radius))
);
```

As `@keyframes ease-orbit` interpolates `--ease-angle` from `0deg` to `360deg`, the element traces a precise circular trajectory.

## 3. Why is it useful?
Before native CSS Trigonometry support (`sin()`, `cos()`), achieving an upright circular orbit required the messy "Double Wrapper Hack" where a parent element rotated 360 degrees and a child element counter-rotated -360 degrees to keep text and orientation level. 

This mathematical approach cleans up the DOM tree, eliminates unnecessary wrapper elements, and allows hardware-accelerated position calculation exclusively on the GPU.
