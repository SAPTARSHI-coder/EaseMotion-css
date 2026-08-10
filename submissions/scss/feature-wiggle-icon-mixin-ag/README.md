# Wiggle Icon Mixin (SCSS)

## Description
A reusable SCSS mixin that provides a "Wiggle" Attention Seeker animation. Ideal for icons (e.g. a bell icon, or an error exclamation mark) that need to shake briefly to capture user focus or indicate an invalid state.

## Files
- `_wiggle-icon.scss`: Contains the `@mixin ease-wiggle-icon-mixin-ag`.

## Usage
```scss
@use 'wiggle-icon' as *;

.my-alert-icon-ag {
  font-size: 2rem;
  color: #ef4444;
  
  /* Apply the wiggle */
  @include ease-wiggle-icon-mixin-ag(0.6s);
}
```
```html
<!-- Trigger on hover, or via JS adding .is-wiggling-ag -->
<span class="my-alert-icon-ag is-wiggling-ag" aria-hidden="true">⚠️</span>
```

## Accessibility
- The animation is triggered via CSS hover or by conditionally applying the `.is-wiggling-ag` class via JavaScript when attention is required.
- **Reduced Motion**: Completely disables the rotational `transform` animation. Falls back to a subtle opacity reduction to provide safe visual feedback without triggering vestibular issues.
