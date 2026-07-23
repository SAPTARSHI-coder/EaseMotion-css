# Fade Tooltip Mixin

## Description
The `ease-fade-tooltip-mixin-ag` is an SCSS mixin designed for the exit animation of tooltips. It smoothly fades out the element by animating `opacity` from 1 down to 0, ensuring a clean and polished UI interaction as the tooltip disappears.

## Installation
Copy `_fade-tooltip.scss` into your project's SCSS directory and import it where needed.

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `0.2s` | The duration of the fade out animation. |
| `$timing` | String | `ease-out` | The CSS timing function. |
| `$delay` | Time | `0s` | The delay before the animation starts. |

## Usage Example

```scss
// Import the mixin
@use 'path/to/fade-tooltip' as *;

.my-tooltip {
    // Basic styling
    background: #333;
    color: #fff;
    padding: 8px 12px;
    border-radius: 4px;
}

// Apply the exit animation when the tooltip is hiding
.my-tooltip.is-hiding {
    @include ease-fade-tooltip-mixin-ag(0.2s, ease-in);
}
```

## Accessibility Considerations
- **Reduced Motion:** If a user has `prefers-reduced-motion: reduce` enabled in their system preferences, the animation is skipped and the element immediately jumps to `opacity: 0`.
- **Performance:** Applies `will-change: opacity` to guarantee smooth compositing without layout recalculations.
