# Stack Layers 3D

An interactive 3D card stack where layered panels fan out when the user hovers over or focuses on the component.

## Features

* 3D layered card effect
* Smooth fan-out interaction
* Pointer and keyboard-friendly interaction
* Dependency-free
* Responsive design
* Reduced-motion support
* Hand-crafted CSS

## Files

```text
stack-layers-3d/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in a browser. Hover over the card stack to see the individual layers fan out in 3D space.

The component can also be focused using the keyboard to trigger the interactive state.

## HTML

```html
<div class="scene">
  <div class="stack" tabindex="0" aria-label="3D stacked panels">

    <div class="layer layer-1">
      <span>01</span>
      <h2>Explore</h2>
    </div>

    <div class="layer layer-2">
      <span>02</span>
      <h2>Design</h2>
    </div>

    <div class="layer layer-3">
      <span>03</span>
      <h2>Build</h2>
    </div>

    <div class="layer layer-4">
      <span>04</span>
      <h2>Launch</h2>
    </div>

  </div>
</div>
```

## CSS Structure

The component uses:

* `.scene` — establishes the 3D perspective.
* `.stack` — contains and controls the layered panels.
* `.layer` — represents an individual panel.
* `.layer-1` through `.layer-4` — control the individual layer positions and depth.

The layers use `transform-style: preserve-3d` and `translateZ()` to create depth.

## Customization

The main dimensions can be customized using CSS variables:

```css
:root {
  --stack-width: 320px;
  --stack-height: 400px;
  --layer-gap: 18px;
  --depth: 70px;
}
```

You can also customize:

* Card dimensions
* Colors and gradients
* Border radius
* Shadow
* Layer spacing
* 3D depth
* Fan-out distance
* Rotation angle

## Accessibility

The stack uses `tabindex="0"` so keyboard users can focus the component.

A visible focus indicator is provided with `:focus-visible`.

Interactive content inside the cards should use semantic HTML elements such as buttons and links.

## Reduced Motion

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .layer,
  .stack {
    transition: none;
  }
}
```

This prevents users who prefer reduced motion from being forced to experience the animation.

## Browser Support

The component uses standard HTML and CSS 3D transforms and does not require any external library or dependency.
