# Card Border Trail Animation

## What does this do?

It produces a continuous glowing trail animation that rotates around the card border using a spinning conic-gradient pseudo-element.

## How is it used?

Wrap your content container class with the `card-border-trail-uj` class and style the inner face container with `card-content-uj`:

```html
<div class="card-border-trail-uj" style="--trail-color: #6c63ff; --trail-duration: 4s;">
  <div class="card-content-uj">
    <h3>Card Title</h3>
    <p>Card content goes here...</p>
  </div>
</div>
```

Configure parameters with custom CSS variables:
- `--trail-color`: Border trail color (defaults to `#6c63ff`).
- `--trail-duration`: Duration of a full loop rotation (defaults to `4s`).
- `--trail-width`: Border line size (defaults to `1.5px`).
- `--card-radius`: Card corner boundary radius (defaults to `12px`).

## Why is this useful?

This utility adds a premium, futuristic glowing indicator border to dashboard cards, feature highlights, and billing grids. By rotating only the background pseudo-element (`::before`) behind the static card content, it avoids rotating the card text, runs efficiently on the GPU, and simplifies accessibility by resolving prefers-reduced-motion to a static solid border.
