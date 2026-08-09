# Jello Tooltip Animation

This submission introduces the `ease-jello` animation class applied to a Tooltip component to provide an engaging and playful entrance effect.

## Feature Overview

The `ease-jello` animation gives elements a wobbling "jello" effect. When applied to a tooltip, it draws attention to the revealed information playfully while ensuring the tooltip's resting position remains stable.

## Usage Example

Include the `ease-jello` animation class to animate the tooltip on hover or focus.

```html
<div class="tooltip-container" tabindex="0">
    <button class="tooltip-trigger">Hover or Focus Me</button>
    <div class="tooltip-content ease-jello">
        This is a Jello Tooltip!
    </div>
</div>
```

## Accessibility Considerations

The implementation uses the `@media (prefers-reduced-motion: reduce)` media query. For users who have enabled a reduced motion preference in their OS or browser settings, the jello animation is disabled and replaced with a simple fade-in transition (`opacity 0.2s ease`). This ensures the tooltip remains functional without causing motion sensitivity issues.
