# Tilt Card Left Hover

A premium CSS animation example demonstrating a subtle 3D card tilt effect using CSS perspective and `rotateY` transforms, built for the EaseMotion CSS library.

## What does this do?

This example provides a reusable CSS pattern where a card tilts slightly to the left when hovered, creating a polished 3D perspective effect. The tilt angle is fully configurable via a single CSS custom property (`--ease-tilt-angle`), and the parent container applies `perspective: 1000px` to establish the 3D space.

The demo showcases the effect across multiple real-world use cases including product cards, pricing cards, portfolio items, and dashboard widgets — all styled with a modern, premium aesthetic.

## How is it used?

### Basic usage

Wrap cards in a container with `perspective`, then apply the tilt on hover:

```html
<div style="perspective: 1000px">
  <div class="tilt-card" style="--ease-tilt-angle: 8deg">
    <!-- card content -->
  </div>
</div>
```

### Custom property

```css
--ease-tilt-angle: 8deg; /* default */
```

The custom property accepts any valid CSS angle value (`8deg`, `12deg`, `5deg`, etc.). Larger values produce a more dramatic tilt.

### Required parent style

```css
.parent {
  perspective: 1000px;
}
```

The `perspective` property on the parent container creates the 3D space. Without it, `rotateY` would have no visible 3D effect.

### Hover behavior

```css
.card:hover {
  transform: rotateY(var(--ease-tilt-angle));
}
```

A smooth CSS transition handles the entrance and exit of the tilt:

```css
.card {
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
}
```

## Why is it useful?

- **Engagement**: Subtle 3D motion on hover creates a tactile, premium feel that elevates UI components.
- **Configurable**: A single CSS custom property controls the tilt angle, making it trivial to adjust across components.
- **Zero JavaScript**: Pure CSS means no runtime overhead, no event listeners, and no framework dependencies.
- **Reusable**: The pattern can be applied to any card-like component — products, pricing, portfolios, and more.
- **Accessible**: Since the animation only runs on hover, it respects user preferences for reduced motion when combined with `prefers-reduced-motion` media queries.

## Animation Overview

| Property              | Value                                    |
| --------------------- | ---------------------------------------- |
| Transform             | `rotateY(var(--ease-tilt-angle))`        |
| Default angle         | `8deg` (tilts left)                      |
| Parent requirement    | `perspective: 1000px`                    |
| Timing function       | `cubic-bezier(0.25, 0.46, 0.45, 0.94)`  |
| Transition duration   | `0.35s`                                  |
| Activation            | `:hover` pseudo-class                    |
| Deactivation          | Hover ends → smooth return to flat       |

## Perspective Explanation

The `perspective` property defines the distance between the viewer's eye and the z=0 plane. A value of `1000px` simulates a viewing distance of 1000 pixels.

- **Larger values** (e.g. `2000px`): Subtler, more natural 3D effect
- **Smaller values** (e.g. `500px`): More dramatic, exaggerated 3D effect

The perspective is applied to the **parent container**, not the card itself. This ensures all child elements share the same 3D space and vanishing point.

## Tilt Effect Explanation

The `rotateY()` CSS function rotates an element around its vertical Y-axis:

- **Positive angle** (e.g. `8deg`): Rotates the left side toward the viewer, right side away — tilts left
- **Negative angle** (e.g. `-8deg`): Rotates the right side toward the viewer, left side away — tilts right

The `transform-origin` defaults to `center`, keeping the pivot point at the card's center. Combined with `transform-style: preserve-3d`, child elements also participate in the 3D space.

## CSS Variable Explanation

| Variable                | Default | Description                        |
| ----------------------- | ------- | ---------------------------------- |
| `--ease-tilt-angle`     | `8deg`  | The angle of the leftward tilt     |

The variable is defined on `:root` with a fallback value of `8deg`. Override it on any card to change its tilt angle independently.

## Responsive Behavior Notes

- The demo uses a fluid layout with `clamp()` for typography and `auto-fit`/`auto-fill` grid properties for adaptive columns.
- On screens narrower than 640px, all grids collapse to single-column layouts.
- On tablet-sized screens (641px–1024px), grids display in two columns.
- The hero card switches to a stacked layout on mobile for better readability.
- All interactive elements remain fully functional at any viewport size.
- The design uses relative units (`rem`, `%`) throughout for proper scaling.

## File Structure

```
submissions/examples/tilt-card-left-hover-nb/
├── demo.html          # Complete showcase page with hero, demo, technical breakdown, and use cases
├── style.css          # All styles including tilt effect, layout, and responsive rules
└── README.md          # This documentation file
```

## Browser Support

Works in all modern browsers that support CSS 3D transforms and custom properties:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 16+
- Opera 36+

## Accessibility

To respect user preferences for reduced motion, wrap the hover animation in a `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: no-preference) {
  .card:hover {
    transform: rotateY(var(--ease-tilt-angle));
  }
}
```

This ensures users who prefer reduced motion are not affected by the tilt effect.