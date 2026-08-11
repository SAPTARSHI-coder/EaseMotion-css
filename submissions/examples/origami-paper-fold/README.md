````markdown
# Origami Paper Fold

A smooth, lightweight Origami Paper Fold particle effect built entirely with
HTML and vanilla CSS.

## Features

- Pure HTML and CSS
- No JavaScript or external dependencies
- Smooth 3D fold animation
- Hardware-friendly CSS transforms
- Dark and light mode support
- Responsive layout
- Respects `prefers-reduced-motion`

## Files

```text
origami-paper-fold/
├── demo.html
├── style.css
└── README.md
````

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the animation markup:

```html
<main class="origami-scene">
  <div class="origami-paper" aria-hidden="true">
    <div class="origami-fold"></div>
    <div class="origami-fold"></div>
    <div class="origami-fold"></div>
    <div class="origami-fold"></div>
  </div>
</main>
```

## How It Works

The effect uses four CSS elements to represent folded paper surfaces.
`transform`, `perspective`, gradients, and CSS keyframes create the
three-dimensional folding motion.

No JavaScript is required.

## Accessibility

The decorative animation is marked with `aria-hidden="true"` so it does not
create unnecessary screen-reader output.

The animation also respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .origami-paper,
  .origami-fold {
    animation: none;
  }
}
```

## Browser Support

Tested with modern browsers supporting CSS transforms, gradients, keyframes,
and `prefers-reduced-motion`.

* Chrome
* Firefox
* Edge
* Safari

## Issue

Closes #73812

