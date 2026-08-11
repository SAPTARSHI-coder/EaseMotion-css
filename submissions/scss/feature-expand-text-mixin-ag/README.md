# Expand Text Mixin (SCSS)

## Description
A reusable SCSS mixin that provides an "Expand" Entrance Animation for text elements. When applied, the text elegantly fades in while its `letter-spacing` expands from a tightly condensed state out to its normal spacing.

## Files
- `_expand-text.scss`: Contains the `@mixin ease-expand-text-mixin-ag`.

## Usage
```scss
@use 'expand-text' as *;

.my-heading-ag {
  font-size: 2.5rem;
  font-weight: bold;
  
  /* Apply the entrance mixin */
  @include ease-expand-text-mixin-ag(1s);
}
```
```html
<h1 class="my-heading-ag">Welcome Home</h1>
```

## Accessibility
- Works well for headings or large hero text.
- **Reduced Motion**: Disables the letter-spacing expansion completely. Replaces the animation with a clean opacity fade (`expand-text-fade-fallback-ag`) so the text appears steadily without motion.
