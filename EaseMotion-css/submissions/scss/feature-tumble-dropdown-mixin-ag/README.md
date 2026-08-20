# Tumble Dropdown Mixin

A reusable SCSS mixin that creates a smooth tumble dropdown animation for loading indicators and interactive UI components.

## Features

- Lightweight SCSS mixin
- Customizable animation duration
- Adjustable movement distance
- Adjustable rotation angle
- Easy to reuse
- Supports `prefers-reduced-motion`

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$duration` | `0.6s` | Animation duration |
| `$distance` | `12px` | Vertical movement distance |
| `$rotation` | `25deg` | Rotation angle |
| `$timing` | `ease-in-out` | Animation timing function |

## Usage

```scss
@use "ease-motion" as *;

.loader {
  @include feature-tumble-dropdown-mixin-ag();
}
```

## Custom Example

```scss
@use "ease-motion" as *;

.dropdown-loader {
  @include feature-tumble-dropdown-mixin-ag(
    $duration: 0.8s,
    $distance: 16px,
    $rotation: 30deg,
    $timing: ease-out
  );
}
```

## Output

The element performs a smooth tumble animation by translating vertically while rotating, making it suitable for dropdown loading indicators and animated UI elements.