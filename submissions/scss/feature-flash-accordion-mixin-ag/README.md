# Flash Accordion Mixin

## Description
The `ease-flash-accordion-mixin-ag` is an SCSS mixin designed to apply a "flash" animation to UI elements, specifically useful for drawing attention to newly expanded accordion content or highlighting the active accordion header. The animation rapidly drops the element's opacity to zero and back, creating a strobe-like flash effect.

## Installation
Copy the `_flash-accordion.scss` file into your project's SCSS directory and import it where needed.

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `1s` | The total duration of the flash animation. |
| `$delay` | Time | `0s` | The delay before the animation begins. |

## Usage Example

```scss
@import 'path/to/flash-accordion';

.accordion-header {
    background: #f3f4f6;
    padding: 1rem;
    cursor: pointer;
    
    // When the accordion is active/opened, apply the flash animation
    &.is-active {
        background: #e5e7eb;
        @include ease-flash-accordion-mixin-ag(0.8s);
    }
}
```

## Accessibility Considerations
- **Reduced Motion (`prefers-reduced-motion: reduce`):** Rapid flashing animations can trigger seizures in users with photosensitive epilepsy or cause discomfort. The mixin includes a strict `prefers-reduced-motion: reduce` media query that disables the `@keyframes` animation completely, falling back to a static `opacity: 1`. 
- **WCAG Compliance:** When using this mixin, ensure the `$duration` is either very short or very slow, as flashing content between 3 Hz and 50 Hz can violate WCAG criteria. Use with caution on large blocks of content.
