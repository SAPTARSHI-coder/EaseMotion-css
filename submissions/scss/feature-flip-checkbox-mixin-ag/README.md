# Flip Checkbox Mixin

## Description
The `ease-flip-checkbox-mixin-ag` is an SCSS mixin that transforms a standard HTML checkbox into a custom, accessible checkbox with a fun 3D flip animation when toggled. When the user checks the box, it flips 180 degrees along the Y-axis to reveal the checkmark.

## Installation & Usage

```scss
@import 'path/to/feature-flip-checkbox-mixin-ag/flip-checkbox';

.my-flip-checkbox {
  @include ease-flip-checkbox-mixin-ag(0.5s, ease);
  color: #3b82f6; // Uses currentColor for border and focus
  
  // Customizing colors for the checked state
  input[type="checkbox"]:checked + .checkbox-visual {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }
}
```

```html
<label class="my-flip-checkbox">
  <input type="checkbox" aria-label="Subscribe to newsletter" />
  <span class="checkbox-visual"></span>
  <span class="checkbox-label">Subscribe</span>
</label>
```

## Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | Time | `0.4s` | Duration of the flip animation. |
| `$easing` | Timing-Function | `cubic-bezier(0.4, 0, 0.2, 1)` | Timing function for the 3D rotation. |

## How It Works
The mixin relies on a specific HTML structure (`<label>` wrapping a hidden `<input type="checkbox">` and a visible `<span class="checkbox-visual">`). 
It uses CSS `perspective` and `transform-style: preserve-3d` to give depth to the flip.
When the hidden input is `:checked`, the sibling selector (`+`) targets `.checkbox-visual` and applies `transform: rotateY(180deg)`. The checkmark inside is already rotated 180 degrees with `backface-visibility: hidden`, so it appears correctly upright when the box flips.

## Accessibility Considerations
- The native checkbox is hidden visually but remains in the DOM, ensuring full screen reader support and keyboard navigation.
- The `:focus-visible` pseudo-class is applied to the visible box when the hidden input receives focus.
- **Reduced Motion**: Disables the 3D flip entirely via `@media (prefers-reduced-motion: reduce)`. The checkmark will instead appear instantly when checked.
