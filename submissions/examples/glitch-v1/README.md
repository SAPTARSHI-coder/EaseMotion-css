# ease-glitch

Cyberpunk-style text glitch effect using `::before` and `::after` pseudo-elements with `clip-path` and `translateX` keyframes. Zero JavaScript required.

## Usage

```html
<h1 class="ease-glitch" data-text="GLITCH">GLITCH</h1>
```

## Variants

| Class | Description |
|---|---|
| `ease-glitch` | Default glitch on hover |
| `ease-glitch-loop` | Infinite looping glitch |
| `ease-glitch-subtle` | Low-intensity glitch |
| `ease-glitch-hard` | High-intensity glitch |
| `ease-glitch-cyan` | Cyan/red channel split |
| `ease-glitch-red` | Red/cyan channel split |

## Notes

- Always add `data-text` attribute matching the element's text content
- Works best on headings and large text
- Use on dark backgrounds for maximum visual impact
- `ease-glitch-loop` is great for hero sections and loading screens

## Submission

- **Author:** sudha09-git
- **Issue:** #2361
- **Files:** `style.css`, `demo.html`
