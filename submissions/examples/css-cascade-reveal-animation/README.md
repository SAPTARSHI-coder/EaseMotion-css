# CSS Cascade Reveal Animation

A pure CSS animation that reveals elements sequentially using individual animation delays.

## Features

- Pure HTML and CSS
- No JavaScript
- Sequential cascade animation
- CSS custom property for animation delays
- Responsive layout
- Hover interaction
- Reduced-motion support
- No external dependencies

## Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Give each element the `cascade-item` class and define its delay:

```html
<div class="cascade-item" style="--delay: 0ms;">
  <h2>First Item</h2>
</div>

<div class="cascade-item" style="--delay: 120ms;">
  <h2>Second Item</h2>
</div>

<div class="cascade-item" style="--delay: 240ms;">
  <h2>Third Item</h2>
</div>
```

The `--delay` custom property controls when each element enters the animation.

## Customization

The animation timing can be changed with CSS variables:

```css
:root {
  --duration: 650ms;
  --easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Individual delays can be adjusted:

```html
<article
  class="cascade-item"
  style="--delay: 300ms;"
>
  ...
</article>
```

## How It Works

Each `.cascade-item` starts transparent and slightly translated downward.

The `cascade-reveal` keyframes transition the element to its final position.

The `--delay` custom property creates the staggered sequence:

```css
.cascade-item {
  animation:
    cascade-reveal
    var(--duration)
    var(--easing)
    var(--delay)
    forwards;
}
```

This makes it possible to create a cascade effect without JavaScript.

## Accessibility

The component:

- Uses semantic HTML elements.
- Keeps content available in the document.
- Supports keyboard-accessible content naturally.
- Respects `prefers-reduced-motion`.
- Does not depend on JavaScript.

## Browser Support

The component uses standard CSS animations, custom properties, transforms, media queries, and gradients.

No external libraries are required.

## Why It Fits EaseMotion CSS

This submission demonstrates a reusable CSS motion pattern for sequentially revealing interface elements. It is lightweight, dependency-free, responsive, and easy to customize.

## Demo

Open `demo.html` directly in a browser. No server is required.