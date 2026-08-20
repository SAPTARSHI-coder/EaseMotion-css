# ease-filter-drop-shadow-ag

Adds comprehensive functionality to the EaseMotion SCSS mixin suite for filter drop-shadow mixin providing transparent PNG and SVG shadow effects.

## Usage

```scss
@use "ease-filter-drop-shadow-ag" as *;

.my-element {
  @include ease-filter-drop-shadow-ag(0, 8px, 12px, rgba(0,0,0,0.15));
}

.my-png-icon {
  @include ease-png-svg-shadow-ag(rgba(0,0,0,0.2));
}
```

## Why is it useful?

It provides an easy way to add drop shadows to transparent images like PNGs and SVGs with browser fallbacks and CSS variable integration, maintaining full compatibility with core EaseMotion CSS tokens.
