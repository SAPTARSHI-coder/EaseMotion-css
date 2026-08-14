# Bounce Tooltip Mixin (SCSS)

## Description
A reusable SCSS mixin that provides a continuous "Bounce" Loading Indicator animation. This is useful for tooltips or tiny floating labels that need to indicate a background process (like saving or syncing) is occurring.

## Files
- `_bounce-tooltip.scss`: Contains the `@mixin ease-bounce-tooltip-mixin-ag`.

## Usage
```scss
@use 'bounce-tooltip' as *;

.my-loading-tooltip-ag {
  position: absolute;
  top: -30px;
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  
  /* Apply the loading bounce */
  @include ease-bounce-tooltip-mixin-ag(1.2s);
}
```
```html
<!-- Link animation state to aria-busy -->
<div class="my-loading-tooltip-ag" aria-busy="true" role="status">
  Saving...
</div>
```

## Accessibility
- Designed to work alongside `aria-busy="true"` so assistive technologies are aware of the loading state.
- **Reduced Motion**: Disables the vertical bouncing motion completely. Replaces it with a gentle, slow opacity pulse (`tooltip-loading-pulse-ag`), allowing users to perceive the loading state without triggering motion-related discomfort.
