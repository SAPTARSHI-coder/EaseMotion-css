# Text Highlight Underline Draw Utilities

A reusable SCSS mixin that creates an animated underline effect for text.

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$color` | `#007bff` | Underline color |
| `$height` | `2px` | Underline thickness |
| `$duration` | `0.3s` | Animation duration |
| `$easing` | `ease` | Transition easing |

## Usage

```scss
.link {
  @include text-highlight-underline-draw();
}
```

## Example

```scss
.link {
  @include text-highlight-underline-draw(
    $color: crimson,
    $height: 3px,
    $duration: .4s
  );
}
```

## Result

The underline smoothly expands from left to right when the element is hovered or focused.