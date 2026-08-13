# EaseMotion Topography Map

A generative topographic contour-map effect created with SCSS and layered CSS radial gradients.

## Features

* Pure CSS/SCSS implementation
* No JavaScript required
* Infinitely scalable gradient-based visuals
* Smooth animated contour movement
* Hardware-acceleration-friendly transforms
* Supports `prefers-reduced-motion`
* Suitable for dark-mode interfaces

## Usage

Import the SCSS mixin into your project:

```scss
@use "topography-map";

.topography {
  @include topography-map.ease-topography-map;
}
```

Then apply the class to an element:

```html
<div class="topography">
  Topographic background
</div>
```

## Customization

The mixin accepts optional parameters for the base color, contour color, and line width.

```scss
.topography {
  @include ease-topography-map(
    $base-color: #0b1020,
    $line-color: rgba(120, 180, 255, 0.35),
    $line-width: 2px
  );
}
```

## Why it fits EaseMotion CSS

This effect uses human-readable CSS/SCSS and native browser gradients instead of static image assets. It provides an animated visual treatment while keeping the implementation lightweight, scalable, and dependency-free.

## Accessibility

The animation respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-topography-map {
    animation: none;
  }
}
```

## Demo

Open `demo.html` directly in a browser. No development server or JavaScript runtime is required.
