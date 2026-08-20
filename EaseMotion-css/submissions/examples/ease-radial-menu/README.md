# Ease Radial Menu

## 1. What does this do?
The **Ease Radial Menu** component dynamically positions menu items evenly in a circular radial layout around a central trigger button using modern, native CSS Trigonometry functions (`cos()` and `sin()`).

## 2. How is it used?
Pass a custom CSS variable `--angle` to each item element (e.g. `--angle: 60deg;`) and define a `--radius` variable on the parent wrapper. The layout positions each item automatically:

```css
.ease-radial-item {
  transform: translate(
    calc(var(--radius) * cos(var(--angle))),
    calc(var(--radius) * sin(var(--angle)))
  );
}
```

## 3. Why is it useful?
- **Zero JavaScript Needed:** It completely replaces JavaScript `Math.cos()` and `Math.sin()` loops, removing calculation overhead from the main thread.
- **Performant & Hardware Accelerated:** Computations are handled directly by the browser's layout and rendering engine.
- **Flexible & Declarative:** Angle values and radial distance can easily be modified via CSS custom properties.
