# grayscale() Animation

## What does this do?

Animates the CSS `grayscale()` filter — cycling from full color to black & white, with hover-triggered grayscale removal that reveals full color as an interaction reward.

## How is it used?

```css
.element {
  filter: grayscale(0.8);
  transition: filter 0.3s;
}
.element:hover {
  filter: grayscale(0);
}

/* Or with keyframes */
@keyframes gray-cycle {
  0%,
  100% {
    filter: grayscale(0);
  }
  50% {
    filter: grayscale(1);
  }
}
```

## Why is it useful?

Grayscale is a powerful visual signal — it communicates "inactive," "archived," or "secondary." Animating from grayscale to color on hover creates a satisfying "reveal" effect that rewards interaction. This pattern is used in image galleries, feature cards, and navigation menus, fitting EaseMotion CSS's accessible, animation-first approach.
