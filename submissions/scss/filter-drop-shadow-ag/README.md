# Filter Drop Shadow Mixin (ag)

## Description
This SCSS mixin applies a customizable `filter: drop-shadow` effect for elements, which is ideal for transparent PNGs and SVGs. It natively supports hover state animations, comprehensive browser fallbacks, and CSS variable integration for runtime configuration while adhering to the core EaseMotion CSS tokens for easing and transitions.

## Usage
Import the mixin into your SCSS file and include it on your target element.

```scss
@use 'path/to/filter-drop-shadow-ag' as *;

.my-transparent-image {
  @include filter-drop-shadow(
    $x-offset: 0px,
    $y-offset: 6px,
    $blur-radius: 12px,
    $color: rgba(0, 0, 0, 0.15)
  );
}
```

### Parameters
* `$x-offset`: The horizontal offset of the shadow (default: `0`)
* `$y-offset`: The vertical offset of the shadow (default: `4px`)
* `$blur-radius`: The blur radius of the shadow (default: `8px`)
* `$color`: The shadow color (default: `rgba(0, 0, 0, 0.2)`)
* `$hover-x-offset`: Hover horizontal offset (default: `0`)
* `$hover-y-offset`: Hover vertical offset (default: `8px`)
* `$hover-blur-radius`: Hover blur radius (default: `16px`)
* `$hover-color`: Hover shadow color (default: `rgba(0, 0, 0, 0.3)`)
* `$transition-duration`: The duration of the hover transition (default: `$duration-normal`)
* `$transition-easing`: The easing curve of the transition (default: `$ease-out-cubic`)

## Why is it useful?
Using `box-shadow` on a transparent PNG or SVG applies a rectangular shadow around the element's bounding box, which ignores the actual visual outline. `filter: drop-shadow` beautifully conforms to the alpha channel of your images. This mixin solves the pain point of missing cross-browser support by implementing intelligent fallbacks using standard `box-shadow` where `filter` is unsupported, ensuring your UI degrades gracefully on older browsers.
