# Spotlight Mask Reveal

## What does this do?

It creates a reveal effect where a circular spotlight mask expands outwards on hover to reveal the full hidden element underneath.

## How is it used?

Apply the `spotlight-reveal-uj` class to the element containing your image or text content:

```html
<div class="spotlight-reveal-uj">
  <img src="scenery.jpg" alt="Scenery">
</div>
```

Customize the starting circular mask diameter or target size by adjusting the circle criteria:

```css
.spotlight-reveal-uj {
  clip-path: circle(30px at center); /* custom starting size */
}
```

## Why is this useful?

This effect showcases modern CSS masking and clipping path configurations to build high-end card hover and portfolio interactions. It runs entirely on the GPU via `clip-path` animations, avoids page layout recalculations, and supports media queries for reduced motion preferences.
