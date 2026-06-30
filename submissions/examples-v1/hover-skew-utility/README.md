# Hover Skew Transformation Utilities

An isolated transform utility design token pack that implements 2D shear and slanting adjustments on cursor hover events, utilizing optimized rendering curves to prevent reflow penalties.

## Utility Roster API

### Horizontal Slanting (X-Axis)
- `.ease-hover-skew-x-sm`: Slants elements horizontally by `-6deg` on hover. Built for sleek modern card entry highlights.
- `.ease-hover-skew-x-md`: Slants elements horizontally by `-12deg` on hover. Suited for striking architectural layouts.

### Vertical Slanting (Y-Axis)
- `.ease-hover-skew-y-sm`: Slants elements vertically by `4deg` on hover. Adds localized dynamic perspective shifts.
- `.ease-hover-skew-y-md`: Slants elements vertically by `8deg` on hover. Ideal for highly expressive typographic masonry lanes.

## Functional Controls
- **Compositing Isolations:** Leverages `will-change: transform` hints to signal target layers ahead of cursor interaction, guaranteeing 60fps response times.
- **Fluid Cubic Easing:** Implements an expressive custom bezier curve timeline (`cubic-bezier(0.25, 1, 0.5, 1)`) to remove jarring spring-back behaviors.

## Usage Layout Structure
```html
<div class="ease-interactive-skew-card ease-hover-skew-x-sm">
  
</div>
```

Closes #13463
