# double-animation-fix

## Problem
When `ease-slide-up` and `ease-zoom-in` are applied to the same element,
only one animation plays — the last one wins and overrides the other.

```html
<!-- ❌ Broken — zoom-in overrides slide-up -->
<div class="ease-slide-up ease-zoom-in">Hello</div>
```

This happens because CSS `animation` is a single property.
When two classes both set `animation:`, the last one in the stylesheet wins.

## Fix
Use the `animation` shorthand to combine multiple keyframes in one declaration:

```css
/* ✅ Fixed */
.ease-slide-up-zoom-in {
  animation: slide-up 0.4s ease forwards, zoom-in 0.4s ease forwards;
}
```

```html
<!-- ✅ Correct usage -->
<div class="ease-slide-up-zoom-in">Hello</div>
```

## Combined Utility Classes Added

| Class | Animations Combined |
|-------|-------------------|
| `ease-slide-up-zoom-in` | slide-up + zoom-in |
| `ease-slide-up-fade-in` | slide-up + fade-in |

## How to Test
Open `demo.html` in a browser to see the broken vs fixed behavior side by side.

## Files
- `style.css` — combined animation utility classes
- `demo.html` — live demo showing broken vs fixed
- `README.md` — this file