# Ease Spring-Up Animation

Issue: #67983

A reusable CSS-only spring entrance animation where an element rises from a lower position, overshoots its destination slightly, and naturally settles.

## Requirements covered

- CSS `@keyframes` implementation.
- Configurable duration through custom properties.
- Uses `transform` and `opacity`.
- Supports `prefers-reduced-motion`.
- Works on arbitrary elements.
- Includes a complete visual demo.

## Usage

Add the `spring-up` class to any element that should enter from below.

```html
<article class="spring-up">Content</article>
```

The default duration is `700ms`. Override it locally when a component needs a different rhythm.

```css
.hero-card {
  --spring-duration: 900ms;
  --spring-distance: 48px;
  --spring-delay: 120ms;
}
```

## Custom properties

| Property | Default | Purpose |
| --- | --- | --- |
| `--spring-duration` | `700ms` | Total animation runtime |
| `--spring-distance` | `32px` | Initial vertical offset |
| `--spring-overshoot` | `-6px` | Overshoot position |
| `--spring-delay` | `0ms` | Optional entrance delay |
| `--spring-easing` | spring-like cubic-bezier | Timing curve |

## Motion model

The animation begins with zero opacity and a positive Y translation. It then moves slightly beyond the final position, returns through the destination, and settles at `translateY(0)` with full opacity.

Because the animation only changes `transform` and `opacity`, it is suitable for lightweight UI entrances and avoids layout changes during the motion.

## Accessibility

The stylesheet includes a `prefers-reduced-motion: reduce` media query. When reduced motion is requested, the animation is removed and the element remains visible in its final position.

Focus styles are also provided for interactive controls in the demo.

## Responsive behavior

The demo changes from a two-column hero to a single-column layout at smaller widths. Cards and configuration panels also collapse to maintain readable spacing on mobile devices.

## Files

- `demo.html` — complete showcase and usage examples.
- `style.css` — animation, component styling, responsive rules, and accessibility behavior.
- `README.md` — implementation and customization documentation.

## Design notes

The demo uses a dark glassmorphism visual system so the vertical motion remains easy to see. The animation itself does not depend on the visual theme and can be applied to unrelated components.

## Browser support

The implementation uses widely supported CSS animations, transforms, custom properties, and media queries. No JavaScript or external dependencies are required.
