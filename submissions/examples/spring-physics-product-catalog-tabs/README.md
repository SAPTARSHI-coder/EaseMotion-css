# CSS Spring Physics Product Catalog Tabs

A responsive, pure CSS product catalog tabs component featuring smooth
spring-inspired transitions.

The component demonstrates how CSS custom properties, cubic-bezier easing,
transforms, and keyframes can create a natural spring-like interaction
without JavaScript.

## Features

* Pure HTML and CSS
* No JavaScript
* Spring-style tab hover interaction
* Animated product category switching
* Responsive product grid
* Keyboard focus support
* Reduced-motion support
* Customizable animation parameters
* Self-contained demo
* No external dependencies

## Demo

Open `demo.html` directly in a browser.

No server or build tool is required.

## Usage

The component uses native radio inputs and labels:

```html
<div class="tabs">

  <input
    type="radio"
    name="category"
    id="all"
    checked
  >

  <label for="all" class="tab">
    <span>01</span>
    <strong>All Products</strong>
  </label>

  <input
    type="radio"
    name="category"
    id="tech"
  >

  <label for="tech" class="tab">
    <span>02</span>
    <strong>Technology</strong>
  </label>

</div>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Spring behavior can be customized through CSS variables:

```css
:root {
  --spring-duration: 600ms;

  --spring-easing:
    cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );

  --spring-scale: 1.025;

  --spring-lift: -5px;

  --panel-duration: 550ms;
}
```

### Variables

| Variable            | Purpose                          |
| ------------------- | -------------------------------- |
| `--spring-duration` | Duration of tab interaction      |
| `--spring-easing`   | Spring-like easing curve         |
| `--spring-scale`    | Hover scale                      |
| `--spring-lift`     | Vertical hover movement          |
| `--panel-duration`  | Product panel animation duration |

## Accessibility

Native radio inputs provide the tab selection mechanism.

The tab labels include visible `:focus-visible` styling for keyboard users.

The component also respects:

```css
@media (prefers-reduced-motion: reduce)
```

to minimize animation for users who request reduced motion.

## Responsive Design

The product cards use:

* 3 columns on large screens
* 2 columns on tablet-sized screens
* 1 column on small screens

The category tabs also adapt to smaller viewports.

## Animation

The spring interaction uses a custom cubic-bezier curve:

```css
cubic-bezier(
  0.175,
  0.885,
  0.32,
  1.275
)
```

The product panels use multiple keyframe stages to create an
overshoot-and-settle effect.

This creates a spring-inspired motion while keeping the implementation
entirely CSS-based.

## Why It Fits EaseMotion CSS

The component focuses on animation as a reusable CSS pattern.

It demonstrates how developers can create natural-looking spring motion
using standard CSS without JavaScript or animation libraries.

The timing, easing, scale, and movement values are exposed as CSS custom
properties, making the component easy to adapt to different projects.

## Files

```text
spring-physics-product-catalog-tabs/
├── demo.html
├── style.css
└── README.md
```

## Issue

This submission addresses:

**#50318 — Add CSS Spring Physics Tabs for Product Catalog Layouts**
