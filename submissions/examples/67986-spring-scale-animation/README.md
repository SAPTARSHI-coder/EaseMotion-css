# Ease Spring-Scale Animation

Issue: #67986

A reusable CSS-only spring scale animation where an element grows from a smaller size, slightly overshoots its final scale, and naturally settles.

## Requirements covered

- CSS `@keyframes` implementation.
- Configurable duration.
- Uses `transform` and `opacity`.
- Supports `prefers-reduced-motion`.
- Works on arbitrary elements.
- Includes a complete demo and README.

## Usage

Apply `spring-scale` to any element that should enter with a spring-like growth.

```html
<div class="spring-scale">Content</div>
```

Tune the animation with custom properties.

```css
.panel {
  --spring-duration: 800ms;
  --spring-start: .72;
  --spring-overshoot: 1.05;
}
```

## Custom properties

| Property | Default | Purpose |
| --- | --- | --- |
| `--spring-duration` | `680ms` | Total runtime |
| `--spring-start` | `.78` | Initial scale |
| `--spring-overshoot` | `1.04` | Peak scale |
| `--spring-delay` | `0ms` | Optional delay |
| `--spring-easing` | spring-like cubic-bezier | Timing curve |

## Motion model

The component starts smaller and transparent. It grows through its natural size, briefly exceeds scale one, rebounds below it, and settles at scale one with full opacity.

The implementation uses only `transform` and `opacity`, avoiding layout changes during the animation.

## Accessibility

The stylesheet detects `prefers-reduced-motion: reduce`. In that mode, the animation is removed and the final state is shown immediately. Demo controls also retain visible focus indicators.

## Responsive behavior

The showcase uses a responsive grid. The hero collapses to one column on smaller screens, cards stack vertically, and configuration tokens become easier to scan on narrow devices.

## Files

- `demo.html` — complete showcase and practical examples.
- `style.css` — spring keyframes, design system, responsive rules, and accessibility support.
- `README.md` — usage and customization documentation.

## Design notes

The glassmorphism presentation provides contrast for the scale change without coupling the utility to a particular design system. The animation class can be reused on cards, buttons, dialogs, badges, and other elements.

## Browser support

The component requires no JavaScript or external dependency. It uses standard CSS animations, transforms, custom properties, and media queries.
