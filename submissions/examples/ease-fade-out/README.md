# ease-fade-out — Exit Animation

The opposite of `ease-fade-in`. Element fades from opacity 1 to 0 using a `forwards` fill mode. Useful for toast dismiss, modal close, and page transitions.

## Classes

| Class | Description |
|---|---|
| `ease-fade-out` | Fade from 1 → 0 (300ms default) |
| `ease-fade-out--fast` | Fast variant (150ms) |
| `ease-fade-out--slow` | Slow variant (600ms) |

## Usage

```html
<div class="ease-fade-out">This will fade out</div>

<!-- Fast -->
<div class="ease-fade-out ease-fade-out--fast">Quick exit</div>

<!-- Slow -->
<div class="ease-fade-out ease-fade-out--slow">Slow exit</div>
```

## Why it fits EaseMotion CSS

Pairs with the existing `ease-fade-in`. Uses design token speed variables. Respects `prefers-reduced-motion` by instantly hiding the element.
