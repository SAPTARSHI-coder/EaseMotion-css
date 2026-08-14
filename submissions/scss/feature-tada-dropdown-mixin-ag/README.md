# Tada Dropdown Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Tada" effect to a dropdown element. When the dropdown container is hovered or focused (via `:focus-within`), it performs a playful shake and scale animation to draw attention.

## Files
- `_tada-dropdown.scss`: Contains the `@mixin ease-tada-dropdown-mixin-ag`.

## Usage
```scss
@use 'tada-dropdown' as *;

.my-dropdown-container-ag {
  position: relative;
  
  /* Apply the mixin to the container */
  @include ease-tada-dropdown-mixin-ag(0.8s);
}
```
```html
<div class="my-dropdown-container-ag">
  <button>Options</button>
  <ul class="dropdown-menu">
    <li>Item 1</li>
  </ul>
</div>
```

## Accessibility
- Uses `:focus-within` so the tada effect triggers when a keyboard user tabs into the dropdown.
- **Reduced Motion**: Disables the multi-step `dropdown-tada-ag` animation. Replaces it with a subtle, static `transform: scale(1.02)` to maintain interactive feedback without the back-and-forth shaking.
