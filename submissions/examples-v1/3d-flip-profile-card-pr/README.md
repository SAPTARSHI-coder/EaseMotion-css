# 3D Flip Profile Card

## What does this do?

A profile card that flips in 3D space on hover to reveal additional
information on the back side, using `perspective`,
`transform-style: preserve-3d`, and `backface-visibility`.

## How is it used?

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-front">Front content</div>
    <div class="flip-back">Back content</div>
  </div>
</div>
```

## Why is it useful?

Provides an engaging way to display user profiles, team members, product
details, or portfolio information while maintaining a clean interface.
This effect combines motion and functionality, transforming static
content into an interactive experience while remaining lightweight,
reusable, and easy to understand. Pure CSS, no JS required, with
prefers-reduced-motion support.
