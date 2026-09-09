# Interactive Holographic Glassmorphism Card

A reusable single-card UI component featuring interactive 3D parallax tilt, pointer-tracking holographic lighting, glassmorphism, and an animated spectrum effect.

## Features

* Interactive 3D parallax tilt
* Pointer-position-aware holographic reflection
* Glassmorphism surface using `backdrop-filter`
* Animated holographic spectrum
* GPU-friendly transform-based interaction
* CSS custom properties for easy customization
* Responsive layout
* Keyboard focus support
* Visible `focus-visible` state
* `prefers-reduced-motion` support
* No external JavaScript libraries
* Self-contained component

## Files

```text
holographic-glass-card-uj/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the HTML structure into your project and include `style.css`.

```html
<article
  class="holo-card"
  tabindex="0"
  aria-label="Interactive holographic profile card"
>
  ...
</article>
```

The component's JavaScript automatically tracks pointer movement and updates the following CSS custom properties:

```css
--rotate-x
--rotate-y
--pointer-x
--pointer-y
```

These properties control the card's 3D rotation and holographic lighting position.

## Customization

The component exposes several CSS variables:

```css
:root {
  --card-width: 380px;
  --card-radius: 28px;

  --glass-bg: rgba(255, 255, 255, 0.07);
  --glass-border: rgba(255, 255, 255, 0.18);

  --holo-cyan: #55f6ff;
  --holo-purple: #a56bff;
  --holo-pink: #ff62d8;

  --tilt-speed: 420ms;
}
```

Change these variables to adapt the component to different visual systems.

## Interaction

The card calculates the pointer's position relative to its own bounds.

Horizontal movement controls the Y-axis rotation:

```text
Pointer left  → rotate left
Pointer right → rotate right
```

Vertical movement controls the X-axis rotation:

```text
Pointer top    → tilt upward
Pointer bottom → tilt downward
```

The same pointer coordinates are used by the holographic radial gradient to create a moving light-reflection effect.

## Accessibility

The component includes:

* Keyboard focusability through `tabindex="0"`
* `:focus-visible` styling
* Semantic `<article>` markup
* Accessible button labeling
* Reduced-motion support using:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, the interactive tilt and spectrum animation are disabled.

## Performance

The interaction uses `requestAnimationFrame()` to synchronize pointer updates with browser rendering.

Only transform and CSS custom-property values are updated during pointer interaction. The component does not modify layout dimensions during movement.

## Browser Support

The component uses modern CSS features including:

* CSS custom properties
* `transform-style: preserve-3d`
* `backdrop-filter`
* `background-clip`
* `:focus-visible`

Browsers without `backdrop-filter` support will still display the card, although the glass effect will be reduced.

## Component Scope

This submission intentionally provides **one reusable card component**, not a complete website or card deck.

The surrounding `body` styles in `demo.html` only provide a minimal preview environment for demonstrating the component.
