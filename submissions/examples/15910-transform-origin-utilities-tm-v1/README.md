# Transform Origin Utilities & Demos

Issue: [#15910](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/15910)

## What does this do?

Provides the `.ease-origin-*` utility classes (such as `.ease-origin-center`, `.ease-origin-top-left`, etc.) and demonstrates how the `transform-origin` CSS property alters the pivot point (anchor point) around which 2D and 3D transformations—like rotation, scaling, and skewing—are calculated.

## How is it used?

Apply the desired `ease-origin-*` class to any element undergoing visual transforms:

```html
<!-- Rotating hand pinned at the bottom-center instead of rotating from its center -->
<div class="clock-hand ease-origin-bottom"></div>

<!-- Scaling a card outward from the top-left corner on hover -->
<div class="product-card ease-origin-top-left"></div>
```

## Why is it useful?

It gives developers fine-grained control over layout kinematics. In animation-driven web design, changing the transform origin is essential for realistic physics (e.g. pendulum swings, door hinges, gauge needles, folding panels) and for user interface focus (e.g. expanding dropdown menus from their anchor point, zoom-in cards from their baseline). This utility enables modular, performant, and customizable motion design directly inside HTML templates.
