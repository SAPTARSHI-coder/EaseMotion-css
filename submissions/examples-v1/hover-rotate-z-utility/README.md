# Z-Axis Hover Rotation Utility

An isolated transform utility design token pack that implements 2D spatial rotation adjustments on cursor hover events, utilizing optimized rendering curves to prevent reflow penalties.

## Utility Roster API

- `.ease-hover-rotate-z-xs`: Triggers a tight clockwise twist of exactly `2deg` on hover. Ideal for subtle dashboard icon reactions.
- `.ease-hover-rotate-z-sm`: Triggers a standard clockwise twist of exactly `6deg` on hover. Suited for interactive list items or preview frames.
- `.ease-hover-rotate-z-md`: Triggers a pronounced clockwise twist of exactly `12deg` on hover. Designed for playful media tile reveals.
- `.ease-hover-rotate-z-neg-sm`: Triggers a counter-clockwise standard twist of exactly `-6deg` on hover.

## Functional Controls
- **Compositing Isolations:** Leverages `will-change: transform` hints to signal target layers ahead of cursor interaction, guaranteeing 60fps response times.
- **Fluid Cubic Easing:** Implements an expressive custom bezier curve timeline (`cubic-bezier(0.25, 1, 0.5, 1)`) to remove jarring spring-back behaviors.

## Usage Layout Structure
```html
<div class="ease-interactive-cube ease-hover-rotate-z-sm">
  
</div>
```

Closes #13464
