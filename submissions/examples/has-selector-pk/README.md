# EaseMotion — `:has()` Selector Conditional Animations

Parent-aware conditional animations using the CSS `:has()` selector — no JavaScript required.

## Examples

| Pattern | Selector | Effect |
|---------|----------|--------|
| Form validation | `.ease-has-invalid:has(:invalid)` | Shakes + red border when child input is invalid |
| Checked state | `.ease-has-checked:has(:checked)` | Green highlight when child checkbox is checked |
| Focus within | `.ease-has-focus-within:has(:focus)` | Blue outline when child is focused |
| Active child | `.ease-has-active:has(.active)` | Highlight when a child has `.active` class |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Form validation, checkbox card, accordion — all using `:has()` |
| `style.css` | `:has()` rules, shake animation, accordion expand/collapse |

## Proposed Utilities

Add to `core/utilities.css`:

```css
.ease-has-invalid:has(:invalid) {
  animation: ease-shake 0.4s ease;
  border-color: var(--ease-color-error, #ef4444);
}

.ease-has-checked:has(:checked) {
  border-color: var(--ease-color-success, #22c55e);
  background: var(--ease-color-success-bg, #f0fdf4);
}

.ease-has-focus-within:has(:focus) {
  outline: 2px solid var(--ease-color-primary, #6366f1);
  outline-offset: 2px;
}

.ease-has-active:has(.active) {
  border-color: var(--ease-color-primary, #6366f1);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
```

## Browser Support

`<a href="https://caniuse.com/css-has">caniuse :has()</a>`

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 105+ | 121+ | 15.4+ |
