# Skew Hover States

This example demonstrates how to implement modern, smooth skew-based hover animations using the EaseMotion CSS library. It provides developers with ready-to-use utility classes to apply dynamic hover transformations to interactive UI components like buttons, cards, navigation items, images, and feature tiles.

## 📖 Feature Overview

Hover states shouldn't be limited to simple color changes or scaling. Skew animations add a dynamic, slightly 3D or energetic feel to interactions. This submission includes several skew utilities:

*   `.ease-skew-base`: Applies the necessary transitions and hardware-acceleration properties (e.g., `will-change`, `translateZ`) to ensure the animation is smooth and doesn't cause jagged edges. **Must be applied to all elements using skew hovers.**
*   `.ease-skew-hover-left`: Tilts the element to the left.
*   `.ease-skew-hover-right`: Tilts the element to the right.
*   `.ease-skew-hover-up`: Tilts the element upward on the Y-axis.
*   `.ease-skew-scale`: Combines a slight leftward skew with a scale-up effect for prominent interactive elements.
*   `.ease-skew-perspective`: Combines dual-axis skewing, scaling, and a drop shadow for a 3D perspective effect.

## 🚀 Installation Instructions

1.  Copy the CSS rules from `style.css` into your project's main stylesheet or EaseMotion overrides file.
2.  Alternatively, link the `style.css` file directly in your HTML `<head>`.

```html
<link rel="stylesheet" href="path/to/skew-hover/style.css">
```

## 💻 Usage Examples

To use these effects, apply `.ease-skew-base` along with your chosen direction class to any interactive element.

### Buttons
```html
<button class="ease-skew-base ease-skew-hover-left">Submit Action</button>
```

### Cards
```html
<div class="ease-skew-base ease-skew-scale">
  <h3>Interactive Card</h3>
  <p>Hover over me to see the effect.</p>
</div>
```

### Navigation Links
```html
<nav>
  <a href="#" class="ease-skew-base ease-skew-hover-up">Home</a>
  <a href="#" class="ease-skew-base ease-skew-hover-up">About</a>
</nav>
```

## 🛠️ Customization Options

You can easily adjust the intensity and speed of the animations:
*   **Speed**: Modify the `0.3s` value inside `.ease-skew-base`'s `transition` property.
*   **Intensity**: Increase or decrease the degrees (`deg`) within the `transform: skewX()` or `skewY()` properties in the respective hover classes.

## ♿ Accessibility Notes

Motion can cause discomfort for some users. This implementation natively respects the OS-level `prefers-reduced-motion` media query. 

If a user has configured their system to reduce motion, all skew animations, transitions, and transforms are automatically disabled, ensuring a safe and accessible browsing experience.

```css
@media (prefers-reduced-motion: reduce) {
    /* Skew classes disabled */
}
```
