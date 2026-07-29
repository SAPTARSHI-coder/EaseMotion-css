# Ripple Text Mixin (SCSS)

## Description
A reusable SCSS mixin for a "Ripple" Text Exit Animation. When an `.is-exiting-ag` class is applied to the text element, it expands outwards (scaling up and increasing letter-spacing) while blurring and fading out, resembling a ripple disappearing on water.

## Files
- `_ripple-text.scss`: Contains the `@mixin ease-ripple-text-mixin-ag`.

## Usage
```scss
@use 'ripple-text' as *;

.my-alert-text-ag {
  color: #ef4444;
  font-weight: bold;
  
  /* Apply the mixin */
  @include ease-ripple-text-mixin-ag(0.7s);
}
```
```html
<!-- Text visible normally -->
<span class="my-alert-text-ag" id="msg">Message deleted!</span>

<script>
  // Trigger exit animation before removing from DOM
  setTimeout(() => {
    document.getElementById('msg').classList.add('is-exiting-ag');
  }, 2000);
</script>
```

## Accessibility
- Works best when the element is completely removed from the DOM or set to `display: none` / `aria-hidden="true"` via JavaScript *after* the animation finishes.
- **Reduced Motion**: Disables the scaling, letter-spacing, and blur effects. Replaces the complex ripple with a fast, simple opacity transition (`opacity: 0`), preventing unwanted motion and blur triggers.
