# Rotate Card 3D

A 3D flipping card component with front and back faces. The card rotates with a smooth perspective transform on hover or click.

## Features

- 3D perspective flip animation
- Hover (desktop) and click (mobile) support
- Front and back faces with `backface-visibility: hidden`
- Multiple card instances on one page
- Customizable via CSS custom properties

## Usage

```html
<div class="card-3d">
  <div class="card-inner">
    <div class="card-front">Front content</div>
    <div class="card-back">Back content</div>
  </div>
</div>
```

Add/remove the `flipped` class on `.card-3d` to control the state.

## Custom Properties

| Property          | Default                | Description              |
|-------------------|------------------------|--------------------------|
| `--rc3-duration`  | `0.7s`                 | Flip animation duration  |
| `--rc3-card-front`| `#6c5ce7`              | Front face background    |
| `--rc3-card-back` | `#2d2d44`              | Back face background     |
| `--rc3-radius`    | `16px`                 | Card border radius       |
| `--rc3-shadow`    | `0 8px 32px rgba(...)` | Card box-shadow          |
