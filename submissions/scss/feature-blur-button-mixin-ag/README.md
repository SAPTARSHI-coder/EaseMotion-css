# Blur Button Mixin (SCSS)

## Description
A reusable SCSS mixin for a "Blur Button" Loading Indicator. When the `.is-loading-ag` class is added, the text inside the button (wrapped in `.button-text-ag`) blurs out, and a spinner appears in the center.

## Files
- `_blur-button.scss`: Contains the `@mixin ease-blur-button-mixin-ag`.

## Usage
```scss
@use 'blur-button' as *;

.my-action-btn-ag {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  /* Apply the mixin */
  @include ease-blur-button-mixin-ag(0.4s);
}
```
```html
<button class="my-action-btn-ag is-loading-ag" aria-busy="true">
  <span class="button-text-ag">Submit</span>
</button>
```

## Accessibility
- Disables `pointer-events` during the loading state to prevent double submissions.
- Expected to be used with `aria-busy="true"` when in the loading state.
- **Reduced Motion**: Disables the text blur (relying only on an opacity fade) and replaces the fast spinning indicator with a gentle pulsing animation (`blur-button-pulse-ag`).
