# SCSS Utility: Multi-Layer Box Shadow Elevation Scale

## What does this do?
Provides a clean, reusable SCSS mixin to generate smooth, multi-layered box shadows resembling physical material elevation. By layering multiple shadows of varying blur and spread, the result looks significantly more premium and realistic than single-layer shadows.

## Mixin Signature
```scss
@mixin elevation(
  $level: 1,
  $shadow-color: rgba(0, 0, 0, 0.1)
);
```

### Parameters
- `$level`: The elevation height level, from `1` (lowest) to `5` (highest).
- `$shadow-color`: The base color of the shadow (default: `rgba(0, 0, 0, 0.1)`).

## Usage Example
```scss
@import "scss-multi-layer-box-shadow-elevation-scale";

.card-elevation-2 {
  background: white;
  border-radius: 8px;
  @include elevation(2, rgba(30, 41, 59, 0.15));
}

.modal-elevation-5 {
  background: white;
  border-radius: 12px;
  @include elevation(5, rgba(15, 23, 42, 0.25));
}
```

## Compiled CSS Output
```css
.card-elevation-2 {
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(30, 41, 59, 0.0225), 0 3px 6px rgba(30, 41, 59, 0.0345);
}

.modal-elevation-5 {
  background: white;
  border-radius: 12px;
  box-shadow: 0 19px 38px rgba(15, 23, 42, 0.075), 0 15px 12px rgba(15, 23, 42, 0.055);
}
```
 We also provide pre-generated elevation classes:
- `.ease-elevation-1`
- `.ease-elevation-2`
- `.ease-elevation-3`
- `.ease-elevation-4`
- `.ease-elevation-5`
