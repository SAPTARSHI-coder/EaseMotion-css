# Ease Spring-Down Animation

Issue: #67985

A reusable CSS-only spring entrance animation where an element drops from above, overshoots its final position slightly, and settles naturally.

## Requirements covered

- CSS `@keyframes` implementation.
- Configurable duration.
- Uses `transform` and `opacity`.
- Supports `prefers-reduced-motion`.
- Works on arbitrary elements.
- Includes a complete demo and README.

## Usage

Apply the `spring-down` class to any element that should enter from above.

```html
<section class="spring-down">Content</section>
```

Tune the motion using custom properties.

```css
.notice {
  --spring-duration: 800ms;
  --spring-distance: 44px;
  --spring-overshoot: 8px;
}
```

## Custom properties

| Property | Default | Purpose |
| --- | --- | --- |
| `--spring-duration` | `720ms` | Total runtime |
| `--spring-distance` | `36px` | Starting distance above the final position |
| `--spring-overshoot` | `7px` | Peak downward overshoot |
| `--spring-delay` | `0ms` | Optional delay |
| `--spring-easing` | spring-like cubic-bezier | Timing curve |

## Motion model

The element starts above its natural position at zero opacity. It descends quickly toward the destination, moves a few pixels past it, rebounds upward, and settles at its final position with full opacity.

Only `transform` and `opacity` are animated, keeping the effect lightweight and avoiding layout reflow.

## Accessibility

The `prefers-reduced-motion: reduce` media query disables the animation and exposes the final state immediately. Interactive demo controls also include visible focus states.

## Responsive behavior

The example is fully responsive. The hero switches to one column on smaller screens, cards stack vertically, and the configuration grid becomes a single column on narrow devices.

## Files

- `demo.html` — interactive-looking visual showcase and usage examples.
- `style.css` — keyframes, components, responsive behavior, and reduced-motion handling.
- `README.md` — API, usage, and accessibility documentation.

## Design notes

The visual demo uses glass panels and soft gradients to make the vertical entrance easy to observe. The animation class remains independent of the presentation layer and can be reused anywhere.

## Browser support

No JavaScript or external dependencies are required. The animation relies on standard CSS keyframes, transforms, custom properties, and media queries.
