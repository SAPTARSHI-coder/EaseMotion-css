# ease-float

Smooth infinite floating/levitating animation using `translateY` keyframes. Zero JavaScript required.

## Usage

```html
<div class="ease-float">Floating element</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-float` | Default infinite float (12px) |
| `ease-float-shadow` | Float with animated drop shadow |
| `ease-float-rotate` | Float with gentle rotation swing |
| `ease-float-sm` | Small distance (6px) |
| `ease-float-lg` | Large distance (24px) |
| `ease-float-fast` | 1.5s duration |
| `ease-float-slow` | 5s duration |
| `ease-delay-100` | 100ms delay |
| `ease-delay-200` | 200ms delay |
| `ease-delay-300` | 300ms delay |
| `ease-delay-500` | 500ms delay |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-float-distance` | `-12px` | Float distance (negative = up) |

## Notes

- Combine delay variants for staggered floating groups
- `ease-float-shadow` enhances the depth illusion with synced shadow
- Works great on icons, illustrations, cards, and product mockups

## Submission

- **Author:** sudha09-git
- **Issue:** #2358
- **Files:** `style.css`, `demo.html`
