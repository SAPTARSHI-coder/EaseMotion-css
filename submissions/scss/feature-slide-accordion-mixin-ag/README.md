# Slide Accordion Mixin (SCSS)

## Description
A reusable SCSS mixin that provides a "Slide" Entrance Animation for an accordion component. When applied, the accordion element starts slightly lower (`translateY(20px)`) and transparent, then smoothly slides up into its final position while fading in.

## Files
- `_slide-accordion.scss`: Contains the `@mixin ease-slide-accordion-mixin-ag`.

## Usage
```scss
@use 'slide-accordion' as *;

.my-accordion-container-ag {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  
  /* Apply the entrance mixin */
  @include ease-slide-accordion-mixin-ag(0.6s);
}
```
```html
<div class="my-accordion-container-ag">
  <button>Accordion Header</button>
  <div>Accordion Content...</div>
</div>
```

## Accessibility
- Being an entrance animation, it doesn't interfere with the semantic HTML structure or keyboard interactivity of the accordion.
- **Reduced Motion**: Disables the `translateY` sliding movement. Replaces the animation with a simple opacity fade (`simple-accordion-fade-ag`) to prevent motion sickness during page load or component mount.
