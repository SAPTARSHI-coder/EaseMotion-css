# Rotate Card Mixin (SCSS)

## Description
A reusable SCSS mixin that provides a "Rotate" Entrance Animation for card components. When applied, the card swings into view on the X-axis (like a falling sign or a trapdoor) with a slight bouncy easing (`cubic-bezier`).

## Files
- `_rotate-card.scss`: Contains the `@mixin ease-rotate-card-mixin-ag`.

## Usage
```scss
@use 'rotate-card' as *;

.my-card-ag {
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  
  /* Apply the entrance mixin */
  @include ease-rotate-card-mixin-ag(0.7s);
}
```
```html
<div class="my-card-ag">
  <h3>Card Title</h3>
  <p>Some content...</p>
</div>
```

## Accessibility
- Being an entrance animation, it finishes cleanly in a neutral state, allowing full interactive and semantic use.
- **Reduced Motion**: Disables the 3D rotation completely. Replaces the animation with a simple, linear opacity fade (`simple-card-fade-ag`) to prevent motion sickness during page load or component mount.
