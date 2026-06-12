# sepia() Animation

## What does this do?

Animates the CSS `sepia()` filter — cycling from full color (0) to vintage sepia (1), with hover-triggered sepia effects at different intensities.

## How is it used?

```css
.element {
  filter: sepia(0);
  transition: filter 0.3s;
}
.element:hover {
  filter: sepia(1);
}

/* Or with keyframes */
@keyframes sepia-cycle {
  0%,
  100% {
    filter: sepia(0);
  }
  50% {
    filter: sepia(1);
  }
}
```

## Why is it useful?

The sepia filter adds a warm, nostalgic tone to images and UI elements — commonly used in photography portfolios, vintage-themed designs, and mood boards. Animating sepia creates engaging hover reveals and atmospheric transitions without needing image assets. This fits EaseMotion CSS's aim to make visual effects simple and declarative.
