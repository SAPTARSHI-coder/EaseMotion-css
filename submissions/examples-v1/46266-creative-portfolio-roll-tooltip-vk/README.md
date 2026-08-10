# Horizontal Roll Tooltip

A pure CSS tooltip component that rolls into view horizontally with a smooth 3D animation. Designed for creative portfolio layouts, this component requires no JavaScript and supports keyboard accessibility and responsive behavior.

## Features

- Pure CSS implementation
- Smooth horizontal roll animation
- Customizable using CSS variables
- Keyboard accessible (`:focus-within` and `:focus-visible`)
- Responsive layout for smaller screens
- Respects `prefers-reduced-motion`
- No JavaScript required

## Files

```
demo.html
style.css
README.md
```

## Usage

Include the stylesheet in your HTML.

```html
<link rel="stylesheet" href="style.css">
```

Use the following structure:

```html
<div class="ease-roll-tooltip-wrapper">
    <button
        class="ease-roll-tooltip-trigger"
        aria-describedby="tooltip">
        View Project
    </button>

    <div
        class="ease-roll-tooltip"
        id="tooltip"
        role="tooltip">

        <!-- Tooltip Content -->

    </div>
</div>
```

## Customization

The component exposes several CSS custom properties that can be overridden per instance.

| Variable | Description | Default |
|----------|-------------|---------|
| `--ease-roll-duration` | Animation duration | `.6s` |
| `--ease-roll-timing` | Animation timing function | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-roll-tilt` | Initial 3D rotation | `-70deg` |
| `--ease-roll-scale` | Initial scale | `.9` |
| `--ease-roll-offset` | Initial horizontal offset | `35px` |
| `--ease-roll-radius` | Tooltip border radius | `18px` |
| `--ease-roll-gap` | Distance from trigger | `120%` |

Example:

```css
.ease-roll-tooltip-wrapper--fast {
    --ease-roll-duration: .3s;
    --ease-roll-tilt: -40deg;
    --ease-roll-scale: .8;
    --ease-roll-offset: 20px;
}
```

## Accessibility

- Supports keyboard navigation using `:focus-within`
- Uses `aria-describedby` and `role="tooltip"`
- Includes visible focus styles
- Respects the user's `prefers-reduced-motion` setting

## Browser Support

Works in all modern browsers that support:

- CSS Custom Properties
- CSS Transforms
- CSS Transitions
- Flexbox
- Media Queries

## License

This example is provided as part of the EaseMotion CSS project.