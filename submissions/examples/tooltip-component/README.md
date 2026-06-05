# Tooltip Component

## What does this do?

A pure CSS tooltip system that displays contextual information on hover or focus. Supports four position variants (top, bottom, left, right), multiple width options, smooth fade-in animations with arrow indicators, automatic dark mode theming, and full keyboard accessibility.

## How is it used?

Add the `ease-tooltip` class to any element and provide the tooltip text via the `data-tooltip` attribute:

```html
<!-- Basic Tooltip -->
<span class="ease-tooltip" data-tooltip="Your text here"> Hover me </span>

<!-- With Position Variant -->
<span class="ease-tooltip" data-tooltip="Bottom tooltip" data-position="bottom">
  Hover me
</span>

<!-- Wide Tooltip for longer content -->
<span
  class="ease-tooltip"
  data-tooltip="This is a longer description that wraps naturally."
  data-width="wide"
>
  Hover me
</span>

<!-- Icon with Tooltip -->
<span class="ease-tooltip" data-tooltip="Settings"> ⚙️ </span>
```

### Available Attributes

| Attribute       | Values                           | Default | Description                                                |
| --------------- | -------------------------------- | ------- | ---------------------------------------------------------- |
| `data-position` | `top`, `bottom`, `left`, `right` | `top`   | Controls where the tooltip appears relative to the trigger |
| `data-width`    | `wide`, `full`                   | auto    | Controls maximum width and text wrapping behavior          |

## Why is it useful?

Tooltips are essential for:

- **Contextual Help**: Explaining icons, buttons, or form fields without cluttering the UI
- **Accessibility**: Providing additional context for screen reader users (when combined with ARIA)
- **UX Enhancement**: Showing hints, shortcuts, or descriptions on demand
- **Space Efficiency**: Keeping interfaces clean while maintaining information density

This component fits EaseMotion CSS's philosophy by being:

- **Animation-first**: Smooth fade-in/slide-up transitions with configurable duration
- **Human-readable**: Simple `data-tooltip` attribute pattern anyone can understand
- **Composable**: Works with any HTML element (buttons, icons, links, text)
- **Zero JavaScript**: Pure CSS using `::before`/`::after` pseudo-elements
- **Responsive**: Adapts to mobile screens and respects reduced motion preferences

## Tech Stack

- HTML5 (semantic markup with data attributes)
- CSS3 (custom properties, pseudo-elements, transitions, media queries)
- No frameworks, no JavaScript dependencies

## Preview

Open `demo.html` directly in your browser to see all position variants, width options, and interactive examples.

## Features

- **4 Position Variants**: Top (default), Bottom, Left, Right
- **3 Width Options**: Auto (single-line), Wide (250px), Full (320px)
- **Smooth Animations**: Fade-in with subtle slide effect
- **Arrow Indicators**: Dynamic arrows pointing to trigger element
- **Dark Mode Support**: Automatic theme switching via CSS variables
- **Keyboard Accessible**: Works with `:focus-within` for tab navigation
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Mobile Responsive**: Adjusts positioning and sizing on small screens
- **Zero JavaScript**: Pure CSS implementation

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with responsive adjustments

## Contribution Notes

- Class naming follows contributor preference (`ease-tooltip`)
- Maintainer will standardize to `ease-*` convention if needed
- Ready for integration into core components or standalone use

### Contributed by - Man1ac-1773

- Date : June 2nd, 2026
