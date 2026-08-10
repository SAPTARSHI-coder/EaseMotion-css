# Ripple Button Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Ripple" effect to a button when clicked (interactive state). It uses an `::after` pseudo-element that is invisible by default, becomes fully opaque and small when `:active`, and then expands and fades out when released.

## Files
- `_ripple-button.scss`: Contains the `@mixin ease-ripple-button-mixin-ag`.

## Usage
```scss
@use 'ripple-button' as *;

.my-button-ag {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  /* Apply the mixin */
  @include ease-ripple-button-mixin-ag(0.6s);
}
```
```html
<button class="my-button-ag">Click Me</button>
```

## Accessibility
- Works correctly with keyboard activation (Space/Enter trigger the `:active` state).
- **Reduced Motion**: Disables the rapidly expanding circle animation entirely. Instead, it provides a safe, subtle `transform: scale(0.98)` on `:active` to give a "press" feedback without large-scale motion.
