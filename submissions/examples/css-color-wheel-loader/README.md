# CSS Color Wheel Loader

A reusable CSS-only color wheel loader where colorful segments rotate continuously while individual segments receive animated highlight states.

## Features

- Pure HTML and CSS
- No JavaScript
- Eight-color rotating wheel
- Animated segment highlights
- Pulsing center indicator
- Smooth continuous rotation
- Responsive sizing
- CSS custom properties
- Reduced-motion support
- Semantic loading status
- No external dependencies

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the loader:

```html
<div
  class="color-wheel"
  role="status"
  aria-label="Loading"
>
  <span class="wheel-segment segment-1"></span>
  <span class="wheel-segment segment-2"></span>
  <span class="wheel-segment segment-3"></span>
  <span class="wheel-segment segment-4"></span>
  <span class="wheel-segment segment-5"></span>
  <span class="wheel-segment segment-6"></span>
  <span class="wheel-segment segment-7"></span>
  <span class="wheel-segment segment-8"></span>

  <span class="wheel-center" aria-hidden="true">
    <span class="wheel-dot"></span>
  </span>
</div>
```

## Customization

The loader can be customized using CSS variables:

```css
:root {
  --wheel-size: 190px;
  --segment-width: 20px;
  --segment-height: 70px;

  --cyan: #39e8ff;
  --blue: #477dff;
  --purple: #a45cff;
  --pink: #ff4fcf;
  --orange: #ff8a3d;
  --yellow: #ffe45c;
  --green: #48e37a;
}
```

Change the animation duration to control the wheel speed:

```css
.color-wheel {
  animation-duration: 3s;
}
```

## Accessibility

The loader uses `role="status"` and an `aria-label` to communicate its loading state to assistive technologies.

Decorative elements are marked with `aria-hidden="true"`.

The component also respects:

```css
@media (prefers-reduced-motion: reduce)
```

so users who request reduced motion do not receive continuous animation.

## Browser Support

The component uses standard CSS animations, transforms, gradients, filters, and media queries.

No JavaScript or external libraries are required.

## Why it fits EaseMotion CSS

The Color Wheel Loader provides a reusable CSS animation pattern for loading states. It demonstrates continuous rotation, staggered segment highlighting, CSS custom properties, responsive sizing, and reduced-motion handling while remaining completely dependency-free.