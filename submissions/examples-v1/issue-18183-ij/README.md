# ease-fade-slide

A combined fade + slide-up entrance animation for UI elements, using only pure CSS. Elements start invisible and shifted down 30 px, then animate to full opacity at their natural position.

## Usage

Link `style.css` in your HTML and add the class `item` to any element you want to animate. Staggered delays are applied via `.item-1` through `.item-5`.

```html
<link rel="stylesheet" href="style.css">
<div class="item item-1">Hello</div>
```

## Files

| File        | Purpose                             |
|-------------|-------------------------------------|
| `demo.html` | Minimal HTML demo with dark theme   |
| `style.css` | Keyframes, animation classes, a11y  |
| `README.md` | This file                           |

## Accessibility

The animation automatically disables when `prefers-reduced-motion: reduce` is active.
