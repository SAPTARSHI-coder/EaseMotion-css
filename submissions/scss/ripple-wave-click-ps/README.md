# Ripple Wave Click SCSS Mixin

Adds a ripple wave effect when clicking (active state) an element. This mixin supports configurable timing variables and automatically handles `prefers-reduced-motion`.

## Implementation
- Defines `@keyframes ease-ripple-wave-click` animation.
- Provides `ease-anim-ripple-wave-click` utility class.
- Supports configurable timing variables (`--ease-duration`, `--ease-timing`).
- Includes `@media (prefers-reduced-motion: reduce)` override.
- Hardware accelerated using `transform` and `opacity`.

## Parameters / Variables
| Variable | Default | Description |
|---|---|---|
| `--ease-duration` | `0.6s` | Duration of the ripple animation |
| `--ease-timing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Timing function for the ripple |

## Usage Example

### SCSS Mixin Usage
```scss
@import 'ripple-wave-click-ps';

.my-button {
  @include ease-ripple-wave-click-mixin;
  
  // Optional: override timing
  --ease-duration: 0.8s;
}
```

### Utility Class Usage
```html
<button class="ease-anim-ripple-wave-click">
  Click Me
</button>
```
